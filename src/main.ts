import { createApp } from 'vue'
import pinia from '@/store';
import { Router } from 'vue-router';
import createRouter from '@/router';
import './style.css'
import App from './App.vue'

let router: Router = createRouter('');
const app = createApp(App);
app.use(pinia).use(router);

app.mount('#app')
