<template>
    <el-container class="m-el-container">
        <el-header>
            <lp-header />
        </el-header>
        <el-container>
            <el-main>
                <lp-left-menu />
                <lp-drag-area />
                <div id="download-layout">
                    <div class="container-fluid"></div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import './index.less';
import M from 'tools/m';

import LpHeader from 'components/lp-header/index';
import LpLeftMenu from 'components/lp-left-menu/index';
import LpDragArea from 'components/lp-drag-area/index';

export default {
    components: {
        'lp-header': LpHeader,
        'lp-left-menu': LpLeftMenu,
        'lp-drag-area': LpDragArea,
    },
    data() {
        return {
            //
        };
    },
    created() {
        M.ready();
    },
    methods: {
        //
    }
};
</script>

<style>

</style>
