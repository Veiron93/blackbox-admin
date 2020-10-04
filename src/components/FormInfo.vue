<template>
	<div ref="formInfo" class="form-info">
		<div v-if="type == 'error'" class="errors">
			<p v-for="item in msg" v-bind:key="msg.indexOf(item)">{{(msg.indexOf(item) + 1) + ". " + item.text}}</p>
		</div>
		<div v-else class="success">
			<p>{{msg[0].text}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'formInfo',
		
		components: {
			
		},

		props: ['type', 'msg', 'idForm'],

		data() {
			return {
				
			}
		},

		methods: {
			
		},

		computed: {
		
			
		},

		mounted: function () {
			
		},

		created: function(){
			
		}
	}
</script>

<style lang="scss">
	.form-info{
		margin-bottom: 15px;

		.errors, .success{
			border-radius: 4px;
			padding: 5px 10px;
			
			p{
				color: #fff;
				font-size: 14px;
				margin-bottom: 10px;	

				&:last-child{
					margin-bottom: 0;
				}
			}
		}

		.errors{
			background: $red;
		}

		.success{
			background: #229411;
		}
	}
</style>