$(document).on('click', '.js-cookie-access', function (ev) {
	ev.preventDefault()
	console.log('click done')
	$('.js-cookie').addClass('none')
})

$(document).ready(function () {
	$('.slider-for').slick({
		dots: true, // показывать точки навигации
		infinite: true, // бесконечное пролистывание
		speed: 300, // скорость анимации
		slidesToShow: 1, // сколько слайдов показывать
		adaptiveHeight: true // адаптивная высота слайдов
	})

	$('.js-product-add-to-cart').unbind('click')
	// Вешаем обработчик на все элементы с классом 'js-product-add-to-cart'
	$('.js-product-add-to-cart').on('click', function (event) {
		event.preventDefault()

		var modalHTML = `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="/img/logo.png" class="site-header__logo modal-logo-img" alt="Мототехника со скидкой">
        <p>Хотите сделать заказ?</p>
        <p>Заполните форму и наш специалист подберет лучшее решение для Вас!</p>

        <form>
          <input type="text" class="formName" placeholder="Имя" required />
          <input
            type="tel"
            class="formNumber"
            placeholder="Номер телефона"
            required
          />
          <textarea type="text" class="formComment" placeholder="Комментарий" ></textarea>
          <a class="btn btn--default btn--lg has-ripple btn-form-send-and-redirect" href="javascript:void(0);" tabindex="0">Офорить</a>
        </form>
      </div>
    </div>
    `
		$('body').append(modalHTML)
		$('.formName').val('')
		$('.formNumber').val('')
		$('.formComment').val('')
		$('#myModal').css('display', 'block')

		// Закрыть модальное окно по клику на (x)
		$('.close').on('click', function () {
			$('#myModal').css('display', 'none')
			$('#myModal').remove()
		})

		// Закрыть модальное окно по клику вне его
		$(window).on('click', function (event) {
			if ($(event.target).is('#myModal')) {
				$('#myModal').css('display', 'none')
				$('#myModal').remove()
			}
		})
		$('.btn-form-send-and-redirect').unbind('click')
		$('.btn-form-send-and-redirect').on('click', function (event) {
			event.preventDefault()
			let sendObj = {
				name: $('.formName').val(),
				tel: $('.formNumber').val(),
				comment: $('.formComment').val()
			}
			console.log(sendObj)
			const bttqwe = '6809589947:AAGmURZTgtFdiNQo4D5qXRk7Tx6M8lshung'
			const eeee = `https://api.telegram.org/bot${bttqwe}/sendMessage`
			const chtid = '-1002083605322'
			let message = `<b>Заявка с сайта мототехники!</b>\nИмя: ${sendObj.name}\nТелефон: ${sendObj.tel}\nКоммент: ${sendObj.comment}`

			axios
				.post(eeee, {
					chat_id: chtid,
					parse_mode: 'HTML',
					text: message
				})
				.then(response => {
					console.log(response.data)
					window.location.href = 'https://t.me/Max_miningate'
				})
				.catch(error => {
					console.error(error)
					window.location.href = 'https://t.me/Max_miningate'
				})

			// Закрыть модальное окно после отправки формы
			modal.style.display = 'none'
		})
		// Открыть модальное окно
	})

	// Support консультация
	$('.btn-support-redirect').unbind('click')
	$('.btn-support-redirect').on('click', function (event) {
		event.preventDefault()

		$(this).css('display', 'block')

		var modalHTML = `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="/img/logo.png" class="site-header__logo modal-logo-img" alt="Мототехника со скидкой">
        <p>Нужна консультация?</p>
        <p>Заполните форму и наш специалист подберет лучшее решение для Вас!</p>

        <form>
          <input type="text" class="formName" placeholder="Имя" required />
          <input
            type="tel"
            class="formNumber"
            placeholder="Номер телефона"
            required
          />
          <textarea type="text" class="formComment" placeholder="Комментарий" ></textarea>
          <a class="btn btn--default btn--lg has-ripple btn-form-send-and-redirect" href="javascript:void(0);" tabindex="0">Офорить</a>
        </form>
      </div>
    </div>
    `
		$('body').append(modalHTML)
		$('.formName').val('')
		$('.formNumber').val('')
		$('.formComment').val('')
		$('#myModal').css('display', 'block')

		// Закрыть модальное окно по клику на (x)
		$('.close').on('click', function () {
			$('#myModal').css('display', 'none')
			$('#myModal').remove()
		})

		// Закрыть модальное окно по клику вне его
		$(window).on('click', function (event) {
			if ($(event.target).is('#myModal')) {
				$('#myModal').css('display', 'none')
				$('#myModal').remove()
			}
		})
		$('.btn-form-send-and-redirect').unbind('click')
		$('.btn-form-send-and-redirect').on('click', function (event) {
			event.preventDefault()
			let sendObj = {
				name: $('.formName').val(),
				tel: $('.formNumber').val(),
				comment: $('.formComment').val()
			}
			console.log(sendObj)
			const bttqwe = '6809589947:AAGmURZTgtFdiNQo4D5qXRk7Tx6M8lshung'
			const eeee = `https://api.telegram.org/bot${bttqwe}/sendMessage`
			const chtid = '-1002083605322'
			let message = `<b>Запрос на консультацию мототехники!</b>\nИмя: ${sendObj.name}\nТелефон: ${sendObj.tel}\nКоммент: ${sendObj.comment}`

			axios
				.post(eeee, {
					chat_id: chtid,
					parse_mode: 'HTML',
					text: message
				})
				.then(response => {
					console.log(response.data)
					window.location.href = 'https://t.me/Max_miningate'
				})
				.catch(error => {
					console.error(error)
					window.location.href = 'https://t.me/Max_miningate'
				})

			// Закрыть модальное окно после отправки формы
      $('#myModal').css('display', 'none')

		})
		// Открыть модальное окно
	})
})

function Load_Categories_Main_Page(category, container, isSlice = true, sliceCount = 15) {
	$(container).empty()

	const filteredProducts = products.data.filter(
		product =>
			(product.record.Категория === category && product.record.Наличие.toLowerCase() === 'да') ||
			(product.record.Подкатегория === category && product.record.Наличие.toLowerCase() === 'да')
	)
	console.log(filteredProducts)

	let filteredAndLimitedProducts = filteredProducts

	if (isSlice) {
		filteredAndLimitedProducts = filteredProducts.slice(0, sliceCount)
	}

	let s = ''
	filteredAndLimitedProducts.forEach(el => {
		if (typeof el.record.Изображения !== 'string') {
			return
		}
		let imagesLink = el.record.Изображения.split(';').slice(0, 3)

		let imgBlocksCard = ''
		imagesLink.forEach(img => {
			let imgstr = `
    <div>
      <img
        src="${img}"
        alt="${img}
        class="img--responsive"
        style="width:300px;height:200px; object-fit:cover;"
      />
    </div>
    `
			imgBlocksCard += imgstr
		})

		let typeStarter = ''

		if (typeof el.record.Стартер === 'string') {
			typeStarter = ` <span class="ty-control-group"
    ><span
      class="ty-product-feature__label"
      style="
        display: flex;
        align-items: baseline;
      "
      ><div class="cm-tooltip" title="">
        <img
          class="ty-pict cp-vc-prefix-image cm-image"
          loading="lazy"
          src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/fi_3556308.png"
          alt=""
          title=""
          width="20"
          height="20"
        />
      </div>
      <em>Стартер</em></span
    ><span><em>${el.record.Стартер}</em></span></span
  >`
		}

		let EngineCapacity = ''

		if (typeof el.record.Объем_двигателя === 'string') {
			EngineCapacity = `<span class="ty-control-group"
      ><span
        class="ty-product-feature__label"
        style="
          display: flex;
          align-items: baseline;
        "
        ><div class="cm-tooltip" title="">
          <img
            class="ty-pict cp-vc-prefix-image cm-image"
            loading="lazy"
            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/Moshhnost-dvigatelya-02.png"
            alt=""
            title=""
            width="20"
            height="20"
          />
        </div>
        <em>Объем двигателя</em></span
      ><span><em>${el.record.Объем_двигателя}</em></span></span
    >
    `
		}

		let sales = ''

		if (typeof el.record.Старая_цена === 'string') {
			sales = `<div class="row gutter-x-2 gutter-y-4" style="position:absolute; z-index:2;top:0.5em;">
      <div class="col-item js-product-mark-discount">
        <div class="badge badge--yellow">
          Скидка
        </div>
      </div>
    </div>`
		}

		let speed = ''

		if (typeof el.record.Скорость === 'string') {
			speed = ` <span class="ty-control-group"
      ><span
        class="ty-product-feature__label"
        style="
          display: flex;
          align-items: baseline;
        "
        ><div class="cm-tooltip" title="">
          <img
            class="ty-pict cp-vc-prefix-image cm-image"
            loading="lazy"
            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/speedometer_1.png"
            alt=""
            title=""
            width="20"
            height="20"
          />
        </div>
        <em>Скорость</em></span
      ><span><em>${el.record.Скорость}</em></span></span
    >
    `
		}

		let hors = ''

		if (typeof el.record.Мощность_лс === 'string') {
			hors = `
      <span class="ty-control-group"
                                      ><span
                                        class="ty-product-feature__label"
                                        style="
                                          display: flex;
                                          align-items: baseline;
                                        "
                                        ><div class="cm-tooltip" title="">
                                          <img
                                            class="ty-pict cp-vc-prefix-image cm-image"
                                            loading="lazy"
                                            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/engine_1_cblu-k2.png"
                                            alt=""
                                            title=""
                                            width="20"
                                            height="20"
                                          />
                                        </div>
                                        <em>Мощность, л.с.</em></span
                                      ><span><em>${el.record.Мощность_лс}</em></span></span
                                    >`
		}

		let url = new URL(el.record.URL)

		// Получаем pathname из URL, который содержит искомую часть
		let pathname = url.pathname

		const card = `
  <div class="col-lg-3 col-md-4 col-6 mb-n01">
                        <div
                          class="product-grid product js-product js-product-item js-product-item-2511"
                        >
                          <div class="product-grid__header">
                            <header style="position:relative;">
                              ${sales}
                              <div
                                class="product-grid__top overflow-hidden slider-for"
                              >
                              
                               ${imgBlocksCard}
                              </div>

                              <a
                                href="${pathname.slice(0, -1)}.html"
                                class="link--dark-default product-grid__title wight-control"
                              >
                                ${el.record.Название.replace(': КУПИТЕ С ДОСТАВКОЙ', '')}
                              </a>
                            </header>
                            <footer>
                              <div class="ut2-gl__bottom">
                                <div class="ut2-gl__feature">
                                  <div
                                    class="cm-reload-754"
                                    id="product_data_features_update_754"
                                  >
                                   

                                    ${hors}
                                   ${EngineCapacity}
                                    ${speed}
                                   ${typeStarter}
                                    <!--product_data_features_update_754-->
                                  </div>
                                </div>
                              </div>
                              <div
                                class="row gutter-x-5 align-items-center hidden--sm"
                              >
                                <div class="col-item">
                                  <div
                                    class="availability-status ${
										el.record.Наличие.toLowerCase() === 'да'
											? 'availability-status--green'
											: 'availability-status--red'
									}"
                                  >
                                    ${el.record.Наличие.toLowerCase() === 'да' ? 'В наличии' : 'Нет в наличии'}
                                   
                                  </div>
                                </div>
                              </div>

                              <div
                                class="d-flex mt-2 gutter-x-5 align-items-center flex-wrap"
                              >
                                <div class="fs--17 price product-grid__price">
                                  <b>
                                    <span class="js-product-price"
                                      >${el.record.Цена} ₽</span
                                    >
                                  </b>
                                  <span
                                    class="js-product-price ml-3"
                                    style="
                                      text-decoration: line-through;
                                      color: #8c8c8c;
                                      font-size: 12px;
                                    "
                                    >${typeof el.record.Старая_цена === 'string' ? el.record.Старая_цена : ''}</span
                                  >
                                </div>

                                <div
                                  class="col-item js-product-compare-price-block d-none"
                                >
                                  <span
                                    class="line-through fs--13 color--gray js-product-compare-price"
                                  >
                                  </span>
                                </div>
                              </div>

                              <div
                                class="econom mt-1 js-product-econom-block d-none"
                              >
                                <div
                                  class="econom__value js-product-percent"
                                ></div>
                                <div class="econom__profitably">
                                  Экономия
                                  <span class="js-product-econom"> </span>
                                </div>
                              </div>

                              <div class="visible--sm mt-3">
                                <form
                                  class="js-form-add-to-cart"
                                  method="post"
                                  action="https://teplodom.store/cart"
                                >
                                  <input
                                    type="hidden"
                                    name="variant"
                                    class="js-product-variant-id"
                                    value="2511"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    class="variant-amount"
                                    value="1"
                                  />

                                  <div class="js-product-add-to-cart">
                                    <button
                                      type="submit"
                                      class="btn btn--default btn--sm btn--block"
                                    >
                                      Купить
                                    </button>
                                  </div>

                                  <div class="js-product-in-cart none">
                                    <a
                                      href="cart/index.html"
                                      class="btn btn--default btn--sm btn--block"
                                      >В корзине</a
                                    >
                                  </div>
                                </form>
                              </div>
                            </footer>
                          </div>

                          <div class="product-grid__footer">
                            <div class="product-grid__footer">
                              <div>
                                <form
                                  class="js-form-add-to-cart"
                                  method="post"
                                  action="https://teplodom.store/cart"
                                >
                                  <input
                                    type="hidden"
                                    name="variant"
                                    class="js-product-variant-id"
                                    value="2511"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    class="variant-amount"
                                    value="1"
                                  />

                                  <div
                                    class="row no-gutters js-product-add-to-cart"
                                  >
                                    <div class="col js-product-add-to-cart">
                                      <button
                                        class="btn btn--xl btn--default btn--block btn--radius-0"
                                        type="submit"
                                      >
                                        Купить
                                      </button>
                                    </div>
                                  </div>

                                  <div class="js-product-in-cart none">
                                    <a
                                      href="cart/index.html"
                                      class="btn btn--xl btn--default btn--block btn--radius-0"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                      >
                                        <use
                                          xlink:href="design/default/images/svg-sprite.svg#product-is-cart"
                                        ></use>
                                      </svg>
                                      <span class="ml-2">В корзине</span>
                                    </a>
                                  </div>
                                </form>
                              </div>

                              <div
                                class="product-grid__col pt-2 color--gray8 fs--12 d-none"
                              >
                                <form
                                  method="post"
                                  action="https://teplodom.store/ajax/get_variant.php"
                                  class="js-form-get-variant"
                                >
                                  <div class="js-product-group">
                                    Выбранный вариант —
                                    <span
                                      class="js-product-group-variant"
                                    ></span>
                                    <div
                                      class="row gutter-x-5 gutter-y-10 mt-1"
                                    >
                                      <div class="col-item">
                                        <div class="btn-radio">
                                          <input
                                            class="variant-radio"
                                            type="radio"
                                            name="variant_id"
                                            value="2511"
                                            data-name=""
                                            id="variant_hit_2511"
                                            checked
                                          />
                                          <label for="variant_hit_2511"></label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  `
		s += card
	})

	$(container).append(s)
}

function Load_Catalog_Cards() {
	$('.category_item_container').empty()

	// через чатгпт делал и json тоже товара
	const categoryImageLink = [
		{
			categoryName: 'Квадроциклы',
			urlImg: 'https://www.thevisorshop.com/Images/Models/150/26375.Jpg'
		},
		{
			categoryName: 'Мопеды',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/moped.png'
		},
		{
			categoryName: 'Мотобуксировщики',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/tow.png'
		},
		{
			categoryName: 'Мотовездеходы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/19/MOTOTSIKL-VNEDOROZHNYJ-SKAUT-5_fx9q-gd.png'
		},
		{
			categoryName: 'Мотоциклы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/all.png'
		},
		{
			categoryName: 'Скутеры',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/scooter.png'
		},
		{
			categoryName: 'Снегоходы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/snowmobile.png'
		},
		{
			categoryName: 'Трициклы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/tricycle.png'
		}
	]
	// Перебираем каждую категорию в JSON
	Object.keys(categoriesJson).forEach(categoryName => {
		const category = categoriesJson[categoryName]
		const subcategories = Object.keys(category).filter(key => key !== 'url')

		// Создаем разметку для подкатегорий
		let subcategoriesMarkup = ''
		subcategories.forEach(subcategoryName => {
			const subcategory = category[subcategoryName]

			if (subcategory.url !== undefined) {
				subcategoriesMarkup += `
            <li>
              <a class="link--default-333 mr-3 mt-1 d-block" href="${subcategory.url.slice(0, -1)}.html">
                ${subcategoryName}
                <span class="opacity-7"></span>
              </a>
            </li>
          `
			}
		})

		// Создаем итоговую разметку карточки
		let cardCategory = `
      <div class="col-6 mb-n01">
        <div class="box-shadow color-bg--white bordered mb-n01 p-30 h-full">
          <div class="d-md-flex gutter-x-15 gutter-y-20">
            <div class="col-item align--center">
              <a class="img--shine" href="${category.url.slice(0, -1)}.html">
                <img src="${
					categoryImageLink.find(item => item.categoryName === categoryName).urlImg
				}" alt="${categoryName}" class="mx-auto catalog-page__img--mobile-60" style="width:180px;height:180px;object-fit: cover;"/>
              </a>
            </div>
            <div class="col-item">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
                <div>
                  <a class="link--dark-default fs--16 wight-control d-block" href="${category.url.slice(0, -1)}.html">
                    ${categoryName}
                  </a>
                </div>
              </div>
              <ul class="fs--13 list--unstyled flex-wrap d-flex mt-2 justify-content-center justify-content-sm-start">
                ${subcategoriesMarkup}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `

		// Добавляем созданную карточку в DOM, предполагается, что у вас есть контейнер с id="catalogCards"
		$('.category_item_container').append(cardCategory)
	})
}

function Rerender_Sort_Cards_Product(category, container, isSlice = true, sliceCount = 15, sortValue = 'noSort') {
	$(container).empty()

	console.log(category)
	const filteredProducts = products.data.filter(
		product =>
			(product.record.Категория === category && product.record.Наличие.toLowerCase() === 'да') ||
			(product.record.Подкатегория === category && product.record.Наличие.toLowerCase() === 'да')
	)

	let filteredAndLimitedProducts = filteredProducts

	if (isSlice) {
		filteredAndLimitedProducts = filteredProducts.slice(0, sliceCount)
	}

	switch (sortValue) {
		case 'noSort':
			// Не сортируем
			break
		case 'asc':
			// Сортировка по возрастанию цены
			filteredAndLimitedProducts.sort((a, b) => parseFloat(a.record.Цена) - parseFloat(b.record.Цена))
			break
		case 'desc':
			// Сортировка по убыванию цены
			filteredAndLimitedProducts.sort((a, b) => parseFloat(b.record.Цена) - parseFloat(a.record.Цена))
			break
		case 'lang':
			// Сортировка по алфавиту (названию)
			filteredAndLimitedProducts.sort((a, b) => a.record.Название.localeCompare(b.record.Название))
			break
	}

	let s = ''
	filteredAndLimitedProducts.forEach(el => {
		if (typeof el.record.Изображения !== 'string') {
			return
		}
		let imagesLink = el.record.Изображения.split(';').slice(0, 3)

		let imgBlocksCard = ''
		imagesLink.forEach(img => {
			let imgstr = `
    <div>
      <img
        src="${img}"
        alt="${img}
        class="img--responsive"
        style="width:300px;height:300px; object-fit:cover;"
      />
    </div>
    `
			imgBlocksCard += imgstr
		})

		let typeStarter = ''

		if (typeof el.record.Стартер === 'string') {
			typeStarter = ` <span class="ty-control-group"
    ><span
      class="ty-product-feature__label"
      style="
        display: flex;
        align-items: baseline;
      "
      ><div class="cm-tooltip" title="">
        <img
          class="ty-pict cp-vc-prefix-image cm-image"
          loading="lazy"
          src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/fi_3556308.png"
          alt=""
          title=""
          width="20"
          height="20"
        />
      </div>
      <em>Стартер</em></span
    ><span><em>${el.record.Стартер}</em></span></span
  >`
		}

		let EngineCapacity = ''

		if (typeof el.record.Объем_двигателя === 'string') {
			EngineCapacity = `<span class="ty-control-group"
      ><span
        class="ty-product-feature__label"
        style="
          display: flex;
          align-items: baseline;
        "
        ><div class="cm-tooltip" title="">
          <img
            class="ty-pict cp-vc-prefix-image cm-image"
            loading="lazy"
            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/Moshhnost-dvigatelya-02.png"
            alt=""
            title=""
            width="20"
            height="20"
          />
        </div>
        <em>Объем двигателя</em></span
      ><span><em>${el.record.Объем_двигателя}</em></span></span
    >
    `
		}

		let sales = ''

		if (typeof el.record.Старая_цена === 'string') {
			sales = `<div class="row gutter-x-2 gutter-y-4" style="position:absolute; z-index:2;top:0.5em;">
      <div class="col-item js-product-mark-discount">
        <div class="badge badge--yellow">
          Скидка
        </div>
      </div>
    </div>`
		}

		let speed = ''

		if (typeof el.record.Скорость === 'string') {
			speed = ` <span class="ty-control-group"
      ><span
        class="ty-product-feature__label"
        style="
          display: flex;
          align-items: baseline;
        "
        ><div class="cm-tooltip" title="">
          <img
            class="ty-pict cp-vc-prefix-image cm-image"
            loading="lazy"
            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/speedometer_1.png"
            alt=""
            title=""
            width="20"
            height="20"
          />
        </div>
        <em>Скорость</em></span
      ><span><em>${el.record.Скорость}</em></span></span
    >
    `
		}

		let hors = ''

		if (typeof el.record.Мощность_лс === 'string') {
			hors = `
      <span class="ty-control-group"
                                      ><span
                                        class="ty-product-feature__label"
                                        style="
                                          display: flex;
                                          align-items: baseline;
                                        "
                                        ><div class="cm-tooltip" title="">
                                          <img
                                            class="ty-pict cp-vc-prefix-image cm-image"
                                            loading="lazy"
                                            src="https://steelracing.ru/images/thumbnails/20/20/feature_image/18/engine_1_cblu-k2.png"
                                            alt=""
                                            title=""
                                            width="20"
                                            height="20"
                                          />
                                        </div>
                                        <em>Мощность, л.с.</em></span
                                      ><span><em>${el.record.Мощность_лс}</em></span></span
                                    >`
		}

		let url = new URL(el.record.URL)

		// Получаем pathname из URL, который содержит искомую часть
		let pathname = url.pathname

		const card = `
  <div class="col-lg-3 col-md-4 col-6 mb-n01">
                        <div
                          class="product-grid product js-product js-product-item js-product-item-2511"
                        >
                          <div class="product-grid__header">
                            <header style="position:relative;">
                              ${sales}
                              <div
                                class="product-grid__top overflow-hidden slider-for"
                              >
                              
                               ${imgBlocksCard}
                              </div>

                              <a
                                href="${pathname.slice(0, -1)}.html"
                                class="link--dark-default product-grid__title wight-control"
                              >
                                ${el.record.Название.replace(': КУПИТЕ С ДОСТАВКОЙ', '')}
                              </a>
                            </header>
                            <footer>
                              <div class="ut2-gl__bottom">
                                <div class="ut2-gl__feature">
                                  <div
                                    class="cm-reload-754"
                                    id="product_data_features_update_754"
                                  >
                                   

                                    ${hors}
                                   ${EngineCapacity}
                                    ${speed}
                                   ${typeStarter}
                                    <!--product_data_features_update_754-->
                                  </div>
                                </div>
                              </div>
                              <div
                                class="row gutter-x-5 align-items-center hidden--sm"
                              >
                                <div class="col-item">
                                  <div
                                    class="availability-status ${
										el.record.Наличие.toLowerCase() === 'да'
											? 'availability-status--green'
											: 'availability-status--red'
									}"
                                  >
                                    ${el.record.Наличие.toLowerCase() === 'да' ? 'В наличии' : 'Нет в наличии'}
                                   
                                  </div>
                                </div>
                              </div>

                              <div
                                class="d-flex mt-2 gutter-x-5 align-items-center flex-wrap"
                              >
                                <div class="fs--17 price product-grid__price">
                                  <b>
                                    <span class="js-product-price"
                                      >${el.record.Цена} ₽</span
                                    >
                                  </b>
                                  <span
                                    class="js-product-price ml-3"
                                    style="
                                      text-decoration: line-through;
                                      color: #8c8c8c;
                                      font-size: 12px;
                                    "
                                    >${typeof el.record.Старая_цена === 'string' ? el.record.Старая_цена : ''}</span
                                  >
                                </div>

                                <div
                                  class="col-item js-product-compare-price-block d-none"
                                >
                                  <span
                                    class="line-through fs--13 color--gray js-product-compare-price"
                                  >
                                  </span>
                                </div>
                              </div>

                              <div
                                class="econom mt-1 js-product-econom-block d-none"
                              >
                                <div
                                  class="econom__value js-product-percent"
                                ></div>
                                <div class="econom__profitably">
                                  Экономия
                                  <span class="js-product-econom"> </span>
                                </div>
                              </div>

                              <div class="visible--sm mt-3">
                                <form
                                  class="js-form-add-to-cart"
                                  method="post"
                                  action="https://teplodom.store/cart"
                                >
                                  <input
                                    type="hidden"
                                    name="variant"
                                    class="js-product-variant-id"
                                    value="2511"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    class="variant-amount"
                                    value="1"
                                  />

                                  <div class="js-product-add-to-cart">
                                    <button
                                      type="submit"
                                      class="btn btn--default btn--sm btn--block"
                                    >
                                      Купить
                                    </button>
                                  </div>

                                  <div class="js-product-in-cart none">
                                    <a
                                      href="cart/index.html"
                                      class="btn btn--default btn--sm btn--block"
                                      >В корзине</a
                                    >
                                  </div>
                                </form>
                              </div>
                            </footer>
                          </div>

                          <div class="product-grid__footer">
                            <div class="product-grid__footer">
                              <div>
                                <form
                                  class="js-form-add-to-cart"
                                  method="post"
                                  action="https://teplodom.store/cart"
                                >
                                  <input
                                    type="hidden"
                                    name="variant"
                                    class="js-product-variant-id"
                                    value="2511"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    class="variant-amount"
                                    value="1"
                                  />

                                  <div
                                    class="row no-gutters js-product-add-to-cart"
                                  >
                                    <div class="col js-product-add-to-cart">
                                      <button
                                        class="btn btn--xl btn--default btn--block btn--radius-0"
                                        type="submit"
                                      >
                                        Купить
                                      </button>
                                    </div>
                                  </div>

                                  <div class="js-product-in-cart none">
                                    <a
                                      href="cart/index.html"
                                      class="btn btn--xl btn--default btn--block btn--radius-0"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                      >
                                        <use
                                          xlink:href="design/default/images/svg-sprite.svg#product-is-cart"
                                        ></use>
                                      </svg>
                                      <span class="ml-2">В корзине</span>
                                    </a>
                                  </div>
                                </form>
                              </div>

                              <div
                                class="product-grid__col pt-2 color--gray8 fs--12 d-none"
                              >
                                <form
                                  method="post"
                                  action="https://teplodom.store/ajax/get_variant.php"
                                  class="js-form-get-variant"
                                >
                                  <div class="js-product-group">
                                    Выбранный вариант —
                                    <span
                                      class="js-product-group-variant"
                                    ></span>
                                    <div
                                      class="row gutter-x-5 gutter-y-10 mt-1"
                                    >
                                      <div class="col-item">
                                        <div class="btn-radio">
                                          <input
                                            class="variant-radio"
                                            type="radio"
                                            name="variant_id"
                                            value="2511"
                                            data-name=""
                                            id="variant_hit_2511"
                                            checked
                                          />
                                          <label for="variant_hit_2511"></label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  `
		s += card
	})

	$(container).append(s)
}

function Load_Catalog_Cards_Hover_Menu() {
	$('.category_item_container_hover_menu').empty()

	const categoryImageLink = [
		{ categoryName: 'Квадроциклы', urlImg: 'https://www.thevisorshop.com/Images/Models/150/26375.Jpg' },
		{ categoryName: 'Мопеды', urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/moped.png' },
		{
			categoryName: 'Мотобуксировщики',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/tow.png'
		},
		{
			categoryName: 'Мотовездеходы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/19/MOTOTSIKL-VNEDOROZHNYJ-SKAUT-5_fx9q-gd.png'
		},
		{ categoryName: 'Мотоциклы', urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/all.png' },
		{ categoryName: 'Скутеры', urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/scooter.png' },
		{
			categoryName: 'Снегоходы',
			urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/snowmobile.png'
		},
		{ categoryName: 'Трициклы', urlImg: 'https://steelracing.ru/images/abt__ut2/menu-with-icon/17/tricycle.png' }
	]

	Object.keys(categoriesJson).forEach(categoryName => {
		const category = categoriesJson[categoryName]
		const subcategories = Object.keys(category)
			.filter(key => key !== 'url')
			.slice(0, 10)

		let subcategoriesMarkup = ''
		subcategories.forEach(subcategoryName => {
			const subcategory = category[subcategoryName]
			if (subcategory.url !== undefined) {
				subcategoriesMarkup += `<li><a href="${subcategory.url.slice(0, -1)}.html">${subcategoryName}</a></li>`
			}
		})

		const categoryImage = categoryImageLink.find(item => item.categoryName === categoryName).urlImg
		let cardCategory = `
          <div class="col-4">
              <div class="d-flex gutter-x-10">
                  <div class="col-item">
                      <a href="${category.url.slice(0, -1)}.html">
                          <img src="${categoryImage}" alt="${categoryName}" class="lazyload d-inline-block catalog-img-category"/>
                      </a>
                  </div>
                  <div class="col-item">
                      <a class="link--dark-default d-block" href="${category.url.slice(0, -1)}.html">${categoryName}</a>
                      <ul class="list--unstyled site-menu__dropdown-list">${subcategoriesMarkup}</ul>
                  </div>
              </div>
          </div>
      `

		$('.category_item_container_hover_menu').append(cardCategory)
	})
}
