import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";
/* Importing FontAwesome icons for the icon buttons: */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

createApp(App)
.use(router)
.use()
.component("fa", FontAwesomeIcon)
.mount('#app')
