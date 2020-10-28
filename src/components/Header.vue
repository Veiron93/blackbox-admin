<template>
	<header>

		<div class="user">
			<a href="">Veiron93</a>
			<a href=""><i class="fa fa-sign-out"></i> Выйти</a>
		</div>

		<div class="menu">
			<div class="item-link">
				<router-link to="/22">
					<i class="fa fa-tachometer" aria-hidden="true"></i>		
					<span>Панель состояния</span>
				</router-link>
			</div>
			
			<div class="item-accordion">
				<i class="fa fa-shopping-bag" aria-hidden="true"></i>				
				<span>Каталог</span>
				<p class="count">12</p>
								
				<div class="sub">
					<router-link to="/catalog/categories"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Категории</router-link>
					<router-link to="/44"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Товар</router-link>
					<router-link to="/4"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Опции</router-link>
				</div>
			</div>

			<div class="item-link">
				<router-link to="/users">
					<i class="fa fa-users" aria-hidden="true"></i>		
					<span>Пользователи</span>
				</router-link>
			</div>

			<div class="item-accordion">
				<i class="fa fa-trash" aria-hidden="true"></i>				
				<span>Реклама</span>
				<p class="count">12</p>
								
				<div class="sub">
					<router-link to="/222"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Категории</router-link>
					<router-link to="/443"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Товар</router-link>
					<router-link to="/412"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Опции</router-link>
				</div>
			</div>
			
			<div class="item-accordion">
				<i class="fa fa-gears" aria-hidden="true"></i>		
				<span>Настройки</span>
				<div class="sub">
					
				</div>
			</div>
		</div>

		<div class="footer">
			<!-- <div class="widget-messages">

				<div class="title-widget-messages">
					<p>Последние сообщения</p>
				</div>
				
				<div class="message">
					<div class="photo">
						<img src="@/assets/img/user.jpg" alt="">
					</div>

					<div class="info">
						<p>Дмитрий</p>
						<p>Оплата заказа</p>
					</div>
				</div>

				<div class="message">
					<div class="photo">
						<img src="@/assets/img/user.jpg" alt="">
					</div>

					<div class="info">
						<p>Дмитрий</p>
						<p>Оплата заказа</p>
					</div>
				</div>
				
			</div> -->

			<div class="super-user">
				<SwitchComponent 
					name="Суперпользователь" 
					code="super-user"
					background="#da8d00"
					icon="fa fa-user-circle-o"
				/>
			</div>
			
			<div class="copyright">
				<p>BlackBox</p>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',

		components: {
			SwitchComponent: () => import('@/components/Control/Switch'),
		},

		props: {

		},

		data() {
			return {
				
			}
		},

		methods: {
			accordionMenu(){
				let menuHeader = document.querySelector("header .menu");
				let itemsAccordionMenuHeader = menuHeader.querySelectorAll(".item-accordion");

				function subMenu(e){
					let itemAccordion = "";

					if(e.target.classList.contains("item-accordion")){
						itemAccordion = e.target;
					}else{
						itemAccordion = e.target.parentElement;
					}

					if(itemAccordion.classList.contains("open-accordion")){
						itemAccordion.classList.remove("open-accordion");
					}else{
						itemAccordion.classList.add("open-accordion");
					}
				}

				itemsAccordionMenuHeader.forEach(item => {
					item.addEventListener("click", e => subMenu(e));
				});
			}
		},

		watch: {
			
		},

		mounted: function () {
			this.accordionMenu()
		}
	}
</script>

<style lang="scss">
	header{
		//border: 1px solid red;
		width: 240px;
		height: 100vh;
		position: fixed;
		top: 0;
		background: #15191C;

		


		.menu {
			.item-link{
				a{
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					padding: 16px 0 16px 20px;
					position: relative;

					>i, span {
						color: #fff;
						line-height: 1em;
					}
			
					>i {
						margin-right: 10px;
						font-size: 13px;
					}
			
					span {
						text-transform: uppercase;
						letter-spacing: 2px;
						font-size: 13px;
						color: #fff;
					}

					.count {
						margin-left: auto;
						margin-right: 15px;
						font-size: 12px;
						color: #1879C2;
					}

					&.router-link-active {
						background: linear-gradient(to right, rgba(24, 120, 194, 0.07) 0%, rgba(21, 25, 28, 1) 100%);
			
						&:before {
							content: "";
							width: 2px;
							height: 45px;
							display: block;
							background: #1879C2;
			
							position: absolute;
							left: 0;
							top: 0;
						}
			
						>i, span {
							color: #1879C2;
						}
			
						.sub {
							a {
								&.router-link-active {
									background: #1B2028;
									color: #1879C2;
								}
							}
			
						}
					}
				}
			}

			.item-accordion{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				padding: 16px 0 16px 20px;
				position: relative;
				cursor: pointer;

				>i, span {
					color: #fff;
					line-height: 1em;
				}
			
				>i {
					margin-right: 10px;
					font-size: 13px;
				}
			
				span {
					text-transform: uppercase;
					letter-spacing: 2px;
					font-size: 13px;
					color: #fff;
					user-select: none;
				}
			
				.count {
					margin-left: auto;
					margin-right: 15px;
					font-size: 12px;
					color: #1879C2;
				}

				&.open-accordion {
					.sub{
						display: block;
					}
				}
				
				.sub {
					width: calc(100% + 20px);
					flex: none;
					margin-top: 16px;
					background: #181d21;
					margin-left: -20px;
					margin-bottom: -16px;

					display: none;

					a {
						color: #fff;
						display: block;
						padding: 11px 20px;
						font-size: 13px;
						line-height: 1em;
						color: #cacaca;
						transition: background .2s;

						&.router-link-active {
							background: #1B2028;
							color: #1879C2;
						}

						&:hover {
							background: #1B2028;

							i {
								margin-right: 9px;
							}
						}

						i {
							font-size: 12px;
							margin-right: 5px;
							transition: margin-right .2s;
						}
					}
				}
			}
		}

		
	}


	.footer{
		position: absolute;
		bottom: 20px;
		width: 100%;
		
		.widget-messages{
			margin-top: 50px;
			padding: 0px 20px;
			
			.title-widget-messages{
				margin-bottom: 15px;
				p{
					text-transform: uppercase;
					color: #fff;
					font-size: 11px;
					letter-spacing: 1px;
				}
			}

			.message{
				display: flex;
				height: 40px;
				margin-bottom: 15px;
				border-radius: 4px;
				background: #2C343A;

				.photo{
					height: 40px;
					width: 40px;
					overflow: hidden;
					border-radius: 4px 0 0 4px;
				}

				.info{
					padding: 3px 8px;

					p{
						&:nth-child(1){
							font-size: 12px;
							margin-bottom: 4px;
							letter-spacing: 1px;
							color: #fff;
						}

						&:nth-child(2){
							font-size: 11px;
							color: #1879c2;
						}
					}
				}
			}
		}

		.super-user{
			display: flex;
			justify-content: center;

			p{
				//font-size: 12px;
				//letter-spacing: 1px;
			}
		}

		.copyright{
			text-align: center;
			margin-top: 30px;
			p{
				color: #2c343a;
				text-transform: uppercase;
				font-size: 12px;
				letter-spacing: 1px;
			}
		}
	}
	
</style>