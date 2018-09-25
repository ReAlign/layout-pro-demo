<template>
    <div class="m-header-btn-wrap">
        <el-button-group>
            <el-button
                size="medium" icon="el-icon-edit"
                :type="btnType[0]"
                @click="editEvt">编辑</el-button>
            <el-button
                size="medium" icon="el-icon-menu"
                :type="btnType[1]"
                @click="editLayoutEvt">布局编辑</el-button>
            <el-button
                size="medium" icon="el-icon-view"
                :type="btnType[2]"
                @click="previewEvt">预览</el-button>
        </el-button-group>

        <el-button-group>
            <el-button
                size="medium" icon="el-icon-download"
                @click="downloadEvt">下载</el-button>
            <el-button
                size="medium" icon="el-icon-circle-check-outline"
                @click="saveEvt">保存</el-button>
            <el-button
                size="medium" icon="el-icon-refresh"
                @click="refreshEvt">重载</el-button>
            <el-button
                size="medium" icon="el-icon-delete"
                @click="clearEvt">清空</el-button>
        </el-button-group>

        <el-button-group>
            <el-button
                size="medium" icon="el-icon-caret-left"
                @click="undoEvt">撤销</el-button>
            <el-button
                size="medium" icon="el-icon-caret-right"
                @click="redoEvt">恢复</el-button>
        </el-button-group>

        <el-dialog
            title="已在下面生成干净的HTML, 可以复制粘贴代码到你的项目."
            :visible.sync="downloadDialogVisible"
            width="60%"
            top="1%"
            center>
            <el-input
                type="textarea"
                :readonly="true"
                resize="none"
                :autosize="{ minRows: 6, maxRows: 26}"
                placeholder=""
                v-model="downloadModalValue">
            </el-input>
        </el-dialog>

        <el-dialog
            title="提示"
            :visible.sync="saveDialogVisible"
            width="30%"
            top="1%"
            center>
            <p style="text-align: center">保存成功</p>
            <span slot="footer" class="dialog-footer">
                <el-button
                    type="primary"
                    @click="saveDialogVisible = false">
                    确 定
                </el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import './index.less';

import M from 'tools/m';

export default {
    name: 'lp-toolbar',
    data() {
        return {
            btnActive: 'primary',
            btnType: ['primary', '', ''],

            saveDialogVisible: false,

            downloadDialogVisible: false,
            downloadModalValue: ''
        };
    },
    methods: {
        updateBtnType(num = 0) {
            const vm = this;

            vm.btnType = ['', '', ''];

            vm.btnType[num] = vm.btnActive;
        },
        editEvt() {
            const vm = this;
            vm.updateBtnType(0);


            $('body').removeClass('devpreview sourcepreview');
            $('body').addClass('edit');
            M.removeMenuClasses();

            return false;
        },
        editLayoutEvt() {
            const vm = this;
            vm.updateBtnType(1);

            $('body').removeClass('edit sourcepreview');
            $('body').addClass('devpreview');
            M.removeMenuClasses();

            return false;
        },
        previewEvt() {
            const vm = this;
            vm.updateBtnType(2);

            $('body').removeClass('edit');
            $('body').addClass('devpreview sourcepreview');
            M.removeMenuClasses();

            return false;
        },
        downloadEvt() {
            const vm = this;
            vm.downloadModalValue = M._onDownoadModal();

            vm.downloadDialogVisible = true;
        },
        saveEvt() {
            const vm = this;
            M._onSaveModal();

            vm.saveDialogVisible = true;
        },
        refreshEvt() {
            window.location.reload();
        },
        clearEvt() {
            M.clearDemo();
        },
        undoEvt() {
            M._onUndo();
        },
        redoEvt() {
            M._onRedo();
        }
    }
};
</script>

<style>
</style>
