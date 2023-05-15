import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";
/* Importing FontAwesome icons for the icon buttons: */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
/* Adding 'SweetAlert2' based import for nicely styled messages to user for error handling */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(fas);

createApp(App)
.use(router)
.use(VueSweetalert2)
.component("fa", FontAwesomeIcon)
.mount('#app')

// Force the application to start on the 'about' page:
router.push({path: '/about'});
