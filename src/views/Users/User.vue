<template>
	<div class="catalog-category">

		<PageControl breadcrumbsStatus="true"/>

		<form id="addUser">
			<FormInfo v-if="dataFormInfo" :type="dataFormInfo.type" :msg="dataFormInfo.msg" />
			
			<Tabs :tabs="tabs">
				<template #main>	
					<div class="item item-switches">
						<SwitchComponent 
							name="Заблокировать" 
							code="status"
							background="#9a0909"
							icon="fa fa-lock"
						/>
					</div>	

					<!-- <div class="item">
						<label for="">Тип учётной записи</label>
						<select name="type-user" v-model="form.categoriesUser">
							<option value="category.id" v-for="category in form.categoriesUser" v-bind:key="category.id">{{category.name}}</option>
						</select>
					</div> -->

					<div class="item">
						<label for="">Имя <span>*</span></label>
						<input type="text" placeholder="Имя" v-model="form.firstName">
					</div>
					
					<div class="item">
						<label for="">Фамилия <span>*</span></label>
						<input type="text" placeholder="Фамилия" v-model="form.lastName">
					</div>

					<div class="item">
						<label for="">Отчество</label>
						<input type="text" placeholder="Отчество" v-model="form.patronym">
					</div>

					<div class="item">
						<label for="">Email <span>*</span></label>
						<input type="text" name="email" placeholder="Электронная почта" v-model="form.email">
					</div>

					<div class="item">
						<label for="">Пароль <span>*</span></label>
						<input type="text" placeholder="Логин" v-model="form.password">
					</div>

					<div class="item">
						<label for="">Повторный пароль <span>*</span></label>
						<input type="text" placeholder="Логин" v-model="form.rePassword">
					</div>
				</template>

				<template #contacts>
					
					<div class="item">
						<label for="">Телефон</label>
						<input type="text" placeholder="Номер телефона" v-model="form.phone">
					</div>

					<div class="item">
						<label for="">Адрес</label>
						<textarea name="" v-model="form.address"></textarea>
					</div>
				</template>
			</Tabs>

			<div class="btns">
				<ButtonComponent title="Добавить" type="button" v-on:event="addUser"/>
				<ButtonComponent v-if="$route.meta.type == 'edit'" title="Сохранить" v-on:event="saveUser"/>
				<ButtonComponent v-if="$route.meta.type == 'edit'" icon="fa fa-trash" background="#903232" code="del"/>
			</div>
		</form>
	</div>
</template>

<script>

	// @ is an alias to /src

	export default {
		components: {
			PageControl: () => import('@/components/PageControl'),
			Tabs: () => import('@/components/Tabs'),
			SwitchComponent: () => import('@/components/Control/Switch'),
			ButtonComponent: () => import('@/components/Control/Button'),
			FormInfo: () => import('@/components/FormInfo')
		},

		data(){
			return {
				errors: [],

				form: {
					firstName: null,
					lastName: null,
					patronym: null,
					email: null,
					password: null,
					rePassword: null,
					phone: null,
					address: null
				},

				dataFormInfo: null,
					
				tabs: [
					{'name':'Основное', 'code':'main', 'icon': 'fa fa-bars'},
					{'name':'Контактные данные', 'code':'contacts', 'icon': 'fa fa-book'},
					{'name':'История покупок', 'code':'history', 'icon': 'fa fa-shopping-basket'}
				]
			}
		},

		methods: {
			formBlockInformation: function(response){
				this.dataFormInfo = response.data;

				if(response.data.type == "error"){

					let form = document.getElementById("addUser");
					let i = 1;
				
					response.data.msg.forEach(function(error){
						let item = form.querySelector("*[name='" + error.nameInput + "']").parentElement;

						item.setAttribute("data-error", i);
						item.classList.add("accent");

						i++;
					})
				}
			},

			addUser: function(){

				this.$http
					.post(this.$apiServer + '/users/add', {
						firstName: this.form.firstName,
						lastName: this.form.lastName,
						patronym: this.form.patronym,
						email: this.form.email,
						password: this.form.password,
						phone: this.form.phone,
						address: this.form.address,
						status: this.form.status
					})
					.then(response => this.formBlockInformation(response))
						
						
					.catch(function(){
						
						console.log("Ошибка отправки на сервер");
					});
			}
		},

		watch: {
			
		},

		computed: {
			
		},

		mounted(){
			
		}
	}


</script>

<style lang="scss">
	.catalog-category{
		form{
			.item{
				margin-bottom: 30px;

				&.accent{
					&:before{
						content: attr(data-error);
						display: block;
						height: 16px;
						min-width: 10px;
						font-size: 10px;
						display: flex;
						align-items: center;
						background: $red;
						color: #fff;
						border-radius: 0 4px 4px 0;
						position: absolute;
						margin-left: -20px;
						padding-left: 2px;
						padding-right: 3px;
						margin-top: 0;
					}
				}
			}

			.item-switches{
				display: flex;

				.switch{
					margin-right: 30px;
				}
			}

			.item-photo{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				padding-bottom: 15px;

				border-bottom: 1px solid #2c343a;

				label{
					width: 100%;
					margin-bottom: 15px;
				}

				.photo{
					background: #fff;
					padding: 8px;
					width: 60px;
					height: 60px;
					border-radius: 4px;
					margin-right: 20px;
				}

				input{

				}
			}

			.btns{
				margin-top: 30px;
				display: flex;

				.btn{
					margin-right: 30px;
				}
			}
		}
	}
</style>