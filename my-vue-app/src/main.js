import { createApp } from 'vue';
import App from './App.vue';

import YourIconPlugin from './plugins/icons'; // Импорт плагина

const app = createApp(App);
app.use(YourIconPlugin); // Регистрируем плагин
app.mount('#app');
