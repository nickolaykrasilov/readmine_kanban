import { createApp } from 'vue';
import App from './App.vue';
import 'reset-css';
import YourIconPlugin from './plugins/icons';

const app = createApp(App);
app.use(YourIconPlugin);
app.mount('#app');
