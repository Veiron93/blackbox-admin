<template>
	<div class="catalog-add-category">
		<PageControl title="Добавить категорию" breadcrumbsStatus="true"/>

		<form action="">
			<Tabs :tabs="tabs">
				<template #main>
					<div class="item">
						<label for="">Категория</label>
						<input type="text" placeholder="Название категории">
					</div>
					
					<div class="item">
						<label for="">Описание</label>
						<textarea name="" placeholder="Описание категории"></textarea>
					</div>
				</template>

				<template #filters>
					<p>Фильтры</p>
				</template>

				<template #seo>
					<div class="item">
						<label for="">Мета-тег Description</label>
						<textarea name="" placeholder="Мета-тег Description"></textarea>
					</div>

					<div class="item">
						<label for="">Мета-тег Keywords</label>
						<textarea name="" placeholder="Мета-тег Keywords"></textarea>
					</div>
				</template>
			</Tabs>
		</form>
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	components: {
		PageControl: () => import('@/components/PageControl.vue'),
		Tabs: () => import('@/components/Tabs.vue')
	},

	data(){
		return {
			tabs: [
				{'name':'Основное', 'code':'main', 'icon': 'fa fa-home'},
				{'name':'Фильтры', 'code':'filters', 'icon': 'fa fa-filter'},
				{'name':'SEO', 'code':'seo'}
			]
		}
	},

	methods: {


	},

	watch: {
	
		
	},

	mounted(){
		
	}
}


</script>

<style lang="scss">
	.catalog-add-category{
		form{
			.item{
				margin-bottom: 30px;
			}
		}
	}
</style>