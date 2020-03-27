<template>
	<div class="catalog-categories">

		<div class="page-control">

			<div class="item add-category">
				<i class="fa fa-plus" aria-hidden="true"></i>
				<span>Добавить категорию</span>
			</div>

			<div class="item control-category" v-bind:class="{current: control}" @click="control = !control">
				<i class="fa fa-cog" aria-hidden="true"></i>
				<span>Управление</span>
			</div>

			<div class="tools" v-if="selectedCategories.length && control">
				<div class="item title">
					<p>Выбранные:</p>
				</div>

				<div class="item status">
					<i class="fa fa-eye" aria-hidden="true"></i>
					<i class="fa fa-eye-slash" aria-hidden="true"></i>
					<span>Скрыть</span>
				</div>

				<div class="item del" @click="delCategories($event)">
					<i class="fa fa-trash" aria-hidden="true"></i>
					<span>Удалить</span>
				</div>
			</div>
		</div>


		<div class="list-categories">

			<form>
				<div class="category" data-id="1">

					<div class="wrapper-category">

						<input type="checkbox" class="select" v-if="control" value="1" v-model="selectedCategories">
						
						<a href="">Автомобилей</a>

						<div class="status" v-if="control">
							<i class="fa fa-eye" aria-hidden="true"></i>
							<i class="fa fa-eye-slash" aria-hidden="true"></i>
						</div>

						<div class="del" v-if="control" @click="delCategory($event)">
							<i class="fa fa-trash" aria-hidden="true"></i>
						</div>
					</div>

					<div class="sub">
						<div class="category" data-id="2">

							<div class="wrapper-category">
								<input type="checkbox" class="select" v-if="control" value="2" v-model="selectedCategories">

								<a href="">Автомобилей</a>

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

			
		</div>
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	name: 'home',
	components: {
	
	},

	data(){
		return {
			control: false,
			selectedCategories: []
		}
	},

	methods: {

		deleteElementArray(arr, categoryId){
			Array.prototype.remove = function(value) {
				let idx = this.indexOf(value);
						
				if (idx != -1) {
					return this.splice(idx, 1);
				}

				return false;
			}

			arr.remove(categoryId);
		},

		
		delCategory(event){

			let categoryId = event.currentTarget.parentNode.parentNode.dataset.id;
			
			document.querySelector('.category[data-id="'+categoryId+'"] ').remove();

			this.deleteElementArray(this.selectedCategories, categoryId);
		},

		delCategories(){
			
			if(this.selectedCategories.length > 0){
				
				this.selectedCategories.forEach(categoryId => {

					document.querySelector('.category[data-id="'+categoryId+'"] ').remove();

					this.deleteElementArray(this.selectedCategories, categoryId);
				});
			}
		}
	},

	watch: {
		// selectedCategories: function () {
		//	console.log(this.selectedCategories); 
		// }
		
	}
}


</script>

<style lang="scss">
	.catalog-categories{

		.page-control{
			display: flex;
			margin-bottom: 30px;
			flex-wrap: wrap;
			
			&:after{
				content: "";
				display: block;
				height: 1px;
				flex: none;
				width: 100%;
				margin-top: -1px;
				background: #2c343a;
				position: relative;
				z-index: -1;
			}

			.item{
				margin-right: 30px;
				padding-bottom: 10px;
				cursor: pointer;
				user-select: none;

				border-bottom: 1px solid transparent;
				transition: border-color .2s;

				&.current{
					border-color: #1879c2;
				}

				&:hover{
					border-color: #1879c2;
				}

				&:last-child{
					margin-right: 0;
				}

				i, span{
					font-size: 13px;
				}

				i{
					margin-right: 5px;
				}

				span{
					letter-spacing: 1px;
				}

				&.add-category{

				}

				&.control-category{
					
				}	
			}

			.tools{
				margin-left: auto;
				display: flex;
				align-items: center;

				.item{
					border-bottom: none;
				}

				.title{
					cursor: default;
					p{
						font-size: 13px;
					}
				}

				.status{

				}

				.del{
					i, span{
						color: #903232;
						transition: color .2s;
					}

					&:hover{
						i, span{
							color: #881414;
						}
					}
				}
			}
		}

		.list-categories{
			//border-left: 1px solid #2c343a;
			position: relative;

			form{
				> .category{
					margin-bottom: 40px;
				}
				

				.category{
					//border: 1px solid red;

					.wrapper-category{
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
								color: #1879c2;
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
							background: #903232;

							transition: background .2s;

							&:hover{
								background: #881414;
							}

							i{
								color: #fff;
								font-size: 12px;
							}
						}
					}

					> .wrapper-category{
						//border-radius: 0 4px 4px 0;
						
					}


					.sub{
						margin-left: 10px;
						padding-left: 5px;
						padding-top: 15px;
						border-left: 1px solid #1879c2;
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

						.category{
							margin-bottom: 15px;
							display: flex;
							align-items: center;

							&:before{
								content: "";
								height: 1px;
								width: 100px;
								display: block;
								background: #1879c2;
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
