<template>
    <div class="m-lp-header">
        <!-- logo区域 -->
        <div class="el-brand">
            <p class="el-sys-title">
                <span class="u-title f-mgr6">Layout-pro</span>
                <el-tag class="u-el-tag" size="small">DEMO</el-tag>
            </p>
        </div>
        <!-- 操作栏 -->
        <lp-toolbar />
    </div>
</template>

<script>
import './index.less';

import LpToolbar from 'components/lp-toolbar/index';

import M from 'tools/m';

export default {
    name: 'lp-header',
    components: {
        'lp-toolbar': LpToolbar,
    },
    data() {
        return {
            //
        };
    },
    methods: {
        //
    }
};
</script>

<style>
</style>
