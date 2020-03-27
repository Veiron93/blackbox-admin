<template>
	<div class="page-control">
		<div class="item title">
			<h3>{{title}}</h3>
		</div>

		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "PageControl",
		components: {},
		props: ['title'],

		data() {
			return {};
		},

		methods: {},

		watch: {},

		mounted: function () {}
	};
</script>

<style lang="scss">

</style>