<template>
	<div id="app" class='wrapper'>
		<Header	/>
		
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			Header: () => import('@/components/Header.vue')
		},

		props: ['item']
	}
</script>

<style lang="scss">
	@import "~../node_modules/normalize.css/normalize";
	@import "~../node_modules/bootstrap/scss/bootstrap-grid";
	@import "~../node_modules/font-awesome/css/font-awesome.css";
	@import "@/resources/sass/main";
</style>