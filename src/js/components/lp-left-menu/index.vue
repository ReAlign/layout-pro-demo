<template>
    <el-menu
        class="el-menu-vertical-demo sidebar-nav"
        :unique-opened="true">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>布局</span>
                <el-tooltip placement="right-start">
                    <div slot="content">
                        在这里设置你的栅格布局<br>
                        栅格总数默认为12<br>
                        用空格分割每列的栅格值<br>
                        如果您需要了解更多信<br>
                        请访问 <a target="_blank" href="http://twitter.github.io/bootstrap/scaffolding.html#gridSystem">Bootstrap栅格系统.</a>
                    </div>
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </template>
            <div v-for="item in gridCol" class="lyrow ui-draggable">
                <a class="remove label label-important">
                    <i class="icon-remove icon-white"></i>删除</a>
                <span class="drag label">
                    <i class="icon-move"></i>拖动</span>
                <div class="preview">
                    <input :value="item.value" readonly type="text">
                </div>
                <!-- view -->
                <div class="view">
                    <div class="row-fluid clearfix">
                        <div v-for="val in item.classCol" :class="val"></div>
                    </div>
                </div>
            </div>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-edit"></i>
                <span>基本</span>
                <el-tooltip placement="right-start">
                    <div slot="content">
                        这里提供了一系列基本元素样<br>
                        你可以通过区块右上角的编辑按钮修改样式设置<br>
                        如需了解更多信息<br>
                        请访问 <a target="_blank" href="http://twitter.github.io/bootstrap/base-css.html">基本CSS.</a>
                    </div>
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </template>
            <li class="boxes" id="elmBase">
                <div class="box box-element ui-draggable">
                    <a class="remove label label-important">
                        <i class="icon-remove icon-white"></i>删除</a>
                    <span class="drag label">
                        <i class="icon-move"></i>拖动</span>
                    <span class="configuration">
                        <span class="btn-group">
                            <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">样式
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="active">
                                    <a href="#" rel="">默认</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-primary">重点</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-info">信息</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-success">成功</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-warning">提醒</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-danger">危险</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-inverse">反转</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-link">链接</a>
                                </li>
                            </ul>
                        </span>
                        <span class="btn-group">
                            <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">尺寸
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="">
                                    <a href="#" rel="btn-large">大</a>
                                </li>
                                <li class="active">
                                    <a href="#" rel="">中</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-small">小</a>
                                </li>
                                <li class="">
                                    <a href="#" rel="btn-mini">微型</a>
                                </li>
                            </ul>
                        </span>
                        <a class="btn btn-mini" href="#" rel="btn-block">通栏</a>
                        <a class="btn btn-mini" href="#" rel="disabled">禁用</a>
                    </span>
                    <div class="preview">按钮</div>
                    <div class="view">
                        <button class="btn" type="button" contenteditable="true">按钮</button>
                    </div>
                </div>
            </li>
        </el-submenu>

        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>组件</span>
                <el-tooltip placement="right-start">
                    <div slot="content">
                        拖放组件到布局框内<br>
                        拖入后你可以设置组件样式<br>
                        查看这里获取更多帮助<br>
                        <a target="_blank" href="http://twitter.github.io/bootstrap/components.html">Components.</a>
                    </div>
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </template>
            <li class="boxes" id="elmComponents">
                <div class="box box-element ui-draggable">
                    <a class="remove label label-important">
                        <i class="icon-remove icon-white"></i>删除</a>
                    <span class="drag label">
                        <i class="icon-move"></i>拖动</span>
                    <span class="configuration">
                        <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>
                        <a class="btn btn-mini" href="#" rel="dropup">上拉</a>
                    </span>
                    <div class="preview">下拉菜单</div>
                    <div class="view">
                        <div class="btn-group">
                            <button class="btn" contenteditable="true">Action</button>
                            <button data-toggle="dropdown" class="btn dropdown-toggle">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" contenteditable="true">
                                <li>
                                    <a href="#">操作</a>
                                </li>
                                <li>
                                    <a href="#">设置栏目</a>
                                </li>
                                <li>
                                    <a href="#">更多设置</a>
                                </li>
                                <li class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a tabindex="-1" href="#">更多选项</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">操作</a>
                                        </li>
                                        <li>
                                            <a href="#">设置栏目</a>
                                        </li>
                                        <li>
                                            <a href="#">更多设置</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </el-submenu>

        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-goods"></i>
                <span>交互</span>
                <el-tooltip placement="right-start">
                    <div slot="content">
                        拖放组件到布局容器<br>
                        拖入后, 你可以配置显示样式<br>
                        如果有任何疑问<br>
                        可访问 <a target="_blank" href="http://twitter.github.io/bootstrap/javascript.html">JavaScript.</a>
                    </div>
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </template>
            <li class="boxes mute" id="elmJS">
                <div class="box box-element ui-draggable">
                    <a class="remove label label-important">
                        <i class="icon-remove icon-white"></i>删除</a>
                    <span class="drag label">
                        <i class="icon-move"></i>拖动</span>
                    <div class="preview">遮罩窗体</div>
                    <div class="view">
                        <!-- Button to trigger modal -->
                        <a id="myModalLink" href="#myModalContainer" role="button" class="btn" data-toggle="modal" contenteditable="true">触发遮罩窗体</a>

                        <!-- Modal -->
                        <div id="myModalContainer" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 id="myModalLabel" contenteditable="true">标题栏</h3>
                            </div>
                            <div class="modal-body">
                                <p contenteditable="true">显示信息</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true" contenteditable="true">关闭</button>
                                <button class="btn btn-primary" contenteditable="true">保存设置</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </el-submenu>
    </el-menu>
</template>

<script>
import './index.less';

import Config from './config';

export default {
    data() {
        return {
            gridCol: Config.getGrid()
        };
    },
    methods: {
        //
    }
};
</script>

<style>

</style>
