import { createApp } from 'vue';
import router from './router/router';

// Components
import App from './App.vue';

const app = createApp(App);

app.use(router).mount('#app');
