<template>
	<div class="users">

		<PageControl>
			<div class="link">
				<router-link to="/users/add">
					<i class="fa fa-plus" aria-hidden="true"></i>
					<span>Добавить пользователя</span>
				</router-link>
			</div>

			<div class="link" v-bind:class="{current: control}" @click="control = !control">
				<i class="fa fa-cog" aria-hidden="true"></i>
				<span>Управление</span>
			</div>

			<div class="tools" v-if="selectedCategories.length && control">
				<div class="title">
					<p>Выбранные:</p>
				</div>

				<div class="link status">
					<i class="fa fa-eye" aria-hidden="true"></i>
					<i class="fa fa-eye-slash" aria-hidden="true"></i>
					<span>Скрыть</span>
				</div>

				<div class="link del" @click="delCategories($event)">
					<i class="fa fa-trash" aria-hidden="true"></i>
					<span>Удалить</span>
				</div>
			</div>
		</PageControl>

		<div class="list-items">
			<form>
				<div class="item" v-for="user in users" v-bind:key="user.id">

					<div class="wrapper-category">

						<input type="checkbox" class="select" v-if="control" value="1" v-model="selectedCategories">

						<router-link to="/catalog/categories/edit/1">{{user.name}}</router-link>

						<div class="status" v-if="control">
							<i class="fa fa-eye" aria-hidden="true"></i>
							<i class="fa fa-eye-slash" aria-hidden="true"></i>
						</div>

						<div class="del" v-if="control" @click="delCategory($event)">
							<i class="fa fa-trash" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</form>

		</div>
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	name: 'home',
	components: {
		PageControl: () => import('@/components/PageControl.vue')
	},

	data(){
		return {
			users: [],
			control: false,
			selectedCategories: []

		}
	},

	methods: {

		
	},

	watch: {
		// selectedCategories: function () {
		//	console.log(this.selectedCategories); 
		// }
		
	},

	mounted: function(){
		this.$http
			.get(this.$apiServer + '/users')
			.then(response => this.users = response.data)
			.then(response => console.log(response.data))
	}
}

</script>

<style lang="scss">
	.users{
		.list-categories-users{
			display: flex;
			margin-bottom: 30px;

			.item{
				margin-right: 30px;
				cursor: pointer;
				padding: 5px 0;
				border-bottom: 2px solid transparent;
				transition: border-color .2s;

				&.active{
					border-color: $accent;
				}

				&:hover{
					border-color: $accent;
				}
				
				&:last-child{
					margin-right: 0;
				}

				p{
					font-size: 14px;
				}
			}
		}

		.list-users{

		}
	}
</style>
