<template>
	<div class="users">

		<PageControl>
			<div class="link">
				<router-link to="/users/add">
					<i class="fa fa-plus" aria-hidden="true"></i>
					<span>Добавить пользователя</span>
				</router-link>
			</div>

			<!-- <div class="link" v-bind:class="{current: control}" @click="control = !control">
				<i class="fa fa-cog" aria-hidden="true"></i>
				<span>Управление</span>
			</div> -->

			<div class="tools" v-if="this.$store.state.selectedItemsList.length > 0">
				<div class="title">
					<p>Выбранные:</p>
				</div>

				<div class="link status">
					<i class="fa fa-eye" aria-hidden="true"></i>
					<i class="fa fa-eye-slash" aria-hidden="true"></i>
					<span>Скрыть</span>
				</div>

				<div class="link del">
					<i class="fa fa-trash" aria-hidden="true"></i>
					<span>Удалить</span>
				</div>
			</div>
		</PageControl>


		<form :id="idList">
			<Item v-for="user in users" :key="user.id" :item="user" :id-list="idList">
				<router-link :to="{path: '/users/user/edit/' + user.id}">{{user.first_name}}</router-link>
			</Item>
		</form>
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	name: 'users',
	components: {
		PageControl: () => import('@/components/PageControl.vue'),
		Item: () => import('@/components/ListItems/Item.vue')
	},

	data(){
		return {
			idList: "list-users",
			users: [],
			selectedItems: null
		}
	},

	methods: {
	
	},

	watch: {

	},

	mounted: function(){
		this.$http
			.get(this.$apiServer + '/users')
			.then(response => (this.users = response.data, console.log(this.users)));

		this.$store.commit('resetSelectedItemsList')
	}
}

</script>

<style lang="scss">
	.users{

	}
</style>
