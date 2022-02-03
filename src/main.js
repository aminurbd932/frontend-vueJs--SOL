import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

Vue.config.productionTip = false

//import css bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//import line-awesome
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
