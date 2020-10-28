<template>
	<div class="item-component item-component-single">
		<input type="checkbox" class="select" :value="item.id" @click="selectedItems(item.id)">
		
		<div class="item-content">
			<slot></slot>
		</div>

		<div class="item-btns">
			<button type="button" class="btn-status" data-type-btn="hidden" @click="hiddenItem(item.id)">
				<i class="fa" :class="item.hidden ? 'fa-eye-slash':'fa-eye'" aria-hidden="true"></i>
			</button>

			<button type="button" class="btn-delete" data-type-btn="delete" @click="delItem($event, item.id)">
				<i class="fa fa-trash" v-if="!item.deleted" aria-hidden="true"></i>
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
				//itemStatus: null
			}
		},

		methods: {

			// удалить - восстановить item

			delItem(ths, id){
				let btn = ths.currentTarget;
				let item = btn.closest(".item-component");

				if(btn.getAttribute("data-type-btn") == "delete"){

					btn.setAttribute("data-type-btn", "reestablish");
					btn.querySelector("span").textContent = "Восстановить";

					item.classList.add("item-component-deleted");

					this.item.deleted = 1;
					
				}else{

					btn.setAttribute("data-type-btn", "delete");
					btn.querySelector("span").textContent = "";

					item.classList.remove("item-component-deleted");

					this.item.deleted = null;
				}

				this.$http
					.post(this.$apiServer + '/users/del-user', {id: id, value: this.item.deleted})
					.then(response => (console.log(response)))
			},


			// скрыть item

			hiddenItem(id){
				this.item.hidden = this.item.hidden == 1 ? null : 1;

				this.$http
					.post(this.$apiServer + '/users/hidden', {id: id, value: this.item.hidden})
					.then(response => (console.log(response)))
			},

			// delItems(){
				
			// 	if(this.selectedItems.length > 0){
					
			// 		this.selectedItems.forEach(categoryId => {

			// 			document.querySelector('.category[data-id="'+categoryId+'"] ').remove();

			// 			deleteElementArray(this.selectedItems, categoryId);
			// 		});
			// 	}
			// }

			selectedItems(idItem) {
				this.$store.commit('listItems/SELECTED_ITEMS', {idItem})
				console.log(this.$store.state.listItems.selectedItemsList)
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

		padding-left: 10px;
		padding-right: 5px;
		border-radius: 4px;
		margin-bottom: 12px;

		background: #15191c;

		transition: opacity .3s, border-color .3s;
		border: 1px solid transparent;

		&:hover{
			border-color: #2c343a;
		}

		.select {
			margin-right: 20px;
			appearance: none;
			outline: none;
			flex: none;

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

		.item-content{
			display: flex;
			width: 100%;

			> *{
				width: 100%;
			}

			a {
				color: #fff;
				transition: color .2s;
				line-height: 1em;

				&:hover {
					color: $accent;
				}
			}
		}
		

		.item-btns {
			width: 130px;
			display: flex;
			justify-content: flex-end;

			.btn-status, .btn-delete{
				height: 22px;
				cursor: pointer;
				outline: none;
				border-radius: 4px;
				border: none;
				color: #fff;
				font-size: 13px;
			}

			.btn-status {
				background: #453d8c;
			}

			.btn-delete{
				background: $red;
				margin-left: 15px;

				&:hover {
					background: $redHover;
					transition: background .3s;
				}
			}

			.btn-delete[data-type-btn='reestablish'] {
				background: #096508;
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
		
		.select{
			visibility: hidden;
		}
		.item-btns .btn-status{
			display: none;
		}
	}
</style>