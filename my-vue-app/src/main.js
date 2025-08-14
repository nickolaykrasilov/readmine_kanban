import { createApp } from 'vue';
import App from './App.vue';

import YourIconPlugin from './plugins/icons.js';

const app = createApp(App);
app.use(YourIconPlugin);
app.mount('#app');
