import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'

// CATALOG
import ListCategories from '../views/Catalog/Categories/ListCategories.vue'
import Category from '../views/Catalog/Categories/Category.vue'

// USERS
import ListUsers from '../views/Users/ListUsers.vue'
import AddUser from '../views/Users/AddUser.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index
	},

	{
		path: '/catalog/categories',
		name: 'listCategories',
		component: ListCategories,

		meta: {
			linkName: "Категории"
		}
	},

	{
		path: '/catalog/categories/edit/:id',
		name: 'editCategory',
		component: Category,

		meta: {
			type: "edit",
			linkName: "Какая то категория",
			breadcrumbs: [
				{
					path: '/catalog/categories',
					
					meta: {
						linkName: 'Категории'
					}
				}
			]
		}
	},

	{
		path: '/catalog/categories/add',
		name: 'addCategory',
		component: Category,

		meta: {
			type: "add",
			linkName: "Добавить категорию",
			breadcrumbs: [
				{
					path: '/catalog/categories',
					
					meta: {
						linkName: 'Категории'
					}
				}
			]
		}
	},

	// ПОЛЬЗОВАТЕЛИ

	{
		path: '/users',
		name: 'listUser',
		component: ListUsers,

		meta: {
			type: "list",
			linkName: "Пользователи",
			breadcrumbs: [
				{
					path: '/users',
					
					meta: {
						linkName: 'Пользователи'
					}
				}
			]
		}
	},

	{
		path: '/users/add',
		name: 'addUser',
		component: AddUser,

		meta: {
			type: "list",
			linkName: "Добавить пользователя",
			breadcrumbs: [
				{
					path: '/users',
					
					meta: {
						linkName: 'Пользователи'
					}
				}
			]
		}
	}
]

const router = new VueRouter({
	routes
})

export default router