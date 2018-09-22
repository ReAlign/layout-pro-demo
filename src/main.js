import Vue from 'vue';
import App from './App';
import router from 'router/index';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
