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
		props: ['breadcrumbsStatus', 'customTitlePage'],

		data() {
			return {
				title: "",
			};
		},

		methods: {
			titlePage: function(){
				this.title = this.$route.meta.linkName ? this.$route.meta.linkName : this.customTitlePage;
			}
		},

		watch: {},

		mounted: function () {
			this.titlePage();
		}
	};
</script>

<style lang="scss">

</style>