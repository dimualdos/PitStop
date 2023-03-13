/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/footer.js":
/*!**********************************!*\
  !*** ./src/js/modules/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pasteAfterNode = document.querySelector('[data-paste]');

const footerElementDiv = document.createElement(`footer`);
//footerElementDiv.className = "text-center";
footerElementDiv.innerHTML = `
   <div class="container text-left">
			<hr>
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-6 mb-md-0 mb-2">
					<h4>Наши контакты</h4>
					<address>
						<strong>PitStop.</strong><br>
						105187, Москва, Борисовская 37а<br>
						<abbr title="Phone">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/Phone.webp" srcset="images/icons/Phone.webp">

								<img class=" lazyloaded" data-src="images/icons/Phone.png" width="25" height="25" alt="Телефон PitStop" src="images/icons/Phone.png">
							</picture>

						</abbr>
						<a href="tel:8 (985) 280-34-34">8 (985) 280-34-34</a>
						<br>
						<abbr title="email">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/email.webp" srcset="images/icons/email.webp">

								<img class=" lazyloaded" data-src="images/icons/email.png" width="25" height="25" alt="почта Pitstop" src="images/icons/email.png">
							</picture>

						</abbr>
						<a href="mailto:info@pitstop-online.ru">info@pitstop-online.ru</a>
						<br>
						<abbr title="WhatsApp">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/whatsapp-pitstop-poster.webp" srcset="images/icons/whatsapp-pitstop-poster.webp">
								<img class=" ls-is-cached lazyloaded" data-src="images/icons/whatsapp-pitstop-poster.png" width="25" height="25" alt="пишите в WhatsApp" src="images/icons/whatsapp-pitstop-poster.png">
							</picture>

						</abbr>
						<a href="https://api.whatsapp.com/send?phone=79852803434">8 (985) 280-34-34</a>
						<br>
					</address>
					<h4>Мы в соцсетях</h4>
					<div class="row">
						<div class="col-2"><a href="https://vk.com/pitstoplike">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/VK-icons.webp" srcset="images/icons/VK-icons.webp">
									<img class="rounded-circle lazyloaded" data-src="images/icons/VK-icons.png" alt="Ищите нас в контакте" src="images/icons/VK-icons.png">
								</picture>
							</a></div>
						<!-- <div class="col-2"><a href="https://www.instagram.com/pitstopkuzovnoi/">
								<picture>
									<source type="image/webp" class="lazyload"
										data-srcset="images/icons/Insta-icons.webp">
									<img class="rounded-circle lazyload" data-src="images/icons/Insta-icons.png"
										alt="Ищите нас в инстаграмм">
								</picture>
							</a></div>
						<div class="col-2"><a href="https://www.facebook.com/pitstopavtobest">
								<picture>
									<source type="image/webp" class="lazyload" data-srcset="images/icons/FB-icons.webp">
									<img class="rounded-circle lazyload" data-src="images/icons/FB-icons.png"
										alt="Ищите нас в фейсбук">
								</picture>
							</a></div> -->
						<div class="col-2"><a href="https://www.youtube.com/channel/UCOCM3f--22ea_hlotHUuFzQ?view_as=subscriber">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/YouTube-icons.webp" srcset="images/icons/YouTube-icons.webp">
									<img class="rounded-circle lazyloaded" data-src="images/icons/YouTube-icons.png" alt="Ищите нас в ютуб" src="images/icons/YouTube-icons.png">
								</picture>
							</a></div>
					</div>
				</div>


				<div class="col-lg-4 col-md-6 col-12">
					<h4>Что думают о нашей работе</h4>
					<ul class="list-unstyled">

						<li class="media my-4">
							<a href="https://goo.gl/maps/ZnCp8aebdC9rKYMw7">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/flurry.webp" srcset="images/icons/flurry.webp">
									<img class=" lazyloaded" data-src="images/icons/flurry.png" width="35" height="35" alt="Отзывы на картах Гугл" src="images/icons/flurry.png">
								</picture>
							</a>
							<div class="media-body">
								<h5 class="mt-0 mb-1">Отзывы с гугл карт</h5>
								<p class="mb-0">Работают классные специалисты, рекомендую! Случайно попала, закрашивали
									царапины, выпрямляли деталь, отлично подобрали цвет... <a href="https://goo.gl/maps/CKQsKSTPNakurD6L6">далее</a></p>
							</div>
						</li>
						<li class="media my-4">
							<a href="https://moscow.flamp.ru/firm/pit_stop-70000001023400944?utm_source=widget&amp;utm_medium=open_filial&amp;utm_campaign=medium_widget">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/flamp.webp" srcset="images/icons/flamp.webp">
									<img class=" lazyloaded" data-src="images/icons/flamp.png" width="35" height="35" alt="Мы на флампе" src="images/icons/flamp.png">
								</picture>
							</a>
							<div class="media-body">
								<h5 class="mt-0 mb-1">Отзывы на Flamp</h5>
								<p class="mb-0">Ремонтировал в Питстопе у Михаила свой автомобиль. Машина не новая, куча
									всяких царапок, больших и мелких... <a href="https://goo.gl/maps/CKQsKSTPNakurD6L6">далее</a></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-lg-4 col-12">
					<h5>О нас</h5>
					<p>Компания PitStop - это небольшой центр кузовного ремонта в Москве. </p>
					<p> Список наших услуг:
					</p>
					<ul>
						<li>ремонт бамперов;</li>
						<li>кузовной ремонт;</li>
						<li>покраска автомобиля;</li>
						<li>полировка кузова;</li>
						<li>Удаление вмятин без покраски;</li>
						<li>работы по аэрографии. </li>
					</ul>

					<p></p>
					<p>Все Ваши пожелания по улучшению нашей компании мы с радостью примем по телефону 8 (495) 055-6536.
						или
						на почту info@pitstop-online.ru</p>

				</div>
			</div>

			<hr>
		</div>

<div class="container text-center">

				<div class="row">
					<div class="col-12">
						<span data-time="time"></span>
						<br>
						<picture>
							<source type="image/webp" class="lazyload" data-srcset="../../../images/contacts_poster_.webp">
							<img class="lazyload" data-src="../../../images/contacts_poster_.png" width="25" height="25"
								alt="наш телефон для связи">
						</picture>

						<a href="tel:8 (985) 280-34-34 ">8 (985) 280-34-34 </a>

						<a href="mailto:name@website.com">info@pitstop-online.ru</a> <br>
						<picture>
							<source type="image/webp" class="lazyload"
								data-srcset="../../../images/icons/whatsapp-pitstop-poster.webp">
							<img class="lazyload" data-src="../../../images/icons/whatsapp-pitstop-poster.png" width="25"
								height="25" alt="пишите в WhatsApp">
						</picture>
						<a href="https://api.whatsapp.com/send?phone=79852803434">8 (985)
							280-34-34</a> <br>

					</div>
				</div>
			</div>
`;
pasteAfterNode.after(footerElementDiv);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerElementDiv); 


/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

//import { closeModal, openModal } from './modal';

const dataTimeDiv = document.querySelector(`[data-time="time"]`);
let today = new Date();
let year = today.getFullYear();

dataTimeDiv.textContent = `© ${year} PitStop. 105187, Москва, Борисовская 37а`;


const formSelector = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'Oтправка',
        //loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        const fields = item.querySelectorAll('[data-validate]');
        send(item);

    });

    const postData = async (url, data) => {
        console.log(data);
        let res = await fetch(url, {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: data
        });

        return await res.json();
    };

    function send(form) {


        form.addEventListener('submit', (e) => {

            e.preventDefault();

            //let statusMessage = document.createElement('img');
            let statusMessage = document.createElement('div');
            //statusMessage.src = message.loading;
            statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('send.php', formData)
                .then(data => {

                    statusMessage.textContent = message.success;
                    //showThanksModal(message.success);
                    setTimeout(() => statusMessage.remove(), 5000);
                }).catch((data) => {

                    statusMessage.textContent = message.failure;
                    setTimeout(() => statusMessage.remove(), 5000);
                    //showThanksModal(message.failure);
                }).finally(() => {
                    setTimeout(() => form.reset(), 5000);
                });
        });
    }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSelector);


// работа модалок


// const photos = document.querySelectorAll('img');

// let btnRight = document.querySelector('.right');

// let btnLeft = document.querySelector('.left');

// let imgIndex = 0;
// let i = 0;
// setInterval(() => {
//     photos[imgIndex].className = '';
//     imgIndex++;

//     if (imgIndex >= photos.length) {
//         imgIndex = 0;
//     }
//     photos[imgIndex].className = 'visible';
// }, 2000);

/*btnRight.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex++;

    if(imgIndex >= photos.length){
        imgIndex = 0;
    }
    photos[imgIndex].className = 'visible';
}

btnLeft.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex = imgIndex - 1;

    if(imgIndex < 0){
        imgIndex = photos.length - 1;
    }
    photos[imgIndex].className = 'visible';
}
*/




/***/ }),

/***/ "./src/js/modules/modal-form.js":
/*!**************************************!*\
  !*** ./src/js/modules/modal-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const footerElem = document.querySelector('footer')
const formElement = document.createElement(`div`);
formElement.className = "modal";
formElement.innerHTML = `
    <div class="modal__dialog">
        <div class="modal__content">
      					<form class="mb-3 mt-3 "  enctype="multipart/form-data" method="post">
                          <div data-close class="modal__close">&times;</div>
								<h4 class="text-center ">Бесплатная оценка по фото</h4>
								<div class=" mb-3 ">
									<label for=" formName" class="form-label">Ваше имя</label>
									<input data-validate  name="name" type="name" placeholder="введите Ваше имя" id="formName" required
										minlength="2" maxlength="15" class="form-control" aria-describedby="emailHelp">
									<div class="form-text">Мы не будем ни с кем делиться Вашими данными.
									</div>
								</div>
								<div class="mb-3 ">
									<label for="phone" class="form-label">Ваш телефон</label>
									<input  data-validate name="phone" minlength="11" maxlength="12" placeholder="введите 11 цифр телефона" required
										type="tel" id="phone" class="form-control">
								</div>
								<div class="mb-3 ">
									<label for="myfile" class="form-label ">Ваш телефон</label>
									<input name="myfile[]" type="file" multiple
										accept="image/jpeg, image/png, image/gif, image/jpg" class="form-control"
										id="myfile">
								</div>
								<button type="submit" class="btn btn-primary">Отправить</button>
							</form>
				</div>
        </div>
    </div>
    `;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.body.append(formElement));




/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModalJs": () => (/* binding */ openModalJs)
/* harmony export */ });
// function openModal(modalSelector, modalTimerId) {
//     const modal = document.querySelector(modalSelector);

//     modal.classList.remove('hide');
//     modal.classList.add('show');
//     document.body.style.overflow = 'hidden';

//     console.log(modalTimerId);
//     if (modalTimerId) {
//         clearInterval(modalTimerId);
//     }

// }
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

const openModalJs = (modalSelector, modalTimerId) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

};

function modal(triggerSelector, modalSelector, modalTimerId) {
    //modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            // openModal(modalSelector, modalTimerId);
            openModalJs(modalSelector, modalTimerId)
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModalJs(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }



    window.addEventListener('scroll', showModalByScroll);

    if (() => openModalJs(modalSelector, modalTimerId)) {
        window.removeEventListener('scroll', showModalByScroll);
    }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./src/js/modules/nav-bar.js":
/*!***********************************!*\
  !*** ./src/js/modules/nav-bar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fontsElem = document.querySelector('[data-fonts]');

const navBarElement = document.createElement(`nav`);
navBarElement.className = "navbar navbar-expand-lg navbar-light";
navBarElement.style = "background-color: rgba(255, 199, 87, 0.5)";
navBarElement.innerHTML = `
<div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <picture>
          <source type="image/webp" srcset="../../../images/logo-pitstop_poster_.webp">
          <img src="../../../images/logo-pitstop-poster.png" height="50" width="50" alt="логотип PitStop">
        </picture>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Услуги
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

              <li><a class="dropdown-item" href="body-repair.html">кузовной ремонт</a></li>
              <li><a class="dropdown-item" href="remont-bampera.html">ремонт бампера</a></li>
              <li><a class="dropdown-item" href="zamena-bampera.html">замена бампера</a></li>
              <li><a class="dropdown-item" href="car-painting.html">покраска авто</a></li>
              <li><a class="dropdown-item" href="pokraska-dveri-avtomobilya.html">покраска двери авто</a>
              </li>
              <li><a class="dropdown-item" href="pokraska-kryla.html">покраска крыла авто</a></li>
              <li><a class="dropdown-item" href="pokraska-bampera.html">покраска бампера</a></li>
              <li><a class="dropdown-item" href="pokraska-kapota.html">покраска капота</a></li>
              <li><a class="dropdown-item" href="pokraska-kryshi-avtomobilya.html">покраска крыши</a></li>
              <li><a class="dropdown-item" href="pokraska-tsarapin.html">покраска царапин</a></li>
              <li><a class="dropdown-item" href="polirovka-avtomobilya.html">полировка кузова</a></li>
              <li><a class="dropdown-item" href="polirovka-far.html">полировка фар</a></li>
              <li><a class="dropdown-item" href="polirovka-tsarapin.html">полировка царапин</a></li>
              <li><a class="dropdown-item" href="udaleniye-vmyatin.html">PDR удаление вмятин</a></li>

            </ul>
          </li>
          <li class="nav-item"> <a class="nav-link" href="tseny.html">Цены</a> </li>
          <li class="nav-item"> <a class="nav-link" href="kontakty.html">Контакты</a> </li>
        </ul>
        <a class="btn btn-sm" href="https://vk.com/pitstoplike">
          <picture>
            <source type="image/webp" srcset="../../../images/icons/vkicon.webp">
            <img data-src="../../../images/icons/vkicon.png" alt="pitstop vk" width="25" height="25">
          </picture>
        </a>
        <a class="btn btn1 btn-sm me-2" href="https://api.whatsapp.com/send?phone=79852803434"
          role="button">WhatsApp</a>
      </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontsElem.after(navBarElement));;  


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav-bar */ "./src/js/modules/nav-bar.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal-form */ "./src/js/modules/modal-form.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ "./src/js/modules/footer.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");

// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';

// import tabs from './modules/tabs';




// import timer from './modules/timer';
// import cards from './modules/cards';

// import calc from './modules/calc';
// import slider from './modules/slider';


document.addEventListener("DOMContentLoaded", () => {


    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModalJs)('.modal', modalTimerId), 50000);
    _modules_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"];
    _modules_footer__WEBPACK_IMPORTED_MODULE_3__["default"];

    _modules_modal_form__WEBPACK_IMPORTED_MODULE_2__["default"];
    // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    //timer('.timer', '2022-08-15');
    //cards();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);

    //calc();
    // slider({
    //     container: '.offer__slider',
    //     nextArrow: '.offer__slider-next',
    //     prevArrow: '.offer__slider-prev',
    //     slide: '.offer__slide',
    //     totalCounter: '#total',
    //     currentCounter: '#current',
    //     wrapper: '.offer__slider-wrapper',
    //     field: '.offer__slider-inner'
    // });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map