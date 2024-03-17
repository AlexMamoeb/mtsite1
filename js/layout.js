function Load_Footer(){
    const footer = `
    <div class="site-footer js-footer pt-5 pt-md-0">
				<div class="site-footer__top">
					<div class="container">
						<div class="row gutter-y-30">
							<div class="col-lg-5">
								<div class="row gutter-x-15 mb-3 justify-content-center justify-content-lg-start">
									<div class="col-item">
										<a class="site-footer__title site-footer__title--standart" href="products.html">
											Каталог товаров
										</a>
									</div>
									<div class="col-item">
										<a class="site-footer__title site-footer__title--standart" href="vozvrat.html">
											Возврат товара
										</a>
									</div>
									
									<div class="col-item">
										<a class="site-footer__title site-footer__title--standart" href="payments.html">
											Условия оплаты
										</a>
									</div>
									<div class="col-item">
										<a
											class="site-footer__title site-footer__title--standart"
											href="deliveries.html"
										>
											Условия доставки
										</a>
									</div>
									<div class="col-item">
										<a class="site-footer__title site-footer__title--standart" href="contacts.html">
											Контакты
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 offset-lg-1">
								<div class="row gutter-y-20 site-footer__contacts">
									<div class="col-12">
										<div class="dropdown">
											<div
												class="row gutter-x-10 justify-content-lg-start justify-content-center"
											>
												<div class="col-item">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="5"
														height="14"
														viewBox="0 0 5 14"
													>
														<use xlink:href="design/default_1/images/svg-sprite.svg#tel" />
													</svg>
												</div>
												<div class="col-item">
													<a
														class="fs--16 dropdown__link dropdown__link--currency site-footer__contacts-phone"
														href="tel:+74958016503"
													>
														<b class="mr-2">+7 (495) 801-65-03</b>
													</a>
												</div>
											</div>
										</div>

										<div class="align--lg-center ml-4">
											<a
												href="javascript:void(0);"
												class="link--gray-default text--uppercase text--spacing fs--9 site-footer__callback js-modal-callback"
											>
												Заказать звонок
											</a>
										</div>
									</div>

									<div class="col-12">
										<div class="row gutter-x-10 justify-content-lg-start justify-content-center">
											<div class="col-item">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="11"
													height="9"
													viewBox="0 0 11 9"
												>
													<use xlink:href="design/default_1/images/svg-sprite.svg#email" />
												</svg>
											</div>
											<div class="col-item">
												<a
													class="site-footer__contacts-mail"
													href="cdn-cgi/l/email-protection.html#681f091a05460b040105091c461b09040d1b280a03461a1d"
												>
												</a>
											</div>
										</div>
									</div>

									<div class="col-12">
										<div
											class="row gutter-x-10 flex-nowrap justify-content-lg-start justify-content-center"
										>
											<div class="col-item">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="9"
													height="12"
													viewBox="0 0 9 12"
												>
													<use xlink:href="design/default_1/images/svg-sprite.svg#location" />
												</svg>
											</div>
											<div class="col-item color--white">
												121099, г. Москва, ВН. ТЕР. Г. МУНИЦИПАЛЬНЫЙ ОКРУГ АРБАТ, УЛ. НОВЫЙ
												АРБАТ, Д. 32, ЭТАЖ 1, ПОМЕЩ. XIII
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3">
								<div class="row gutter-y-20">
									<div class="col-12">
										<div class="mb-2">
											<button
												type="button"
												class="btn btn--block justify-content-between btn--46 btn--dark px-4 js-modal-subscribe"
											>
												Подписаться на рассылку
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="21"
													height="16"
													viewBox="0 0 21 16"
													class="opacity-5 m-0"
												>
													<use
														xlink:href="design/default_1/images/svg-sprite.svg#subscribe"
													/>
												</svg>
											</button>
										</div>
									</div>

									<div class="col-12">
										<a
											href="politic.html"
											class="d-flex align-items-center link--gray-white justify-content-center justify-content-lg-start"
										>
											<span class="col-item mr-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="fill--white opacity-5"
													width="18"
													height="16"
													viewBox="0 0 18 16"
												>
													<use xlink:href="design/default_1/images/svg-sprite.svg#docs" />
												</svg>
											</span>
											<span class="text--spacing fs--10">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
										</a>
									</div>

									<div class="col-12">
										<a
											href="licenses.html"
											class="d-flex align-items-center link--gray-white justify-content-center justify-content-lg-start"
										>
											<span class="col-item mr-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="fill--white opacity-5"
													width="18"
													height="16"
													viewBox="0 0 18 16"
												>
													<use xlink:href="design/default_1/images/svg-sprite.svg#docs" />
												</svg>
											</span>
											<span class="text--spacing fs--10">СОГЛАШЕНИЕ НА ОБРАБОТКУ ДАННЫХ</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="site-footer__bottom site-footer__bottom--border">
						<div class="d-flex flex-wrap gutter-y-20 justify-content-between align-items-center">
							<div class="col-item fs--13 color--gray">
								2024 © Интернет-магазин мототехники.<br />Все права защищены.
							</div>

							<div class="col-item d-flex align-items-center flex-wrap">
								<i class="payment payment__mastercard" title="Mastercard"></i>
								<i class="payment payment__visa" title="VISA"></i>
								<i class="payment payment__sbrf" title="Сбербанк"></i>
								<i class="payment payment__alfa" title="Альфа-банк"></i>
								<i class="payment payment__tinkoff" title="Тинькофф"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
    `

    $('.container-page-footer').empty()

    $('.container-page-footer').append(footer)

}


function Load_Header(){
    const header = `
    <div class="site-header js-header d-lg-block d-xl-block d-none">
					<div class="site-header__top">
						<div class="container">
							<div class="site-header__top-row h--82 row align-items-center gutter-x-15 flex-nowrap">
								<div class="col-item">
									<div class="row gutter-x-15 flex-nowrap align-items-center">
										<div class="col-item">
											<a href="/index.html">
												<img
													src="/img/logo.png"
													class="site-header__logo"
													alt="Мототехника со скидкой"
												/>
											</a>
										</div>
									</div>
								</div>

								<div class="flex-grow-1 mr-xl-4 col-item">
									<div class="relative">
										<form
											class="site-header__search site-header__search--light"
											action="products.html"
										>
											<div class="form__mix">
												<input
													class="form__input js-search-input-header form__input--40"
													type="text"
													name="keyword"
													value=""
													autocomplete="off"
													placeholder="Поиск товаров..."
													data-empty="Сожалеем, но ничего не найдено"
													required
												/>
												<button
													class="form__mix-icon form__mix-icon--opacity px-3 d-flex align-items-center"
													type="submit"
												>
													<svg width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
														<use
															xlink:href="design/default_1/images/svg-sprite.svg#search-loop"
														/>
													</svg>
												</button>
											</div>
											<div
												class="js-search absolute search-results__header-container none header-search-results"
											>
												<div
													class="js-search-results-append search-results search-results-header h-100 overflow-hidden"
												></div>
												<button
													type="submit"
													class="btn btn--gray-default border-radius-0 btn--block btn--xl"
												>
													Все результаты
												</button>
											</div>
										</form>
									</div>
								</div>

								<div class="col-item mr-xl-3 d-xl-block d-none">
									<div class="mb-1">
										<div class="dropdown">
											<a class="dropdown__link fs--16 fw--700 link--dark" href="tel:+74958016503">
												<span>
													<span class="mr-2 site-header__dropdown-active"
														>+7 (495) 801-65-03</span
													>
												</span>
											</a>
										</div>
									</div>

									<a
										href="javascript:void(0);"
										class="text--uppercase text--spacing d-block fs--10 site-header__callback-link link--dark-default js-modal-callback"
										>Заказать звонок</a
									>
								</div>
							</div>
						</div>
					</div>

					<div class="site-menu js-menu site-menu--theme-light site-menu--type-1">
						<div class="site-menu__bg--light border-bottom">
							<div class="container">
								<div class="relative">
									<ul class="list--unstyled site-menu__ul js-menu__list border-top">
										<li class="js-menu__catalog-btn">
											<a href="/products.html">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="10"
													height="10"
													viewBox="0 0 10 10"
													class="fill--dark"
												>
													<use
														xlink:href="design/default_1/images/svg-sprite.svg#catalog-grid"
													/>
												</svg>
												Каталог
											</a>
											<div class="site-menu__dropdown js-menu__catalog-content">
												<div
													class="site-menu__dropdown-wrapper site-menu__dropdown-wrapper--full"
													style="overflow: scroll"
												>
													<div class="site-menu__dropdown-wrapper-padding">
														<div class="d-flex">
															<div class="flex-grow-1 site-menu__dropdown-content">
																<div class="row gutter-y-30 category_item_container_hover_menu">
																	
																</div>
															</div>

															<div class="site-menu__dropdown-reklam d-xl-block d-none">
																<div
																	class="js-catalog-menu-one-slider slick__arrows--showing slick__arrows slick__arrows--center slick__arrows--showing-20-minus overflow-visible"
																></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>

										<li class="is--first first-level">
											<a class="dropdown__link" href="contacts.html"> Контакты </a>
										</li>
										<li class="is--first first-level">
											<a class="dropdown__link" href="deliveries.html"> Доставка </a>
										</li>
										<li class="is--first first-level">
											<a class="dropdown__link" href="payments.html"> Условия оплаты </a>
										</li>
										<li class="is--first first-level">
											<a class="dropdown__link" href="informatsiya-dlya-yuridicheskih-lits.html">
												Юридическим лицам
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
    `


    $('.container-page-header').empty()


    $('.container-page-header').append(header)
	Load_Catalog_Cards_Hover_Menu()

}








