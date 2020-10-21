<template>
	<div class="item" :data-item-id="item.id">
		<div class="wrapper-item">
			<input type="checkbox" class="select" v-if="control" :value="item.id" v-model="selectedItems">
			<router-link to="/catalog/categories/edit/1">{{item.first_name}}</router-link>

			<div class="item-btns">
				<button type="button" class="reestablish">Восстановить</button>

				<button type="button" class="status" v-if="control">
					<i class="fa fa-eye" aria-hidden="true"></i>
				</button>

				<button type="button" class="del" v-if="control" @click="delItem(item.id)">
					<i class="fa fa-trash" aria-hidden="true"></i>
				</button>
			</div>	
		</div>

		<div class="sub">
			<div class="item" :data-item-id="item.id">
				<div class="wrapper-item">
					<input type="checkbox" class="select" v-if="control" :value="item.id" v-model="selectedItems">
					<router-link to="/catalog/categories/edit/1">{{item.first_name}}</router-link>

					<div class="item-btns">
						<button type="button" class="reestablish">Восстановить</button>

						<button type="button" class="status" v-if="control">
							<i class="fa fa-eye" aria-hidden="true"></i>
						</button>

						<button type="button" class="del" v-if="control" @click="delItem(item.id)">
							<i class="fa fa-trash" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//import {deleteElementArray} from '@/resources/js/methods.js';

	export default {
		name: 'ListItems',
		
		components: {
			
		},

		props: ['item', 'control'],

		data() {
			return {
				selectedItems: []
			}
		},

		methods: {	
			delItem(id){
				//console.log(id)

				let listItems = document.querySelector('#'+this.idList);
				let item = listItems.querySelector('.item[data-item-id="'+id+'"]');

				item.classList.add("item-deleted");

		
				//document.querySelector('.item[data-item-id="'+id+'"]').remove();

				// deleteElementArray(this.selectedItems, categoryId);
			},

			test(){
				console.log(12);
			}

			// delItems(){
				
			// 	if(this.selectedItems.length > 0){
					
			// 		this.selectedItems.forEach(categoryId => {

			// 			document.querySelector('.category[data-id="'+categoryId+'"] ').remove();

			// 			deleteElementArray(this.selectedItems, categoryId);
			// 		});
			// 	}
			// }
		},

		watch: {
			
		},

		mounted: function () {

		}
	}
</script>

<style lang="scss">			
	.item {
		height: 34px;
		width: 100%;

		flex: none;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		padding-left: 10px;
		padding-right: 5px;
		border-radius: 4px;
		margin-bottom: 12px;

		background: #15191c;

		.select {
			margin-right: 20px;
			appearance: none;
			outline: none;

			height: 14px;
			width: 14px;
			border-radius: 2px;
			background-color: #fff;

			&:hover {
				cursor: pointer;
			}

			&:checked {
				background-image: url("../../assets/img/icons/correct.svg");
				background-repeat: no-repeat;
				background-size: 60%;
				background-position: center;
			}
		}

		a {
			color: #fff;
			transition: color .2s;
			line-height: 1em;

			&:hover {
				color: $accent;
			}
		}

		.item-btns {
			margin-left: auto;
			display: flex;

			.status, .reestablish, .del {
				height: 22px;
				cursor: pointer;
				outline: none;
				border-radius: 4px;
				transition: background .2s;
				border: none;
				color: #fff;
				font-size: 13px;
			}

			.reestablish {
				display: none;
				background: #096508;
			}

			.status {
				background: #453d8c;
			}

			.del {
				background: $red;
				margin-left: 15px;

				&:hover {
					background: $redHover;
				}
			}
		}
	}



	//.item{
				// .sub{
				// 	margin-left: 10px;
				// 	padding-left: 5px;
				// 	padding-top: 15px;
				// 	border-left: 1px solid $accent;
				// 	position: relative;

				// 	&:empty{
				// 		border-left: none;

				// 		&:before{
				// 			display: none;
				// 		}
				// 	}

				// 	&:before{
				// 		content: "";
				// 		height: 16px;
				// 		width: 1px;
				// 		display: block;
				// 		background: #1B2028;
				// 		position: absolute;
				// 		left: -1px;
				// 		bottom: 0;	
				// 	}

				// 	.item{
				// 		margin-bottom: 15px;
				// 		display: flex;
				// 		align-items: center;

				// 		&:before{
				// 			content: "";
				// 			height: 1px;
				// 			width: 100px;
				// 			display: block;
				// 			background: $accent;
				// 			position: absolute;
				// 			left: 0;
				// 			//margin-top: 15px;
				// 			z-index: -1;
				// 		}
				// 	}
				// }

			
				// &-deleted{
				// 		.wrapper-item{
				// 			padding-left: 10px;
				// 			margin-left: auto;

				// 			background: #15191c;

				// 			.select{
				// 				display: none;
				// 			}

				// 			a{
				// 				color: #fff;
				// 				transition: color .2s;
				// 				line-height: 1em;

				// 				&:hover{
				// 					color: $accent;
				// 				}
				// 			}

				// 			.item-btns{
				// 				.status, .del{
				// 					display: none;
				// 				}

				// 				.reestablish{
				// 					display: block;
				// 				}
				// 			}	
				// 		}
				// }
			}
</style>