import Vue from 'vue'
import store from './store'
import Filter from './filter/filter'
import VueResource from 'vue-resource'
import App from './components/App.vue'

Vue.use(VueResource);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
