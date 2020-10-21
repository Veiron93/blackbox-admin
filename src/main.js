import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)


// ВАЛИДАЦИЯ ФОРМ (vee-validate)
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ru', ru);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$apiServer = 'http://localhost:4000';

const store = new Vuex.Store({
  state: {
    selectedItemsList: []
  },
  mutations: {
    selectedItems (state, {idItem}) {

      let idx = state.selectedItemsList.indexOf(idItem)

      if (idx == -1) {
        state.selectedItemsList.push(idItem);
      }else{
        state.selectedItemsList.splice(idx, 1);
      }
    },

    resetSelectedItemsList (state) {
      state.selectedItemsList = [];
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
