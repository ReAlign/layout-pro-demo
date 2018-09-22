<template>
    <div class="m-lp-wrap">
        <!-- 导航 -->
        <lp-nav />
        <div class="container-fluid m-lp-container-fluid">
            <div class="row-fluid">
                <!-- 左侧导航 -->
                <lp-left-menu />
                <lp-drag-area />
            </div>
        </div>
        <lp-hide-modal />
    </div>
</template>

<script>
import './index.less';
import _ from 'tools/_';
// import * as API from './api';
import Config from './config';

import LpNav from 'components/lp-nav/index';
import LpLeftMenu from 'components/lp-left-menu/index';
import LpDragArea from 'components/lp-drag-area/index';
import LpHideModal from 'components/lp-hide-modal/index';

export default {
    name: 'index-page',
    components: {
        'lp-nav': LpNav,
        'lp-left-menu': LpLeftMenu,
        'lp-drag-area': LpDragArea,
        'lp-hide-modal': LpHideModal
    },
    data() {
        return {
            //
        };
    },

    watch: {
        //
    },

    created() {
        // const vm = this;

        // vm.initSomeData();
    },

    methods: {
        //
    }
};
</script>

<style>
</style>
