import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

// CATALOG
import ListCategories from '../views/Catalog/Categories/ListCategories.vue'
import AddCategory from '../views/Catalog/Categories/AddCategory.vue'

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
    component: ListCategories
  },

  {
    path: '/catalog/categories/add',
    name: 'categories',
    component: AddCategory
  }
]

const router = new VueRouter({
  routes
})

export default router
