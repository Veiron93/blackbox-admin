<template>
	<div class="item-component item-component-single" :data-item-id="item.id">
		<input type="checkbox" class="select" :value="item.id" @click="selectedItems(item.id)">
		
		<slot></slot>

		<div class="item-btns">
			<!-- <button type="button" data-type="reestablish" @click="delItem($event, item.id)">Восстановить</button> -->

			<button type="button" class="status">
				<i class="fa fa-eye" aria-hidden="true"></i>
			</button>

			<button type="button" data-type="delete" @click="delItem($event, item.id)">
				<i class="fa fa-trash" aria-hidden="true"></i>
				<span></span>
			</button>
		</div>
	</div>
</template>

<script>
	//import {deleteElementArray} from '@/resources/js/methods.js';

	export default {
		name: 'ListItems',
		
		components: {
			
		},

		props: ['id-list', 'item'],

		data() {
			return {
				
			}
		},

		methods: {
			delItem(ths, id){

				let btn = ths.currentTarget;
				
				let listItems = document.querySelector('#'+this.idList);
				let item = listItems.querySelector('.item-component[data-item-id="'+id+'"]');

				let typeEvent = btn.getAttribute("data-type");
				let statusItem = "";

				if(typeEvent == "delete"){
					btn.setAttribute("data-type", "reestablish");
					btn.querySelector("span").textContent = "Восстановить";
					item.classList.add("item-component-deleted");
					statusItem = 2;

				}else if(typeEvent == "reestablish"){
					btn.setAttribute("data-type", "delete");
					btn.querySelector("span").textContent = "";
					item.classList.remove("item-component-deleted");
					statusItem = null;
				}

				this.$http
					.post(this.$apiServer + '/users/del-user', {id: id, status: statusItem})
					.then(response => (console.log(response)))
			},

			// reestablishItem(id){
			// 	let listItems = document.querySelector('#'+this.idList);
			// 	let item = listItems.querySelector('.item-component[data-item-id="'+id+'"]');

				

			// 	this.$http
			// 		.post(this.$apiServer + '/users/reestablish-user', {id: id})
			// 		.then(response => (console.log(response)))
			// },

			// delItems(){
				
			// 	if(this.selectedItems.length > 0){
					
			// 		this.selectedItems.forEach(categoryId => {

			// 			document.querySelector('.category[data-id="'+categoryId+'"] ').remove();

			// 			deleteElementArray(this.selectedItems, categoryId);
			// 		});
			// 	}
			// }

			selectedItems(idItem) {
				this.$store.commit('selectedItems', {idItem})
				console.log(this.$store.state.selectedItemsList)
			}
		},

		watch: {
			
		},

		mounted: function () {
			
		}
	}
</script>

<style lang="scss">			
	.item-component-single {
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

		transition: opacity .3s;

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

			.status, button[data-type='reestablish'], button[data-type='delete'] {
				height: 22px;
				cursor: pointer;
				outline: none;
				border-radius: 4px;
				border: none;
				color: #fff;
				font-size: 13px;
			}

			button[data-type='reestablish'] {
				background: #096508;

				i{
					display: none;
				}
			}

			.status {
				background: #453d8c;
			}

			button[data-type='delete'] {
				background: $red;
				margin-left: 15px;
				

				&:hover {
					background: $redHover;
					transition: background .3s;
				}
			}
		}
	}

	.item-component-deleted{
		opacity: .4;

		&:hover{
			opacity: 1;
		}

		a{
			transition: none;
			&:hover{
				color: #fff;
			}
		}
		
		.select,
		.item-btns .status{
			display: none;
		}
	}
</style>