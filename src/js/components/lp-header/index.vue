<template>
    <div class="m-lp-header">
        <div class="el-brand">
            <p class="el-sys-title">
                <span class="u-title f-mgr6">Layout-pro</span>
                <el-tag class="u-el-tag" size="small">DEMO</el-tag>
            </p>
        </div>
        <div class="m-header-btn-wrap">
            <el-button-group>
                <el-button
                    size="medium" icon="el-icon-edit"
                    :type="btnType[0]" @click="editEvt">编辑</el-button>
                <el-button
                    size="medium" icon="el-icon-menu"
                    :type="btnType[1]" @click="editLayoutEvt">布局编辑</el-button>
                <el-button
                    size="medium" icon="el-icon-view"
                    :type="btnType[2]" @click="previewEvt">预览</el-button>
            </el-button-group>

            <el-button-group>
                <el-button
                    size="medium" icon="el-icon-download"
                    @click="showDownloadModalEvt">下载</el-button>
                <el-button size="medium" icon="el-icon-circle-check-outline">保存</el-button>
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
        </div>

        <el-dialog
            title="已在下面生成干净的HTML, 可以复制粘贴代码到你的项目."
            :visible.sync="centerDialogVisible"
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
    </div>
</template>

<script>
import './index.less';

import M from 'tools/m';

export default {
    name: 'lp-header',
    data() {
        return {
            btnActive: 'primary',
            btnType: ['primary', '', ''],

            centerDialogVisible: false,
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
        showDownloadModalEvt() {
            const vm = this;
            vm.downloadModalValue = M._onDownoadModal();

            vm.centerDialogVisible = true;
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
