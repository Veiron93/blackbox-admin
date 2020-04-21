<template>
	<div class="catalog-add-category">
		<PageControl title="Добавить категорию" breadcrumbsStatus="true"/>

		<form action="">
			<Tabs :tabs="tabs">
				<template #main>

					<div class="item item-switches">

						<SwitchComponent 
							name="Выключить" 
							code="status"
							background="#9a0909"
							icon="fa fa-power-off"
						/>

						<SwitchComponent 
							name="Скрыть" 
							code="hidden"
							icon="fa fa-eye-slash"
						/>

						<SwitchComponent 
							name="Выделить в меню" 
							code="accent"
							icon="fa fa-bookmark"
						/>
					</div>	
					
					<div class="item">
						<label for="">Категория</label>
						<input type="text" placeholder="Название категории">
					</div>
					
					<div class="item">
						<label for="">Описание</label>
						<textarea name="" placeholder="Описание категории"></textarea>
					</div>

					<div class="item">
						<label for="">Фото</label>
						<input type="file">
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

			<div class="btns">
				<ButtonComponent
					name="Добавить" 
					code="add"
				/>
			</div>
		</form>
	</div>
</template>

<script>

// @ is an alias to /src

export default {
	components: {
		PageControl: () => import('@/components/PageControl'),
		Tabs: () => import('@/components/Tabs'),
		SwitchComponent: () => import('@/components/Control/Switch'),
		ButtonComponent: () => import('@/components/Control/Button')
	},

	data(){
		return {
			tabs: [
				{'name':'Основное', 'code':'main', 'icon': 'fa fa-bars'},
				{'name':'Фильтры', 'code':'filters', 'icon': 'fa fa-filter'},
				{'name':'SEO', 'code':'seo', 'icon': 'fa fa-bullseye'}
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

			.item-switches{
				display: flex;

				.switch{
					margin-right: 30px;
				}
			}

			.btns{
				margin-top: 30px;
				.btn{

				}
			}
		}
	}
</style>