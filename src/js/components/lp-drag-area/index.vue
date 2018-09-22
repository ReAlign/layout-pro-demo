<template>
<div>
    <div class="demo ui-sortable">
        <div class="lyrow">
            <a href="#" class="remove label label-important">
                <i class="icon-remove icon-white"></i>移除</a>
            <span class="drag label">
                <i class="icon-move"></i>拖动</span>
            <div class="preview">9 3</div>
            <div class="view">
                <div class="row-fluid clearfix">
                    <div class="span12 column ui-sortable">
                        <div class="box box-element ui-draggable" style="display: block; ">
                            <a href="#" class="remove label label-important">
                                <i class="icon-remove icon-white"></i>移除</a>
                            <span class="drag label">
                                <i class="icon-move"></i>拖动</span>
                            <span class="configuration">
                                <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>
                                <a class="btn btn-mini" href="#" rel="well">嵌入</a>
                            </span>
                            <div class="preview">概述</div>
                            <div class="view">
                                <div class="hero-unit" contenteditable="true">
                                    <p>一种风，只流浪在一座山谷；</p>
                                    <p>一道堤，只护住一湾星河。</p>
                                    <p>每次仰望星空，我总是闭上眼，</p>
                                    <p>因为最美的一颗不在天上。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import './index.less';
export default {
    name: 'lp-drag-area',
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
