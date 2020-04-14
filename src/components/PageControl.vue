<template>
	<div class="page-control-wrapper">

		<div class="page-control">
			<div class="heading">
				<h1>{{title}}</h1>
			</div>

			<slot></slot>
		</div>

		<Breadcrumbs v-if="breadcrumbsStatus" :route="$route"></Breadcrumbs>
	</div>
	
</template>

<script>
	export default {
		name: "PageControl",
		components: {
			Breadcrumbs: () => import('@/components/Breadcrumbs.vue')
		},
		props: ['title', 'breadcrumbsStatus'],

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