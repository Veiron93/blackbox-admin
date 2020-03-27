import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

// CATALOG
import CategoriesList from '../views/Catalog/Categories/CategoriesList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/catalog/categories',
    name: 'categories',
    component: CategoriesList
  }
]

const router = new VueRouter({
  routes
})

export default router
