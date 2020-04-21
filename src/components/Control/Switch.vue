<template>
	<div class="switch" :class="code" v-on:click="active">
		
		<div class="switch-wrapper">
			<i v-if="icon" :class="icon" aria-hidden="true"></i>
			<div class="slider"></div>
		</div>

		<p>{{name}}</p>
	</div>
</template>

<script>
	export default {
		name: "SwitchComponent",

		components: {},

		props: ["background", "icon", "name", "code"],

		data() {
			return {
				selected: "",
				defaultBackground: "#228c21"
			};
		},

		methods: {
			active(e) {
				let switchItem = e.currentTarget;
				
				if(switchItem.classList.contains("active")){
					switchItem.classList.remove("active");	
					switchItem.querySelector(".switch-wrapper").style.background = "none";
				}else{
					switchItem.classList.add("active");	

					if(this.background){
						switchItem.querySelector(".switch-wrapper").style.background = this.background;
					}else{
						switchItem.querySelector(".switch-wrapper").style.background = this.defaultBackground;
					}
					
				}
			}
		},

		watch: {},

		mounted: function () {

		},

		created: function () {}
	}; 
</script>

<style lang="scss">

	.switch{
		display: flex;
		align-items: center;
		
		.switch-wrapper{
			border-radius: 4px;
			border: 1px solid #fff;
			width: 48px;
			height: 22px;
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			cursor: pointer;
			transition: background .3s;

			i{
				margin-left: 8px;
				font-size: 10px;	
			}

			.slider{
				border-radius: 0 4px 4px 0;
				background: #fff;
				width: 50%;
				height: 100%;
				position: absolute;
				transition: margin-left .2s;
			}
		}

		&.active{
			.slider{
				border-radius: 4px 0 0 4px;
				margin-left: 50%;
			}
		}

		p{
			line-height: 1em;
			margin: 0;
			margin-left: 10px;
			font-size: 14px;
		}
	}
</style>