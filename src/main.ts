import { createApp } from 'vue';
import pinia from '@/store';
import { Router } from 'vue-router';
import createRouter from '@/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import i18n from '@/locales';
import App from './App.vue';

const router: Router = createRouter(import.meta.env.VITE_APP_NAME);
const app = createApp(App);
app.use(pinia).use(router).use(Antd).use(i18n);

app.mount('#app');
