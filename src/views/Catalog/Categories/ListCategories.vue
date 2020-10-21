<template>
	<div class="catalog-categories">

		<PageControl>
			<div class="link">
				<router-link to="/catalog/categories/add">
					<i class="fa fa-plus" aria-hidden="true"></i>
					<span>Добавить категорию</span>
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


		


		<!-- <div class="list-categories">

			<form>
				<div class="item" data-id="1">

					<div class="wrapper-item">
						<input type="checkbox" class="select" v-if="control" value="1" v-model="selectedCategories">
						<router-link to="/catalog/categories/edit/1">Автомобилей</router-link>

						<div class="status" v-if="control">
							<i class="fa fa-eye" aria-hidden="true"></i>
							<i class="fa fa-eye-slash" aria-hidden="true"></i>
						</div>

						<div class="del" v-if="control" @click="delCategory($event)">
							<i class="fa fa-trash" aria-hidden="true"></i>
						</div>
					</div>

					<div class="sub">
						<div class="item" data-id="2">

							<div class="wrapper-item">
								<input type="checkbox" class="select" v-if="control" value="2" v-model="selectedCategories">

								<router-link to="/catalog/categories/edit/1">Автомобилей</router-link>

								<div class="status" v-if="control">
									<i class="fa fa-eye" aria-hidden="true"></i>
									<i class="fa fa-eye-slash" aria-hidden="true"></i>
								</div>

								<div class="del" v-if="control" @click="delCategory($event)">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div> -->
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	name: 'home',
	components: {
		PageControl: () => import('@/components/PageControl.vue'),
		//ListItems: () => import('@/components/ListItems.vue')
	},

	data(){
		return {
			// control: false,
			// selectedCategories: []
		}
	},

	methods: {

	},

	watch: {
		
	}
}


</script>

<style lang="scss">
	.catalog-categories{

		.list-categories{
			//border-left: 1px solid #2c343a;
			position: relative;

			form{
				> .item{
					margin-bottom: 40px;
				}
				
				.item{
					//border: 1px solid red;

					.wrapper-item{
						display: flex;
						align-items: center;
						flex-wrap: wrap;

						padding-left: 10px;
						border-radius: 4px;
						height: 34px;

						flex: none;
						width: 100%;

						background: #2c343a;

						.select{
							margin-right: 20px;
							appearance: none;
							outline: none;

							height: 14px;
							width: 14px;
							border-radius: 2px;
							background-color: #fff;
							
							&:hover{
								cursor: pointer;
							}

							&:checked{
								background-image: url("../../../assets/img/icons/correct.svg");
								background-repeat: no-repeat;
								background-size: 60%;
								background-position: center;
							}
						}

						a{
							color: #fff;
							transition: color .2s;
							line-height: 1em;

							&:hover{
								color: $accent;
							}
						}

						.status{
							margin-left: 20px;
							
						}

						.del{
							margin-left: auto;
							cursor: pointer;
							display: flex;
							align-items: center;
							justify-content: center;
							height: 22px;
							width: 24px;

							border-radius: 4px 0 0 4px;
							background: $red;

							transition: background .2s;

							&:hover{
								background: $redHover;
							}

							i{
								color: #fff;
								font-size: 12px;
							}
						}
					}

					.sub{
						margin-left: 10px;
						padding-left: 5px;
						padding-top: 15px;
						border-left: 1px solid $accent;
						position: relative;

						&:empty{
							border-left: none;

							&:before{
								display: none;
							}
						}

						&:before{
							content: "";
							height: 16px;
							width: 1px;
							display: block;
							background: #1B2028;
							position: absolute;
							left: -1px;
							bottom: 0;
							
						}

						.item{
							margin-bottom: 15px;
							display: flex;
							align-items: center;

							&:before{
								content: "";
								height: 1px;
								width: 100px;
								display: block;
								background: $accent;
								position: absolute;
								left: 0;
								//margin-top: 15px;
								z-index: -1;
							}
						}
					}
				}
			}

			
		}
	}
</style>
