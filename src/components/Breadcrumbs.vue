<template>
	<div class="breadcrumbs">
		<ul>
			<li v-for="item in breadcrumbs" :key="item.path">
				<router-link :to="item.path">{{item.meta.linkName}} <span>/</span></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Breadcrumbs',
		
		components: {
			
		},

		props: ['route'],

		data() {
			return {
				breadcrumbs: this.$route.meta.breadcrumbs
			}
		},

		methods: {
			
		},

		watch: {
			
		},

		mounted: function () {
		

			// if(this.$route.children){
				
			// }
		}
	}
</script>

<style lang="scss">
	.breadcrumbs{
		margin-top: 10px;

		ul{
			display: flex;
			list-style-type: none;
			margin: 0;
			padding: 0;

			li{
				margin-right: 8px;
				
				a{
					color: #b3b3b3;
					display: flex;
					align-items: center;
					font-size: 13px;
					transition: color .2s;

					&:hover{
						color: $accent;
					}

					span{
						margin-left: 8px;
						font-size: 10px;
					}
					
				}

				&:first-child{
					display: flex;
					align-items: center;
					
					&:before{
						content: "";
						display: block;
						height: 9px;
						width: 6px;
						margin-right: 5px;
						background: url('../assets/img/icons/back.svg');
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
					}
				}

				&:last-child{
					a{
						span{
							display: none;
						}
					}	
				}
			}
		}
	}
</style>