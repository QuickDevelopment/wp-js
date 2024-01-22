import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {ConfigManager} from "@quickdevelopment/wp-js";

ConfigManager.getInstance({
    apiUrl: 'https://time.com/wp-json/wp/v2',
    embed: true
})

createApp(App).mount('#app')
