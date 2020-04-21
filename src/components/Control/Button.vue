<template>
	<button class="btn" :style="{background:background}">
		<i v-if="icon" :class="icon" aria-hidden="true"></i> 
		{{name}}
	</button>
</template>

<script>
	export default {
		name: "ButtonComponent",

		components: {},

		props: ["background", "icon", "name", "code"],

		data() {
			return {

			};
		},

		methods: {
			
		},

		watch: {},

		mounted: function () {

		},

		created: function () {}
	}; 
</script>

<style lang="scss">

	.btn{
		border-radius: 4px;
		background: none;
		color: #fff;
		border: 1px solid #fff;
		padding: 8px 15px;
		text-transform: uppercase;
		font-size: 13px;
		letter-spacing: 1px;
		cursor: pointer;
	}
</style>