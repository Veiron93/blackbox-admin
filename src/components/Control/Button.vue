<template>
	<button :type="type" ref="btn" class="btn" :style="{background:background}" v-on:click="$emit('event')">
		<i v-if="icon" :class="icon" aria-hidden="true"></i> 
		{{title}}
	</button>
</template>

<script>
	export default {
		title: "ButtonComponent",

		components: {},

		props: ["type", "background", "icon", "title"],

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
		padding: 8px 15px;
		text-transform: uppercase;
		font-size: 13px;
		letter-spacing: 1px;
		cursor: pointer;
		transition: background .2s;
		background: $accent;
		border: none;
	}
</style>