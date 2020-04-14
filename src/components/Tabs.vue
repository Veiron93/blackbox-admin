<template>
	<div class="tabs">
		<div class="tabs-name">
			<button 
				v-for="tab in tabs" 
				v-bind:key="tab.code" 
				v-on:click="selected = tab.code" 
				:class="{selected : tab.code == selected}"
			>
				<i v-if="tab.icon" :class="tab.icon" aria-hidden="true"></i>
				{{tab.name}}
			</button>
		</div>

		<div class="tab-content">
			<div v-for="tab in tabs" v-bind:key="tab.code" v-show="tab.code == selected">
				<slot :name="tab.code"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tabs',
		
		components: {
			
		},

		props: ['tabs'],

		data() {
			return {
				selected: ""
			}
		},

		methods: {
			
		},

		watch: {
		
		},

		mounted: function () {
			
			// КАКАЯ ВКЛАДКА АКТИВНА
			// проверка на какую вкладку открыть при загрузке
			this.tabs.forEach(e => {
				if(e.selectedDefault){
					this.selected = e.code;
				}
			});

			// вкладка по умолчанию
			if(this.selected.length == 0){
				this.selected = this.tabs[0]['code'];
			}
		},

		created: function(){
			
		}
	}
</script>

<style lang="scss">
	.tabs{
		.tabs-name{
			
			button{
				border: none;
				height: 36px;
				min-width: 130px;
				cursor: pointer;
				outline: none;
				padding: 0px 15px;
				font-size: 14px;
				background: none;		
				color: #fff;
				text-align: left;
				border-right: 1px solid #2c343a;
				background: #15191C;
				transition: background .2s;

				&:hover, &.selected{
					background: $accentHover;
				}

				i{
					margin-right: 2px;
				}
			}
		}

		.tab-content{
			background: #15191C;
			padding: 20px;
			padding-top: 30px;
		}
	}
</style>