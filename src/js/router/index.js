import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index/index.vue';
import IndexPage from '@/page/index-page/index.vue';
import IndexNew from '@/page/index-new/index.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/old',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/new',
            name: 'IndexNew',
            component: IndexNew
        }
    ]
});
