/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");


$(window).scroll(function () {
  var top = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

  if (top > 100) {
    $('.header__top').addClass('headerFix');
  } else {
    $('.header__top').removeClass('headerFix');
  }
}); // Прокрутка до блока

$('.btn-sroll-js').on('click', function (e) {
  e.preventDefault();
  scrollTo($($(this).attr('href')).offset().top, 1000);
}); // Показать окно с текстом

$('.about-js').on('click', function (e) {
  e.preventDefault();
  $('.about-popup').fadeIn().addClass('is-active');
  aboutPopupHeight();
});

function aboutPopupHeight() {
  // высота контейнера
  var aboutBoxHeight = $('.section-about').outerHeight(); // высота модалки с текстом

  var aboutPopupHeight = $('.about-popup-content').outerHeight();

  if (aboutPopupHeight > aboutBoxHeight) {
    $('.section-about').animate({
      'height': aboutPopupHeight + 'px'
    }, 300);
  } // else {
  // 	$('.section-about').removeAttr('style');
  // }

} // показать меню на мобильном


$('.touch-nav').on('click', function (e) {
  e.preventDefault();
  $('.touch-nav').fadeOut();
  $('.nav-container').fadeIn();
}); // скрыть меню на мобильном

$('.nav-close').on('click', function (e) {
  e.preventDefault();
  $('.touch-nav').fadeIn();
  $('.nav-container').fadeOut();
});
/*start 11646*/

var sliderNames = ['brandSlider', 'courseSlider'];

function sliderInit() {
  var windowWidth = $(window).outerWidth();

  if (windowWidth >= 768) {
    sliderNames.map(function (slider) {
      $('.' + slider).removeClass('sliderLoading').addClass('sliderLoaded');
      $('.' + slider).slick();
    });
  }
}

function sliderInitOne(slider) {
  var windowWidth = $(window).outerWidth();

  if (windowWidth >= 768) {
    $('.' + slider).removeClass('sliderLoading').addClass('sliderLoaded');
    $('.' + slider).slick();
  }
}

function sliderDestroy(slider) {
  $('.' + slider).slick('unslick');
}

$('.btn-show-all').on('click', function (e) {
  e.preventDefault();
  $(this).closest('.col-12').addClass('show-all-course');
});
/*end 11646*/

/*start 11739*/

if ($('.reviewsSlider')) {
  $('.reviewsSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
/*end 11739*/


function resizePage() {
  var windowWidth = $(window).outerWidth(); // если окно с текстом открыто и меняется положение тач устройства, проверяем высоту и выставляем необходимые параметры

  if ($('.about-popup').hasClass('is-active')) {
    aboutPopupHeight();
  }
  /*start 11646*/


  if (windowWidth >= 768) {
    if ($('.brandSlider') || $('.courseSlider')) {
      if (!$('.brandSlider').hasClass('sliderLoaded') || !$('.courseSlider').hasClass('sliderLoaded')) {
        sliderInit();
      }
    }
  }

  if (windowWidth <= 767) {
    if ($('.brandSlider') || $('.courseSlider')) {
      if ($('.brandSlider').hasClass('sliderLoaded') || $('.courseSlider').hasClass('sliderLoaded')) {
        sliderNames.map(function (slider) {
          sliderDestroy(slider);
          $('.' + slider).removeClass('sliderLoaded').addClass('sliderLoading');
        });
      }
    }
  }
  /*end 11646*/

} //end resizePage


window.addEventListener("resize", resizePage);

function loadPage() {
  var top = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

  if (top > 100) {
    $('.header__top').addClass('headerFix');
  }
  /*start 11646*/


  $('.brandSlider') || $('.courseSlider') ? sliderInit() : null;
  /*end 11646*/
} //end loadPage


window.addEventListener("load", loadPage);

function scrollTo(to) {
  var $obj = jQuery('html, body');
  var top = 0;
  var speed = 500;
  var offsetX = 50;

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(to) == 'object') {
    top = to.offset().top;
  } else if (typeof to == 'string') {
    top = jQuery(to).offset().top;
  } else if (typeof to == 'number') {
    top = to;
  }

  if (arguments.length > 1) {
    if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      speed = arguments[1];
    } else if (typeof arguments[1] == 'string' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
        $obj = arguments[1];
      } else if (typeof arguments[1] == 'string') {
        $obj = jQuery(arguments[1]);
      }
    }

    if (typeof arguments[2] == 'number') {
      speed = arguments[2];
    }
  }

  if (jQuery(window).width() < 1000) {
    offsetX = 130;
  }

  if (speed == 0) {
    speed = 1;
  }

  $obj.animate({
    scrollTop: top - offsetX
  }, speed);
} // видео 


function findVideos() {
  var videos = document.querySelectorAll('.video__box');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video__link');
  var media = video.querySelector('.video__media');
  var button = video.querySelector('.video__button');
  var id = parseMediaURL(media);
  video.addEventListener('click', function () {
    var iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  var url = media.src;
  var match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_3__);




svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map