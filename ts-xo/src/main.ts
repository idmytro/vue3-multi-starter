import {createApp} from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

export type SomeType =
| 'a'
| 'b'
| 'c';
