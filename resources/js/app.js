window.Vue = require('vue');


import router from './router'
import App from './views/App'


const app = new Vue({
    el: '#app',
    router,
    components: { App }    
});
