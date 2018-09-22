<template>
    <div>
        <div class="modal hide fade" role="dialog" id="editorModal">
            <div class="modal-header">
                <a class="close" data-dismiss="modal">×</a>
                <h3>编辑</h3>
            </div>
            <div class="modal-body">
                <p>
                    <textarea id="contenteditor"></textarea>
                </p>
            </div>
            <div class="modal-footer">
                <a id="savecontent" class="btn btn-primary" data-dismiss="modal">保存</a>
                <a class="btn" data-dismiss="modal">关闭</a>
            </div>
        </div>
        <div class="modal hide fade" role="dialog" id="downloadModal">
            <div class="modal-header">
                <a class="close" data-dismiss="modal">×</a>
                <h3>下载</h3>
            </div>
            <div class="modal-body">
                <p>已在下面生成干净的HTML, 可以复制粘贴代码到你的项目.</p>
                <div class="btn-group">
                    <button type="button" id="fluidPage" class="active btn btn-info">
                        <i class="icon-fullscreen icon-white"></i> 自适应宽度</button>
                    <button type="button" class="btn btn-info" id="fixedPage">
                        <i class="icon-screenshot icon-white"></i> 固定宽度</button>
                </div>
                <br>
                <br>
                <p>
                    <textarea></textarea>
                </p>
            </div>
            <div class="modal-footer">
                <a class="btn" data-dismiss="modal">关闭</a>
            </div>
        </div>
        <div class="modal hide fade" role="dialog" id="shareModal">
            <div class="modal-header">
                <a class="close" data-dismiss="modal">×</a>
                <h3>保存</h3>
            </div>
            <div class="modal-body">保存成功</div>
            <div class="modal-footer">
                <a class="btn" data-dismiss="modal">Close</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'lp-hide-modal',
    data() {
        return {
            //
        };
    },

    watch: {
        //
    },

    methods: {
        //
    }
};
</script>

<style>
</style>
