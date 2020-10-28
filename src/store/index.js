import Vue from 'vue'
import Vuex from 'vuex'
import listItems from './modules/listItems'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        listItems,
    }
})