/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/app.js":
/*!***************************!*\
  !*** ./src/module/app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages */ "./src/module/languages.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation]);
var checkboxes = {
  requirements: ['minimum', 'recommended'],
  versions: ['standard', 'limited']
};
var classes = {
  opened: 'opened',
  hidden: 'hidden',
  active: 'active'
};
var values = [{
  price: 18.99,
  title: 'Standard  Edition'
}, {
  price: 19.99,
  title: 'Standard  Edition'
}, {
  price: 18.99,
  title: 'Standard  Edition'
}, {
  price: 29.99,
  title: 'Deluxe  Edition'
}, {
  price: 18.99,
  title: 'Standard  Edition'
}, {
  price: 15.99,
  title: 'Standard  Edition'
}, {
  price: 69.99,
  title: 'Deluxe  Edition'
}, {
  price: 35.99,
  title: 'Standard  Edition'
}];
var isPlay = false;
var checkbox = document.querySelectorAll('.checkbox');
var header = document.querySelector('.header');
var menuButton = document.querySelector('.header-menu__button');
var menuLink = document.querySelectorAll('.header-menu__link');
var video = document.getElementById('video');
var videoButton = document.querySelector('.video-btn');
var faqItem = document.querySelectorAll('.faq-item');
var sections = document.querySelectorAll('.section');
var language = document.querySelectorAll('.language');
var buyButton = document.querySelectorAll('.buy-button');
var overlay = document.querySelector('.overlay');
var toggleMenu = function toggleMenu() {
  return header.classList.toggle(classes.opened);
};
var modal = document.querySelector('.modal');
var modalTitle = document.querySelector('.modal-version');
var modalPrice = document.querySelector('.modal-total__price');
var modalClose = document.querySelector('.modal-close');
var scrollToSection = function scrollToSection(e) {
  var _document$getElementB;
  e.preventDefault();
  var href = e.currentTarget.getAttribute('href');
  if (!href && !href.starsWith('#')) return;
  var section = href.slice(1);
  var top = ((_document$getElementB = document.getElementById(section)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetTop) || 0;
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}
// todo timer settings + closure
;
(function () {
  var formatValue = function formatValue(value) {
    return value < 10 ? "0".concat(value) : value;
  };
  var getTimeValues = function getTimeValues(diff) {
    return {
      seconds: diff / 1000 % 60,
      minutes: diff / (1000 * 60) % 60,
      hours: diff / (1000 * 3600) % 24,
      days: diff / (1000 * 3600 * 24) % 30
    };
  };
  var setTimerValues = function setTimerValues(values) {
    Object.entries(values).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var timerValue = document.getElementById(key);
      // timerValue.innerText = value.toFixed(0)
      // or
      timerValue.innerText = formatValue(Math.floor(value));
    });
  };
  var startTimer = function startTimer(date) {
    var id = setInterval(function () {
      var diff = new Date(date).getTime() - new Date().getTime();
      if (diff < 0) {
        clearInterval(id);
        return;
      }
      var values = getTimeValues(diff);
      setTimerValues(values);
    }, 1000);
  };
  startTimer('Jan 1, 2024 00:00:00');
})();
var handleVideo = function handleVideo(_ref3) {
  var target = _ref3.target;
  var info = target.parentElement;
  console.log(target);
  console.log(target.parentElement);
  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);
  target.innerText = isPlay ? 'Pause' : 'Play';
  isPlay ? video.play() : video.pause();
};

// todo set handleCheckbox
var handleCheckbox = function handleCheckbox(_ref4) {
  var _ref4$currentTarget = _ref4.currentTarget,
    checked = _ref4$currentTarget.checked,
    name = _ref4$currentTarget.name;
  var active = classes.active;
  var value = checkboxes[name][Number(checked)];
  var list = document.getElementById(value);
  var tabs = document.querySelectorAll("[data-".concat(name, "]"));
  var siblings = list.parentElement.children;
  var _iterator = _createForOfIteratorHelper(siblings),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.classList.remove(active);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(tabs),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var tab = _step2.value;
      tab.classList.remove(active);
      tab.dataset[name] === value && tab.classList.add(active);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  list.classList.add(active);
};
var initSwiper = function initSwiper() {
  new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    initialSlide: 2,
    // autoHeight: true,
    // width: 800,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1565: {
        width: null
      },
      1580: {
        spaceBetween: 20
      }
    }
  });
};
initSwiper();
var handleFaqItem = function handleFaqItem(_ref5) {
  var target = _ref5.currentTarget;
  console.log(target);
  target.classList.toggle(classes.opened);
  var isOpened = target.classList.contains(classes.opened);
  console.log(isOpened);
  var height = target.querySelector('p').clientHeight;
  console.log(height);
  var content = target.querySelector('.faq-item__content');
  console.log(content);
  content.style.height = "".concat(isOpened ? height : 0, "px");
};
var handleTestClick = function handleTestClick() {
  var faq = document.querySelector('.faq-item__content');
  faq.style.height = "30px";
};
var handleScroll = function handleScroll() {
  var _window = window,
    y = _window.scrollY,
    h = _window.innerHeight;
  sections.forEach(function (section) {
    if (y > section.offsetTop - h / 1.5) section.classList.remove(classes.hidden);
  });
};
var setText = function setText() {
  var lang = localStorage.getItem('lang') || 'en';
  var content = _languages__WEBPACK_IMPORTED_MODULE_2__.languages[lang];
  Object.entries(content).forEach(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      key = _ref7[0],
      value = _ref7[1];
    var items = document.querySelectorAll("[data-text=".concat(key, "]"));
    if (lang === 'ru') {
      items.forEach(function (item) {
        item.style.cssText = "\n        font-family:'Rubik';\n        ";
      });
    } else {
      items.forEach(function (item) {
        item.style.removeProperty('font-family');
      });
    }
    items.forEach(function (item) {
      return item.innerHTML = value;
    });
  });
};
var toggleLanguage = function toggleLanguage(_ref8) {
  var target = _ref8.target;
  var lang = target.dataset.lang;
  if (!lang) return;
  localStorage.setItem('lang', lang);
  setText();
};
var handleBuyButton = function handleBuyButton(_ref9) {
  var target = _ref9.currentTarget;
  var value = target.dataset.value;
  if (!value) return;
  console.log(value);
  var _values$value = values[value],
    price = _values$value.price,
    title = _values$value.title;
  console.log(price, title);
  modalTitle.innerText = title;
  modalPrice.innerText = "".concat(price, "$");
  modal.classList.add(classes.opened);
  overlay.classList.add(classes.opened);
};
var closeModal = function closeModal() {
  modal.classList.remove(classes.opened);
  overlay.classList.remove(classes.opened);
};
menuButton.addEventListener('click', toggleMenu);
videoButton.addEventListener('click', handleVideo);
setText();
window.addEventListener('scroll', handleScroll);
menuLink.forEach(function (link) {
  return link.addEventListener('click', scrollToSection);
});
checkbox.forEach(function (box) {
  return box.addEventListener('click', handleCheckbox);
});
faqItem.forEach(function (item) {
  return item.addEventListener('click', handleFaqItem);
});
language.forEach(function (lang) {
  return lang.addEventListener('click', toggleLanguage);
});
buyButton.forEach(function (btn) {
  return btn.addEventListener('click', handleBuyButton);
});
modalClose.addEventListener('click', closeModal);

/***/ }),

/***/ "./src/module/languages.js":
/*!*********************************!*\
  !*** ./src/module/languages.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "languages": function() { return /* binding */ languages; }
/* harmony export */ });
var _en, _ru;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var languages = {
  en: (_en = {
    editions: 'Editions',
    controller: 'Controller',
    about: 'About',
    explore: 'Explore',
    news: 'News',
    faq: 'Faq',
    currentLang: 'English',
    release: 'Release:',
    buy: 'buy now',
    buyGame: 'buy',
    headerSubtitle: 'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    editionsItem: 'Standard Editions ',
    editionsdescriptionPs5Offline: ' Offline play enabled',
    editionsdescriptionPs5Remote: ' Remote Play supported',
    editionsdescriptionPs5Trigger: 'Trigger effect required',
    editionsdescriptionFeatures: 'All features of Standard Edition',
    editionsdescriptionDragon: 'Dragon backpack',
    editionsdescriptionSoundtrack: 'Official digital soundtrack',
    сontrollerTiltle: 'DualSense',
    descController1: 'You can also buy an exclusive controller for PS5 with the game <span>Stray</span>',
    descController2: 'If you purchase a controller and a game (any edition), you will receive a <span>15%</span> discount on two items.'
  }, _defineProperty(_en, "about", 'About Game'), _defineProperty(_en, "aboutTitle", 'Watch the Trailer'), _defineProperty(_en, "exploreTitle", '  Explore <span>Stray</span> series'), _defineProperty(_en, "requirementsPc", 'Here are (PC) System Requirements'), _defineProperty(_en, "minimumPc", 'Minimum'), _defineProperty(_en, "recommendedPc", 'Recommended'), _defineProperty(_en, "PStitle", '<span>Stray</span> для PS4'), _defineProperty(_en, "PsRequirementStandard", 'Standard'), _defineProperty(_en, "PsRequirementLimited", 'Limited'), _defineProperty(_en, "news", 'News'), _defineProperty(_en, "newsTitle1", 'Review Roundup'), _defineProperty(_en, "newsTitle2", 'Cyberpunk Cat'), _defineProperty(_en, "newsTitle3", 'Stray Is A Big Hit!'), _defineProperty(_en, "newsSubTitle1", 'Stray is the tale of a small cat who falls into a subterranean city inhabited entirely by robots. The titular stray will befriend a drone, explore<p class="text-overflow"> small hub worlds, and solve puzzles with their feline brain as it seeks to make its way back home</p><a class="dots">...</a>'), _defineProperty(_en, "newsSubTitle2", " Will Be Free Through PlayStation Plus' Higher Tiers. Stray, the highly-anticipated cyberpunk adventure game in which players<p class=\"text-overflow\"> take on the role of backpack-wearing cat working its way through a robot-infested city, now has a release date. Originally slated for release in \"early 2022,\"</p><a class=\"dots\">...</a>"), _defineProperty(_en, "newsSubTitle3", " Stray has officially arrived today, giving fans an opportunity to play as a digital version<p class=\"text-overflow\"> of nature's perfect purring machine. As the titular stray cat lost in a strange city inhabited by robots, it'll be up to you to help the feline find its way home and avoid crossing paths with merciless androids</p><a class=\"dots\">...</a>"), _defineProperty(_en, "question1", 'When is the release??'), _defineProperty(_en, "question2", 'The game give the opportunity only to play as a little cat?'), _defineProperty(_en, "question3", 'What is <span class="stray"> Stray </span> about?'), _defineProperty(_en, "answer1", "The Game's Release spending in \u0432 July 19"), _defineProperty(_en, "answer2", "Yeah, just for him."), _defineProperty(_en, "answer3", 'The story follows a stray cat who falls into a walled city populated by robots, machines, and mutant bacteria, and sets out to return to the surface with the help of a drone companion, B-12.The game is presented through a third-person perspective. '), _defineProperty(_en, "footerInfo", 'Download of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information.'), _en),
  ru: (_ru = {
    editions: 'Издания',
    controller: 'Джостик',
    about: 'Об игре',
    explore: 'Исследовать',
    news: 'Новости',
    faq: 'Помощь',
    currentLang: 'Русский',
    release: 'Релиз:',
    buy: 'Купить Сейчас',
    buyGame: 'купить',
    headerSubtitle: 'Потерянный, одинокий и оторванный от семьи, бродячий кот должен распутать древнюю тайну, чтобы спастись из давно забытого города.',
    editionsItem: 'Стандартные издания ',
    editionsItemDeluxe: 'Эксклюзивные издания ',
    editionsdescriptionPs5Offline: 'Оффлайн режим',
    editionsdescriptionPs5Remote: 'Удаленное воспроизведение',
    editionsdescriptionPs5Trigger: 'Требуется триггерный эффект',
    editionsdescriptionFeatures: 'Все фишки стандартного издания',
    editionsdescriptionDragon: 'Рюкзак дракона',
    editionsdescriptionSoundtrack: 'Официальный саундтрек',
    сontrollerTiltle: 'Контроллер',
    descController1: 'Вы также можете купить эксклюзвный контроллер для PS5 вместе с игрой<span>Stray</span>',
    descController2: 'Если вы покупаете контроллер и игру (в любом издании) вы так получаете <span>15%</span> скидку на две дополнительной продукции'
  }, _defineProperty(_ru, "about", 'Об Игре'), _defineProperty(_ru, "aboutTitle", 'Смотреть Трейлер'), _defineProperty(_ru, "exploreTitle", '  Исследуй <span>Stray</span> '), _defineProperty(_ru, "requirementsPc", 'Системные требования для PC'), _defineProperty(_ru, "minimumPc", 'Минимальные'), _defineProperty(_ru, "recommendedPc", 'Рекомендуемые'), _defineProperty(_ru, "PStitle", '<span>Stray</span> для PS4'), _defineProperty(_ru, "PsRequirementStandard", 'Стандартные'), _defineProperty(_ru, "PsRequirementLimited", 'Ограниченные'), _defineProperty(_ru, "news", 'Новости'), _defineProperty(_ru, "newsTitle1", 'Обзорная информация'), _defineProperty(_ru, "newsTitle2", 'Киберпанк мира кошек'), _defineProperty(_ru, "newsTitle3", 'Stray несомненно хит!'), _defineProperty(_ru, "newsSubTitle1", 'Stray - это история о маленькой кошке, которая попадает в подземный город, полностью населенный роботами. Титулованному бродяге предстоит подружиться<p class="text-overflow"> с дроном, исследовать небольшие миры-концентраторы и решать головоломки с помощью своего кошачьего мозга, пытаясь вернуться домой</p><a class="dots">...</a>'), _defineProperty(_ru, "newsSubTitle2", " \u0418\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u043D\u0430 \u0432\u044B\u0441\u0448\u0438\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 PlayStation Plus. Stray, \u0434\u043E\u043B\u0433\u043E\u0436\u0434\u0430\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u0433\u0440\u0430 \u0432 \u0441\u0442\u0438\u043B\u0435 \u043A\u0438\u0431\u0435\u0440\u043F\u0430\u043D\u043A, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439<p class=\"text-overflow\"> \u0438\u0433\u0440\u043E\u043A\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u0432\u0437\u044F\u0442\u044C \u043D\u0430 \u0441\u0435\u0431\u044F \u0440\u043E\u043B\u044C \u043A\u043E\u0448\u043A\u0438 \u0441 \u0440\u044E\u043A\u0437\u0430\u043A\u043E\u043C, \u043F\u0440\u043E\u0431\u0438\u0440\u0430\u044E\u0449\u0435\u0439\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043A\u0438\u0448\u0430\u0449\u0438\u0439 \u0440\u043E\u0431\u043E\u0442\u0430\u043C\u0438 \u0433\u043E\u0440\u043E\u0434, \u0442\u0435\u043F\u0435\u0440\u044C \u0438\u043C\u0435\u0435\u0442 \u0434\u0430\u0442\u0443 \u0432\u044B\u0445\u043E\u0434\u0430. \u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0438\u0433\u0440\u0430 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0430\u0441\u044C \u043A \u0432\u044B\u043F\u0443\u0441\u043A\u0443 \u0432 \"\u043D\u0430\u0447\u0430\u043B\u0435 2022 \u0433\u043E\u0434\u0430\", \u043D\u043E \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043E\u043D\u0430 \u0432\u044B\u0439\u0434\u0435\u0442 \u043D\u0430 PlayStation 5, PlayStation 4 \u0438 \u041F\u041A 19 \u0438\u044E\u043B\u044F</p><a class=\"dots\">...</a>"), _defineProperty(_ru, "newsSubTitle3", "Stray \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u044B\u0433\u0440\u0430\u0442\u044C \u0437\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0443\u0440\u043B\u044B\u043A\u0430\u044E\u0449\u0435\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u043F\u0440\u0438\u0440\u043E\u0434\u044B. \u0412 \u0440\u043E\u043B\u0438 \u0442\u0438\u0442\u0443\u043B\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u0434\u044F\u0447\u0435\u0433\u043E \u043A\u043E\u0442\u0430, \u043F\u043E\u0442\u0435\u0440\u044F\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0432<p class=\"text-overflow\"> \u0441\u0442\u0440\u0430\u043D\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435, \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C\u0438, \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u043D\u0430\u0439\u0442\u0438 \u0434\u043E\u0440\u043E\u0433\u0443 \u0434\u043E\u043C\u043E\u0439 \u0438 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0441 \u0431\u0435\u0437\u0436\u0430\u043B\u043E\u0441\u0442\u043D\u044B\u043C\u0438 \u0430\u043D\u0434\u0440\u043E\u0438\u0434\u0430\u043C\u0438</p><a class=\"dots\">...</a>"), _defineProperty(_ru, "question1", 'Когда состоится релиз??'), _defineProperty(_ru, "question2", 'Игра дает возможность играть только за малекого кота?'), _defineProperty(_ru, "question3", 'Что такое Stray?'), _defineProperty(_ru, "answer1", "\u0420\u0435\u043B\u0438\u0437 \u0438\u0433\u0440\u044B \u0441\u043E\u0441\u0442\u043E\u0438\u0442\u0441\u044F 19 \u0438\u044E\u043B\u044F"), _defineProperty(_ru, "answer2", "\u0414\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430 \u043D\u0435\u0433\u043E ."), _defineProperty(_ru, "answer3", 'История рассказывает о бродячей кошке, которая попадает в окруженный стенами город, населенный роботами, машинами и бактериями-мутантами, и пытается вернуться на поверхность с помощью дрона-компаньона B-12. Игра представлена с видом от третьего лица.'), _defineProperty(_ru, "footerInfo", 'Загрузка данного продукта регулируется Условиями обслуживания PlayStation Network и нашими Условиями использования программного обеспечения, а также любыми конкретными дополнительными условиями, применимыми к данному продукту. Если вы не хотите принимать эти условия, не загружайте этот продукт. Более подробную информацию см. в Условиях обслуживания.'), _ru)
};

/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pageTitle = 'Stray'
pug_mixins["divBg"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"style": pug.escape(pug.style("background-image:url(" +`${__webpack_require__("./src/img sync recursive ^\\.\\/.*$")("./"+path)}` +")"))},attributes]), true)) + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["imgBg"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attrs(pug.merge([{"src": pug.escape(`${__webpack_require__("./src/img sync recursive ^\\.\\/.*$")("./"+path)}`),"alt": ""},attributes]), true)) + "\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = pageTitle) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Clink" + (" rel=\"icon\" type=\"image\u002Fx-icon\""+pug.attr("href", __webpack_require__(/*! @/img/favicon/cat.ico */ "./src/img/favicon/cat.ico"), true, true)) + "\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E ";




pug_html = pug_html + "\u003Csection class=\"section section-main\"\u003E \u003Cdiv class=\"container\"\u003E \u003Cheader class=\"header flex\"\u003E\u003Cdiv class=\"header-menu flex\"\u003E\u003Cdiv class=\"header-menu__button\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"header-menu__list\"\u003E \u003Cul class=\"flex flex-center\"\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"editions\" href=\"#editions\"\u003Eeditions\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"controller\" href=\"#controller\"\u003Econtroller\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"about\" href=\"#about\"\u003Eabout game\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"explore\" href=\"#explore\"\u003Eexplore\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"news\" href=\"#news\"\u003Enews \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"header-menu__link menu-link\" data-text=\"faq\" href=\"#faq\"\u003Efaq \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cdiv class=\"header-menu__link lang\"\u003E \u003Cspan class=\"current-lang\" data-text=\"currentLang\"\u003Eenglish\u003C\u002Fspan\u003E\u003Csvg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_12_93)\"\u003E\n\u003Cpath d=\"M0.159766 3.67328L5.61446 9.15492C5.71671 9.25772 5.85547 9.31546 6.00013 9.31546C6.14482 9.31546 6.28355 9.25768 6.38584 9.15488L11.8402 3.67325C12.0533 3.45917 12.0533 3.11211 11.8402 2.89803C11.6273 2.68399 11.2819 2.68396 11.0689 2.89803L6.00013 7.99205L0.931148 2.89803C0.824638 2.79099 0.685039 2.73749 0.545439 2.73749C0.405838 2.73749 0.266238 2.79099 0.15973 2.89807C-0.0532522 3.11214 -0.0532522 3.45921 0.159766 3.67328Z\" fill=\"white\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_12_93\"\u003E\n\u003Crect width=\"12\" height=\"12.0596\" fill=\"white\" transform=\"translate(12 12.6592) rotate(-180)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\u003Cdiv class=\"header-menu__languages\"\u003E\u003Cdiv class=\"header-menu__language language\" data-lang=\"ru\"\u003EРусский\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-menu__language language\" data-lang=\"en\"\u003EEnglish\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer flex flex-center\"\u003E\u003Cspan data-text=\"release\"\u003ERelease\u003C\u002Fspan\u003E\u003Cdiv class=\"header-timer__values flex flex-center\"\u003E\u003Cdiv class=\"header-timer__item\"\u003E\u003Cdiv class=\"header-timer__item-value\" id=\"days\"\u003E0\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item-info\"\u003ED\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item\"\u003E\u003Cdiv class=\"header-timer__item-value\" id=\"hours\"\u003E0\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item-info\"\u003EH\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item\"\u003E\u003Cdiv class=\"header-timer__item-value\" id=\"minutes\"\u003E0\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item-info\"\u003EM\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item\"\u003E\u003Cdiv class=\"header-timer__item-value\" id=\"seconds\"\u003E0\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-timer__item-info\"\u003ES\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Cdiv class=\"description\"\u003E\u003Cdiv class=\"description-title\"\u003E\u003Ch1\u003ESt\u003Cspan class=\"delay1\"\u003Er\u003C\u002Fspan\u003Ea\u003Cspan class=\"delay2\"\u003Ey\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description-subtitle\"\u003E \u003Ch4 class=\"description-subtitle__accent\"\u003EUNTANGLE AN ANCIENT MYSTERY TO ESCAPE A LONG-FORGOTTEN CITY \u003C\u002Fh4\u003E\u003Cp data-text=\"headerSubtitle\"\u003ELost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description-button buy-button\" data-value=\"0\" data-text=\"buy\"\u003Ebuy now\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-editions\" id=\"editions\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"editions\"\u003E\u003Ch2 data-text=\"editions\"\u003EEditions\u003C\u002Fh2\u003E\u003Cdiv class=\"editions-list\"\u003E \u003Cdiv class=\"editions-item\"\u003E \u003Cdiv class=\"editions-item__img light-1\"\u003E\u003Csvg width=\"247\" height=\"144\" viewBox=\"0 0 247 144\"  xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M105.506 0.66185C104.855 1.44007 103.045 5.73821 102.268 8.3521C101.986 9.29968 101.157 11.4197 100.426 13.0635C99.6948 14.7074 98.7937 17.013 98.4234 18.1871C98.0532 19.3613 97.5884 20.7703 97.3904 21.3182C97.1924 21.8662 96.7066 23.2111 96.3109 24.307C94.2099 30.1219 93.32 32.2585 92.8171 32.694C92.5108 32.959 92.2605 33.3791 92.2605 33.6276C92.2605 33.8764 92.0791 34.1272 91.8575 34.185C91.5632 34.2618 91.5661 35.0153 91.8688 36.9839C92.0966 38.4654 92.3451 40.0856 92.4214 40.5841C92.6729 42.2324 94.0642 44.9571 95.0576 45.7467C95.3178 45.9536 95.5307 46.2232 95.5307 46.3458C95.5307 46.4685 96.2789 47.1719 97.1935 47.9091C98.6306 49.0676 98.9972 49.2247 99.898 49.0699C100.87 48.9025 100.967 48.9674 101.335 50.0394C101.682 51.0482 101.914 51.2312 103.238 51.5423C104.068 51.737 105.397 52.3814 106.193 52.9743C107.616 54.0344 108.714 54.3284 109.157 53.7677C109.538 53.2838 110.481 53.448 110.382 53.9811C110.031 55.8692 112.317 56.4778 118.701 56.1965C121.046 56.0929 125.662 55.9833 128.96 55.9529C136.087 55.8868 137.143 55.6432 136.83 54.1363C136.608 53.0606 136.628 53.0518 138.044 53.6256C140.006 54.4201 142.093 52.9519 141.306 51.3308C140.724 50.1313 140.898 49.9389 141.842 50.7373C142.873 51.6086 143.155 51.6425 144.577 51.0667C146.191 50.4128 146.301 49.6346 144.986 48.1738C143.694 46.7372 143.661 46.6515 144.403 46.6515C144.703 46.6515 144.948 46.7785 144.948 46.9336C144.948 47.2823 147.111 48.9287 147.569 48.9287C150.147 48.9287 154.209 43.9292 154.738 40.1047C155.182 36.8982 155.121 36.1413 154.206 33.5579C153.68 32.0706 153.036 30.1493 152.775 29.2882C152.515 28.4272 152.039 27.2104 151.716 26.5842C151.16 25.5051 148.94 19.6277 148.174 17.2051C147.979 16.5869 147.32 14.7936 146.71 13.2201C146.101 11.6469 145.48 9.97514 145.329 9.50548C144.72 7.5995 141.887 0.658719 141.591 0.348456C141.193 -0.0691175 139.107 0.115902 138.715 0.603213C138.555 0.802749 138.001 2.0549 137.484 3.38562C136.968 4.71633 136.407 6.12532 136.239 6.51671C136.071 6.9081 135.734 7.86877 135.49 8.65154C134.669 11.2882 132.555 15.9063 131.873 16.5513C131.748 16.6691 129.939 16.563 127.851 16.3153C124.02 15.861 121.075 15.9 117.337 16.4551C115.821 16.6799 115.25 16.6671 114.954 16.4016C114.632 16.1129 112.954 12.1609 111.541 8.3669C109.187 2.04266 108.483 0.584711 107.638 0.282988C106.396 -0.160203 106.158 -0.118076 105.506 0.66185ZM108.176 2.60284C108.564 3.4249 109.416 5.63431 110.068 7.51297C110.72 9.39162 111.628 11.6972 112.085 12.6366C112.543 13.5759 113.025 14.7287 113.156 15.1984C113.56 16.6455 114.105 17.5697 114.65 17.7337C114.937 17.8199 115.862 17.7089 116.706 17.4872C119.911 16.6452 122.808 16.6549 131.234 17.5353C132.537 17.6716 132.624 17.6284 133.164 16.5806C133.475 15.9769 133.944 15.0987 134.208 14.6291C134.931 13.3365 136.45 9.54476 137.456 6.51671C138.903 2.16193 139.458 1.10846 140.303 1.10846C140.926 1.10846 140.968 1.17649 140.575 1.54738C140.222 1.88013 140.212 2.06657 140.53 2.31592C140.762 2.49724 140.951 2.93076 140.951 3.27945C140.951 3.64322 141.208 3.95235 141.554 4.00529C141.941 4.06421 142.387 4.71007 142.798 5.8051C143.15 6.74443 144.126 9.30623 144.965 11.498C145.805 13.6898 146.869 16.6358 147.33 18.0448C147.791 19.4538 148.766 22.0797 149.498 23.88C150.229 25.6804 151.313 28.5521 151.905 30.262C152.498 31.9719 153.147 33.6114 153.348 33.9057C153.549 34.2 153.809 35.3278 153.925 36.4117C154.228 39.2462 154.128 39.304 149.161 39.1398C146.944 39.0666 144.267 38.9977 143.213 38.9863C141.574 38.969 141.251 38.8733 140.98 38.3257C140.356 37.0593 138.073 35.835 136.336 35.835C134.336 35.835 131.73 37.7524 131.5 39.3931C131.282 40.9484 131.559 41.5715 132.957 42.6665C134.253 43.6818 134.601 43.8051 136.173 43.8051C138.621 43.8051 140.44 42.8316 141.095 41.1721C141.271 40.7267 141.867 40.674 146.724 40.674C149.711 40.674 152.414 40.7517 152.73 40.8468C153.341 41.0304 153.525 42.2418 152.982 42.5048C152.805 42.5908 152.55 43.0021 152.416 43.4191C152.283 43.8361 151.709 44.7017 151.143 45.3433C148.623 48.194 147.865 48.3899 146.082 46.6515C144.893 45.4925 143.986 45.2414 143.204 45.8545C142.542 46.3732 142.675 47.0347 143.676 48.19C144.708 49.3816 144.8 49.8578 144.085 50.3223C143.695 50.5762 143.329 50.4595 142.412 49.7878C140.284 48.231 138.376 48.9204 139.657 50.7832C140.892 52.5804 139.725 53.4836 137.69 52.3052L136.576 51.6599L135.809 52.2605C135.155 52.7731 135.099 52.9872 135.425 53.7213C135.786 54.5314 135.743 54.5988 134.692 54.886C134.078 55.0537 131.655 55.1909 129.308 55.1909C125.752 55.1909 125.004 55.1157 124.82 54.7406C124.302 53.6823 124.637 52.9095 126.063 51.8759C126.868 51.2924 127.618 50.531 127.729 50.1834C127.84 49.8361 128.245 49.4877 128.628 49.4092C129.743 49.1806 129.465 48.1898 128.1 47.5288C127.075 47.0324 126.289 46.9362 123.264 46.9362C119.441 46.9362 118.688 47.14 118.251 48.2942C118.049 48.8257 118.434 49.2882 120.418 50.8982C122.647 52.7065 122.822 52.9399 122.716 53.9524L122.601 55.0486L119.331 55.2635C115.99 55.4829 113.271 55.3363 112.177 54.8778C111.713 54.6828 111.614 54.3811 111.77 53.6299C112.027 52.39 111.339 52.1119 109.313 52.6356C108.056 52.9607 107.806 52.9459 107.192 52.511C106.81 52.2397 106.4 51.7139 106.281 51.3428C106.097 50.7684 105.807 50.6548 104.34 50.5811C102.756 50.5014 102.607 50.4299 102.5 49.7018C102.414 49.1143 102.672 48.6984 103.499 48.0933C104.669 47.2379 104.913 46.4301 104.179 45.8545C103.387 45.234 102.528 45.497 101.11 46.7942C99.4518 48.3107 98.7007 48.2934 97.341 46.7068C96.8454 46.1284 96.2346 45.4854 95.9831 45.2773C95.1939 44.6246 93.6718 41.7591 93.7862 41.1411C93.8687 40.6959 94.1645 40.5479 94.9857 40.5408C95.8298 40.5337 96.0758 40.403 96.0758 39.9624C96.0758 39.5411 95.7927 39.3681 94.9857 39.2969C93.0686 39.1272 92.8767 38.8087 93.0766 36.1262C93.2048 34.4027 93.4708 33.4116 93.9952 32.704C94.401 32.156 95.1579 30.5549 95.6772 29.1459C96.1964 27.737 96.7905 26.1785 96.9969 25.6827C97.2036 25.1868 98.0132 22.8812 98.7962 20.5591C99.5789 18.237 100.706 15.2482 101.3 13.9175C101.894 12.5868 102.727 10.4092 103.15 9.07851C104.078 6.16261 105.254 3.14054 105.724 2.4645C105.913 2.19267 106.068 1.77623 106.068 1.53941C106.068 1.3023 106.384 1.10846 106.769 1.10846C107.282 1.10846 107.658 1.5081 108.176 2.60284ZM109.343 36.3306C108.01 36.5239 106.465 37.4826 106.211 38.2733C106.001 38.9289 105.84 38.9673 103.213 38.9895C98.8664 39.0262 97.3475 39.2664 97.3475 39.918C97.3475 40.4343 98.9289 40.6729 102.389 40.6783C105.42 40.6831 105.608 40.7378 106.536 41.88C107.248 42.757 109.61 43.8057 110.868 43.804C113.071 43.8011 115.512 41.6529 115.514 39.7153C115.515 38.8153 115.258 38.4128 114.105 37.5093C113.329 36.9016 112.361 36.4043 111.954 36.4043C111.548 36.4043 110.997 36.3582 110.731 36.3019C110.465 36.2458 109.84 36.2586 109.343 36.3306ZM138.658 37.4097C139.153 37.6639 139.79 38.3069 140.074 38.8383C140.524 39.6826 140.519 39.943 140.033 40.8946C138.732 43.4425 134.735 43.6653 133.034 41.2851C132.062 39.926 132.333 38.9072 134.003 37.6366C135.122 36.7855 135.497 36.6602 136.537 36.7926C137.208 36.8777 138.163 37.1555 138.658 37.4097ZM112.095 37.4251C113.313 37.7894 113.689 38.0815 114.052 38.9431C114.45 39.8861 114.414 40.1454 113.742 41.1767C112.821 42.5911 112.62 42.6981 110.841 42.7175C109.024 42.7371 107.62 41.9965 107.197 40.7938C106.617 39.1472 107.265 38.014 109.157 37.3681C110.531 36.8988 110.323 36.8948 112.095 37.4251ZM126.858 47.9464C127.326 48.3124 126.323 50.4911 125.402 51.1119C123.942 52.0951 123.169 51.9365 121.034 50.2153C118.461 48.1414 118.774 47.816 123.358 47.8009C125.173 47.795 126.749 47.8604 126.858 47.9464ZM124.236 65.3615C123.537 65.4261 122.809 65.5978 122.619 65.7429C122.43 65.8884 121.819 66.0074 121.262 66.0074C120.349 66.0074 118.387 66.4158 111.7 67.9985C110.501 68.2823 108.294 68.9238 106.795 69.4242C105.296 69.9247 103.497 70.4547 102.798 70.6024C102.098 70.7498 100.954 71.0416 100.254 71.2505C98.3315 71.8252 94.5605 72.7594 91.7154 73.366C90.3165 73.6643 87.7003 74.307 85.9016 74.7944C84.103 75.2817 81.667 75.888 80.4883 76.1421C78.7038 76.5267 77.9727 76.8973 76.1185 78.357C74.8939 79.3213 73.3649 80.4038 72.721 80.7631C71.0892 81.6734 70.8497 82.6346 72.0143 83.6027C72.8678 84.3123 72.9423 84.5992 73.0586 87.6162C73.152 90.0339 73.0677 90.8958 72.7298 90.9844C72.4801 91.0498 72.2756 90.9206 72.2756 90.6972C72.2756 90.4737 71.418 89.5984 70.3705 88.7522C69.3225 87.9059 68.3004 87.0062 68.0994 86.7528C67.8981 86.4998 67.4156 85.9396 67.0272 85.5087C66.3673 84.7768 66.3615 84.7014 66.9363 84.3724C67.2746 84.1782 67.5519 83.8799 67.5519 83.7091C67.5519 83.5386 67.7564 83.2967 68.0061 83.1714C68.5286 82.9096 71.8944 79.8491 73.7348 77.9625C74.4219 77.258 75.947 75.7849 77.1239 74.689C78.3005 73.5932 79.5312 72.4403 79.8582 72.1272C80.1852 71.8141 81.1474 70.9092 81.9966 70.1165C82.8454 69.3235 83.5383 68.4909 83.5369 68.2663C83.534 67.8493 81.9864 67.146 81.0718 67.146C80.7935 67.146 80.1616 66.8969 79.6678 66.5926C78.6271 65.9513 77.9705 66.0671 76.4542 67.1599C75.8547 67.592 75.0371 67.9916 74.6374 68.0477C74.2377 68.1041 73.9794 68.2122 74.0629 68.2885C74.4074 68.6016 71.502 71.8856 68.5257 74.5467C65.464 77.2841 60.8904 80.8089 60.4002 80.8089C59.1346 80.8089 57.7702 81.6791 57.542 82.6318C57.0987 84.4831 57.1165 85.5115 57.6088 86.4653C58.2335 87.6751 58.2578 90.3175 57.6481 90.7137C57.3974 90.8768 56.7589 91.0954 56.2291 91.1996C54.7375 91.493 53.7863 92.5044 53.3306 94.282C53.1013 95.1766 52.9778 95.9426 53.0563 95.9842C53.1348 96.0257 53.8179 96.4712 54.5744 96.9739C55.679 97.7077 56.2717 97.8876 57.5867 97.8876C61.5727 97.8876 63.3667 94.683 60.8355 92.0837C59.357 90.5651 59.6804 89.3482 61.5622 89.3482C62.5858 89.3482 63.0825 89.6303 64.9436 91.2696C66.1431 92.3262 67.916 93.9595 68.8825 94.8988C69.8494 95.8381 71.1717 97.055 71.8206 97.6029C73.1262 98.7045 73.6 99.5311 73.1291 99.8844C72.9594 100.012 60.9874 100.184 46.5241 100.266L20.2278 100.416L18.0909 102.1C15.709 103.978 15.3657 104.877 16.9143 105.182C17.4423 105.285 21.9799 105.276 26.9976 105.162C32.0153 105.047 38.0832 104.995 40.4814 105.046C47.0499 105.186 50.641 105.122 54.6525 104.794C56.8708 104.613 58.9936 104.594 60.1029 104.747C61.1022 104.884 65.19 105.13 69.187 105.292C79.6816 105.719 79.7794 105.732 80.2459 106.781C80.4588 107.259 80.6329 108.025 80.6329 108.483C80.6329 109.122 80.7804 109.293 81.2688 109.219C81.7357 109.149 81.9642 108.741 82.1296 107.684C82.401 105.947 82.849 105.237 84.0699 104.611C84.8991 104.185 84.9914 103.956 84.9754 102.364L84.958 100.592L82.9599 99.3119C81.8607 98.6083 80.6834 97.9502 80.3429 97.8494C80.0028 97.749 78.6435 96.7686 77.3219 95.6713L74.9194 93.6757L74.7148 91.4409C74.6022 90.2116 74.5506 87.9429 74.6 86.399C74.6777 83.9724 74.7846 83.5486 75.3903 83.2699C76.6079 82.7098 79.3313 81.948 80.118 81.9478C80.5344 81.9475 80.981 81.8646 81.1103 81.7633C81.3963 81.5393 85.011 80.5465 85.5877 80.5336C86.3351 80.5169 86.4885 82.9682 86.0172 87.4016C85.4431 92.8007 85.4445 93.3896 86.0383 96.749C86.6305 100.098 86.6178 110.041 86.0194 111.605C85.6876 112.473 85.6982 113.137 86.0677 114.625C86.3282 115.674 86.6829 116.672 86.8555 116.844C87.0284 117.015 87.1294 117.857 87.0807 118.714C86.9932 120.246 87.0255 120.301 88.9608 121.889C90.4288 123.094 91.186 123.506 91.9363 123.506C92.852 123.506 92.965 123.389 93.1903 122.212C93.3266 121.5 93.3382 120.428 93.2161 119.83C93.094 119.232 93.1652 118.017 93.3742 117.131C93.6089 116.137 93.7815 108.424 93.8251 96.9915L93.8956 78.4629L96.8025 77.9123C98.4013 77.6098 100.036 77.2531 100.436 77.1199C102.427 76.4567 114.375 73.4998 117.835 72.8141C118.61 72.6604 119.336 72.6057 119.448 72.6928C119.853 73.0105 117.266 76.521 113.154 81.2344C111.555 83.067 109.914 84.9932 109.508 85.5146C107.956 87.5069 106.751 88.1339 106.289 87.1901C106.167 86.9424 106.068 85.2092 106.068 83.3385C106.068 79.4045 106.045 79.3788 102.954 79.9598C100.01 80.5132 99.7406 80.8752 99.8275 84.1637C99.9009 86.9319 99.5186 88.9961 98.8729 89.3186C98.1527 89.6784 98.0165 91.2815 98.6276 92.2072C98.9572 92.7065 99.1523 93.3381 99.0615 93.6108C98.9703 93.8832 99.0284 94.2917 99.1901 94.518C99.3518 94.7445 99.3605 95.6451 99.209 96.5196C99.0208 97.6049 99.0695 98.2548 99.362 98.5682C99.6621 98.8895 99.7548 100.415 99.6716 103.652C99.5593 108.001 99.14 110.381 98.3435 111.188C98.1175 111.418 98.2628 112.219 98.7657 113.516C99.4975 115.404 99.5339 116.112 99.5644 128.991C99.5818 136.414 99.7036 142.618 99.8344 142.777C100.226 143.253 102.334 144 103.285 144C103.772 144 104.532 143.771 104.973 143.491L105.775 142.982L105.947 128.761C106.041 120.939 106.108 112.33 106.096 109.629C106.073 104.644 106.163 104.323 107.409 104.943C108.332 105.403 109.814 107.464 109.806 108.277C109.802 108.747 110.005 109.323 110.258 109.558C110.51 109.793 110.776 110.237 110.848 110.544C110.935 110.916 111.416 111.184 112.285 111.345C113.279 111.529 113.786 111.858 114.405 112.721C114.852 113.345 115.531 114.008 115.912 114.195C116.294 114.381 116.606 114.656 116.606 114.806C116.606 114.955 117.022 115.418 117.532 115.835C118.041 116.251 118.5 116.899 118.552 117.274C118.768 118.858 119.755 120.536 121.13 121.661C124.098 124.087 127.143 127.096 127.143 127.602C127.143 127.704 127.581 128.306 128.116 128.939C129.136 130.146 130.583 130.906 131.864 130.906C132.281 130.906 133.082 131.172 133.643 131.497C134.983 132.273 137.087 132.17 137.242 131.32C137.304 130.983 136.54 129.807 135.425 128.524C132.437 125.084 130.995 123.331 128.369 119.948C127.033 118.225 125.416 116.304 124.777 115.678C124.137 115.052 123.008 113.707 122.269 112.689C119.865 109.38 116.769 105.708 114.879 103.925C114.428 103.501 113.632 102.513 113.108 101.73C112.175 100.335 112.167 100.275 112.693 98.6615C112.988 97.7564 113.089 96.9482 112.919 96.8657C112.748 96.7829 112.609 96.3798 112.609 95.9696C112.609 95.5595 112.42 94.8145 112.189 94.3141C111.807 93.4873 111.874 93.2826 112.928 92.0592C113.565 91.3194 114.485 90.0991 114.971 89.3477C115.457 88.5959 116.234 87.7443 116.698 87.4551C117.162 87.1656 117.753 86.526 118.01 86.0335C118.268 85.5411 118.752 84.9007 119.087 84.6103C119.421 84.32 119.926 83.7299 120.21 83.2995C120.493 82.8692 120.961 82.5168 121.248 82.5168C121.615 82.5168 121.708 82.3181 121.559 81.8518C121.417 81.4109 121.618 80.8949 122.155 80.319C122.6 79.8417 123.619 78.4566 124.418 77.2414C125.303 75.8959 126.26 74.8533 126.865 74.5757C127.487 74.29 127.791 73.9521 127.678 73.6706C127.578 73.4232 128.096 72.4307 128.828 71.4646C130.182 69.677 131.047 69.114 130.404 70.4379C130.21 70.8395 130.05 71.5824 130.05 72.0888C130.05 72.5952 129.846 73.1696 129.596 73.3654C129.346 73.561 129.12 74.2592 129.093 74.9168C128.978 77.7598 128.527 79.5106 127.499 81.1058C126.903 82.0295 126.416 83.0408 126.416 83.3531C126.416 83.6653 126.188 84.3413 125.908 84.8554C125.628 85.3695 124.959 86.7509 124.421 87.925C123.148 90.7034 121.627 93.6851 121.297 94.0449C120.801 94.5871 117.696 101.162 117.696 101.67C117.696 102.189 118.679 103.434 120.106 104.719C120.54 105.11 120.954 105.687 121.026 106C121.099 106.313 121.394 106.569 121.684 106.569C122.247 106.569 122.591 106.118 124.079 103.438C124.6 102.499 125.666 100.696 126.448 99.4315C127.23 98.1671 127.87 96.9895 127.87 96.8147C127.87 96.64 128.2 96.0584 128.604 95.5225C129.008 94.9865 129.568 93.8584 129.85 93.0156C130.743 90.3391 134.285 84.994 135.263 84.8443C135.594 84.7936 135.864 84.8816 135.864 85.0396C135.864 85.1978 136.395 85.3672 137.045 85.4164C137.95 85.4847 138.253 85.655 138.342 86.1466C138.406 86.4992 138.774 86.9202 139.161 87.0825C139.743 87.3261 139.855 87.664 139.816 89.0422C139.759 91.0171 139.988 91.398 141.101 91.1791C141.789 91.0439 142.042 91.1942 142.558 92.0467C142.902 92.6137 143.274 93.5194 143.386 94.0594C143.561 94.9056 143.489 95.0411 142.86 95.0411C142.459 95.0411 141.916 94.8396 141.655 94.5934C141.395 94.3472 140.524 93.8829 139.721 93.5621C136.131 92.1275 131.254 93.7534 130.57 96.6132C130.242 97.9832 130.659 99.0956 132.026 100.496C133.007 101.5 133.316 102.169 133.685 104.084C133.934 105.378 134.268 106.5 134.426 106.577C135.172 106.938 135.864 105.76 135.864 104.13V102.442L137.226 102.441C139.561 102.438 143.122 100.151 143.129 98.6501C143.13 98.3649 143.399 97.9214 143.727 97.6644C144.28 97.2315 144.402 97.2693 145.398 98.183C145.989 98.725 147.053 100.1 147.763 101.24C149.214 103.57 151.015 105.002 152.5 105.007C153.043 105.009 154.082 105.087 154.808 105.181C155.854 105.317 156.29 105.228 156.891 104.756C157.793 104.05 157.851 104.207 154.745 99.0025C153.553 97.0066 152.579 95.2227 152.579 95.0383C152.579 94.8535 151.516 92.9834 150.217 90.8819C148.918 88.7804 147.855 86.9956 147.855 86.9157C147.855 86.8357 147.297 85.8451 146.616 84.7148C145.934 83.5842 145.189 82.1057 144.96 81.4294C144.731 80.7528 144.23 79.7964 143.847 79.3037C143.465 78.811 143.056 77.8272 142.938 77.1179C142.587 75.005 141.177 72.0461 140.316 71.6149C140.065 71.4896 139.861 71.0171 139.861 70.5643C139.861 70.1117 139.684 69.6557 139.468 69.5512C139.252 69.4464 139.171 69.0625 139.288 68.6978C139.404 68.3332 139.341 67.9575 139.146 67.8633C138.664 67.6299 136.954 68.539 136.954 69.0289C136.954 69.4803 135.657 69.5671 135.319 69.1385C135.195 68.9819 134.777 68.8538 134.389 68.8538C134.001 68.8538 133.684 68.7118 133.684 68.5384C133.684 68.1166 131.881 68.4752 131.049 69.0625C130.46 69.4786 130.413 69.457 130.413 68.7653C130.413 67.6498 129.371 66.1523 128.226 65.6225C127.228 65.1606 126.756 65.1298 124.236 65.3615ZM128.053 66.6945C129.592 67.8994 129.572 68.6446 127.945 70.78C127.142 71.8341 125.391 74.2336 124.054 76.1123C122.718 77.9909 121.487 79.5678 121.32 79.6165C121.152 79.6652 120.406 80.7218 119.662 81.9648C118.917 83.2076 118.17 84.2246 118.002 84.2246C117.834 84.2246 117.696 84.3729 117.696 84.5543C117.696 84.7353 117.06 85.536 116.284 86.3333C115.507 87.1303 114.516 88.2951 114.082 88.9213C113.648 89.5475 112.721 90.7643 112.022 91.6254C110.966 92.9279 110.802 93.3344 111.044 94.0449C111.204 94.5145 111.346 96.1797 111.361 97.7453C111.386 100.406 111.696 102.109 112.217 102.442C112.339 102.52 113.217 103.481 114.168 104.577C115.118 105.673 116.358 107.082 116.923 107.708C117.488 108.334 118.819 109.935 119.882 111.266C120.945 112.597 123.218 115.38 124.933 117.451C133.116 127.331 133.431 127.754 132.948 128.21C132.541 128.595 132.391 128.591 131.573 128.171C130.722 127.734 130.624 127.733 130.218 128.169C129.814 128.602 129.725 128.6 129.042 128.135C128.636 127.859 127.859 126.992 127.316 126.21C126.139 124.512 125.062 123.439 122.515 121.426C120.918 120.164 120.553 119.676 120.24 118.386C120.036 117.541 119.619 116.586 119.315 116.264C119.011 115.941 118.382 115.27 117.917 114.771C117.453 114.272 116.641 113.462 116.113 112.97C115.584 112.478 115.152 111.893 115.152 111.669C115.152 111.137 113.352 109.558 112.745 109.558C112.487 109.558 111.693 108.65 110.982 107.54C110.272 106.431 109.454 105.338 109.165 105.112C108.876 104.885 108.115 104.128 107.474 103.429C106.833 102.729 106.189 102.157 106.043 102.157C105.441 102.157 104.911 105.216 104.946 108.487C105.035 116.773 104.687 141.761 104.48 141.923C104.098 142.222 101.222 142.028 100.951 141.684C100.811 141.507 100.701 135.633 100.706 128.632C100.713 119.279 100.592 115.501 100.252 114.39C99.8773 113.165 99.8776 112.358 100.254 110.13C101.088 105.195 100.876 92.783 99.9354 91.4056C99.588 90.897 99.6236 90.599 100.121 89.8489C100.576 89.1638 100.779 87.954 100.896 85.2209C101.073 81.0654 101.23 80.8089 103.594 80.8089C105.157 80.8089 105.01 80.4443 105.135 84.6516C105.177 86.0606 105.24 87.4343 105.276 87.7041C105.351 88.2686 107.208 89.1171 107.737 88.8293C107.932 88.7234 108.727 87.8681 109.502 86.9288C110.278 85.9894 111.146 85.0288 111.431 84.7939C111.716 84.5591 112.793 83.3505 113.823 82.1083C118.742 76.1809 119.517 75.2287 119.752 74.8314C119.891 74.5965 120.384 73.9265 120.849 73.3427C121.313 72.7586 121.693 72.0823 121.693 71.8392C121.693 71.2337 120.719 70.9921 119.761 71.3596C119.324 71.5269 117.741 71.9368 116.242 72.2704C114.743 72.604 110.983 73.5083 107.885 74.28C104.787 75.0517 101.108 75.948 99.7094 76.2719C98.3104 76.5959 96.7901 76.9807 96.3312 77.127C95.8723 77.2733 95.1267 77.3932 94.6746 77.3932C94.2226 77.3932 93.5617 77.56 93.2056 77.7638C92.6089 78.1056 92.5501 78.9519 92.4498 88.6514C92.3902 94.436 92.332 99.6168 92.3208 100.165C92.3095 100.713 92.3655 102.122 92.4451 103.296C92.7339 107.554 92.6456 115.427 92.2932 116.854C92.0948 117.657 92.0297 119.227 92.1489 120.341C92.3451 122.174 92.3026 122.367 91.7031 122.367C90.9771 122.367 88.7101 120.578 88.2573 119.648C88.1011 119.328 88.0553 118.728 88.1559 118.316C88.2562 117.904 88.076 116.948 87.7551 116.191C87.1734 114.82 87.1679 112.844 87.7246 105.858C87.9216 103.385 87.2784 94.9865 86.8031 93.8271C86.6095 93.3543 86.6291 92.047 86.8525 90.5537C87.3623 87.1479 87.3874 80.0088 86.8911 79.6199C86.426 79.2556 75.1163 82.0357 74.4303 82.683C73.9023 83.1814 72.7563 83.2099 72.5368 82.7302C72.2759 82.1604 79.1075 77.1623 80.4203 76.9625C81.3738 76.8173 87.7889 75.2751 96.4646 73.1058C97.6778 72.8024 98.8795 72.5542 99.1349 72.5542C99.3903 72.5542 100.115 72.3811 100.745 72.1696C101.847 71.7996 104.494 71.0166 107.158 70.2731C107.858 70.0778 109.095 69.6784 109.907 69.3858C110.72 69.0932 111.603 68.8538 111.869 68.8538C112.135 68.8538 113.269 68.6119 114.388 68.3164C117.916 67.3848 120.449 66.8622 121.543 66.8394C122.125 66.8274 123.255 66.6487 124.055 66.4423C126.227 65.8813 127.084 65.9354 128.053 66.6945ZM142.554 66.9655C142.257 67.5738 143.695 70.5993 146.005 74.2228C147.166 76.0448 148.323 78.0478 148.576 78.6741C148.828 79.3003 149.401 80.1969 149.847 80.6666C151.045 81.9258 154.759 87.6717 154.759 88.2666C154.759 88.5484 154.893 88.7789 155.058 88.7789C155.489 88.7789 157.302 91.959 157.302 92.7147C157.302 93.0648 157.546 93.4243 157.843 93.5137C158.14 93.6031 158.876 94.4354 159.478 95.3633C160.695 97.2403 160.877 98.7879 160.03 100.061C159.731 100.509 159.48 101.133 159.471 101.446C159.463 101.759 158.825 103.168 158.054 104.577C157.036 106.437 156.393 107.24 155.705 107.51C154.92 107.818 154.754 108.085 154.73 109.076C154.61 113.993 153.105 119.907 151.275 122.647C150.77 123.405 150.151 125.101 149.851 126.552C149.204 129.689 148.355 132.485 146.603 137.252C145.867 139.254 145.316 141.176 145.379 141.521C145.484 142.098 145.693 142.15 147.936 142.15C150.96 142.15 151.688 141.68 152.384 139.278C153.636 134.956 154.928 131.462 155.888 129.8C156.466 128.799 156.939 127.672 156.939 127.295C156.939 126.917 157.195 126.22 157.509 125.745C157.823 125.27 158.241 124.091 158.438 123.126C158.636 122.161 159.043 120.986 159.343 120.517C159.644 120.047 160.112 118.958 160.384 118.097C161.375 114.959 162.074 113.058 163.263 110.27C163.931 108.704 164.625 106.975 164.805 106.427C165.001 105.832 165.459 105.317 165.942 105.15C166.817 104.845 166.995 104.171 166.337 103.656C166.029 103.415 166.029 103.007 166.337 102.05C166.564 101.344 166.75 100.42 166.75 99.9965C166.75 99.573 167.303 97.9325 167.979 96.3511C169.718 92.2843 170.681 89.7257 171.265 87.6167C171.543 86.6122 172.375 84.2531 173.113 82.3744C174.926 77.7598 175.524 75.4428 175.075 74.7844C174.638 74.1448 172.84 74.085 172.2 74.689C171.951 74.9239 171.221 75.116 170.577 75.116C169.026 75.116 168.291 75.8097 167.84 77.6977C167.495 79.1397 166.942 80.7152 165.299 84.9362C164.933 85.8756 164.534 86.9965 164.413 87.4269C163.991 88.925 163.415 88.5225 160.864 84.9473C160.524 84.4714 160.05 83.7621 159.809 83.3707C159.388 82.685 157.857 80.2817 152.512 71.9098C150.053 68.0588 149.978 67.9797 148.138 67.2843C146.023 66.4853 142.878 66.3057 142.554 66.9655ZM79.8934 68.2845C81.0475 68.2845 80.8901 69.9113 79.6318 70.9898C79.0831 71.46 78.0138 72.4497 77.2547 73.1887C76.496 73.9279 75.6759 74.6959 75.4321 74.8954C75.1883 75.0949 73.8932 76.3471 72.5543 77.6778C71.2149 79.0085 69.2026 80.8658 68.082 81.8052C66.9614 82.7445 65.8288 83.8907 65.565 84.3524C65.1173 85.1366 65.1664 85.2775 66.311 86.4873C67.6325 87.884 67.6144 87.8684 69.0889 88.8709C69.6347 89.2418 70.3705 90.0493 70.724 90.6653C71.3984 91.8397 71.9365 92.4198 73.2483 93.3862C73.6836 93.707 74.2348 94.3383 74.4732 94.7898C74.7119 95.2412 75.0455 95.6104 75.2141 95.6104C75.3827 95.6104 75.9906 95.9628 76.5643 96.3932C78.8826 98.1315 80.2325 98.9966 81.3073 99.4321C82.5235 99.9245 83.3029 100.897 83.6597 102.368C83.9199 103.439 83.6568 104.15 83.0002 104.15C82.7466 104.15 82.349 104.329 82.1169 104.548C81.5217 105.11 78.9585 105.248 76.8176 104.834C75.8183 104.641 72.3846 104.395 69.187 104.289C65.9894 104.182 62.5556 104.019 61.5564 103.928C59.341 103.724 54.5115 103.769 50.8372 104.027C49.3384 104.132 47.458 104.217 46.6586 104.217C45.8592 104.216 40.218 104.228 34.1224 104.243C28.027 104.258 21.8651 104.273 20.4298 104.276C18.9942 104.28 17.6995 104.189 17.5531 104.074C17.2671 103.85 19.1835 102.178 19.7409 102.165C19.9251 102.161 20.3339 101.976 20.6493 101.754C21.1217 101.421 23.9693 101.335 36.7548 101.268C48.0255 101.209 52.4 101.275 52.7009 101.511C53.0112 101.754 53.3084 101.739 53.884 101.453C54.4741 101.16 56.7895 101.069 63.8539 101.064C71.6422 101.058 73.1909 100.987 73.9372 100.604C74.4223 100.355 74.8191 99.9501 74.8191 99.7039C74.8191 99.2439 73.5535 97.6823 72.7701 97.176C72.3021 96.8734 70.619 95.295 68.8236 93.475C67.9218 92.5607 65.2874 90.1768 63.3877 88.5561C63.1523 88.3551 62.4804 88.1297 61.8947 88.0548C59.3646 87.7323 59.2305 87.662 58.7876 86.4278C58.0107 84.2636 58.6884 82.2321 60.1865 82.2321C60.8442 82.2321 71.1793 73.9843 71.1888 73.452C71.1935 73.1887 74.3642 70.0445 76.0603 68.6213C77.4142 67.4853 77.524 67.448 78.3186 67.8559C78.7779 68.0915 79.4865 68.2845 79.8934 68.2845ZM147.753 68.0449C148.995 68.3403 149.331 68.8015 156.215 79.6703C158.823 83.7866 158.763 83.6978 160.814 86.5018C163.107 89.6352 163.644 90.1162 164.345 89.6611C164.658 89.4573 165.242 88.4388 165.643 87.3978C167.455 82.691 168.509 79.7255 168.741 78.684C168.879 78.0632 169.229 77.1965 169.518 76.7578C169.945 76.1123 170.17 76.0129 170.703 76.2364C171.14 76.4194 171.491 76.4114 171.744 76.213C171.955 76.0482 172.47 75.9987 172.89 76.1031C174.009 76.3812 173.878 77.474 172.229 81.6307C171.446 83.6052 170.615 85.9894 170.382 86.9288C169.975 88.5723 169.347 90.2258 167.028 95.7527C166.437 97.1617 165.82 98.8909 165.657 99.5954C164.612 104.112 164.732 103.755 161.627 111.551C160.827 113.557 160.003 115.871 159.446 117.67C159.252 118.297 158.841 119.234 158.533 119.753C158.225 120.271 157.72 121.68 157.411 122.884C157.103 124.087 156.715 125.204 156.55 125.367C156.384 125.53 156.07 126.299 155.85 127.075C155.631 127.852 155.129 129.011 154.736 129.653C154.343 130.294 153.762 131.575 153.445 132.499C152.262 135.949 151.802 137.353 151.345 138.902C151.087 139.778 150.759 140.642 150.616 140.824C150.472 141.005 149.548 141.154 148.56 141.154C146.825 141.154 146.765 141.126 146.765 140.335C146.765 139.885 147.017 138.957 147.325 138.273C148.306 136.094 150.594 128.759 151.285 125.575C151.443 124.847 152.582 122.364 152.952 121.94C153.089 121.783 153.651 120.118 154.201 118.24C154.751 116.361 155.428 114.307 155.706 113.676C155.985 113.044 156.212 111.986 156.212 111.325C156.212 110.663 156.518 109.578 156.892 108.914C158.932 105.297 159.814 103.552 160.378 102.015C160.723 101.076 161.131 100.179 161.286 100.022C161.441 99.8659 161.681 99.2436 161.821 98.6393C162.051 97.6385 161.745 97.0186 158.374 91.6655C154.005 84.725 154.467 85.4443 152.361 82.3167C151.432 80.9396 150.448 79.6105 150.172 79.3632C149.897 79.1161 149.672 78.7125 149.672 78.4663C149.672 78.2203 149.018 77.0171 148.218 75.7926C147.419 74.5681 146.765 73.4024 146.765 73.2026C146.765 73.0025 146.623 72.8388 146.45 72.8388C146.277 72.8388 145.618 71.7276 144.987 70.3696C143.542 67.2635 143.747 67.0916 147.753 68.0449ZM141.096 70.6756C140.963 70.9471 141.034 71.31 141.254 71.4822C141.545 71.7099 141.72 71.6607 141.896 71.3018C142.029 71.0302 141.958 70.6673 141.738 70.4951C141.447 70.2674 141.272 70.3166 141.096 70.6756ZM138.278 71.6413C140.105 72.922 141.143 74.496 141.417 76.402C141.531 77.1876 142.098 78.5966 142.679 79.5331C143.259 80.4696 143.941 81.6842 144.195 82.2321C145.667 85.417 146.177 86.3694 146.455 86.4542C146.625 86.5066 146.765 86.7147 146.765 86.9171C146.765 87.1192 147.682 88.7417 148.803 90.5224C149.924 92.3031 151.253 94.6534 151.756 95.7448C152.259 96.8364 153.467 98.9991 154.441 100.551C155.415 102.102 156.212 103.547 156.212 103.761C156.212 104.048 155.625 104.15 153.98 104.15C151.979 104.15 151.642 104.062 150.717 103.304C150.149 102.839 149.323 101.846 148.881 101.098C148.438 100.35 147.383 98.9052 146.536 97.8876C145.493 96.6346 144.914 95.578 144.744 94.6142C144.606 93.8314 144.371 93.0629 144.221 92.9063C144.071 92.7497 143.494 91.5969 142.937 90.3445C142.38 89.0921 141.727 87.9748 141.487 87.8615C141.247 87.7485 140.847 87.0845 140.597 86.3859C140.347 85.6877 139.69 84.7996 139.135 84.4128C138.581 84.0257 138.065 83.5623 137.988 83.3827C137.912 83.203 137.231 82.9466 136.475 82.8131C135.31 82.6073 134.994 82.6611 134.393 83.1666C134.003 83.4945 133.684 83.9776 133.684 84.24C133.684 84.5024 133.397 85.0225 133.048 85.3959C132.122 86.3839 131.14 87.8214 131.14 88.188C131.14 88.3628 130.76 88.9833 130.296 89.5674C129.831 90.1512 129.242 91.2696 128.985 92.0524C128.729 92.8351 128.132 94.1445 127.659 94.9623C127.186 95.7798 126.695 96.7723 126.568 97.1683C126.442 97.5639 126.192 97.8876 126.014 97.8876C125.835 97.8876 125.69 98.0865 125.69 98.3299C125.69 98.9627 122.103 104.719 121.708 104.719C121.354 104.719 119.876 103.209 119.876 102.847C119.876 102.727 119.615 102.403 119.296 102.127C118.678 101.592 118.577 101.869 121.704 95.5111C122.078 94.7516 122.637 93.8277 122.946 93.4574C123.256 93.087 123.51 92.534 123.51 92.2286C123.51 91.9228 123.633 91.6302 123.784 91.5779C123.935 91.5258 124.327 90.8426 124.655 90.0598C124.982 89.2771 125.691 87.74 126.23 86.6441C126.769 85.5482 127.379 84.0752 127.585 83.3707C127.791 82.6662 128.233 81.7696 128.566 81.3782C130.563 79.031 131.08 77.8503 130.931 75.9836C130.815 74.5379 130.944 73.8863 131.539 72.9237C132.208 71.8409 132.436 71.7003 133.522 71.7003C134.376 71.7003 134.866 71.5278 135.137 71.131C135.702 70.3047 136.573 70.4464 138.278 71.6413ZM178.866 81.366C177.799 81.74 177.271 82.1439 176.973 82.8125C176.122 84.7256 176.687 86.0842 178.896 87.4383C180.104 88.1786 180.295 88.2111 181.737 87.9176C182.74 87.7135 183.704 87.2347 184.482 86.5542C185.572 85.6017 185.661 85.3905 185.451 84.254C185.173 82.7453 184.735 82.1493 183.494 81.5931C181.898 80.8775 180.46 80.8069 178.866 81.366ZM181.466 82.2321C181.589 82.3887 182.057 82.5168 182.505 82.5168C183.666 82.5168 184.191 83.0468 184.191 84.2181C184.191 85.1722 183.453 86.3765 182.577 86.8533C181.07 87.6728 178.301 86.4656 177.829 84.7834C177.519 83.6767 178.342 82.3744 179.351 82.3744C179.778 82.3744 180.252 82.2785 180.403 82.161C180.783 81.8661 181.199 81.894 181.466 82.2321ZM59.8246 92.6726C60.9169 93.5798 61.0575 93.8559 60.8784 94.7363C60.2501 97.8193 54.4708 97.7037 54.4708 94.6085C54.4708 93.2379 54.9901 92.5528 56.3941 92.0714C58.1332 91.4751 58.4493 91.5303 59.8246 92.6726ZM140.174 94.7699C142.355 96.0277 143.07 98.0159 141.678 98.9499C141.278 99.218 140.951 99.5991 140.951 99.797C140.951 100.449 138.305 101.524 136.381 101.655C134.712 101.768 134.479 101.71 133.928 101.043C133.594 100.638 132.911 99.8718 132.412 99.3398C130.94 97.772 131.392 96.1683 133.744 94.6181C134.783 93.9333 135.158 93.8559 136.942 93.9569C138.351 94.0369 139.331 94.2831 140.174 94.7699ZM174.992 99.7232C173.121 100.246 172.393 100.816 171.878 102.16C171.404 103.402 171.605 103.914 173.131 105.352C173.584 105.779 174.155 106.611 174.401 107.203C174.646 107.793 175.068 108.38 175.34 108.505C175.673 108.659 175.834 109.317 175.834 110.533C175.834 112.379 176.331 113.152 177.236 112.714C177.494 112.589 177.801 111.924 177.918 111.236C178.035 110.548 178.364 109.851 178.648 109.686C178.933 109.522 179.274 108.709 179.407 107.88C179.637 106.445 179.716 106.354 181.039 105.999C181.941 105.757 182.802 105.709 183.489 105.863C184.24 106.032 184.628 105.994 184.824 105.731C185.382 104.982 189.048 104.421 192.25 104.594C195.908 104.792 230.711 104.748 231.131 104.545C231.714 104.262 231.412 103.934 230.427 103.779C229.785 103.679 229.022 103.174 228.302 102.374C226.089 99.9145 227.141 100.012 203.729 100.1C185.944 100.166 182.933 100.117 181.792 99.7437C180.168 99.2126 176.856 99.2023 174.992 99.7232ZM236.333 99.9276C234.931 100.535 233.972 101.409 233.972 102.079C233.972 103.666 236.283 105.569 238.213 105.572C239.349 105.574 241.144 104.282 241.431 103.257C241.749 102.123 240.747 100.34 239.55 99.9128C238.436 99.5152 237.273 99.5203 236.333 99.9276ZM6.11556 100.712C5.37539 101.292 5.05345 101.826 5.05345 102.473C5.05345 103.523 6.34957 105.204 7.35608 105.458C8.61295 105.776 10.437 105.29 11.4192 104.376C12.2168 103.633 12.3374 103.312 12.1354 102.464C11.8483 101.261 11.4519 100.838 10.094 100.288C8.52974 99.6546 7.2983 99.7856 6.11556 100.712ZM182.011 100.735C183.678 100.968 188.468 101.018 198.286 100.905C208.971 100.781 212.376 100.825 212.959 101.095C213.563 101.374 213.752 101.373 213.883 101.089C214.008 100.819 215.156 100.768 218.65 100.88C221.181 100.96 223.769 101.092 224.4 101.173C225.556 101.32 227.794 102.828 227.794 103.459C227.794 103.975 226.734 104.042 219.437 103.991C215.74 103.966 209.935 103.937 206.538 103.929C203.14 103.92 199.339 103.898 198.09 103.88C196.841 103.863 193.897 103.823 191.549 103.791C185.892 103.716 181.971 104.083 181.372 104.744C181.08 105.067 180.198 105.318 178.92 105.443C177.582 105.574 176.924 105.769 176.924 106.033C176.924 106.25 176.797 106.427 176.641 106.427C176.111 106.427 174.744 105.542 174.744 105.198C174.744 105.01 174.417 104.696 174.017 104.5C173.028 104.017 172.996 101.912 173.968 101.26C175.751 100.064 176.756 99.9985 182.011 100.735ZM239.62 101.148C240.608 101.922 240.721 102.457 240.089 103.386C239.109 104.827 237.909 105.036 236.439 104.022C234.651 102.789 234.759 101.331 236.684 100.72C237.954 100.317 238.697 100.425 239.62 101.148ZM10.1405 101.303C11.6238 102.465 10.5173 104.719 8.46324 104.719C7.47599 104.719 6.14354 103.471 6.14354 102.546C6.14354 101.666 7.35862 100.734 8.50539 100.734C9.00501 100.734 9.74082 100.99 10.1405 101.303ZM0.52198 101.478C-0.140427 101.997 -0.149511 102.097 0.365371 103.253C0.840649 104.321 1.55611 104.401 2.33225 103.473C3.34094 102.267 1.75123 100.515 0.52198 101.478ZM244.353 101.466C243.419 102.198 243.621 103.535 244.725 103.929C245.56 104.227 245.744 104.186 246.352 103.567C247.192 102.71 247.199 102.598 246.466 101.72C245.787 100.909 245.16 100.834 244.353 101.466ZM135.298 129.831C136.135 130.767 136.03 131.268 135.046 131.037C133.873 130.762 133.186 130.167 133.441 129.648C133.755 129.006 134.639 129.093 135.298 129.831Z\" \u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__title\" data-text=\"editionsItem\"\u003EStandard Editions \u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__subtitle\"\u003EPS5  \u003C\u002Fdiv\u003E\u003Cul class=\"editions-item__description\"\u003E\u003Cli data-text=\"editionsdescriptionPs5Offline\"\u003EOffline play enabled\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionPs5Remote\"\u003ERemote Play supported\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionPs5Trigger\"\u003ETrigger effect required\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"editions-item__price\"\u003E19.99$\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__btn buy-button\" data-value=\"1\" data-text=\"buy\"\u003EBUY NOW   \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item\"\u003E \u003Cdiv class=\"editions-item__img light-2\"\u003E\u003Csvg width=\"247\" height=\"144\" viewBox=\"0 0 247 144\"  xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M105.506 0.66185C104.855 1.44007 103.045 5.73821 102.268 8.3521C101.986 9.29968 101.157 11.4197 100.426 13.0635C99.6948 14.7074 98.7937 17.013 98.4234 18.1871C98.0532 19.3613 97.5884 20.7703 97.3904 21.3182C97.1924 21.8662 96.7066 23.2111 96.3109 24.307C94.2099 30.1219 93.32 32.2585 92.8171 32.694C92.5108 32.959 92.2605 33.3791 92.2605 33.6276C92.2605 33.8764 92.0791 34.1272 91.8575 34.185C91.5632 34.2618 91.5661 35.0153 91.8688 36.9839C92.0966 38.4654 92.3451 40.0856 92.4214 40.5841C92.6729 42.2324 94.0642 44.9571 95.0576 45.7467C95.3178 45.9536 95.5307 46.2232 95.5307 46.3458C95.5307 46.4685 96.2789 47.1719 97.1935 47.9091C98.6306 49.0676 98.9972 49.2247 99.898 49.0699C100.87 48.9025 100.967 48.9674 101.335 50.0394C101.682 51.0482 101.914 51.2312 103.238 51.5423C104.068 51.737 105.397 52.3814 106.193 52.9743C107.616 54.0344 108.714 54.3284 109.157 53.7677C109.538 53.2838 110.481 53.448 110.382 53.9811C110.031 55.8692 112.317 56.4778 118.701 56.1965C121.046 56.0929 125.662 55.9833 128.96 55.9529C136.087 55.8868 137.143 55.6432 136.83 54.1363C136.608 53.0606 136.628 53.0518 138.044 53.6256C140.006 54.4201 142.093 52.9519 141.306 51.3308C140.724 50.1313 140.898 49.9389 141.842 50.7373C142.873 51.6086 143.155 51.6425 144.577 51.0667C146.191 50.4128 146.301 49.6346 144.986 48.1738C143.694 46.7372 143.661 46.6515 144.403 46.6515C144.703 46.6515 144.948 46.7785 144.948 46.9336C144.948 47.2823 147.111 48.9287 147.569 48.9287C150.147 48.9287 154.209 43.9292 154.738 40.1047C155.182 36.8982 155.121 36.1413 154.206 33.5579C153.68 32.0706 153.036 30.1493 152.775 29.2882C152.515 28.4272 152.039 27.2104 151.716 26.5842C151.16 25.5051 148.94 19.6277 148.174 17.2051C147.979 16.5869 147.32 14.7936 146.71 13.2201C146.101 11.6469 145.48 9.97514 145.329 9.50548C144.72 7.5995 141.887 0.658719 141.591 0.348456C141.193 -0.0691175 139.107 0.115902 138.715 0.603213C138.555 0.802749 138.001 2.0549 137.484 3.38562C136.968 4.71633 136.407 6.12532 136.239 6.51671C136.071 6.9081 135.734 7.86877 135.49 8.65154C134.669 11.2882 132.555 15.9063 131.873 16.5513C131.748 16.6691 129.939 16.563 127.851 16.3153C124.02 15.861 121.075 15.9 117.337 16.4551C115.821 16.6799 115.25 16.6671 114.954 16.4016C114.632 16.1129 112.954 12.1609 111.541 8.3669C109.187 2.04266 108.483 0.584711 107.638 0.282988C106.396 -0.160203 106.158 -0.118076 105.506 0.66185ZM108.176 2.60284C108.564 3.4249 109.416 5.63431 110.068 7.51297C110.72 9.39162 111.628 11.6972 112.085 12.6366C112.543 13.5759 113.025 14.7287 113.156 15.1984C113.56 16.6455 114.105 17.5697 114.65 17.7337C114.937 17.8199 115.862 17.7089 116.706 17.4872C119.911 16.6452 122.808 16.6549 131.234 17.5353C132.537 17.6716 132.624 17.6284 133.164 16.5806C133.475 15.9769 133.944 15.0987 134.208 14.6291C134.931 13.3365 136.45 9.54476 137.456 6.51671C138.903 2.16193 139.458 1.10846 140.303 1.10846C140.926 1.10846 140.968 1.17649 140.575 1.54738C140.222 1.88013 140.212 2.06657 140.53 2.31592C140.762 2.49724 140.951 2.93076 140.951 3.27945C140.951 3.64322 141.208 3.95235 141.554 4.00529C141.941 4.06421 142.387 4.71007 142.798 5.8051C143.15 6.74443 144.126 9.30623 144.965 11.498C145.805 13.6898 146.869 16.6358 147.33 18.0448C147.791 19.4538 148.766 22.0797 149.498 23.88C150.229 25.6804 151.313 28.5521 151.905 30.262C152.498 31.9719 153.147 33.6114 153.348 33.9057C153.549 34.2 153.809 35.3278 153.925 36.4117C154.228 39.2462 154.128 39.304 149.161 39.1398C146.944 39.0666 144.267 38.9977 143.213 38.9863C141.574 38.969 141.251 38.8733 140.98 38.3257C140.356 37.0593 138.073 35.835 136.336 35.835C134.336 35.835 131.73 37.7524 131.5 39.3931C131.282 40.9484 131.559 41.5715 132.957 42.6665C134.253 43.6818 134.601 43.8051 136.173 43.8051C138.621 43.8051 140.44 42.8316 141.095 41.1721C141.271 40.7267 141.867 40.674 146.724 40.674C149.711 40.674 152.414 40.7517 152.73 40.8468C153.341 41.0304 153.525 42.2418 152.982 42.5048C152.805 42.5908 152.55 43.0021 152.416 43.4191C152.283 43.8361 151.709 44.7017 151.143 45.3433C148.623 48.194 147.865 48.3899 146.082 46.6515C144.893 45.4925 143.986 45.2414 143.204 45.8545C142.542 46.3732 142.675 47.0347 143.676 48.19C144.708 49.3816 144.8 49.8578 144.085 50.3223C143.695 50.5762 143.329 50.4595 142.412 49.7878C140.284 48.231 138.376 48.9204 139.657 50.7832C140.892 52.5804 139.725 53.4836 137.69 52.3052L136.576 51.6599L135.809 52.2605C135.155 52.7731 135.099 52.9872 135.425 53.7213C135.786 54.5314 135.743 54.5988 134.692 54.886C134.078 55.0537 131.655 55.1909 129.308 55.1909C125.752 55.1909 125.004 55.1157 124.82 54.7406C124.302 53.6823 124.637 52.9095 126.063 51.8759C126.868 51.2924 127.618 50.531 127.729 50.1834C127.84 49.8361 128.245 49.4877 128.628 49.4092C129.743 49.1806 129.465 48.1898 128.1 47.5288C127.075 47.0324 126.289 46.9362 123.264 46.9362C119.441 46.9362 118.688 47.14 118.251 48.2942C118.049 48.8257 118.434 49.2882 120.418 50.8982C122.647 52.7065 122.822 52.9399 122.716 53.9524L122.601 55.0486L119.331 55.2635C115.99 55.4829 113.271 55.3363 112.177 54.8778C111.713 54.6828 111.614 54.3811 111.77 53.6299C112.027 52.39 111.339 52.1119 109.313 52.6356C108.056 52.9607 107.806 52.9459 107.192 52.511C106.81 52.2397 106.4 51.7139 106.281 51.3428C106.097 50.7684 105.807 50.6548 104.34 50.5811C102.756 50.5014 102.607 50.4299 102.5 49.7018C102.414 49.1143 102.672 48.6984 103.499 48.0933C104.669 47.2379 104.913 46.4301 104.179 45.8545C103.387 45.234 102.528 45.497 101.11 46.7942C99.4518 48.3107 98.7007 48.2934 97.341 46.7068C96.8454 46.1284 96.2346 45.4854 95.9831 45.2773C95.1939 44.6246 93.6718 41.7591 93.7862 41.1411C93.8687 40.6959 94.1645 40.5479 94.9857 40.5408C95.8298 40.5337 96.0758 40.403 96.0758 39.9624C96.0758 39.5411 95.7927 39.3681 94.9857 39.2969C93.0686 39.1272 92.8767 38.8087 93.0766 36.1262C93.2048 34.4027 93.4708 33.4116 93.9952 32.704C94.401 32.156 95.1579 30.5549 95.6772 29.1459C96.1964 27.737 96.7905 26.1785 96.9969 25.6827C97.2036 25.1868 98.0132 22.8812 98.7962 20.5591C99.5789 18.237 100.706 15.2482 101.3 13.9175C101.894 12.5868 102.727 10.4092 103.15 9.07851C104.078 6.16261 105.254 3.14054 105.724 2.4645C105.913 2.19267 106.068 1.77623 106.068 1.53941C106.068 1.3023 106.384 1.10846 106.769 1.10846C107.282 1.10846 107.658 1.5081 108.176 2.60284ZM109.343 36.3306C108.01 36.5239 106.465 37.4826 106.211 38.2733C106.001 38.9289 105.84 38.9673 103.213 38.9895C98.8664 39.0262 97.3475 39.2664 97.3475 39.918C97.3475 40.4343 98.9289 40.6729 102.389 40.6783C105.42 40.6831 105.608 40.7378 106.536 41.88C107.248 42.757 109.61 43.8057 110.868 43.804C113.071 43.8011 115.512 41.6529 115.514 39.7153C115.515 38.8153 115.258 38.4128 114.105 37.5093C113.329 36.9016 112.361 36.4043 111.954 36.4043C111.548 36.4043 110.997 36.3582 110.731 36.3019C110.465 36.2458 109.84 36.2586 109.343 36.3306ZM138.658 37.4097C139.153 37.6639 139.79 38.3069 140.074 38.8383C140.524 39.6826 140.519 39.943 140.033 40.8946C138.732 43.4425 134.735 43.6653 133.034 41.2851C132.062 39.926 132.333 38.9072 134.003 37.6366C135.122 36.7855 135.497 36.6602 136.537 36.7926C137.208 36.8777 138.163 37.1555 138.658 37.4097ZM112.095 37.4251C113.313 37.7894 113.689 38.0815 114.052 38.9431C114.45 39.8861 114.414 40.1454 113.742 41.1767C112.821 42.5911 112.62 42.6981 110.841 42.7175C109.024 42.7371 107.62 41.9965 107.197 40.7938C106.617 39.1472 107.265 38.014 109.157 37.3681C110.531 36.8988 110.323 36.8948 112.095 37.4251ZM126.858 47.9464C127.326 48.3124 126.323 50.4911 125.402 51.1119C123.942 52.0951 123.169 51.9365 121.034 50.2153C118.461 48.1414 118.774 47.816 123.358 47.8009C125.173 47.795 126.749 47.8604 126.858 47.9464ZM124.236 65.3615C123.537 65.4261 122.809 65.5978 122.619 65.7429C122.43 65.8884 121.819 66.0074 121.262 66.0074C120.349 66.0074 118.387 66.4158 111.7 67.9985C110.501 68.2823 108.294 68.9238 106.795 69.4242C105.296 69.9247 103.497 70.4547 102.798 70.6024C102.098 70.7498 100.954 71.0416 100.254 71.2505C98.3315 71.8252 94.5605 72.7594 91.7154 73.366C90.3165 73.6643 87.7003 74.307 85.9016 74.7944C84.103 75.2817 81.667 75.888 80.4883 76.1421C78.7038 76.5267 77.9727 76.8973 76.1185 78.357C74.8939 79.3213 73.3649 80.4038 72.721 80.7631C71.0892 81.6734 70.8497 82.6346 72.0143 83.6027C72.8678 84.3123 72.9423 84.5992 73.0586 87.6162C73.152 90.0339 73.0677 90.8958 72.7298 90.9844C72.4801 91.0498 72.2756 90.9206 72.2756 90.6972C72.2756 90.4737 71.418 89.5984 70.3705 88.7522C69.3225 87.9059 68.3004 87.0062 68.0994 86.7528C67.8981 86.4998 67.4156 85.9396 67.0272 85.5087C66.3673 84.7768 66.3615 84.7014 66.9363 84.3724C67.2746 84.1782 67.5519 83.8799 67.5519 83.7091C67.5519 83.5386 67.7564 83.2967 68.0061 83.1714C68.5286 82.9096 71.8944 79.8491 73.7348 77.9625C74.4219 77.258 75.947 75.7849 77.1239 74.689C78.3005 73.5932 79.5312 72.4403 79.8582 72.1272C80.1852 71.8141 81.1474 70.9092 81.9966 70.1165C82.8454 69.3235 83.5383 68.4909 83.5369 68.2663C83.534 67.8493 81.9864 67.146 81.0718 67.146C80.7935 67.146 80.1616 66.8969 79.6678 66.5926C78.6271 65.9513 77.9705 66.0671 76.4542 67.1599C75.8547 67.592 75.0371 67.9916 74.6374 68.0477C74.2377 68.1041 73.9794 68.2122 74.0629 68.2885C74.4074 68.6016 71.502 71.8856 68.5257 74.5467C65.464 77.2841 60.8904 80.8089 60.4002 80.8089C59.1346 80.8089 57.7702 81.6791 57.542 82.6318C57.0987 84.4831 57.1165 85.5115 57.6088 86.4653C58.2335 87.6751 58.2578 90.3175 57.6481 90.7137C57.3974 90.8768 56.7589 91.0954 56.2291 91.1996C54.7375 91.493 53.7863 92.5044 53.3306 94.282C53.1013 95.1766 52.9778 95.9426 53.0563 95.9842C53.1348 96.0257 53.8179 96.4712 54.5744 96.9739C55.679 97.7077 56.2717 97.8876 57.5867 97.8876C61.5727 97.8876 63.3667 94.683 60.8355 92.0837C59.357 90.5651 59.6804 89.3482 61.5622 89.3482C62.5858 89.3482 63.0825 89.6303 64.9436 91.2696C66.1431 92.3262 67.916 93.9595 68.8825 94.8988C69.8494 95.8381 71.1717 97.055 71.8206 97.6029C73.1262 98.7045 73.6 99.5311 73.1291 99.8844C72.9594 100.012 60.9874 100.184 46.5241 100.266L20.2278 100.416L18.0909 102.1C15.709 103.978 15.3657 104.877 16.9143 105.182C17.4423 105.285 21.9799 105.276 26.9976 105.162C32.0153 105.047 38.0832 104.995 40.4814 105.046C47.0499 105.186 50.641 105.122 54.6525 104.794C56.8708 104.613 58.9936 104.594 60.1029 104.747C61.1022 104.884 65.19 105.13 69.187 105.292C79.6816 105.719 79.7794 105.732 80.2459 106.781C80.4588 107.259 80.6329 108.025 80.6329 108.483C80.6329 109.122 80.7804 109.293 81.2688 109.219C81.7357 109.149 81.9642 108.741 82.1296 107.684C82.401 105.947 82.849 105.237 84.0699 104.611C84.8991 104.185 84.9914 103.956 84.9754 102.364L84.958 100.592L82.9599 99.3119C81.8607 98.6083 80.6834 97.9502 80.3429 97.8494C80.0028 97.749 78.6435 96.7686 77.3219 95.6713L74.9194 93.6757L74.7148 91.4409C74.6022 90.2116 74.5506 87.9429 74.6 86.399C74.6777 83.9724 74.7846 83.5486 75.3903 83.2699C76.6079 82.7098 79.3313 81.948 80.118 81.9478C80.5344 81.9475 80.981 81.8646 81.1103 81.7633C81.3963 81.5393 85.011 80.5465 85.5877 80.5336C86.3351 80.5169 86.4885 82.9682 86.0172 87.4016C85.4431 92.8007 85.4445 93.3896 86.0383 96.749C86.6305 100.098 86.6178 110.041 86.0194 111.605C85.6876 112.473 85.6982 113.137 86.0677 114.625C86.3282 115.674 86.6829 116.672 86.8555 116.844C87.0284 117.015 87.1294 117.857 87.0807 118.714C86.9932 120.246 87.0255 120.301 88.9608 121.889C90.4288 123.094 91.186 123.506 91.9363 123.506C92.852 123.506 92.965 123.389 93.1903 122.212C93.3266 121.5 93.3382 120.428 93.2161 119.83C93.094 119.232 93.1652 118.017 93.3742 117.131C93.6089 116.137 93.7815 108.424 93.8251 96.9915L93.8956 78.4629L96.8025 77.9123C98.4013 77.6098 100.036 77.2531 100.436 77.1199C102.427 76.4567 114.375 73.4998 117.835 72.8141C118.61 72.6604 119.336 72.6057 119.448 72.6928C119.853 73.0105 117.266 76.521 113.154 81.2344C111.555 83.067 109.914 84.9932 109.508 85.5146C107.956 87.5069 106.751 88.1339 106.289 87.1901C106.167 86.9424 106.068 85.2092 106.068 83.3385C106.068 79.4045 106.045 79.3788 102.954 79.9598C100.01 80.5132 99.7406 80.8752 99.8275 84.1637C99.9009 86.9319 99.5186 88.9961 98.8729 89.3186C98.1527 89.6784 98.0165 91.2815 98.6276 92.2072C98.9572 92.7065 99.1523 93.3381 99.0615 93.6108C98.9703 93.8832 99.0284 94.2917 99.1901 94.518C99.3518 94.7445 99.3605 95.6451 99.209 96.5196C99.0208 97.6049 99.0695 98.2548 99.362 98.5682C99.6621 98.8895 99.7548 100.415 99.6716 103.652C99.5593 108.001 99.14 110.381 98.3435 111.188C98.1175 111.418 98.2628 112.219 98.7657 113.516C99.4975 115.404 99.5339 116.112 99.5644 128.991C99.5818 136.414 99.7036 142.618 99.8344 142.777C100.226 143.253 102.334 144 103.285 144C103.772 144 104.532 143.771 104.973 143.491L105.775 142.982L105.947 128.761C106.041 120.939 106.108 112.33 106.096 109.629C106.073 104.644 106.163 104.323 107.409 104.943C108.332 105.403 109.814 107.464 109.806 108.277C109.802 108.747 110.005 109.323 110.258 109.558C110.51 109.793 110.776 110.237 110.848 110.544C110.935 110.916 111.416 111.184 112.285 111.345C113.279 111.529 113.786 111.858 114.405 112.721C114.852 113.345 115.531 114.008 115.912 114.195C116.294 114.381 116.606 114.656 116.606 114.806C116.606 114.955 117.022 115.418 117.532 115.835C118.041 116.251 118.5 116.899 118.552 117.274C118.768 118.858 119.755 120.536 121.13 121.661C124.098 124.087 127.143 127.096 127.143 127.602C127.143 127.704 127.581 128.306 128.116 128.939C129.136 130.146 130.583 130.906 131.864 130.906C132.281 130.906 133.082 131.172 133.643 131.497C134.983 132.273 137.087 132.17 137.242 131.32C137.304 130.983 136.54 129.807 135.425 128.524C132.437 125.084 130.995 123.331 128.369 119.948C127.033 118.225 125.416 116.304 124.777 115.678C124.137 115.052 123.008 113.707 122.269 112.689C119.865 109.38 116.769 105.708 114.879 103.925C114.428 103.501 113.632 102.513 113.108 101.73C112.175 100.335 112.167 100.275 112.693 98.6615C112.988 97.7564 113.089 96.9482 112.919 96.8657C112.748 96.7829 112.609 96.3798 112.609 95.9696C112.609 95.5595 112.42 94.8145 112.189 94.3141C111.807 93.4873 111.874 93.2826 112.928 92.0592C113.565 91.3194 114.485 90.0991 114.971 89.3477C115.457 88.5959 116.234 87.7443 116.698 87.4551C117.162 87.1656 117.753 86.526 118.01 86.0335C118.268 85.5411 118.752 84.9007 119.087 84.6103C119.421 84.32 119.926 83.7299 120.21 83.2995C120.493 82.8692 120.961 82.5168 121.248 82.5168C121.615 82.5168 121.708 82.3181 121.559 81.8518C121.417 81.4109 121.618 80.8949 122.155 80.319C122.6 79.8417 123.619 78.4566 124.418 77.2414C125.303 75.8959 126.26 74.8533 126.865 74.5757C127.487 74.29 127.791 73.9521 127.678 73.6706C127.578 73.4232 128.096 72.4307 128.828 71.4646C130.182 69.677 131.047 69.114 130.404 70.4379C130.21 70.8395 130.05 71.5824 130.05 72.0888C130.05 72.5952 129.846 73.1696 129.596 73.3654C129.346 73.561 129.12 74.2592 129.093 74.9168C128.978 77.7598 128.527 79.5106 127.499 81.1058C126.903 82.0295 126.416 83.0408 126.416 83.3531C126.416 83.6653 126.188 84.3413 125.908 84.8554C125.628 85.3695 124.959 86.7509 124.421 87.925C123.148 90.7034 121.627 93.6851 121.297 94.0449C120.801 94.5871 117.696 101.162 117.696 101.67C117.696 102.189 118.679 103.434 120.106 104.719C120.54 105.11 120.954 105.687 121.026 106C121.099 106.313 121.394 106.569 121.684 106.569C122.247 106.569 122.591 106.118 124.079 103.438C124.6 102.499 125.666 100.696 126.448 99.4315C127.23 98.1671 127.87 96.9895 127.87 96.8147C127.87 96.64 128.2 96.0584 128.604 95.5225C129.008 94.9865 129.568 93.8584 129.85 93.0156C130.743 90.3391 134.285 84.994 135.263 84.8443C135.594 84.7936 135.864 84.8816 135.864 85.0396C135.864 85.1978 136.395 85.3672 137.045 85.4164C137.95 85.4847 138.253 85.655 138.342 86.1466C138.406 86.4992 138.774 86.9202 139.161 87.0825C139.743 87.3261 139.855 87.664 139.816 89.0422C139.759 91.0171 139.988 91.398 141.101 91.1791C141.789 91.0439 142.042 91.1942 142.558 92.0467C142.902 92.6137 143.274 93.5194 143.386 94.0594C143.561 94.9056 143.489 95.0411 142.86 95.0411C142.459 95.0411 141.916 94.8396 141.655 94.5934C141.395 94.3472 140.524 93.8829 139.721 93.5621C136.131 92.1275 131.254 93.7534 130.57 96.6132C130.242 97.9832 130.659 99.0956 132.026 100.496C133.007 101.5 133.316 102.169 133.685 104.084C133.934 105.378 134.268 106.5 134.426 106.577C135.172 106.938 135.864 105.76 135.864 104.13V102.442L137.226 102.441C139.561 102.438 143.122 100.151 143.129 98.6501C143.13 98.3649 143.399 97.9214 143.727 97.6644C144.28 97.2315 144.402 97.2693 145.398 98.183C145.989 98.725 147.053 100.1 147.763 101.24C149.214 103.57 151.015 105.002 152.5 105.007C153.043 105.009 154.082 105.087 154.808 105.181C155.854 105.317 156.29 105.228 156.891 104.756C157.793 104.05 157.851 104.207 154.745 99.0025C153.553 97.0066 152.579 95.2227 152.579 95.0383C152.579 94.8535 151.516 92.9834 150.217 90.8819C148.918 88.7804 147.855 86.9956 147.855 86.9157C147.855 86.8357 147.297 85.8451 146.616 84.7148C145.934 83.5842 145.189 82.1057 144.96 81.4294C144.731 80.7528 144.23 79.7964 143.847 79.3037C143.465 78.811 143.056 77.8272 142.938 77.1179C142.587 75.005 141.177 72.0461 140.316 71.6149C140.065 71.4896 139.861 71.0171 139.861 70.5643C139.861 70.1117 139.684 69.6557 139.468 69.5512C139.252 69.4464 139.171 69.0625 139.288 68.6978C139.404 68.3332 139.341 67.9575 139.146 67.8633C138.664 67.6299 136.954 68.539 136.954 69.0289C136.954 69.4803 135.657 69.5671 135.319 69.1385C135.195 68.9819 134.777 68.8538 134.389 68.8538C134.001 68.8538 133.684 68.7118 133.684 68.5384C133.684 68.1166 131.881 68.4752 131.049 69.0625C130.46 69.4786 130.413 69.457 130.413 68.7653C130.413 67.6498 129.371 66.1523 128.226 65.6225C127.228 65.1606 126.756 65.1298 124.236 65.3615ZM128.053 66.6945C129.592 67.8994 129.572 68.6446 127.945 70.78C127.142 71.8341 125.391 74.2336 124.054 76.1123C122.718 77.9909 121.487 79.5678 121.32 79.6165C121.152 79.6652 120.406 80.7218 119.662 81.9648C118.917 83.2076 118.17 84.2246 118.002 84.2246C117.834 84.2246 117.696 84.3729 117.696 84.5543C117.696 84.7353 117.06 85.536 116.284 86.3333C115.507 87.1303 114.516 88.2951 114.082 88.9213C113.648 89.5475 112.721 90.7643 112.022 91.6254C110.966 92.9279 110.802 93.3344 111.044 94.0449C111.204 94.5145 111.346 96.1797 111.361 97.7453C111.386 100.406 111.696 102.109 112.217 102.442C112.339 102.52 113.217 103.481 114.168 104.577C115.118 105.673 116.358 107.082 116.923 107.708C117.488 108.334 118.819 109.935 119.882 111.266C120.945 112.597 123.218 115.38 124.933 117.451C133.116 127.331 133.431 127.754 132.948 128.21C132.541 128.595 132.391 128.591 131.573 128.171C130.722 127.734 130.624 127.733 130.218 128.169C129.814 128.602 129.725 128.6 129.042 128.135C128.636 127.859 127.859 126.992 127.316 126.21C126.139 124.512 125.062 123.439 122.515 121.426C120.918 120.164 120.553 119.676 120.24 118.386C120.036 117.541 119.619 116.586 119.315 116.264C119.011 115.941 118.382 115.27 117.917 114.771C117.453 114.272 116.641 113.462 116.113 112.97C115.584 112.478 115.152 111.893 115.152 111.669C115.152 111.137 113.352 109.558 112.745 109.558C112.487 109.558 111.693 108.65 110.982 107.54C110.272 106.431 109.454 105.338 109.165 105.112C108.876 104.885 108.115 104.128 107.474 103.429C106.833 102.729 106.189 102.157 106.043 102.157C105.441 102.157 104.911 105.216 104.946 108.487C105.035 116.773 104.687 141.761 104.48 141.923C104.098 142.222 101.222 142.028 100.951 141.684C100.811 141.507 100.701 135.633 100.706 128.632C100.713 119.279 100.592 115.501 100.252 114.39C99.8773 113.165 99.8776 112.358 100.254 110.13C101.088 105.195 100.876 92.783 99.9354 91.4056C99.588 90.897 99.6236 90.599 100.121 89.8489C100.576 89.1638 100.779 87.954 100.896 85.2209C101.073 81.0654 101.23 80.8089 103.594 80.8089C105.157 80.8089 105.01 80.4443 105.135 84.6516C105.177 86.0606 105.24 87.4343 105.276 87.7041C105.351 88.2686 107.208 89.1171 107.737 88.8293C107.932 88.7234 108.727 87.8681 109.502 86.9288C110.278 85.9894 111.146 85.0288 111.431 84.7939C111.716 84.5591 112.793 83.3505 113.823 82.1083C118.742 76.1809 119.517 75.2287 119.752 74.8314C119.891 74.5965 120.384 73.9265 120.849 73.3427C121.313 72.7586 121.693 72.0823 121.693 71.8392C121.693 71.2337 120.719 70.9921 119.761 71.3596C119.324 71.5269 117.741 71.9368 116.242 72.2704C114.743 72.604 110.983 73.5083 107.885 74.28C104.787 75.0517 101.108 75.948 99.7094 76.2719C98.3104 76.5959 96.7901 76.9807 96.3312 77.127C95.8723 77.2733 95.1267 77.3932 94.6746 77.3932C94.2226 77.3932 93.5617 77.56 93.2056 77.7638C92.6089 78.1056 92.5501 78.9519 92.4498 88.6514C92.3902 94.436 92.332 99.6168 92.3208 100.165C92.3095 100.713 92.3655 102.122 92.4451 103.296C92.7339 107.554 92.6456 115.427 92.2932 116.854C92.0948 117.657 92.0297 119.227 92.1489 120.341C92.3451 122.174 92.3026 122.367 91.7031 122.367C90.9771 122.367 88.7101 120.578 88.2573 119.648C88.1011 119.328 88.0553 118.728 88.1559 118.316C88.2562 117.904 88.076 116.948 87.7551 116.191C87.1734 114.82 87.1679 112.844 87.7246 105.858C87.9216 103.385 87.2784 94.9865 86.8031 93.8271C86.6095 93.3543 86.6291 92.047 86.8525 90.5537C87.3623 87.1479 87.3874 80.0088 86.8911 79.6199C86.426 79.2556 75.1163 82.0357 74.4303 82.683C73.9023 83.1814 72.7563 83.2099 72.5368 82.7302C72.2759 82.1604 79.1075 77.1623 80.4203 76.9625C81.3738 76.8173 87.7889 75.2751 96.4646 73.1058C97.6778 72.8024 98.8795 72.5542 99.1349 72.5542C99.3903 72.5542 100.115 72.3811 100.745 72.1696C101.847 71.7996 104.494 71.0166 107.158 70.2731C107.858 70.0778 109.095 69.6784 109.907 69.3858C110.72 69.0932 111.603 68.8538 111.869 68.8538C112.135 68.8538 113.269 68.6119 114.388 68.3164C117.916 67.3848 120.449 66.8622 121.543 66.8394C122.125 66.8274 123.255 66.6487 124.055 66.4423C126.227 65.8813 127.084 65.9354 128.053 66.6945ZM142.554 66.9655C142.257 67.5738 143.695 70.5993 146.005 74.2228C147.166 76.0448 148.323 78.0478 148.576 78.6741C148.828 79.3003 149.401 80.1969 149.847 80.6666C151.045 81.9258 154.759 87.6717 154.759 88.2666C154.759 88.5484 154.893 88.7789 155.058 88.7789C155.489 88.7789 157.302 91.959 157.302 92.7147C157.302 93.0648 157.546 93.4243 157.843 93.5137C158.14 93.6031 158.876 94.4354 159.478 95.3633C160.695 97.2403 160.877 98.7879 160.03 100.061C159.731 100.509 159.48 101.133 159.471 101.446C159.463 101.759 158.825 103.168 158.054 104.577C157.036 106.437 156.393 107.24 155.705 107.51C154.92 107.818 154.754 108.085 154.73 109.076C154.61 113.993 153.105 119.907 151.275 122.647C150.77 123.405 150.151 125.101 149.851 126.552C149.204 129.689 148.355 132.485 146.603 137.252C145.867 139.254 145.316 141.176 145.379 141.521C145.484 142.098 145.693 142.15 147.936 142.15C150.96 142.15 151.688 141.68 152.384 139.278C153.636 134.956 154.928 131.462 155.888 129.8C156.466 128.799 156.939 127.672 156.939 127.295C156.939 126.917 157.195 126.22 157.509 125.745C157.823 125.27 158.241 124.091 158.438 123.126C158.636 122.161 159.043 120.986 159.343 120.517C159.644 120.047 160.112 118.958 160.384 118.097C161.375 114.959 162.074 113.058 163.263 110.27C163.931 108.704 164.625 106.975 164.805 106.427C165.001 105.832 165.459 105.317 165.942 105.15C166.817 104.845 166.995 104.171 166.337 103.656C166.029 103.415 166.029 103.007 166.337 102.05C166.564 101.344 166.75 100.42 166.75 99.9965C166.75 99.573 167.303 97.9325 167.979 96.3511C169.718 92.2843 170.681 89.7257 171.265 87.6167C171.543 86.6122 172.375 84.2531 173.113 82.3744C174.926 77.7598 175.524 75.4428 175.075 74.7844C174.638 74.1448 172.84 74.085 172.2 74.689C171.951 74.9239 171.221 75.116 170.577 75.116C169.026 75.116 168.291 75.8097 167.84 77.6977C167.495 79.1397 166.942 80.7152 165.299 84.9362C164.933 85.8756 164.534 86.9965 164.413 87.4269C163.991 88.925 163.415 88.5225 160.864 84.9473C160.524 84.4714 160.05 83.7621 159.809 83.3707C159.388 82.685 157.857 80.2817 152.512 71.9098C150.053 68.0588 149.978 67.9797 148.138 67.2843C146.023 66.4853 142.878 66.3057 142.554 66.9655ZM79.8934 68.2845C81.0475 68.2845 80.8901 69.9113 79.6318 70.9898C79.0831 71.46 78.0138 72.4497 77.2547 73.1887C76.496 73.9279 75.6759 74.6959 75.4321 74.8954C75.1883 75.0949 73.8932 76.3471 72.5543 77.6778C71.2149 79.0085 69.2026 80.8658 68.082 81.8052C66.9614 82.7445 65.8288 83.8907 65.565 84.3524C65.1173 85.1366 65.1664 85.2775 66.311 86.4873C67.6325 87.884 67.6144 87.8684 69.0889 88.8709C69.6347 89.2418 70.3705 90.0493 70.724 90.6653C71.3984 91.8397 71.9365 92.4198 73.2483 93.3862C73.6836 93.707 74.2348 94.3383 74.4732 94.7898C74.7119 95.2412 75.0455 95.6104 75.2141 95.6104C75.3827 95.6104 75.9906 95.9628 76.5643 96.3932C78.8826 98.1315 80.2325 98.9966 81.3073 99.4321C82.5235 99.9245 83.3029 100.897 83.6597 102.368C83.9199 103.439 83.6568 104.15 83.0002 104.15C82.7466 104.15 82.349 104.329 82.1169 104.548C81.5217 105.11 78.9585 105.248 76.8176 104.834C75.8183 104.641 72.3846 104.395 69.187 104.289C65.9894 104.182 62.5556 104.019 61.5564 103.928C59.341 103.724 54.5115 103.769 50.8372 104.027C49.3384 104.132 47.458 104.217 46.6586 104.217C45.8592 104.216 40.218 104.228 34.1224 104.243C28.027 104.258 21.8651 104.273 20.4298 104.276C18.9942 104.28 17.6995 104.189 17.5531 104.074C17.2671 103.85 19.1835 102.178 19.7409 102.165C19.9251 102.161 20.3339 101.976 20.6493 101.754C21.1217 101.421 23.9693 101.335 36.7548 101.268C48.0255 101.209 52.4 101.275 52.7009 101.511C53.0112 101.754 53.3084 101.739 53.884 101.453C54.4741 101.16 56.7895 101.069 63.8539 101.064C71.6422 101.058 73.1909 100.987 73.9372 100.604C74.4223 100.355 74.8191 99.9501 74.8191 99.7039C74.8191 99.2439 73.5535 97.6823 72.7701 97.176C72.3021 96.8734 70.619 95.295 68.8236 93.475C67.9218 92.5607 65.2874 90.1768 63.3877 88.5561C63.1523 88.3551 62.4804 88.1297 61.8947 88.0548C59.3646 87.7323 59.2305 87.662 58.7876 86.4278C58.0107 84.2636 58.6884 82.2321 60.1865 82.2321C60.8442 82.2321 71.1793 73.9843 71.1888 73.452C71.1935 73.1887 74.3642 70.0445 76.0603 68.6213C77.4142 67.4853 77.524 67.448 78.3186 67.8559C78.7779 68.0915 79.4865 68.2845 79.8934 68.2845ZM147.753 68.0449C148.995 68.3403 149.331 68.8015 156.215 79.6703C158.823 83.7866 158.763 83.6978 160.814 86.5018C163.107 89.6352 163.644 90.1162 164.345 89.6611C164.658 89.4573 165.242 88.4388 165.643 87.3978C167.455 82.691 168.509 79.7255 168.741 78.684C168.879 78.0632 169.229 77.1965 169.518 76.7578C169.945 76.1123 170.17 76.0129 170.703 76.2364C171.14 76.4194 171.491 76.4114 171.744 76.213C171.955 76.0482 172.47 75.9987 172.89 76.1031C174.009 76.3812 173.878 77.474 172.229 81.6307C171.446 83.6052 170.615 85.9894 170.382 86.9288C169.975 88.5723 169.347 90.2258 167.028 95.7527C166.437 97.1617 165.82 98.8909 165.657 99.5954C164.612 104.112 164.732 103.755 161.627 111.551C160.827 113.557 160.003 115.871 159.446 117.67C159.252 118.297 158.841 119.234 158.533 119.753C158.225 120.271 157.72 121.68 157.411 122.884C157.103 124.087 156.715 125.204 156.55 125.367C156.384 125.53 156.07 126.299 155.85 127.075C155.631 127.852 155.129 129.011 154.736 129.653C154.343 130.294 153.762 131.575 153.445 132.499C152.262 135.949 151.802 137.353 151.345 138.902C151.087 139.778 150.759 140.642 150.616 140.824C150.472 141.005 149.548 141.154 148.56 141.154C146.825 141.154 146.765 141.126 146.765 140.335C146.765 139.885 147.017 138.957 147.325 138.273C148.306 136.094 150.594 128.759 151.285 125.575C151.443 124.847 152.582 122.364 152.952 121.94C153.089 121.783 153.651 120.118 154.201 118.24C154.751 116.361 155.428 114.307 155.706 113.676C155.985 113.044 156.212 111.986 156.212 111.325C156.212 110.663 156.518 109.578 156.892 108.914C158.932 105.297 159.814 103.552 160.378 102.015C160.723 101.076 161.131 100.179 161.286 100.022C161.441 99.8659 161.681 99.2436 161.821 98.6393C162.051 97.6385 161.745 97.0186 158.374 91.6655C154.005 84.725 154.467 85.4443 152.361 82.3167C151.432 80.9396 150.448 79.6105 150.172 79.3632C149.897 79.1161 149.672 78.7125 149.672 78.4663C149.672 78.2203 149.018 77.0171 148.218 75.7926C147.419 74.5681 146.765 73.4024 146.765 73.2026C146.765 73.0025 146.623 72.8388 146.45 72.8388C146.277 72.8388 145.618 71.7276 144.987 70.3696C143.542 67.2635 143.747 67.0916 147.753 68.0449ZM141.096 70.6756C140.963 70.9471 141.034 71.31 141.254 71.4822C141.545 71.7099 141.72 71.6607 141.896 71.3018C142.029 71.0302 141.958 70.6673 141.738 70.4951C141.447 70.2674 141.272 70.3166 141.096 70.6756ZM138.278 71.6413C140.105 72.922 141.143 74.496 141.417 76.402C141.531 77.1876 142.098 78.5966 142.679 79.5331C143.259 80.4696 143.941 81.6842 144.195 82.2321C145.667 85.417 146.177 86.3694 146.455 86.4542C146.625 86.5066 146.765 86.7147 146.765 86.9171C146.765 87.1192 147.682 88.7417 148.803 90.5224C149.924 92.3031 151.253 94.6534 151.756 95.7448C152.259 96.8364 153.467 98.9991 154.441 100.551C155.415 102.102 156.212 103.547 156.212 103.761C156.212 104.048 155.625 104.15 153.98 104.15C151.979 104.15 151.642 104.062 150.717 103.304C150.149 102.839 149.323 101.846 148.881 101.098C148.438 100.35 147.383 98.9052 146.536 97.8876C145.493 96.6346 144.914 95.578 144.744 94.6142C144.606 93.8314 144.371 93.0629 144.221 92.9063C144.071 92.7497 143.494 91.5969 142.937 90.3445C142.38 89.0921 141.727 87.9748 141.487 87.8615C141.247 87.7485 140.847 87.0845 140.597 86.3859C140.347 85.6877 139.69 84.7996 139.135 84.4128C138.581 84.0257 138.065 83.5623 137.988 83.3827C137.912 83.203 137.231 82.9466 136.475 82.8131C135.31 82.6073 134.994 82.6611 134.393 83.1666C134.003 83.4945 133.684 83.9776 133.684 84.24C133.684 84.5024 133.397 85.0225 133.048 85.3959C132.122 86.3839 131.14 87.8214 131.14 88.188C131.14 88.3628 130.76 88.9833 130.296 89.5674C129.831 90.1512 129.242 91.2696 128.985 92.0524C128.729 92.8351 128.132 94.1445 127.659 94.9623C127.186 95.7798 126.695 96.7723 126.568 97.1683C126.442 97.5639 126.192 97.8876 126.014 97.8876C125.835 97.8876 125.69 98.0865 125.69 98.3299C125.69 98.9627 122.103 104.719 121.708 104.719C121.354 104.719 119.876 103.209 119.876 102.847C119.876 102.727 119.615 102.403 119.296 102.127C118.678 101.592 118.577 101.869 121.704 95.5111C122.078 94.7516 122.637 93.8277 122.946 93.4574C123.256 93.087 123.51 92.534 123.51 92.2286C123.51 91.9228 123.633 91.6302 123.784 91.5779C123.935 91.5258 124.327 90.8426 124.655 90.0598C124.982 89.2771 125.691 87.74 126.23 86.6441C126.769 85.5482 127.379 84.0752 127.585 83.3707C127.791 82.6662 128.233 81.7696 128.566 81.3782C130.563 79.031 131.08 77.8503 130.931 75.9836C130.815 74.5379 130.944 73.8863 131.539 72.9237C132.208 71.8409 132.436 71.7003 133.522 71.7003C134.376 71.7003 134.866 71.5278 135.137 71.131C135.702 70.3047 136.573 70.4464 138.278 71.6413ZM178.866 81.366C177.799 81.74 177.271 82.1439 176.973 82.8125C176.122 84.7256 176.687 86.0842 178.896 87.4383C180.104 88.1786 180.295 88.2111 181.737 87.9176C182.74 87.7135 183.704 87.2347 184.482 86.5542C185.572 85.6017 185.661 85.3905 185.451 84.254C185.173 82.7453 184.735 82.1493 183.494 81.5931C181.898 80.8775 180.46 80.8069 178.866 81.366ZM181.466 82.2321C181.589 82.3887 182.057 82.5168 182.505 82.5168C183.666 82.5168 184.191 83.0468 184.191 84.2181C184.191 85.1722 183.453 86.3765 182.577 86.8533C181.07 87.6728 178.301 86.4656 177.829 84.7834C177.519 83.6767 178.342 82.3744 179.351 82.3744C179.778 82.3744 180.252 82.2785 180.403 82.161C180.783 81.8661 181.199 81.894 181.466 82.2321ZM59.8246 92.6726C60.9169 93.5798 61.0575 93.8559 60.8784 94.7363C60.2501 97.8193 54.4708 97.7037 54.4708 94.6085C54.4708 93.2379 54.9901 92.5528 56.3941 92.0714C58.1332 91.4751 58.4493 91.5303 59.8246 92.6726ZM140.174 94.7699C142.355 96.0277 143.07 98.0159 141.678 98.9499C141.278 99.218 140.951 99.5991 140.951 99.797C140.951 100.449 138.305 101.524 136.381 101.655C134.712 101.768 134.479 101.71 133.928 101.043C133.594 100.638 132.911 99.8718 132.412 99.3398C130.94 97.772 131.392 96.1683 133.744 94.6181C134.783 93.9333 135.158 93.8559 136.942 93.9569C138.351 94.0369 139.331 94.2831 140.174 94.7699ZM174.992 99.7232C173.121 100.246 172.393 100.816 171.878 102.16C171.404 103.402 171.605 103.914 173.131 105.352C173.584 105.779 174.155 106.611 174.401 107.203C174.646 107.793 175.068 108.38 175.34 108.505C175.673 108.659 175.834 109.317 175.834 110.533C175.834 112.379 176.331 113.152 177.236 112.714C177.494 112.589 177.801 111.924 177.918 111.236C178.035 110.548 178.364 109.851 178.648 109.686C178.933 109.522 179.274 108.709 179.407 107.88C179.637 106.445 179.716 106.354 181.039 105.999C181.941 105.757 182.802 105.709 183.489 105.863C184.24 106.032 184.628 105.994 184.824 105.731C185.382 104.982 189.048 104.421 192.25 104.594C195.908 104.792 230.711 104.748 231.131 104.545C231.714 104.262 231.412 103.934 230.427 103.779C229.785 103.679 229.022 103.174 228.302 102.374C226.089 99.9145 227.141 100.012 203.729 100.1C185.944 100.166 182.933 100.117 181.792 99.7437C180.168 99.2126 176.856 99.2023 174.992 99.7232ZM236.333 99.9276C234.931 100.535 233.972 101.409 233.972 102.079C233.972 103.666 236.283 105.569 238.213 105.572C239.349 105.574 241.144 104.282 241.431 103.257C241.749 102.123 240.747 100.34 239.55 99.9128C238.436 99.5152 237.273 99.5203 236.333 99.9276ZM6.11556 100.712C5.37539 101.292 5.05345 101.826 5.05345 102.473C5.05345 103.523 6.34957 105.204 7.35608 105.458C8.61295 105.776 10.437 105.29 11.4192 104.376C12.2168 103.633 12.3374 103.312 12.1354 102.464C11.8483 101.261 11.4519 100.838 10.094 100.288C8.52974 99.6546 7.2983 99.7856 6.11556 100.712ZM182.011 100.735C183.678 100.968 188.468 101.018 198.286 100.905C208.971 100.781 212.376 100.825 212.959 101.095C213.563 101.374 213.752 101.373 213.883 101.089C214.008 100.819 215.156 100.768 218.65 100.88C221.181 100.96 223.769 101.092 224.4 101.173C225.556 101.32 227.794 102.828 227.794 103.459C227.794 103.975 226.734 104.042 219.437 103.991C215.74 103.966 209.935 103.937 206.538 103.929C203.14 103.92 199.339 103.898 198.09 103.88C196.841 103.863 193.897 103.823 191.549 103.791C185.892 103.716 181.971 104.083 181.372 104.744C181.08 105.067 180.198 105.318 178.92 105.443C177.582 105.574 176.924 105.769 176.924 106.033C176.924 106.25 176.797 106.427 176.641 106.427C176.111 106.427 174.744 105.542 174.744 105.198C174.744 105.01 174.417 104.696 174.017 104.5C173.028 104.017 172.996 101.912 173.968 101.26C175.751 100.064 176.756 99.9985 182.011 100.735ZM239.62 101.148C240.608 101.922 240.721 102.457 240.089 103.386C239.109 104.827 237.909 105.036 236.439 104.022C234.651 102.789 234.759 101.331 236.684 100.72C237.954 100.317 238.697 100.425 239.62 101.148ZM10.1405 101.303C11.6238 102.465 10.5173 104.719 8.46324 104.719C7.47599 104.719 6.14354 103.471 6.14354 102.546C6.14354 101.666 7.35862 100.734 8.50539 100.734C9.00501 100.734 9.74082 100.99 10.1405 101.303ZM0.52198 101.478C-0.140427 101.997 -0.149511 102.097 0.365371 103.253C0.840649 104.321 1.55611 104.401 2.33225 103.473C3.34094 102.267 1.75123 100.515 0.52198 101.478ZM244.353 101.466C243.419 102.198 243.621 103.535 244.725 103.929C245.56 104.227 245.744 104.186 246.352 103.567C247.192 102.71 247.199 102.598 246.466 101.72C245.787 100.909 245.16 100.834 244.353 101.466ZM135.298 129.831C136.135 130.767 136.03 131.268 135.046 131.037C133.873 130.762 133.186 130.167 133.441 129.648C133.755 129.006 134.639 129.093 135.298 129.831Z\" \u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__title\" data-text=\"editionsItem\"\u003EStandard Editions \u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__subtitle\"\u003EPS4\u003C\u002Fdiv\u003E\u003Cul class=\"editions-item__description\"\u003E\u003Cli data-text=\"editionsdescriptionPs5Offline\"\u003EOffline play enabled\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionPs5Remote\"\u003ERemote Play supported\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionPs5Trigger\"\u003ETrigger effect required\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"editions-item__price\"\u003E18.99$\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__btn buy-button\" data-value=\"2\" data-text=\"buy\"\u003EBUY NOW   \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item\"\u003E \u003Cdiv class=\"editions-item__img light-3\"\u003E\u003Csvg width=\"247\" height=\"144\" viewBox=\"0 0 247 144\"  xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M105.506 0.66185C104.855 1.44007 103.045 5.73821 102.268 8.3521C101.986 9.29968 101.157 11.4197 100.426 13.0635C99.6948 14.7074 98.7937 17.013 98.4234 18.1871C98.0532 19.3613 97.5884 20.7703 97.3904 21.3182C97.1924 21.8662 96.7066 23.2111 96.3109 24.307C94.2099 30.1219 93.32 32.2585 92.8171 32.694C92.5108 32.959 92.2605 33.3791 92.2605 33.6276C92.2605 33.8764 92.0791 34.1272 91.8575 34.185C91.5632 34.2618 91.5661 35.0153 91.8688 36.9839C92.0966 38.4654 92.3451 40.0856 92.4214 40.5841C92.6729 42.2324 94.0642 44.9571 95.0576 45.7467C95.3178 45.9536 95.5307 46.2232 95.5307 46.3458C95.5307 46.4685 96.2789 47.1719 97.1935 47.9091C98.6306 49.0676 98.9972 49.2247 99.898 49.0699C100.87 48.9025 100.967 48.9674 101.335 50.0394C101.682 51.0482 101.914 51.2312 103.238 51.5423C104.068 51.737 105.397 52.3814 106.193 52.9743C107.616 54.0344 108.714 54.3284 109.157 53.7677C109.538 53.2838 110.481 53.448 110.382 53.9811C110.031 55.8692 112.317 56.4778 118.701 56.1965C121.046 56.0929 125.662 55.9833 128.96 55.9529C136.087 55.8868 137.143 55.6432 136.83 54.1363C136.608 53.0606 136.628 53.0518 138.044 53.6256C140.006 54.4201 142.093 52.9519 141.306 51.3308C140.724 50.1313 140.898 49.9389 141.842 50.7373C142.873 51.6086 143.155 51.6425 144.577 51.0667C146.191 50.4128 146.301 49.6346 144.986 48.1738C143.694 46.7372 143.661 46.6515 144.403 46.6515C144.703 46.6515 144.948 46.7785 144.948 46.9336C144.948 47.2823 147.111 48.9287 147.569 48.9287C150.147 48.9287 154.209 43.9292 154.738 40.1047C155.182 36.8982 155.121 36.1413 154.206 33.5579C153.68 32.0706 153.036 30.1493 152.775 29.2882C152.515 28.4272 152.039 27.2104 151.716 26.5842C151.16 25.5051 148.94 19.6277 148.174 17.2051C147.979 16.5869 147.32 14.7936 146.71 13.2201C146.101 11.6469 145.48 9.97514 145.329 9.50548C144.72 7.5995 141.887 0.658719 141.591 0.348456C141.193 -0.0691175 139.107 0.115902 138.715 0.603213C138.555 0.802749 138.001 2.0549 137.484 3.38562C136.968 4.71633 136.407 6.12532 136.239 6.51671C136.071 6.9081 135.734 7.86877 135.49 8.65154C134.669 11.2882 132.555 15.9063 131.873 16.5513C131.748 16.6691 129.939 16.563 127.851 16.3153C124.02 15.861 121.075 15.9 117.337 16.4551C115.821 16.6799 115.25 16.6671 114.954 16.4016C114.632 16.1129 112.954 12.1609 111.541 8.3669C109.187 2.04266 108.483 0.584711 107.638 0.282988C106.396 -0.160203 106.158 -0.118076 105.506 0.66185ZM108.176 2.60284C108.564 3.4249 109.416 5.63431 110.068 7.51297C110.72 9.39162 111.628 11.6972 112.085 12.6366C112.543 13.5759 113.025 14.7287 113.156 15.1984C113.56 16.6455 114.105 17.5697 114.65 17.7337C114.937 17.8199 115.862 17.7089 116.706 17.4872C119.911 16.6452 122.808 16.6549 131.234 17.5353C132.537 17.6716 132.624 17.6284 133.164 16.5806C133.475 15.9769 133.944 15.0987 134.208 14.6291C134.931 13.3365 136.45 9.54476 137.456 6.51671C138.903 2.16193 139.458 1.10846 140.303 1.10846C140.926 1.10846 140.968 1.17649 140.575 1.54738C140.222 1.88013 140.212 2.06657 140.53 2.31592C140.762 2.49724 140.951 2.93076 140.951 3.27945C140.951 3.64322 141.208 3.95235 141.554 4.00529C141.941 4.06421 142.387 4.71007 142.798 5.8051C143.15 6.74443 144.126 9.30623 144.965 11.498C145.805 13.6898 146.869 16.6358 147.33 18.0448C147.791 19.4538 148.766 22.0797 149.498 23.88C150.229 25.6804 151.313 28.5521 151.905 30.262C152.498 31.9719 153.147 33.6114 153.348 33.9057C153.549 34.2 153.809 35.3278 153.925 36.4117C154.228 39.2462 154.128 39.304 149.161 39.1398C146.944 39.0666 144.267 38.9977 143.213 38.9863C141.574 38.969 141.251 38.8733 140.98 38.3257C140.356 37.0593 138.073 35.835 136.336 35.835C134.336 35.835 131.73 37.7524 131.5 39.3931C131.282 40.9484 131.559 41.5715 132.957 42.6665C134.253 43.6818 134.601 43.8051 136.173 43.8051C138.621 43.8051 140.44 42.8316 141.095 41.1721C141.271 40.7267 141.867 40.674 146.724 40.674C149.711 40.674 152.414 40.7517 152.73 40.8468C153.341 41.0304 153.525 42.2418 152.982 42.5048C152.805 42.5908 152.55 43.0021 152.416 43.4191C152.283 43.8361 151.709 44.7017 151.143 45.3433C148.623 48.194 147.865 48.3899 146.082 46.6515C144.893 45.4925 143.986 45.2414 143.204 45.8545C142.542 46.3732 142.675 47.0347 143.676 48.19C144.708 49.3816 144.8 49.8578 144.085 50.3223C143.695 50.5762 143.329 50.4595 142.412 49.7878C140.284 48.231 138.376 48.9204 139.657 50.7832C140.892 52.5804 139.725 53.4836 137.69 52.3052L136.576 51.6599L135.809 52.2605C135.155 52.7731 135.099 52.9872 135.425 53.7213C135.786 54.5314 135.743 54.5988 134.692 54.886C134.078 55.0537 131.655 55.1909 129.308 55.1909C125.752 55.1909 125.004 55.1157 124.82 54.7406C124.302 53.6823 124.637 52.9095 126.063 51.8759C126.868 51.2924 127.618 50.531 127.729 50.1834C127.84 49.8361 128.245 49.4877 128.628 49.4092C129.743 49.1806 129.465 48.1898 128.1 47.5288C127.075 47.0324 126.289 46.9362 123.264 46.9362C119.441 46.9362 118.688 47.14 118.251 48.2942C118.049 48.8257 118.434 49.2882 120.418 50.8982C122.647 52.7065 122.822 52.9399 122.716 53.9524L122.601 55.0486L119.331 55.2635C115.99 55.4829 113.271 55.3363 112.177 54.8778C111.713 54.6828 111.614 54.3811 111.77 53.6299C112.027 52.39 111.339 52.1119 109.313 52.6356C108.056 52.9607 107.806 52.9459 107.192 52.511C106.81 52.2397 106.4 51.7139 106.281 51.3428C106.097 50.7684 105.807 50.6548 104.34 50.5811C102.756 50.5014 102.607 50.4299 102.5 49.7018C102.414 49.1143 102.672 48.6984 103.499 48.0933C104.669 47.2379 104.913 46.4301 104.179 45.8545C103.387 45.234 102.528 45.497 101.11 46.7942C99.4518 48.3107 98.7007 48.2934 97.341 46.7068C96.8454 46.1284 96.2346 45.4854 95.9831 45.2773C95.1939 44.6246 93.6718 41.7591 93.7862 41.1411C93.8687 40.6959 94.1645 40.5479 94.9857 40.5408C95.8298 40.5337 96.0758 40.403 96.0758 39.9624C96.0758 39.5411 95.7927 39.3681 94.9857 39.2969C93.0686 39.1272 92.8767 38.8087 93.0766 36.1262C93.2048 34.4027 93.4708 33.4116 93.9952 32.704C94.401 32.156 95.1579 30.5549 95.6772 29.1459C96.1964 27.737 96.7905 26.1785 96.9969 25.6827C97.2036 25.1868 98.0132 22.8812 98.7962 20.5591C99.5789 18.237 100.706 15.2482 101.3 13.9175C101.894 12.5868 102.727 10.4092 103.15 9.07851C104.078 6.16261 105.254 3.14054 105.724 2.4645C105.913 2.19267 106.068 1.77623 106.068 1.53941C106.068 1.3023 106.384 1.10846 106.769 1.10846C107.282 1.10846 107.658 1.5081 108.176 2.60284ZM109.343 36.3306C108.01 36.5239 106.465 37.4826 106.211 38.2733C106.001 38.9289 105.84 38.9673 103.213 38.9895C98.8664 39.0262 97.3475 39.2664 97.3475 39.918C97.3475 40.4343 98.9289 40.6729 102.389 40.6783C105.42 40.6831 105.608 40.7378 106.536 41.88C107.248 42.757 109.61 43.8057 110.868 43.804C113.071 43.8011 115.512 41.6529 115.514 39.7153C115.515 38.8153 115.258 38.4128 114.105 37.5093C113.329 36.9016 112.361 36.4043 111.954 36.4043C111.548 36.4043 110.997 36.3582 110.731 36.3019C110.465 36.2458 109.84 36.2586 109.343 36.3306ZM138.658 37.4097C139.153 37.6639 139.79 38.3069 140.074 38.8383C140.524 39.6826 140.519 39.943 140.033 40.8946C138.732 43.4425 134.735 43.6653 133.034 41.2851C132.062 39.926 132.333 38.9072 134.003 37.6366C135.122 36.7855 135.497 36.6602 136.537 36.7926C137.208 36.8777 138.163 37.1555 138.658 37.4097ZM112.095 37.4251C113.313 37.7894 113.689 38.0815 114.052 38.9431C114.45 39.8861 114.414 40.1454 113.742 41.1767C112.821 42.5911 112.62 42.6981 110.841 42.7175C109.024 42.7371 107.62 41.9965 107.197 40.7938C106.617 39.1472 107.265 38.014 109.157 37.3681C110.531 36.8988 110.323 36.8948 112.095 37.4251ZM126.858 47.9464C127.326 48.3124 126.323 50.4911 125.402 51.1119C123.942 52.0951 123.169 51.9365 121.034 50.2153C118.461 48.1414 118.774 47.816 123.358 47.8009C125.173 47.795 126.749 47.8604 126.858 47.9464ZM124.236 65.3615C123.537 65.4261 122.809 65.5978 122.619 65.7429C122.43 65.8884 121.819 66.0074 121.262 66.0074C120.349 66.0074 118.387 66.4158 111.7 67.9985C110.501 68.2823 108.294 68.9238 106.795 69.4242C105.296 69.9247 103.497 70.4547 102.798 70.6024C102.098 70.7498 100.954 71.0416 100.254 71.2505C98.3315 71.8252 94.5605 72.7594 91.7154 73.366C90.3165 73.6643 87.7003 74.307 85.9016 74.7944C84.103 75.2817 81.667 75.888 80.4883 76.1421C78.7038 76.5267 77.9727 76.8973 76.1185 78.357C74.8939 79.3213 73.3649 80.4038 72.721 80.7631C71.0892 81.6734 70.8497 82.6346 72.0143 83.6027C72.8678 84.3123 72.9423 84.5992 73.0586 87.6162C73.152 90.0339 73.0677 90.8958 72.7298 90.9844C72.4801 91.0498 72.2756 90.9206 72.2756 90.6972C72.2756 90.4737 71.418 89.5984 70.3705 88.7522C69.3225 87.9059 68.3004 87.0062 68.0994 86.7528C67.8981 86.4998 67.4156 85.9396 67.0272 85.5087C66.3673 84.7768 66.3615 84.7014 66.9363 84.3724C67.2746 84.1782 67.5519 83.8799 67.5519 83.7091C67.5519 83.5386 67.7564 83.2967 68.0061 83.1714C68.5286 82.9096 71.8944 79.8491 73.7348 77.9625C74.4219 77.258 75.947 75.7849 77.1239 74.689C78.3005 73.5932 79.5312 72.4403 79.8582 72.1272C80.1852 71.8141 81.1474 70.9092 81.9966 70.1165C82.8454 69.3235 83.5383 68.4909 83.5369 68.2663C83.534 67.8493 81.9864 67.146 81.0718 67.146C80.7935 67.146 80.1616 66.8969 79.6678 66.5926C78.6271 65.9513 77.9705 66.0671 76.4542 67.1599C75.8547 67.592 75.0371 67.9916 74.6374 68.0477C74.2377 68.1041 73.9794 68.2122 74.0629 68.2885C74.4074 68.6016 71.502 71.8856 68.5257 74.5467C65.464 77.2841 60.8904 80.8089 60.4002 80.8089C59.1346 80.8089 57.7702 81.6791 57.542 82.6318C57.0987 84.4831 57.1165 85.5115 57.6088 86.4653C58.2335 87.6751 58.2578 90.3175 57.6481 90.7137C57.3974 90.8768 56.7589 91.0954 56.2291 91.1996C54.7375 91.493 53.7863 92.5044 53.3306 94.282C53.1013 95.1766 52.9778 95.9426 53.0563 95.9842C53.1348 96.0257 53.8179 96.4712 54.5744 96.9739C55.679 97.7077 56.2717 97.8876 57.5867 97.8876C61.5727 97.8876 63.3667 94.683 60.8355 92.0837C59.357 90.5651 59.6804 89.3482 61.5622 89.3482C62.5858 89.3482 63.0825 89.6303 64.9436 91.2696C66.1431 92.3262 67.916 93.9595 68.8825 94.8988C69.8494 95.8381 71.1717 97.055 71.8206 97.6029C73.1262 98.7045 73.6 99.5311 73.1291 99.8844C72.9594 100.012 60.9874 100.184 46.5241 100.266L20.2278 100.416L18.0909 102.1C15.709 103.978 15.3657 104.877 16.9143 105.182C17.4423 105.285 21.9799 105.276 26.9976 105.162C32.0153 105.047 38.0832 104.995 40.4814 105.046C47.0499 105.186 50.641 105.122 54.6525 104.794C56.8708 104.613 58.9936 104.594 60.1029 104.747C61.1022 104.884 65.19 105.13 69.187 105.292C79.6816 105.719 79.7794 105.732 80.2459 106.781C80.4588 107.259 80.6329 108.025 80.6329 108.483C80.6329 109.122 80.7804 109.293 81.2688 109.219C81.7357 109.149 81.9642 108.741 82.1296 107.684C82.401 105.947 82.849 105.237 84.0699 104.611C84.8991 104.185 84.9914 103.956 84.9754 102.364L84.958 100.592L82.9599 99.3119C81.8607 98.6083 80.6834 97.9502 80.3429 97.8494C80.0028 97.749 78.6435 96.7686 77.3219 95.6713L74.9194 93.6757L74.7148 91.4409C74.6022 90.2116 74.5506 87.9429 74.6 86.399C74.6777 83.9724 74.7846 83.5486 75.3903 83.2699C76.6079 82.7098 79.3313 81.948 80.118 81.9478C80.5344 81.9475 80.981 81.8646 81.1103 81.7633C81.3963 81.5393 85.011 80.5465 85.5877 80.5336C86.3351 80.5169 86.4885 82.9682 86.0172 87.4016C85.4431 92.8007 85.4445 93.3896 86.0383 96.749C86.6305 100.098 86.6178 110.041 86.0194 111.605C85.6876 112.473 85.6982 113.137 86.0677 114.625C86.3282 115.674 86.6829 116.672 86.8555 116.844C87.0284 117.015 87.1294 117.857 87.0807 118.714C86.9932 120.246 87.0255 120.301 88.9608 121.889C90.4288 123.094 91.186 123.506 91.9363 123.506C92.852 123.506 92.965 123.389 93.1903 122.212C93.3266 121.5 93.3382 120.428 93.2161 119.83C93.094 119.232 93.1652 118.017 93.3742 117.131C93.6089 116.137 93.7815 108.424 93.8251 96.9915L93.8956 78.4629L96.8025 77.9123C98.4013 77.6098 100.036 77.2531 100.436 77.1199C102.427 76.4567 114.375 73.4998 117.835 72.8141C118.61 72.6604 119.336 72.6057 119.448 72.6928C119.853 73.0105 117.266 76.521 113.154 81.2344C111.555 83.067 109.914 84.9932 109.508 85.5146C107.956 87.5069 106.751 88.1339 106.289 87.1901C106.167 86.9424 106.068 85.2092 106.068 83.3385C106.068 79.4045 106.045 79.3788 102.954 79.9598C100.01 80.5132 99.7406 80.8752 99.8275 84.1637C99.9009 86.9319 99.5186 88.9961 98.8729 89.3186C98.1527 89.6784 98.0165 91.2815 98.6276 92.2072C98.9572 92.7065 99.1523 93.3381 99.0615 93.6108C98.9703 93.8832 99.0284 94.2917 99.1901 94.518C99.3518 94.7445 99.3605 95.6451 99.209 96.5196C99.0208 97.6049 99.0695 98.2548 99.362 98.5682C99.6621 98.8895 99.7548 100.415 99.6716 103.652C99.5593 108.001 99.14 110.381 98.3435 111.188C98.1175 111.418 98.2628 112.219 98.7657 113.516C99.4975 115.404 99.5339 116.112 99.5644 128.991C99.5818 136.414 99.7036 142.618 99.8344 142.777C100.226 143.253 102.334 144 103.285 144C103.772 144 104.532 143.771 104.973 143.491L105.775 142.982L105.947 128.761C106.041 120.939 106.108 112.33 106.096 109.629C106.073 104.644 106.163 104.323 107.409 104.943C108.332 105.403 109.814 107.464 109.806 108.277C109.802 108.747 110.005 109.323 110.258 109.558C110.51 109.793 110.776 110.237 110.848 110.544C110.935 110.916 111.416 111.184 112.285 111.345C113.279 111.529 113.786 111.858 114.405 112.721C114.852 113.345 115.531 114.008 115.912 114.195C116.294 114.381 116.606 114.656 116.606 114.806C116.606 114.955 117.022 115.418 117.532 115.835C118.041 116.251 118.5 116.899 118.552 117.274C118.768 118.858 119.755 120.536 121.13 121.661C124.098 124.087 127.143 127.096 127.143 127.602C127.143 127.704 127.581 128.306 128.116 128.939C129.136 130.146 130.583 130.906 131.864 130.906C132.281 130.906 133.082 131.172 133.643 131.497C134.983 132.273 137.087 132.17 137.242 131.32C137.304 130.983 136.54 129.807 135.425 128.524C132.437 125.084 130.995 123.331 128.369 119.948C127.033 118.225 125.416 116.304 124.777 115.678C124.137 115.052 123.008 113.707 122.269 112.689C119.865 109.38 116.769 105.708 114.879 103.925C114.428 103.501 113.632 102.513 113.108 101.73C112.175 100.335 112.167 100.275 112.693 98.6615C112.988 97.7564 113.089 96.9482 112.919 96.8657C112.748 96.7829 112.609 96.3798 112.609 95.9696C112.609 95.5595 112.42 94.8145 112.189 94.3141C111.807 93.4873 111.874 93.2826 112.928 92.0592C113.565 91.3194 114.485 90.0991 114.971 89.3477C115.457 88.5959 116.234 87.7443 116.698 87.4551C117.162 87.1656 117.753 86.526 118.01 86.0335C118.268 85.5411 118.752 84.9007 119.087 84.6103C119.421 84.32 119.926 83.7299 120.21 83.2995C120.493 82.8692 120.961 82.5168 121.248 82.5168C121.615 82.5168 121.708 82.3181 121.559 81.8518C121.417 81.4109 121.618 80.8949 122.155 80.319C122.6 79.8417 123.619 78.4566 124.418 77.2414C125.303 75.8959 126.26 74.8533 126.865 74.5757C127.487 74.29 127.791 73.9521 127.678 73.6706C127.578 73.4232 128.096 72.4307 128.828 71.4646C130.182 69.677 131.047 69.114 130.404 70.4379C130.21 70.8395 130.05 71.5824 130.05 72.0888C130.05 72.5952 129.846 73.1696 129.596 73.3654C129.346 73.561 129.12 74.2592 129.093 74.9168C128.978 77.7598 128.527 79.5106 127.499 81.1058C126.903 82.0295 126.416 83.0408 126.416 83.3531C126.416 83.6653 126.188 84.3413 125.908 84.8554C125.628 85.3695 124.959 86.7509 124.421 87.925C123.148 90.7034 121.627 93.6851 121.297 94.0449C120.801 94.5871 117.696 101.162 117.696 101.67C117.696 102.189 118.679 103.434 120.106 104.719C120.54 105.11 120.954 105.687 121.026 106C121.099 106.313 121.394 106.569 121.684 106.569C122.247 106.569 122.591 106.118 124.079 103.438C124.6 102.499 125.666 100.696 126.448 99.4315C127.23 98.1671 127.87 96.9895 127.87 96.8147C127.87 96.64 128.2 96.0584 128.604 95.5225C129.008 94.9865 129.568 93.8584 129.85 93.0156C130.743 90.3391 134.285 84.994 135.263 84.8443C135.594 84.7936 135.864 84.8816 135.864 85.0396C135.864 85.1978 136.395 85.3672 137.045 85.4164C137.95 85.4847 138.253 85.655 138.342 86.1466C138.406 86.4992 138.774 86.9202 139.161 87.0825C139.743 87.3261 139.855 87.664 139.816 89.0422C139.759 91.0171 139.988 91.398 141.101 91.1791C141.789 91.0439 142.042 91.1942 142.558 92.0467C142.902 92.6137 143.274 93.5194 143.386 94.0594C143.561 94.9056 143.489 95.0411 142.86 95.0411C142.459 95.0411 141.916 94.8396 141.655 94.5934C141.395 94.3472 140.524 93.8829 139.721 93.5621C136.131 92.1275 131.254 93.7534 130.57 96.6132C130.242 97.9832 130.659 99.0956 132.026 100.496C133.007 101.5 133.316 102.169 133.685 104.084C133.934 105.378 134.268 106.5 134.426 106.577C135.172 106.938 135.864 105.76 135.864 104.13V102.442L137.226 102.441C139.561 102.438 143.122 100.151 143.129 98.6501C143.13 98.3649 143.399 97.9214 143.727 97.6644C144.28 97.2315 144.402 97.2693 145.398 98.183C145.989 98.725 147.053 100.1 147.763 101.24C149.214 103.57 151.015 105.002 152.5 105.007C153.043 105.009 154.082 105.087 154.808 105.181C155.854 105.317 156.29 105.228 156.891 104.756C157.793 104.05 157.851 104.207 154.745 99.0025C153.553 97.0066 152.579 95.2227 152.579 95.0383C152.579 94.8535 151.516 92.9834 150.217 90.8819C148.918 88.7804 147.855 86.9956 147.855 86.9157C147.855 86.8357 147.297 85.8451 146.616 84.7148C145.934 83.5842 145.189 82.1057 144.96 81.4294C144.731 80.7528 144.23 79.7964 143.847 79.3037C143.465 78.811 143.056 77.8272 142.938 77.1179C142.587 75.005 141.177 72.0461 140.316 71.6149C140.065 71.4896 139.861 71.0171 139.861 70.5643C139.861 70.1117 139.684 69.6557 139.468 69.5512C139.252 69.4464 139.171 69.0625 139.288 68.6978C139.404 68.3332 139.341 67.9575 139.146 67.8633C138.664 67.6299 136.954 68.539 136.954 69.0289C136.954 69.4803 135.657 69.5671 135.319 69.1385C135.195 68.9819 134.777 68.8538 134.389 68.8538C134.001 68.8538 133.684 68.7118 133.684 68.5384C133.684 68.1166 131.881 68.4752 131.049 69.0625C130.46 69.4786 130.413 69.457 130.413 68.7653C130.413 67.6498 129.371 66.1523 128.226 65.6225C127.228 65.1606 126.756 65.1298 124.236 65.3615ZM128.053 66.6945C129.592 67.8994 129.572 68.6446 127.945 70.78C127.142 71.8341 125.391 74.2336 124.054 76.1123C122.718 77.9909 121.487 79.5678 121.32 79.6165C121.152 79.6652 120.406 80.7218 119.662 81.9648C118.917 83.2076 118.17 84.2246 118.002 84.2246C117.834 84.2246 117.696 84.3729 117.696 84.5543C117.696 84.7353 117.06 85.536 116.284 86.3333C115.507 87.1303 114.516 88.2951 114.082 88.9213C113.648 89.5475 112.721 90.7643 112.022 91.6254C110.966 92.9279 110.802 93.3344 111.044 94.0449C111.204 94.5145 111.346 96.1797 111.361 97.7453C111.386 100.406 111.696 102.109 112.217 102.442C112.339 102.52 113.217 103.481 114.168 104.577C115.118 105.673 116.358 107.082 116.923 107.708C117.488 108.334 118.819 109.935 119.882 111.266C120.945 112.597 123.218 115.38 124.933 117.451C133.116 127.331 133.431 127.754 132.948 128.21C132.541 128.595 132.391 128.591 131.573 128.171C130.722 127.734 130.624 127.733 130.218 128.169C129.814 128.602 129.725 128.6 129.042 128.135C128.636 127.859 127.859 126.992 127.316 126.21C126.139 124.512 125.062 123.439 122.515 121.426C120.918 120.164 120.553 119.676 120.24 118.386C120.036 117.541 119.619 116.586 119.315 116.264C119.011 115.941 118.382 115.27 117.917 114.771C117.453 114.272 116.641 113.462 116.113 112.97C115.584 112.478 115.152 111.893 115.152 111.669C115.152 111.137 113.352 109.558 112.745 109.558C112.487 109.558 111.693 108.65 110.982 107.54C110.272 106.431 109.454 105.338 109.165 105.112C108.876 104.885 108.115 104.128 107.474 103.429C106.833 102.729 106.189 102.157 106.043 102.157C105.441 102.157 104.911 105.216 104.946 108.487C105.035 116.773 104.687 141.761 104.48 141.923C104.098 142.222 101.222 142.028 100.951 141.684C100.811 141.507 100.701 135.633 100.706 128.632C100.713 119.279 100.592 115.501 100.252 114.39C99.8773 113.165 99.8776 112.358 100.254 110.13C101.088 105.195 100.876 92.783 99.9354 91.4056C99.588 90.897 99.6236 90.599 100.121 89.8489C100.576 89.1638 100.779 87.954 100.896 85.2209C101.073 81.0654 101.23 80.8089 103.594 80.8089C105.157 80.8089 105.01 80.4443 105.135 84.6516C105.177 86.0606 105.24 87.4343 105.276 87.7041C105.351 88.2686 107.208 89.1171 107.737 88.8293C107.932 88.7234 108.727 87.8681 109.502 86.9288C110.278 85.9894 111.146 85.0288 111.431 84.7939C111.716 84.5591 112.793 83.3505 113.823 82.1083C118.742 76.1809 119.517 75.2287 119.752 74.8314C119.891 74.5965 120.384 73.9265 120.849 73.3427C121.313 72.7586 121.693 72.0823 121.693 71.8392C121.693 71.2337 120.719 70.9921 119.761 71.3596C119.324 71.5269 117.741 71.9368 116.242 72.2704C114.743 72.604 110.983 73.5083 107.885 74.28C104.787 75.0517 101.108 75.948 99.7094 76.2719C98.3104 76.5959 96.7901 76.9807 96.3312 77.127C95.8723 77.2733 95.1267 77.3932 94.6746 77.3932C94.2226 77.3932 93.5617 77.56 93.2056 77.7638C92.6089 78.1056 92.5501 78.9519 92.4498 88.6514C92.3902 94.436 92.332 99.6168 92.3208 100.165C92.3095 100.713 92.3655 102.122 92.4451 103.296C92.7339 107.554 92.6456 115.427 92.2932 116.854C92.0948 117.657 92.0297 119.227 92.1489 120.341C92.3451 122.174 92.3026 122.367 91.7031 122.367C90.9771 122.367 88.7101 120.578 88.2573 119.648C88.1011 119.328 88.0553 118.728 88.1559 118.316C88.2562 117.904 88.076 116.948 87.7551 116.191C87.1734 114.82 87.1679 112.844 87.7246 105.858C87.9216 103.385 87.2784 94.9865 86.8031 93.8271C86.6095 93.3543 86.6291 92.047 86.8525 90.5537C87.3623 87.1479 87.3874 80.0088 86.8911 79.6199C86.426 79.2556 75.1163 82.0357 74.4303 82.683C73.9023 83.1814 72.7563 83.2099 72.5368 82.7302C72.2759 82.1604 79.1075 77.1623 80.4203 76.9625C81.3738 76.8173 87.7889 75.2751 96.4646 73.1058C97.6778 72.8024 98.8795 72.5542 99.1349 72.5542C99.3903 72.5542 100.115 72.3811 100.745 72.1696C101.847 71.7996 104.494 71.0166 107.158 70.2731C107.858 70.0778 109.095 69.6784 109.907 69.3858C110.72 69.0932 111.603 68.8538 111.869 68.8538C112.135 68.8538 113.269 68.6119 114.388 68.3164C117.916 67.3848 120.449 66.8622 121.543 66.8394C122.125 66.8274 123.255 66.6487 124.055 66.4423C126.227 65.8813 127.084 65.9354 128.053 66.6945ZM142.554 66.9655C142.257 67.5738 143.695 70.5993 146.005 74.2228C147.166 76.0448 148.323 78.0478 148.576 78.6741C148.828 79.3003 149.401 80.1969 149.847 80.6666C151.045 81.9258 154.759 87.6717 154.759 88.2666C154.759 88.5484 154.893 88.7789 155.058 88.7789C155.489 88.7789 157.302 91.959 157.302 92.7147C157.302 93.0648 157.546 93.4243 157.843 93.5137C158.14 93.6031 158.876 94.4354 159.478 95.3633C160.695 97.2403 160.877 98.7879 160.03 100.061C159.731 100.509 159.48 101.133 159.471 101.446C159.463 101.759 158.825 103.168 158.054 104.577C157.036 106.437 156.393 107.24 155.705 107.51C154.92 107.818 154.754 108.085 154.73 109.076C154.61 113.993 153.105 119.907 151.275 122.647C150.77 123.405 150.151 125.101 149.851 126.552C149.204 129.689 148.355 132.485 146.603 137.252C145.867 139.254 145.316 141.176 145.379 141.521C145.484 142.098 145.693 142.15 147.936 142.15C150.96 142.15 151.688 141.68 152.384 139.278C153.636 134.956 154.928 131.462 155.888 129.8C156.466 128.799 156.939 127.672 156.939 127.295C156.939 126.917 157.195 126.22 157.509 125.745C157.823 125.27 158.241 124.091 158.438 123.126C158.636 122.161 159.043 120.986 159.343 120.517C159.644 120.047 160.112 118.958 160.384 118.097C161.375 114.959 162.074 113.058 163.263 110.27C163.931 108.704 164.625 106.975 164.805 106.427C165.001 105.832 165.459 105.317 165.942 105.15C166.817 104.845 166.995 104.171 166.337 103.656C166.029 103.415 166.029 103.007 166.337 102.05C166.564 101.344 166.75 100.42 166.75 99.9965C166.75 99.573 167.303 97.9325 167.979 96.3511C169.718 92.2843 170.681 89.7257 171.265 87.6167C171.543 86.6122 172.375 84.2531 173.113 82.3744C174.926 77.7598 175.524 75.4428 175.075 74.7844C174.638 74.1448 172.84 74.085 172.2 74.689C171.951 74.9239 171.221 75.116 170.577 75.116C169.026 75.116 168.291 75.8097 167.84 77.6977C167.495 79.1397 166.942 80.7152 165.299 84.9362C164.933 85.8756 164.534 86.9965 164.413 87.4269C163.991 88.925 163.415 88.5225 160.864 84.9473C160.524 84.4714 160.05 83.7621 159.809 83.3707C159.388 82.685 157.857 80.2817 152.512 71.9098C150.053 68.0588 149.978 67.9797 148.138 67.2843C146.023 66.4853 142.878 66.3057 142.554 66.9655ZM79.8934 68.2845C81.0475 68.2845 80.8901 69.9113 79.6318 70.9898C79.0831 71.46 78.0138 72.4497 77.2547 73.1887C76.496 73.9279 75.6759 74.6959 75.4321 74.8954C75.1883 75.0949 73.8932 76.3471 72.5543 77.6778C71.2149 79.0085 69.2026 80.8658 68.082 81.8052C66.9614 82.7445 65.8288 83.8907 65.565 84.3524C65.1173 85.1366 65.1664 85.2775 66.311 86.4873C67.6325 87.884 67.6144 87.8684 69.0889 88.8709C69.6347 89.2418 70.3705 90.0493 70.724 90.6653C71.3984 91.8397 71.9365 92.4198 73.2483 93.3862C73.6836 93.707 74.2348 94.3383 74.4732 94.7898C74.7119 95.2412 75.0455 95.6104 75.2141 95.6104C75.3827 95.6104 75.9906 95.9628 76.5643 96.3932C78.8826 98.1315 80.2325 98.9966 81.3073 99.4321C82.5235 99.9245 83.3029 100.897 83.6597 102.368C83.9199 103.439 83.6568 104.15 83.0002 104.15C82.7466 104.15 82.349 104.329 82.1169 104.548C81.5217 105.11 78.9585 105.248 76.8176 104.834C75.8183 104.641 72.3846 104.395 69.187 104.289C65.9894 104.182 62.5556 104.019 61.5564 103.928C59.341 103.724 54.5115 103.769 50.8372 104.027C49.3384 104.132 47.458 104.217 46.6586 104.217C45.8592 104.216 40.218 104.228 34.1224 104.243C28.027 104.258 21.8651 104.273 20.4298 104.276C18.9942 104.28 17.6995 104.189 17.5531 104.074C17.2671 103.85 19.1835 102.178 19.7409 102.165C19.9251 102.161 20.3339 101.976 20.6493 101.754C21.1217 101.421 23.9693 101.335 36.7548 101.268C48.0255 101.209 52.4 101.275 52.7009 101.511C53.0112 101.754 53.3084 101.739 53.884 101.453C54.4741 101.16 56.7895 101.069 63.8539 101.064C71.6422 101.058 73.1909 100.987 73.9372 100.604C74.4223 100.355 74.8191 99.9501 74.8191 99.7039C74.8191 99.2439 73.5535 97.6823 72.7701 97.176C72.3021 96.8734 70.619 95.295 68.8236 93.475C67.9218 92.5607 65.2874 90.1768 63.3877 88.5561C63.1523 88.3551 62.4804 88.1297 61.8947 88.0548C59.3646 87.7323 59.2305 87.662 58.7876 86.4278C58.0107 84.2636 58.6884 82.2321 60.1865 82.2321C60.8442 82.2321 71.1793 73.9843 71.1888 73.452C71.1935 73.1887 74.3642 70.0445 76.0603 68.6213C77.4142 67.4853 77.524 67.448 78.3186 67.8559C78.7779 68.0915 79.4865 68.2845 79.8934 68.2845ZM147.753 68.0449C148.995 68.3403 149.331 68.8015 156.215 79.6703C158.823 83.7866 158.763 83.6978 160.814 86.5018C163.107 89.6352 163.644 90.1162 164.345 89.6611C164.658 89.4573 165.242 88.4388 165.643 87.3978C167.455 82.691 168.509 79.7255 168.741 78.684C168.879 78.0632 169.229 77.1965 169.518 76.7578C169.945 76.1123 170.17 76.0129 170.703 76.2364C171.14 76.4194 171.491 76.4114 171.744 76.213C171.955 76.0482 172.47 75.9987 172.89 76.1031C174.009 76.3812 173.878 77.474 172.229 81.6307C171.446 83.6052 170.615 85.9894 170.382 86.9288C169.975 88.5723 169.347 90.2258 167.028 95.7527C166.437 97.1617 165.82 98.8909 165.657 99.5954C164.612 104.112 164.732 103.755 161.627 111.551C160.827 113.557 160.003 115.871 159.446 117.67C159.252 118.297 158.841 119.234 158.533 119.753C158.225 120.271 157.72 121.68 157.411 122.884C157.103 124.087 156.715 125.204 156.55 125.367C156.384 125.53 156.07 126.299 155.85 127.075C155.631 127.852 155.129 129.011 154.736 129.653C154.343 130.294 153.762 131.575 153.445 132.499C152.262 135.949 151.802 137.353 151.345 138.902C151.087 139.778 150.759 140.642 150.616 140.824C150.472 141.005 149.548 141.154 148.56 141.154C146.825 141.154 146.765 141.126 146.765 140.335C146.765 139.885 147.017 138.957 147.325 138.273C148.306 136.094 150.594 128.759 151.285 125.575C151.443 124.847 152.582 122.364 152.952 121.94C153.089 121.783 153.651 120.118 154.201 118.24C154.751 116.361 155.428 114.307 155.706 113.676C155.985 113.044 156.212 111.986 156.212 111.325C156.212 110.663 156.518 109.578 156.892 108.914C158.932 105.297 159.814 103.552 160.378 102.015C160.723 101.076 161.131 100.179 161.286 100.022C161.441 99.8659 161.681 99.2436 161.821 98.6393C162.051 97.6385 161.745 97.0186 158.374 91.6655C154.005 84.725 154.467 85.4443 152.361 82.3167C151.432 80.9396 150.448 79.6105 150.172 79.3632C149.897 79.1161 149.672 78.7125 149.672 78.4663C149.672 78.2203 149.018 77.0171 148.218 75.7926C147.419 74.5681 146.765 73.4024 146.765 73.2026C146.765 73.0025 146.623 72.8388 146.45 72.8388C146.277 72.8388 145.618 71.7276 144.987 70.3696C143.542 67.2635 143.747 67.0916 147.753 68.0449ZM141.096 70.6756C140.963 70.9471 141.034 71.31 141.254 71.4822C141.545 71.7099 141.72 71.6607 141.896 71.3018C142.029 71.0302 141.958 70.6673 141.738 70.4951C141.447 70.2674 141.272 70.3166 141.096 70.6756ZM138.278 71.6413C140.105 72.922 141.143 74.496 141.417 76.402C141.531 77.1876 142.098 78.5966 142.679 79.5331C143.259 80.4696 143.941 81.6842 144.195 82.2321C145.667 85.417 146.177 86.3694 146.455 86.4542C146.625 86.5066 146.765 86.7147 146.765 86.9171C146.765 87.1192 147.682 88.7417 148.803 90.5224C149.924 92.3031 151.253 94.6534 151.756 95.7448C152.259 96.8364 153.467 98.9991 154.441 100.551C155.415 102.102 156.212 103.547 156.212 103.761C156.212 104.048 155.625 104.15 153.98 104.15C151.979 104.15 151.642 104.062 150.717 103.304C150.149 102.839 149.323 101.846 148.881 101.098C148.438 100.35 147.383 98.9052 146.536 97.8876C145.493 96.6346 144.914 95.578 144.744 94.6142C144.606 93.8314 144.371 93.0629 144.221 92.9063C144.071 92.7497 143.494 91.5969 142.937 90.3445C142.38 89.0921 141.727 87.9748 141.487 87.8615C141.247 87.7485 140.847 87.0845 140.597 86.3859C140.347 85.6877 139.69 84.7996 139.135 84.4128C138.581 84.0257 138.065 83.5623 137.988 83.3827C137.912 83.203 137.231 82.9466 136.475 82.8131C135.31 82.6073 134.994 82.6611 134.393 83.1666C134.003 83.4945 133.684 83.9776 133.684 84.24C133.684 84.5024 133.397 85.0225 133.048 85.3959C132.122 86.3839 131.14 87.8214 131.14 88.188C131.14 88.3628 130.76 88.9833 130.296 89.5674C129.831 90.1512 129.242 91.2696 128.985 92.0524C128.729 92.8351 128.132 94.1445 127.659 94.9623C127.186 95.7798 126.695 96.7723 126.568 97.1683C126.442 97.5639 126.192 97.8876 126.014 97.8876C125.835 97.8876 125.69 98.0865 125.69 98.3299C125.69 98.9627 122.103 104.719 121.708 104.719C121.354 104.719 119.876 103.209 119.876 102.847C119.876 102.727 119.615 102.403 119.296 102.127C118.678 101.592 118.577 101.869 121.704 95.5111C122.078 94.7516 122.637 93.8277 122.946 93.4574C123.256 93.087 123.51 92.534 123.51 92.2286C123.51 91.9228 123.633 91.6302 123.784 91.5779C123.935 91.5258 124.327 90.8426 124.655 90.0598C124.982 89.2771 125.691 87.74 126.23 86.6441C126.769 85.5482 127.379 84.0752 127.585 83.3707C127.791 82.6662 128.233 81.7696 128.566 81.3782C130.563 79.031 131.08 77.8503 130.931 75.9836C130.815 74.5379 130.944 73.8863 131.539 72.9237C132.208 71.8409 132.436 71.7003 133.522 71.7003C134.376 71.7003 134.866 71.5278 135.137 71.131C135.702 70.3047 136.573 70.4464 138.278 71.6413ZM178.866 81.366C177.799 81.74 177.271 82.1439 176.973 82.8125C176.122 84.7256 176.687 86.0842 178.896 87.4383C180.104 88.1786 180.295 88.2111 181.737 87.9176C182.74 87.7135 183.704 87.2347 184.482 86.5542C185.572 85.6017 185.661 85.3905 185.451 84.254C185.173 82.7453 184.735 82.1493 183.494 81.5931C181.898 80.8775 180.46 80.8069 178.866 81.366ZM181.466 82.2321C181.589 82.3887 182.057 82.5168 182.505 82.5168C183.666 82.5168 184.191 83.0468 184.191 84.2181C184.191 85.1722 183.453 86.3765 182.577 86.8533C181.07 87.6728 178.301 86.4656 177.829 84.7834C177.519 83.6767 178.342 82.3744 179.351 82.3744C179.778 82.3744 180.252 82.2785 180.403 82.161C180.783 81.8661 181.199 81.894 181.466 82.2321ZM59.8246 92.6726C60.9169 93.5798 61.0575 93.8559 60.8784 94.7363C60.2501 97.8193 54.4708 97.7037 54.4708 94.6085C54.4708 93.2379 54.9901 92.5528 56.3941 92.0714C58.1332 91.4751 58.4493 91.5303 59.8246 92.6726ZM140.174 94.7699C142.355 96.0277 143.07 98.0159 141.678 98.9499C141.278 99.218 140.951 99.5991 140.951 99.797C140.951 100.449 138.305 101.524 136.381 101.655C134.712 101.768 134.479 101.71 133.928 101.043C133.594 100.638 132.911 99.8718 132.412 99.3398C130.94 97.772 131.392 96.1683 133.744 94.6181C134.783 93.9333 135.158 93.8559 136.942 93.9569C138.351 94.0369 139.331 94.2831 140.174 94.7699ZM174.992 99.7232C173.121 100.246 172.393 100.816 171.878 102.16C171.404 103.402 171.605 103.914 173.131 105.352C173.584 105.779 174.155 106.611 174.401 107.203C174.646 107.793 175.068 108.38 175.34 108.505C175.673 108.659 175.834 109.317 175.834 110.533C175.834 112.379 176.331 113.152 177.236 112.714C177.494 112.589 177.801 111.924 177.918 111.236C178.035 110.548 178.364 109.851 178.648 109.686C178.933 109.522 179.274 108.709 179.407 107.88C179.637 106.445 179.716 106.354 181.039 105.999C181.941 105.757 182.802 105.709 183.489 105.863C184.24 106.032 184.628 105.994 184.824 105.731C185.382 104.982 189.048 104.421 192.25 104.594C195.908 104.792 230.711 104.748 231.131 104.545C231.714 104.262 231.412 103.934 230.427 103.779C229.785 103.679 229.022 103.174 228.302 102.374C226.089 99.9145 227.141 100.012 203.729 100.1C185.944 100.166 182.933 100.117 181.792 99.7437C180.168 99.2126 176.856 99.2023 174.992 99.7232ZM236.333 99.9276C234.931 100.535 233.972 101.409 233.972 102.079C233.972 103.666 236.283 105.569 238.213 105.572C239.349 105.574 241.144 104.282 241.431 103.257C241.749 102.123 240.747 100.34 239.55 99.9128C238.436 99.5152 237.273 99.5203 236.333 99.9276ZM6.11556 100.712C5.37539 101.292 5.05345 101.826 5.05345 102.473C5.05345 103.523 6.34957 105.204 7.35608 105.458C8.61295 105.776 10.437 105.29 11.4192 104.376C12.2168 103.633 12.3374 103.312 12.1354 102.464C11.8483 101.261 11.4519 100.838 10.094 100.288C8.52974 99.6546 7.2983 99.7856 6.11556 100.712ZM182.011 100.735C183.678 100.968 188.468 101.018 198.286 100.905C208.971 100.781 212.376 100.825 212.959 101.095C213.563 101.374 213.752 101.373 213.883 101.089C214.008 100.819 215.156 100.768 218.65 100.88C221.181 100.96 223.769 101.092 224.4 101.173C225.556 101.32 227.794 102.828 227.794 103.459C227.794 103.975 226.734 104.042 219.437 103.991C215.74 103.966 209.935 103.937 206.538 103.929C203.14 103.92 199.339 103.898 198.09 103.88C196.841 103.863 193.897 103.823 191.549 103.791C185.892 103.716 181.971 104.083 181.372 104.744C181.08 105.067 180.198 105.318 178.92 105.443C177.582 105.574 176.924 105.769 176.924 106.033C176.924 106.25 176.797 106.427 176.641 106.427C176.111 106.427 174.744 105.542 174.744 105.198C174.744 105.01 174.417 104.696 174.017 104.5C173.028 104.017 172.996 101.912 173.968 101.26C175.751 100.064 176.756 99.9985 182.011 100.735ZM239.62 101.148C240.608 101.922 240.721 102.457 240.089 103.386C239.109 104.827 237.909 105.036 236.439 104.022C234.651 102.789 234.759 101.331 236.684 100.72C237.954 100.317 238.697 100.425 239.62 101.148ZM10.1405 101.303C11.6238 102.465 10.5173 104.719 8.46324 104.719C7.47599 104.719 6.14354 103.471 6.14354 102.546C6.14354 101.666 7.35862 100.734 8.50539 100.734C9.00501 100.734 9.74082 100.99 10.1405 101.303ZM0.52198 101.478C-0.140427 101.997 -0.149511 102.097 0.365371 103.253C0.840649 104.321 1.55611 104.401 2.33225 103.473C3.34094 102.267 1.75123 100.515 0.52198 101.478ZM244.353 101.466C243.419 102.198 243.621 103.535 244.725 103.929C245.56 104.227 245.744 104.186 246.352 103.567C247.192 102.71 247.199 102.598 246.466 101.72C245.787 100.909 245.16 100.834 244.353 101.466ZM135.298 129.831C136.135 130.767 136.03 131.268 135.046 131.037C133.873 130.762 133.186 130.167 133.441 129.648C133.755 129.006 134.639 129.093 135.298 129.831Z\" \u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__title\" data-text=\"editionsItemDeluxe\"\u003EDigital Deluxe Edition \u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__subtitle\"\u003EPS5  \u003C\u002Fdiv\u003E\u003Cul class=\"editions-item__description\"\u003E\u003Cli data-text=\"editionsdescriptionFeatures\"\u003EAll features of Standard Edition\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionDragon\"\u003EDragon backpack\u003C\u002Fli\u003E\u003Cli data-text=\"editionsdescriptionSoundtrack\"\u003EOfficial digital soundtrack\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"editions-item__price\"\u003E29.99$\u003C\u002Fdiv\u003E\u003Cdiv class=\"editions-item__btn buy-button\" data-value=\"3\" data-text=\"buy\"\u003EBUY NOW   \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-dual\" id=\"controller\"\u003E\u003Cdiv class=\"container\"\u003E \u003Ch2 data-text=\"сontrollerTiltle\"\u003EDualSense\u003C\u002Fh2\u003E\u003Cdiv class=\"dual flex flex-center\"\u003E \u003Cdiv class=\"dual-description\"\u003E\u003Cp data-text=\"descController1\"\u003EYou can also buy an exclusive controller for PS5 with the game \u003Cspan\u003Ehello kitty\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp data-text=\"descController2\"\u003EIf you purchase a controller and a game (any edition), you will receive a \u003Cspan class=\"orange\"\u003E15%\u003C\u002Fspan\u003E discount on two items.\u003C\u002Fp\u003E\u003Cdiv class=\"dual-description__info flex\"\u003E\u003Cdiv class=\"dual-description__price\"\u003E35.99$\u003C\u002Fdiv\u003E\u003Cdiv class=\"dual-description__button buy-button\" data-value=\"7\" data-text=\"buyGame\"\u003Ebuy dualsense with a game\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dual-img\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! @/img/dual.png */ "./src/img/dual.png"), true, true)+" alt=\"controller\"") + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-about\" id=\"about\"\u003E\u003Ch2 data-text=\"about\"\u003E About Game\u003C\u002Fh2\u003E\u003Cdiv class=\"video\"\u003E\u003Cdiv class=\"video-info\"\u003E\u003Cdiv class=\"video-title\" data-text=\"aboutTitle\"\u003EWatch the Trailer\u003C\u002Fdiv\u003E\u003Cdiv class=\"video-btn\"\u003EPLAY\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cvideo" + (" id=\"video\""+pug.attr("src", __webpack_require__(/*! @/img/video-stray.mp4 */ "./src/img/video-stray.mp4"), true, true)+pug.attr("poster", __webpack_require__(/*! @/img/video-bg.png */ "./src/img/video-bg.png"), true, true)) + "\u003E\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-explore\" id=\"explore\"\u003E \u003Cdiv class=\"container\"\u003E \u003Ch2 class=\"explore-title\" id=\"title-explore\" data-text=\"exploreTitle\"\u003E Explore \u003Cspan\u003EStray\u003C\u002Fspan\u003E series\u003C\u002Fh2\u003E\u003Cdiv class=\"explore-items\"\u003E\u003Cdiv class=\"explore-item\"\u003E\u003Ch3 data-text=\"requirementsPc\"\u003E Here are (PC) System Requirements\u003C\u002Fh3\u003E\u003Cdiv class=\"explore-switch flex flex-center\"\u003E\u003Cdiv class=\"explore-switch__title active\" data-requirements=\"minimum\" data-text=\"minimumPc\"\u003EMinimum\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-switch__checkbox\"\u003E\u003Cinput class=\"checkbox\" type=\"checkbox\" name=\"requirements\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-switch__title\" data-requirements=\"recommended\" data-text=\"recommendedPc\"\u003ERecommended\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-info flex flex-center\"\u003E\u003Cdiv class=\"explore-img\"\u003E\u003Cdiv" + (" class=\"explore-img__wrap req-1\""+pug.attr("style", pug.style(`background-image: url(`+`${__webpack_require__(/*! @/img/reqbg-1.png */ "./src/img/reqbg-1.png")}`+")"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! @/img/req-1.png */ "./src/img/req-1.png"), true, true)+" alt=\"child\"") + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-description\"\u003E \u003Cul class=\"explore-list active\" id=\"minimum\"\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ECPU \u003C\u002Fspan\u003E: Intel i5-2300 or AMD FX-6350\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ERAM \u003C\u002Fspan\u003E: 8 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EOS \u003C\u002Fspan\u003E: Windows 10 64-bit\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVIDEOCARD \u003C\u002Fspan\u003E: NVIDIA GeForce GTX 650 Ti, 2 GB  or AMD Radeon R7 360, 2 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDirectX\u003C\u002Fspan\u003E : Version 12\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVERTEX SHADER \u003C\u002Fspan\u003E : 5.0\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EFREE DISK SPACE \u003C\u002Fspan\u003E : 10 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDEDICATED VIDEO RAM \u003C\u002Fspan\u003E : 2048 MB\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cul class=\"explore-list\" id=\"recommended\"\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ECPU \u003C\u002Fspan\u003E : Intel Core i5-8400 or AMD Ryzen 5 2600\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ERAM \u003C\u002Fspan\u003E : 8 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EOS \u003C\u002Fspan\u003E : Windows 10 64-bit\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVIDEOCARD \u003C\u002Fspan\u003E : NVIDIA GeForce GTX 780, 3 GB or AMD Radeon R9 290X, 4 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDirectX\u003C\u002Fspan\u003E : Version 12\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVERTEX SHADER \u003C\u002Fspan\u003E : 5.0\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EFREE DISK SPACE \u003C\u002Fspan\u003E : 10 GB\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDEDICATED VIDEO RAM \u003C\u002Fspan\u003E : 3 GB (AMD 4GB)\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"explore-button buy-button\" data-value=\"4\" data-text=\"buy\"\u003Ebuy now \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-item\"\u003E\u003Ch3 data-text=\"PStitle\"\u003E\u003Cspan\u003EStray\u003C\u002Fspan\u003E for PS4\u003C\u002Fh3\u003E\u003Cdiv class=\"explore-switch flex flex-center\"\u003E\u003Cdiv class=\"explore-switch__title active\" data-versions=\"standard\" data-text=\"PsRequirementStandard\"\u003EStandard\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-switch__checkbox\"\u003E\u003Cinput class=\"checkbox\" type=\"checkbox\" name=\"versions\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-switch__title\" data-versions=\"limited\" data-text=\"PsRequirementLimited\"\u003ELimited\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-item__price\"\u003E15.99$\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-info flex flex-center reverse\"\u003E\u003Cdiv class=\"explore-img\"\u003E\u003Cdiv" + (" class=\"explore-img__wrap req-2\""+pug.attr("style", pug.style(`background-image: url(`+`${__webpack_require__(/*! @/img/reqbg-2.png */ "./src/img/reqbg-2.png")}`+")"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! @/img/req-2.png */ "./src/img/req-2.png"), true, true)+" alt=\"father\"") + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"explore-description\"\u003E \u003Cul class=\"explore-list active\" id=\"standard\"\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPlatform\u003C\u002Fspan\u003E : PS4\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPremiere\u003C\u002Fspan\u003E : 19.7.2022\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPublisher\u003C\u002Fspan\u003E : ANNAPURNA INTERACTIVE\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ESpecies\u003C\u002Fspan\u003E: Action, Adventure\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVoice\u003C\u002Fspan\u003E : English\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDisplay languages\u003C\u002Fspan\u003E : English\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cul class=\"explore-list\" id=\"limited\"\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPlatform\u003C\u002Fspan\u003E : PS4, PS5\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPremiere\u003C\u002Fspan\u003E :19.7.2022\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EPublisher\u003C\u002Fspan\u003E : ANNAPURNA INTERACTIVE\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003ESpecies\u003C\u002Fspan\u003E : Action, Adventure\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EVoice\u003C\u002Fspan\u003E : English, Polish, Russian etc.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cspan class=\"violet\"\u003EDisplay languages\u003C\u002Fspan\u003E : English,Dutch, Polish, Russian, Turkish etc.\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"explore-button buy-button\" data-value=\"5\" data-text=\"buy\"\u003Ebuy now \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-news\" id=\"news\"\u003E\u003Ch2 data-text=\"news\"\u003ENews\u003C\u002Fh2\u003E\u003Cdiv class=\"news swiper flex flex-center\" style=\"z-index:0;\"\u003E\u003Cdiv class=\"swiper-wrapper\"\u003E\u003Cdiv class=\"swiper-slide news-item\"\u003E\u003Cdiv class=\"news-item__info flex\"\u003E\u003Cdiv class=\"news-item__subtitle\"\u003EStray\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__date\"\u003E19\u002F07\u002F2022\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__title\" data-text=\"newsTitle1\"\u003EReview Roundup For Stray\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__description flex flex-center\"\u003E";
pug_mixins["divBg"].call({
attributes: {"class": "news-item__img"}
}, "news-1.png");
pug_html = pug_html + "\u003Cdiv class=\"news-item__text flex\"\u003E\u003Cp data-text=\"newsSubTitle1\"\u003EStray is the tale of a small cat who falls into a subterranean city inhabited entirely by robots. The titular stray will befriend a drone, explore small hub worlds, and solve puzzles with their feline brain as it seeks to make its way back home...\u003C\u002Fp\u003E\u003Ca class=\"news-item__button\" href=\"#\"\u003Eread \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide news-item\"\u003E\u003Cdiv class=\"news-item__info flex\"\u003E\u003Cdiv class=\"news-item__subtitle\"\u003EStray\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__date\"\u003E19\u002F07\u002F2022\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__title\" data-text=\"newsTitle2\"\u003ECyberpunk Cat Game Stray Coming July 19\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__description flex flex-center\"\u003E";
pug_mixins["divBg"].call({
attributes: {"class": "news-item__img"}
}, "news-2.png");
pug_html = pug_html + "\u003Cdiv class=\"news-item__text flex\"\u003E\u003Cp data-text=\"newsSubTitle2\"\u003EWill Be Free Through PlayStation Plus' Higher Tiers. Stray, the highly-anticipated cyberpunk adventure game in which players take on the role of backpack-wearing cat working its way through a robot-infested city, now has a release date. Originally slated for release in \"early 2022,\" the game officially hits PlayStation 5, PlayStation 4, and PC on July 19. Stray will also be the first day one release for the new and improved PlayStation Plus subscription service, meaning those subscribed to PS+ at its highest tiers will have access to the game without needing to purchase it...\u003C\u002Fp\u003E\u003Ca class=\"news-item__button\" href=\"#\"\u003Eread \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide news-item\"\u003E\u003Cdiv class=\"news-item__info flex\"\u003E\u003Cdiv class=\"news-item__subtitle\"\u003EStray\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__date\"\u003E19\u002F07\u002F2022\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__title\" data-text=\"newsTitle3\"\u003EStray Is (Naturally) A Big Hit With Cats\u003C\u002Fdiv\u003E\u003Cdiv class=\"news-item__description flex flex-center\"\u003E";
pug_mixins["divBg"].call({
attributes: {"class": "news-item__img"}
}, "news-3.png");
pug_html = pug_html + "\u003Cdiv class=\"news-item__text flex\"\u003E\u003Cp data-text=\"newsSubTitle3\"\u003EStray has officially arrived today, giving fans an opportunity to play as a digital version of nature's perfect purring machine. As the titular stray cat lost in a strange city inhabited by robots, it'll be up to you to help the feline find its way home and avoid crossing paths with merciless androids. To celebrate the launch of Stray, people have taken to social media to show off their own household cats just before they start playing. From mischievous kittens to chonky big boys, Twitter alone is full of four-legged Stray fans. Several GameSpot staff members have shared pictures of their own cats observing Stray in action, and we've rounded up a few more below...\u003C\u002Fp\u003E\u003Ca class=\"news-item__button\" href=\"#\"\u003Eread \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-button-prev swiper-button flex flex-center\"\u003E\u003Csvg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 28 28\"\u003E\u003Cpath d=\"M18.72,8.72,13.43,14l5.29,5.28-1.63,1.63L10.17,14l6.92-6.91Z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-button-next swiper-button flex flex-center\"\u003E\u003Csvg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 28 28\"\u003E\u003Cpath d=\"M10.17,19.28,15.46,14,10.17,8.72,11.8,7.09,18.72,14,11.8,20.91Z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Csection class=\"section hidden section-faq\" id=\"faq\"\u003E\u003Cdiv class=\"container\"\u003E \u003Ch2 class=\"clickTest\"\u003EFAQ \u003C\u002Fh2\u003E\u003Cdiv class=\"faq-items flex\"\u003E \u003Cdiv class=\"faq-item\"\u003E\u003Cdiv class=\"faq-item__header flex\"\u003E\u003Cp data-text=\"question1\"\u003EWhen is the release??\u003C\u002Fp\u003E\u003Cspan class=\"faq-item__header-content flex flex-center\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq-item__content\"\u003E\u003Cp data-text=\"answer1\"\u003EThe Game's Release spending in в July 19\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq-item\"\u003E\u003Cdiv class=\"faq-item__header flex\"\u003E\u003Cp data-text=\"question2\"\u003EThe game give the opportunity only to play as a little cat?\u003C\u002Fp\u003E\u003Cspan class=\"faq-item__header-content flex flex-center\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq-item__content\"\u003E\u003Cp data-text=\"answer2\"\u003EYeah, just for him.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq-item\"\u003E\u003Cdiv class=\"faq-item__header flex\"\u003E\u003Cp data-text=\"question3\"\u003EWhat is \u003Cspan class=\"stray\"\u003EStray\u003C\u002Fspan\u003E about?\u003C\u002Fp\u003E\u003Cspan class=\"faq-item__header-content flex flex-center\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq-item__content\"\u003E\u003Cp data-text=\"answer3\"\u003EThe story follows a stray cat who falls into a walled city populated by robots, machines, and mutant bacteria, and sets out to return to the surface with the help of a drone companion, B-12.The game is presented through a third-person perspective. \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";




pug_html = pug_html + "\u003Cfooter class=\"footer\"\u003E \u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"footer-top flex\"\u003E\u003Cul class=\"footer-menu flex flex-center\"\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#editions\" data-text=\"editions\"\u003Eeditions\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#controller\" data-text=\"controller\"\u003Econtroller\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#about\" data-text=\"about\"\u003Eabout\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#explore\" data-text=\"explore\"\u003Eexplore\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#news\" data-text=\"news\"\u003Enews\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"menu-link\" href=\"#faq\" data-text=\"faq\"\u003Efaq\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"footer-lang flex\"\u003E\u003Cspan\u003ELanguage \u003C\u002Fspan\u003E\u003Cdiv class=\"footer-lang__list\"\u003E\u003Cdiv class=\"footer-lang__current\" data-text=\"currentLang\"\u003Eenglish\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-lang__content\"\u003E\u003Cdiv class=\"footer-lang__item\"\u003ERussian\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-lang__item\"\u003EEnglish\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-info\" data-text=\"footerInfo\"\u003EDownload of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information.\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-icon\"\u003E\u003Cdiv class=\"footer-icon__company\"\u003E\u003Cul class=\"footer-icon__list\"\u003E\u003Cli class=\"footer-icon__item\"\u003E\u003Ca href=\"https:\u002F\u002Fannapurnainteractive.com\"\u003E ";
pug_mixins["imgBg"]("logo-annapurna.png");
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"footer-icon__item\"\u003E\u003Ca href=\"http:\u002F\u002Fhk-devblog.com\"\u003E ";
pug_mixins["imgBg"]("logo-b12.png");
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-year\"\u003E2022\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-rights\"\u003E Developed by \u003Cspan\u003EPavel Miku\u003C\u002Fspan\u003E. All rights reserved\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";




pug_html = pug_html + "\u003Cdiv class=\"modal\"\u003E \u003Cdiv class=\"modal-wrapper\"\u003E\u003Cdiv class=\"modal-content\"\u003E \u003Cdiv class=\"modal-title\"\u003ESTRAY\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-version\"\u003E \u003C\u002Fdiv\u003E\u003Cform class=\"form\"\u003E\u003Cdiv class=\"form-group full\"\u003E \u003Clabel for=\"card\"\u003ECredit Card: \u003C\u002Flabel\u003E\u003Cinput type=\"text\" required placeholder=\"0000 0000 0000 0000\" id=\"card\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\"\u003E \u003Clabel for=\"expire\"\u003EEXPIRE: \u003C\u002Flabel\u003E\u003Cinput type=\"text\" required placeholder=\"mm\u002Fyy\" id=\"expire\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\"\u003E \u003Clabel for=\"ccv\"\u003Eccv:\u003C\u002Flabel\u003E\u003Cinput type=\"password\" required placeholder=\"***\" id=\"card\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group full\"\u003E \u003Clabel for=\"instant\"\u003EINSTANT:\u003C\u002Flabel\u003E\u003Cinput type=\"text\" required placeholder=\"Ryan Smith\" id=\"instant\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-checkbox flex flex-center\"\u003E\u003Cinput type=\"checkbox\" name=\"agreement\" id=\"agreement\" required\u003E\u003Cspan class=\"check\"\u003E\u003C\u002Fspan\u003E\u003Clabel for=\"agreement\"\u003E I agree with the \u003Cspan class=\"red\"\u003Erules\u003C\u002Fspan\u003E of the site\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-description\"\u003EDownload of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information.\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-total flex flex-center\"\u003E\u003Cdiv class=\"modal-total__text\"\u003Eyour total summa\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-total__price\"\u003E \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"modal-submit buy-button\" type=\"submit\" data-value=\"6\"\u003Ebuy now\u003C\u002Fbutton\u003E\u003Cdiv class=\"modal-close\"\u003E×\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"overlay\"\u003E\u003C\u002Fdiv\u003E";




pug_html = pug_html + "\u003Cnav class=\"navbar\"\u003E\u003Cul class=\"navbar-nav\"\u003E \u003Cli class=\"logo\"\u003E\u003Ca class=\"nav-link-img\" href=\"#\"\u003E";
pug_mixins["imgBg"]('logo-stray.png');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#editions\"\u003E\u003Csvg class=\"svg-inline--fa fa-cat fa-w-16 fa-9x\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fad\" data-icon=\"cat\" role=\"img\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 512 512\"\u003E\u003Cg class=\"fa-group\"\u003E\u003C\u002Fg\u003E\u003Cpath class=\"fa-secondary\" d=\"M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z\"\u003E\u003C\u002Fpath\u003E\u003Cpath class=\"fa-primary\" d=\"M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"link-text\"\u003Eeditions\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#controller\"\u003E\u003Csvg id=\"playstationcontroller\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 224.2447 168\" enable-background=\"new 0 0 224.2447 168\" xml:space=\"preserve\"\u003E\u003Cg\u003E\u003C\u002Fg\u003E\u003Crect x=\"44\" y=\"60\" fill=\"none\" width=\"8\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003Cpath fill=\"none\" d=\"M136,48c0,10.5016,4.1,20.042,10.7432,27.1864c1.854,1.1888,3.4544,2.6976,4.8244,4.4136          C158.334,84.8436,166.7964,88,176,88c22.0568,0,40-17.9452,40-40S198.0568,8,176,8S136,25.9452,136,48z M176,80          c-6.6172,0-12-5.3828-12-12s5.3828-12,12-12s12,5.3828,12,12S182.6172,80,176,80z M200,36c6.6172,0,12,5.3828,12,12          s-5.3828,12-12,12s-12-5.3828-12-12S193.3828,36,200,36z M176,16c6.6172,0,12,5.3828,12,12s-5.3828,12-12,12s-12-5.3828-12-12          S169.3828,16,176,16z M164,48c0,6.6172-5.3828,12-12,12s-12-5.3828-12-12s5.3828-12,12-12S164,41.3828,164,48z\"\u003E\u003C\u002Fpath\u003E\u003Crect x=\"44\" y=\"44\" fill=\"none\" width=\"8\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003Crect x=\"60\" y=\"44\" fill=\"none\" width=\"8\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003Crect x=\"44\" y=\"28\" fill=\"none\" width=\"8\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003Ccircle fill=\"none\" cx=\"152\" cy=\"48\" r=\"4\"\u003E\u003C\u002Fcircle\u003E\u003Ccircle fill=\"none\" cx=\"176\" cy=\"68\" r=\"4\"\u003E\u003C\u002Fcircle\u003E\u003Ccircle fill=\"none\" cx=\"176\" cy=\"28\" r=\"4\"\u003E\u003C\u002Fcircle\u003E\u003Ccircle fill=\"none\" cx=\"200\" cy=\"48\" r=\"4\"\u003E\u003C\u002Fcircle\u003E\u003Crect x=\"28\" y=\"44\" fill=\"none\" width=\"8\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003Cpath fill=\"none\" d=\"M146.0184,85.4248c-1.5228-1.222-2.9692-2.5308-4.332-3.9264C139.986,80.5736,138.068,80,136,80          c-6.6172,0-12,5.3828-12,12s5.3828,12,12,12c6.5604,0,11.892-5.2952,11.9832-11.8344l-1.2-5.334          C146.5504,86.3488,146.3112,85.8692,146.0184,85.4248z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M176,96c-7.12,0-13.8596-1.6004-19.9424-4.3936l11.6984,51.9952c2,8.8904,11.3848,16.3984,20.494,16.3984          h3.992c8.9748,0,16.7992-7.2852,17.4396-16.242l4.7988-67.1872C205.7236,88.3336,191.758,96,176,96z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M88,80c-2.0684,0-3.9864,0.5736-5.6868,1.4988c-1.3628,1.3956-2.8088,2.704-4.3316,3.926          c-0.132,0.2008-0.2248,0.426-0.3448,0.6344l-1.5436,6.8616C76.5724,99.1016,81.698,104,88,104c6.6172,0,12-5.3828,12-12          S94.6172,80,88,80z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M128,48c0-10.4544,3.3968-20.1088,9.0924-28H86.9076C92.6032,27.8912,96,37.5456,96,48          c0,8.8072-2.4248,17.0408-6.5816,24.1432c9.0104,0.6464,16.412,7.198,18.1772,15.8568h8.8088          c1.7652-8.6588,9.1668-15.2104,18.1772-15.8568C130.4248,65.0408,128,56.8072,128,48z M120,40h-16v-8h16V40z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M68.0448,91.5568C61.9352,94.3804,55.1604,96,48,96c-15.5952,0-29.4352-7.5092-38.2084-19.0656l4.7728,66.8236          C15.2032,152.7148,23.0272,160,32.004,160h3.992c9.1096,0,18.4944-7.508,20.4944-16.3984l11.5408-51.2948          C68.0292,92.202,68,92.1048,68,92C68,91.848,68.0416,91.7076,68.0448,91.5568z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M48,88c9.2036,0,17.666-3.1564,24.4324-8.4c1.37-1.716,2.9704-3.2248,4.8244-4.4136          C83.9,68.042,88,58.5016,88,48C88,25.9452,70.0568,8,48,8S8,25.9452,8,48S25.9432,88,48,88z M20,40c0-2.2108,1.7912-4,4-4h12V24          c0-2.2108,1.7912-4,4-4h16c2.2088,0,4,1.7892,4,4v12h12c2.2088,0,4,1.7892,4,4v16c0,2.2108-1.7912,4-4,4H60v12          c0,2.2108-1.7912,4-4,4H40c-2.2088,0-4-1.7892-4-4V60H24c-2.2088,0-4-1.7892-4-4V40z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M176,40c6.6172,0,12-5.3828,12-12s-5.3828-12-12-12s-12,5.3828-12,12S169.3828,40,176,40z M176,24c2.2052,0,4,1.7928,4,4          s-1.7948,4-4,4s-4-1.7928-4-4S173.7948,24,176,24z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M176,56c-6.6172,0-12,5.3828-12,12s5.3828,12,12,12s12-5.3828,12-12S182.6172,56,176,56z M176,72c-2.2052,0-4-1.7928-4-4          s1.7948-4,4-4s4,1.7928,4,4S178.2052,72,176,72z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M140,48c0,6.6172,5.3828,12,12,12s12-5.3828,12-12s-5.3828-12-12-12S140,41.3828,140,48z M152,44c2.2052,0,4,1.7928,4,4          s-1.7948,4-4,4s-4-1.7928-4-4S149.7948,44,152,44z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M200,60c6.6172,0,12-5.3828,12-12s-5.3828-12-12-12s-12,5.3828-12,12S193.3828,60,200,60z M200,44c2.2052,0,4,1.7928,4,4          s-1.7948,4-4,4s-4-1.7928-4-4S197.7948,44,200,44z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M223.8764,50.4376C223.9176,49.6248,224,48.8228,224,48c0-26.4688-21.5332-48-48-48          c-12.1468,0-23.2216,4.572-31.6852,12.0384C144.2484,12.0352,144.1924,12,144.1252,12H80c-0.1036,0-0.1904,0.0512-0.292,0.0588          C71.2412,4.5804,60.158,0,48,0C21.5332,0,0,21.5312,0,48c0,1.0568,0.0912,2.0908,0.1588,3.1308          c-0.0856,0.3752-0.1776,0.7508-0.1492,1.1544L6.584,144.328C7.5156,157.3788,18.92,168,32.004,168h3.992          c13.012,0,25.4416-9.9452,28.2988-22.6408l8.9848-39.9328C76.9396,109.4364,82.1564,112,88,112c9.6576,0,17.7372-6.8828,19.5956-16          h8.8088c1.8584,9.1172,9.938,16,19.5956,16c5.9528,0,11.2472-2.6668,14.914-6.808l9.0372,40.1672          C162.8084,158.0548,175.2384,168,188.25,168h3.992c13.0824,0,24.4864-10.6172,25.42-23.672l6.5744-92.0428          C224.2836,51.6216,224.124,51.0084,223.8764,50.4376z M216,48c0,22.0548-17.9432,40-40,40c-9.2036,0-17.666-3.1564-24.4324-8.4          c-1.37-1.716-2.9704-3.2248-4.8244-4.4136C140.1,68.042,136,58.5016,136,48c0-22.0548,17.9432-40,40-40S216,25.9452,216,48z M48,8          c22.0568,0,40,17.9452,40,40c0,10.5016-4.1,20.042-10.7432,27.1864c-1.854,1.1888-3.4544,2.6976-4.8244,4.4136          C65.666,84.8436,57.2036,88,48,88C25.9432,88,8,70.0548,8,48S25.9432,8,48,8z M56.4904,143.6016          C54.4904,152.492,45.1056,160,35.996,160h-3.992c-8.9768,0-16.8008-7.2852-17.4396-16.242L9.7916,76.9344          C18.5648,88.4908,32.4048,96,48,96c7.1604,0,13.9352-1.6196,20.0448-4.4432C68.0416,91.7076,68,91.848,68,92          c0,0.1048,0.0292,0.202,0.0312,0.3068L56.4904,143.6016z M88,104c-6.302,0-11.4276-4.8984-11.9068-11.0792l1.5436-6.8616          c0.12-0.2084,0.2128-0.4336,0.3448-0.6344c1.5228-1.222,2.9688-2.5304,4.3316-3.926C84.0136,80.5736,85.9316,80,88,80          c6.6172,0,12,5.3828,12,12S94.6172,104,88,104z M116.4044,88h-8.8088c-1.7652-8.6588-9.1668-15.2104-18.1772-15.8568          C93.5752,65.0408,96,56.8072,96,48c0-10.4544-3.3968-20.1088-9.0924-28h50.1848C131.3968,27.8912,128,37.5456,128,48          c0,8.8072,2.4248,17.0408,6.5816,24.1432C125.5712,72.7896,118.1696,79.3412,116.4044,88z M136,104c-6.6172,0-12-5.3828-12-12          s5.3828-12,12-12c2.068,0,3.986,0.5736,5.6864,1.4984c1.3628,1.3956,2.8092,2.7044,4.332,3.9264          c0.2928,0.4444,0.532,0.924,0.7648,1.4068l1.2,5.334C147.892,98.7048,142.5604,104,136,104z M192.242,160h-3.992          c-9.1092,0-18.494-7.508-20.494-16.3984l-11.6984-51.9952C162.1404,94.3996,168.88,96,176,96          c15.758,0,29.7236-7.6664,38.4804-19.4292l-4.7988,67.1872C209.0412,152.7148,201.2168,160,192.242,160z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M24,60h12v12c0,2.2108,1.7912,4,4,4h16c2.2088,0,4-1.7892,4-4V60h12c2.2088,0,4-1.7892,4-4V40c0-2.2108-1.7912-4-4-4H60V24          c0-2.2108-1.7912-4-4-4H40c-2.2088,0-4,1.7892-4,4v12H24c-2.2088,0-4,1.7892-4,4v16C20,58.2108,21.7912,60,24,60z M52,68h-8v-8h8          V68z M44,52v-8h8v8H44z M68,44v8h-8v-8H68z M44,28h8v8h-8V28z M28,44h8v8h-8V44z\"\u003E\u003C\u002Fpath\u003E\u003Crect x=\"104\" y=\"32\" width=\"16\" height=\"8\"\u003E\u003C\u002Frect\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"link-text\"\u003Eextra\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#about\"\u003E\u003Csvg fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath clip-rule=\"evenodd\" d=\"M1 8.5C1 6.29086 2.79086 4.5 5 4.5H19C21.2091 4.5 23 6.29086 23 8.5V15.5C23 17.7091 21.2091 19.5 19 19.5H5C2.79086 19.5 1 17.7091 1 15.5V8.5ZM9.53819 7.61302C9.86892 7.44082 10.268 7.46694 10.5735 7.68077L15.5735 11.1808C15.8408 11.3679 16 11.6737 16 12C16 12.3263 15.8408 12.6321 15.5735 12.8192L10.5735 16.3192C10.268 16.5331 9.86892 16.5592 9.53819 16.387C9.20746 16.2148 9 15.8729 9 15.5V8.5C9 8.12712 9.20746 7.78522 9.53819 7.61302Z\" fill-rule=\"evenodd\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"link-text\"\u003Egame\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#explore\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"link-text\"\u003Eexplore\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#news\"\u003E\u003Csvg id=\"Layer_1_1_\" style=\"enable-background:new 0 0 64 64;\" version=\"1.1\" viewBox=\"0 0 64 64\" xml:space=\"preserve\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\u003Cpath d=\"M57,26C57,12.215,45.785,1,32,1S7,12.215,7,26c0,9.479,5.44,18.187,13.901,22.39c0.165,0.746,0.491,1.451,0.969,2.048  l2.473,3.091C24.767,54.059,25,54.725,25,55.403V57h-2v6h20v-6h-2v-1.597c0-0.679,0.233-1.344,0.657-1.875l2.247-2.809  C44.611,49.837,45,48.728,45,47.597v-0.253C52.412,42.818,57,34.701,57,26z M55,26c0,0.335-0.019,0.668-0.034,1.001  c-2.812,0.003-5.343,1.673-6.477,4.318c-0.62,1.446-1.986,2.419-3.495,2.627C44.965,32.317,43.636,31,42,31  c-0.395,0-0.77,0.081-1.116,0.22c-0.151-0.558-0.455-1.049-0.87-1.428C40.011,29.72,40,29.649,40,29.576V28.44  c0-0.769,0.202-1.528,0.583-2.195l1.986-3.477C43.505,21.131,44,19.268,44,17.382c0-1.96,0.663-3.892,1.866-5.438  c0.642-0.826,1.406-1.601,2.267-2.317C52.368,13.801,55,19.598,55,26z M36.884,29.22C36.539,27.945,35.383,27,34,27  c-0.352,0-0.686,0.072-1,0.184v-4.391c2.62-0.558,4.849-2.256,6.065-4.688C39.677,16.883,40,15.514,40,14.146V13.64  c0-2.587-1.737-4.891-4.225-5.602C34.141,7.572,33,6.059,33,4.36V3.025c5.165,0.222,9.896,2.153,13.635,5.245  c-0.884,0.758-1.671,1.577-2.347,2.446C42.812,12.612,42,14.979,42,17.382c0,1.539-0.404,3.058-1.167,4.395l-1.986,3.476  C38.293,26.221,38,27.324,38,28.44V29C37.605,29,37.23,29.081,36.884,29.22z M31,3.025V4.36c0,2.587,1.737,4.891,4.225,5.602  C36.859,10.428,38,11.941,38,13.64v0.506c0,1.059-0.25,2.119-0.724,3.065c-0.876,1.751-2.431,3.007-4.276,3.523V20  c0-1.654-1.346-3-3-3s-3,1.346-3,3v0.788c-0.949-0.347-1.718-1.104-2.051-2.104C24.214,16.48,22.16,15,19.838,15h-0.602  c-1.615,0-3.067-0.897-3.789-2.341C15.155,12.073,15,11.417,15,10.764v-0.239C19,6.135,24.673,3.298,31,3.025z M9.34,22.084  c3.091-1.567,6.933-1.367,9.812,0.553l1.221,0.814C21.392,24.129,22,25.266,22,26.49c0,1.623-1.089,3.067-2.649,3.513l-0.377,0.107  C16.634,30.779,15,32.945,15,35.378c0,0.812-0.286,1.604-0.806,2.227l-1.147,1.377C10.473,35.221,9,30.716,9,26  C9,24.665,9.121,23.358,9.34,22.084z M14.279,40.627l1.451-1.741c0.819-0.982,1.27-2.228,1.27-3.507  c0-1.545,1.038-2.921,2.523-3.345l0.377-0.107c2.414-0.689,4.1-2.925,4.1-5.436c0-1.895-0.941-3.653-2.517-4.704l-1.221-0.814  C18.326,19.682,16.073,19,13.746,19c-1.316,0-2.617,0.247-3.856,0.68c0.732-2.558,1.896-4.933,3.409-7.044  c0.099,0.314,0.213,0.622,0.36,0.916C14.722,15.679,16.859,17,19.236,17h0.602c1.46,0,2.751,0.931,3.213,2.316  c0.608,1.825,2.127,3.139,3.949,3.542V44h-0.166l-1.525-8.388C25.035,34.099,23.718,33,22.18,33C20.427,33,19,34.427,19,36.18v0.639  c0,0.176,0.015,0.352,0.043,0.523l1.424,8.548C18.081,44.503,15.995,42.712,14.279,40.627z M41,61H25v-2h16V61z M43,47.597  c0,0.679-0.233,1.344-0.657,1.875l-2.247,2.809C39.389,53.163,39,54.272,39,55.403V57H27v-1.597c0-1.131-0.389-2.24-1.096-3.124  l-2.473-3.091c-0.319-0.399-0.533-0.876-0.617-1.381l-1.799-10.796C21.005,36.948,21,36.884,21,36.819V36.18  c0-0.651,0.529-1.18,1.18-1.18c0.571,0,1.06,0.408,1.162,0.969L25.166,46H29V20c0-0.551,0.449-1,1-1s1,0.449,1,1v10v10v4h2v-4V30  c0-0.551,0.449-1,1-1s1,0.449,1,1v2v12h2V32c0-0.551,0.449-1,1-1s1,0.449,1,1v2v10h2V34c0-0.551,0.449-1,1-1s1,0.449,1,1V47.597z   M45,44.967v-9.01c2.337-0.211,4.393-1.669,5.354-3.911c0.77-1.796,2.504-2.966,4.446-3.034C53.943,35.442,50.377,41.271,45,44.967z  \"\u003E\u003C\u002Fpath\u003E\u003Cspan class=\"link-text\"\u003Enews\u003C\u002Fspan\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item\"\u003E\u003Ca class=\"nav-link\" href=\"#faq\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"link-text\"\u003Efaq\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*$":
/*!********************************!*\
  !*** ./src/img/ sync ^\.\/.*$ ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./cat-realease.png": "./src/img/cat-realease.png",
	"./cat-realease.svg": "./src/img/cat-realease.svg",
	"./dual.png": "./src/img/dual.png",
	"./ed-vec.svg": "./src/img/ed-vec.svg",
	"./esrp.png": "./src/img/esrp.png",
	"./favicon/cat.ico": "./src/img/favicon/cat.ico",
	"./favicon/react.ico": "./src/img/favicon/react.ico",
	"./favicon/vue.ico": "./src/img/favicon/vue.ico",
	"./header-bg.png": "./src/img/header-bg.png",
	"./icons/about.svg": "./src/img/icons/about.svg",
	"./icons/arrow_downward.svg": "./src/img/icons/arrow_downward.svg",
	"./icons/arrow_left.svg": "./src/img/icons/arrow_left.svg",
	"./icons/arrow_right.svg": "./src/img/icons/arrow_right.svg",
	"./icons/arrow_rightward.svg": "./src/img/icons/arrow_rightward.svg",
	"./icons/controller.svg": "./src/img/icons/controller.svg",
	"./icons/explore.svg": "./src/img/icons/explore.svg",
	"./icons/facebook.svg": "./src/img/icons/facebook.svg",
	"./icons/faq.svg": "./src/img/icons/faq.svg",
	"./icons/instagram.svg": "./src/img/icons/instagram.svg",
	"./icons/news.svg": "./src/img/icons/news.svg",
	"./icons/newyear.png": "./src/img/icons/newyear.png",
	"./icons/search.svg": "./src/img/icons/search.svg",
	"./icons/twitter.svg": "./src/img/icons/twitter.svg",
	"./icons/up-arrow.svg": "./src/img/icons/up-arrow.svg",
	"./img-footer.png": "./src/img/img-footer.png",
	"./logo-annapurna.png": "./src/img/logo-annapurna.png",
	"./logo-b12.png": "./src/img/logo-b12.png",
	"./logo-stray.png": "./src/img/logo-stray.png",
	"./modal-stray.png": "./src/img/modal-stray.png",
	"./news-1.png": "./src/img/news-1.png",
	"./news-2.png": "./src/img/news-2.png",
	"./news-3.png": "./src/img/news-3.png",
	"./req-1.png": "./src/img/req-1.png",
	"./req-2.png": "./src/img/req-2.png",
	"./reqbg-1.png": "./src/img/reqbg-1.png",
	"./reqbg-2.png": "./src/img/reqbg-2.png",
	"./snow.gif": "./src/img/snow.gif",
	"./video-bg.jpg": "./src/img/video-bg.jpg",
	"./video-bg.png": "./src/img/video-bg.png",
	"./video-stray.mp4": "./src/img/video-stray.mp4"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/img/cat-realease.png":
/*!**********************************!*\
  !*** ./src/img/cat-realease.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/cat-realease.png";

/***/ }),

/***/ "./src/img/cat-realease.svg":
/*!**********************************!*\
  !*** ./src/img/cat-realease.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/cat-realease.svg";

/***/ }),

/***/ "./src/img/dual.png":
/*!**************************!*\
  !*** ./src/img/dual.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/dual.png";

/***/ }),

/***/ "./src/img/ed-vec.svg":
/*!****************************!*\
  !*** ./src/img/ed-vec.svg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ed-vec.svg";

/***/ }),

/***/ "./src/img/esrp.png":
/*!**************************!*\
  !*** ./src/img/esrp.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/esrp.png";

/***/ }),

/***/ "./src/img/favicon/cat.ico":
/*!*********************************!*\
  !*** ./src/img/favicon/cat.ico ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ico/2f63183ca5a46a6aec57.ico";

/***/ }),

/***/ "./src/img/favicon/react.ico":
/*!***********************************!*\
  !*** ./src/img/favicon/react.ico ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ico/ee9af2e03ce75e07c89b.ico";

/***/ }),

/***/ "./src/img/favicon/vue.ico":
/*!*********************************!*\
  !*** ./src/img/favicon/vue.ico ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ico/5def89b8d9a36ca4355c.ico";

/***/ }),

/***/ "./src/img/header-bg.png":
/*!*******************************!*\
  !*** ./src/img/header-bg.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/header-bg.png";

/***/ }),

/***/ "./src/img/icons/about.svg":
/*!*********************************!*\
  !*** ./src/img/icons/about.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/about.svg";

/***/ }),

/***/ "./src/img/icons/arrow_downward.svg":
/*!******************************************!*\
  !*** ./src/img/icons/arrow_downward.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow_downward.svg";

/***/ }),

/***/ "./src/img/icons/arrow_left.svg":
/*!**************************************!*\
  !*** ./src/img/icons/arrow_left.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow_left.svg";

/***/ }),

/***/ "./src/img/icons/arrow_right.svg":
/*!***************************************!*\
  !*** ./src/img/icons/arrow_right.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow_right.svg";

/***/ }),

/***/ "./src/img/icons/arrow_rightward.svg":
/*!*******************************************!*\
  !*** ./src/img/icons/arrow_rightward.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow_rightward.svg";

/***/ }),

/***/ "./src/img/icons/controller.svg":
/*!**************************************!*\
  !*** ./src/img/icons/controller.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/controller.svg";

/***/ }),

/***/ "./src/img/icons/explore.svg":
/*!***********************************!*\
  !*** ./src/img/icons/explore.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/explore.svg";

/***/ }),

/***/ "./src/img/icons/facebook.svg":
/*!************************************!*\
  !*** ./src/img/icons/facebook.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/facebook.svg";

/***/ }),

/***/ "./src/img/icons/faq.svg":
/*!*******************************!*\
  !*** ./src/img/icons/faq.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/faq.svg";

/***/ }),

/***/ "./src/img/icons/instagram.svg":
/*!*************************************!*\
  !*** ./src/img/icons/instagram.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/instagram.svg";

/***/ }),

/***/ "./src/img/icons/news.svg":
/*!********************************!*\
  !*** ./src/img/icons/news.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/news.svg";

/***/ }),

/***/ "./src/img/icons/newyear.png":
/*!***********************************!*\
  !*** ./src/img/icons/newyear.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/newyear.png";

/***/ }),

/***/ "./src/img/icons/search.svg":
/*!**********************************!*\
  !*** ./src/img/icons/search.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ "./src/img/icons/twitter.svg":
/*!***********************************!*\
  !*** ./src/img/icons/twitter.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/twitter.svg";

/***/ }),

/***/ "./src/img/icons/up-arrow.svg":
/*!************************************!*\
  !*** ./src/img/icons/up-arrow.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/up-arrow.svg";

/***/ }),

/***/ "./src/img/img-footer.png":
/*!********************************!*\
  !*** ./src/img/img-footer.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img-footer.png";

/***/ }),

/***/ "./src/img/logo-annapurna.png":
/*!************************************!*\
  !*** ./src/img/logo-annapurna.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo-annapurna.png";

/***/ }),

/***/ "./src/img/logo-b12.png":
/*!******************************!*\
  !*** ./src/img/logo-b12.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo-b12.png";

/***/ }),

/***/ "./src/img/logo-stray.png":
/*!********************************!*\
  !*** ./src/img/logo-stray.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo-stray.png";

/***/ }),

/***/ "./src/img/modal-stray.png":
/*!*********************************!*\
  !*** ./src/img/modal-stray.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/modal-stray.png";

/***/ }),

/***/ "./src/img/news-1.png":
/*!****************************!*\
  !*** ./src/img/news-1.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/news-1.png";

/***/ }),

/***/ "./src/img/news-2.png":
/*!****************************!*\
  !*** ./src/img/news-2.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/news-2.png";

/***/ }),

/***/ "./src/img/news-3.png":
/*!****************************!*\
  !*** ./src/img/news-3.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/news-3.png";

/***/ }),

/***/ "./src/img/req-1.png":
/*!***************************!*\
  !*** ./src/img/req-1.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/req-1.png";

/***/ }),

/***/ "./src/img/req-2.png":
/*!***************************!*\
  !*** ./src/img/req-2.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/req-2.png";

/***/ }),

/***/ "./src/img/reqbg-1.png":
/*!*****************************!*\
  !*** ./src/img/reqbg-1.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/reqbg-1.png";

/***/ }),

/***/ "./src/img/reqbg-2.png":
/*!*****************************!*\
  !*** ./src/img/reqbg-2.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/reqbg-2.png";

/***/ }),

/***/ "./src/img/snow.gif":
/*!**************************!*\
  !*** ./src/img/snow.gif ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/snow.gif";

/***/ }),

/***/ "./src/img/video-bg.jpg":
/*!******************************!*\
  !*** ./src/img/video-bg.jpg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/video-bg.jpg";

/***/ }),

/***/ "./src/img/video-bg.png":
/*!******************************!*\
  !*** ./src/img/video-bg.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/video-bg.png";

/***/ }),

/***/ "./src/img/video-stray.mp4":
/*!*********************************!*\
  !*** ./src/img/video-stray.mp4 ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/video-stray.mp4";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "addClass": function() { return /* binding */ addClass; },
/* harmony export */   "animate": function() { return /* binding */ animate; },
/* harmony export */   "animationEnd": function() { return /* binding */ animationEnd; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "appendTo": function() { return /* binding */ appendTo; },
/* harmony export */   "attr": function() { return /* binding */ attr; },
/* harmony export */   "blur": function() { return /* binding */ blur; },
/* harmony export */   "change": function() { return /* binding */ change; },
/* harmony export */   "children": function() { return /* binding */ children; },
/* harmony export */   "click": function() { return /* binding */ click; },
/* harmony export */   "closest": function() { return /* binding */ closest; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "data": function() { return /* binding */ data; },
/* harmony export */   "dataset": function() { return /* binding */ dataset; },
/* harmony export */   "detach": function() { return /* binding */ detach; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "focus": function() { return /* binding */ focus; },
/* harmony export */   "focusin": function() { return /* binding */ focusin; },
/* harmony export */   "focusout": function() { return /* binding */ focusout; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "height": function() { return /* binding */ height; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "index": function() { return /* binding */ index; },
/* harmony export */   "insertAfter": function() { return /* binding */ insertAfter; },
/* harmony export */   "insertBefore": function() { return /* binding */ insertBefore; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "keydown": function() { return /* binding */ keydown; },
/* harmony export */   "keypress": function() { return /* binding */ keypress; },
/* harmony export */   "keyup": function() { return /* binding */ keyup; },
/* harmony export */   "mousedown": function() { return /* binding */ mousedown; },
/* harmony export */   "mouseenter": function() { return /* binding */ mouseenter; },
/* harmony export */   "mouseleave": function() { return /* binding */ mouseleave; },
/* harmony export */   "mousemove": function() { return /* binding */ mousemove; },
/* harmony export */   "mouseout": function() { return /* binding */ mouseout; },
/* harmony export */   "mouseover": function() { return /* binding */ mouseover; },
/* harmony export */   "mouseup": function() { return /* binding */ mouseup; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "nextAll": function() { return /* binding */ nextAll; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "offset": function() { return /* binding */ offset; },
/* harmony export */   "on": function() { return /* binding */ on; },
/* harmony export */   "once": function() { return /* binding */ once; },
/* harmony export */   "outerHeight": function() { return /* binding */ outerHeight; },
/* harmony export */   "outerWidth": function() { return /* binding */ outerWidth; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "parents": function() { return /* binding */ parents; },
/* harmony export */   "prepend": function() { return /* binding */ prepend; },
/* harmony export */   "prependTo": function() { return /* binding */ prependTo; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "prevAll": function() { return /* binding */ prevAll; },
/* harmony export */   "prop": function() { return /* binding */ prop; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeAttr": function() { return /* binding */ removeAttr; },
/* harmony export */   "removeClass": function() { return /* binding */ removeClass; },
/* harmony export */   "removeData": function() { return /* binding */ removeData; },
/* harmony export */   "resize": function() { return /* binding */ resize; },
/* harmony export */   "scroll": function() { return /* binding */ scroll; },
/* harmony export */   "scrollLeft": function() { return /* binding */ scrollLeft; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollTop": function() { return /* binding */ scrollTop; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "siblings": function() { return /* binding */ siblings; },
/* harmony export */   "stop": function() { return /* binding */ stop; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "submit": function() { return /* binding */ submit; },
/* harmony export */   "text": function() { return /* binding */ text; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "touchend": function() { return /* binding */ touchend; },
/* harmony export */   "touchmove": function() { return /* binding */ touchmove; },
/* harmony export */   "touchstart": function() { return /* binding */ touchstart; },
/* harmony export */   "transform": function() { return /* binding */ transform; },
/* harmony export */   "transition": function() { return /* binding */ transition; },
/* harmony export */   "transitionEnd": function() { return /* binding */ transitionEnd; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "val": function() { return /* binding */ val; },
/* harmony export */   "value": function() { return /* binding */ value; },
/* harmony export */   "width": function() { return /* binding */ width; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */


/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  let el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    const dataKey = el.getAttribute(`data-${key}`);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      const attr = el.attributes[i];

      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }

  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    const el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      const values = [];

      for (let i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }

  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  const before = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  const after = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add(...els) {
  const dom = this;
  let i;
  let j;

  for (i = 0; i < els.length; i += 1) {
    const toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

// eslint-disable-next-line

function scrollTo(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let [left, top, duration, easing, callback] = args;

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line

    let scrollLeft; // eslint-disable-line

    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop(...args) {
  let [top, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

// eslint-disable-next-line

function animate(initialProps, initialParams) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },

    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },

    done(complete) {
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },

    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      const elements = []; // Define & Cache Initials & Units

      a.elements.each((el, index) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(prop => {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop];
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }

  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;

  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;

  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === 'undefined') {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on(name, ...args);
  }

  return eventHandler;
}

const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');

/* harmony default export */ __webpack_exports__["default"] = ($);



/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getDocument": function() { return /* binding */ getDocument; },
/* harmony export */   "getWindow": function() { return /* binding */ getWindow; },
/* harmony export */   "ssrDocument": function() { return /* binding */ ssrDocument; },
/* harmony export */   "ssrWindow": function() { return /* binding */ ssrWindow; }
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBreakpoint; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setBreakpoint; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  } // Toggle navigation, pagination, scrollbar


  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }

    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClasses; }
/* harmony export */ });
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClasses; }
/* harmony export */ });
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ "./node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ "./node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ "./node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ "./node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ "./node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ "./node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ "./node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ "./node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ "./node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ "./node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ "./node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ "./node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ "./node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ "./node_modules/swiper/core/classes/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ "./node_modules/swiper/core/images/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ "./node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ "./node_modules/swiper/core/moduleExtendParams.js");
/* eslint no-param-reassign: "off" */






















const prototypes = {
  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__["default"]
};
const extendedDefaults = {};

class Swiper {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
      const swipers = [];
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(containerEl => {
        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }); // eslint-disable-next-line no-constructor-return

      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();
    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__["default"])(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"], allModulesParams); // Extend defaults with passed params

    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);
    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance
    // eslint-disable-next-line no-constructor-return


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

    if (swiper.rtl) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }

    swiper.update();
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      if (!$el.children) {
        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($el).children(getWrapperSelector());
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      const wrapper = document.createElement('div');
      $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"];
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: true,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-underscore-dangle */
/* harmony default export */ __webpack_exports__["default"] = ({
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

});

/***/ }),

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");







let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }

  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  attachEvents,
  detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onClick; }
/* harmony export */ });
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onResize; }
/* harmony export */ });
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onScroll; }
/* harmony export */ });
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchEnd; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  let rewindFirstIndex = null;
  let rewindLastIndex = null;

  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchMove; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function onTouchMove(event) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    if (!(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchStart; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);

    if (!found && !el.getRootNode) {
      return null;
    }

    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

  const eventPath = event.composedPath ? event.composedPath() : event.path;

  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(eventPath[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;

    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;

      if ($targetEl[0].nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }

    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setGrabCursor; }
/* harmony export */ });
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unsetGrabCursor; }
/* harmony export */ });
function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/core/images/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./node_modules/swiper/core/images/loadImage.js");
/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "./node_modules/swiper/core/images/preloadImages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/images/loadImage.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loadImage; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/images/preloadImages.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ preloadImages; }
/* harmony export */ });
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopCreate; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loopCreate() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    const index = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index)[0]);
    prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
  }

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopDestroy; }
/* harmony export */ });
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopFix; }
/* harmony export */ });
function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ moduleExtendParams; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
  };
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Observer; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Resize; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Resize({
  swiper,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let observer = null;
  let animationFrame = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideNext; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slidePrev; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideReset; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex]; // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  } // Update progress


  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClosest; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToLoop; }
/* harmony export */ });
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTransition; }
/* harmony export */ });
function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEmit; }
/* harmony export */ });
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEnd; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionStart; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSwiperTranslate; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ maxTranslate; }
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ minTranslate; }
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTranslate; }
/* harmony export */ });
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ translateTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateActiveIndex; }
/* harmony export */ });
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateAutoHeight; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])([])).each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateProgress; }
/* harmony export */ });
function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSize; }
/* harmony export */ });
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlides; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }

  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesClasses; }
/* harmony export */ });
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesOffset; }
/* harmony export */ });
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesProgress; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;

  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }

  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.each(bulletEl => {
      const $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bulletEl);

      if (swiper.params.pagination.clickable) {
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      }

      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
        $bulletEl.attr('aria-current', 'true');
      } else {
        $bulletEl.removeAttr('aria-current');
      }
    });
  }

  const initNavEl = ($el, wrapperId, message) => {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };

  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };

  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;

    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }

    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };

  const initSlides = () => {
    const params = swiper.params.a11y;

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }

    if (params.slideRole) {
      addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.slideRole);
    }

    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;

    if (params.slideLabelMessage) {
      swiper.slides.each((slideEl, index) => {
        const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl);
        const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel($slideEl, ariaLabelMessage);
      });
    }
  };

  const init = () => {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    initSlides(); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.on('focus', handleFocus, true);
    swiper.$el.on('pointerdown', handlePointerDown, true);
    swiper.$el.on('pointerup', handlePointerUp, true);
  };

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.off('focus', handleFocus, true);
    swiper.$el.off('pointerdown', handlePointerDown, true);
    swiper.$el.off('pointerup', handlePointerUp, true);
  }

  on('beforeInit', () => {
    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    if (!swiper.size) {
      swiper.autoplay.running = false;
      swiper.autoplay.paused = false;
      return;
    }

    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit('autoplayPause');
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    emit('autoplayResume');
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', () => {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");



function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth; // Each slide offset from center

    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const {
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      }); // set rotates

      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");


function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const createSlideShadows = ($slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
      $slideEl.append(shadowBefore);
    }

    if (shadowAfter.length === 0) {
      shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
      $slideEl.append(shadowAfter);
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.each(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl), progress, isHorizontal);
    });
  };

  const setTranslate = () => {
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, isHorizontal);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }

    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };

  const setTransition = duration => {
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");



function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");





function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const createSlideShadows = ($slideEl, progress, params) => {
    let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }

    if (shadowAfter.length === 0) {
      shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // Set shadows
    const params = swiper.params.flipEffect;
    swiper.slides.each(slideEl => {
      const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }

      createSlideShadows($slideEl, progress, params);
    });
  };

  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, params);
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_3__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ freeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchStart() {
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }

  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()
    });
  }

  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
function Grid({
  swiper,
  extendParams
}) {
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;

  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    slidesPerRow = slidesNumberEvenToRows / rows;
    numFullColumns = Math.floor(slidesLength / rows);

    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }

    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
  };

  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup,
      spaceBetween
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid; // Set slides order

    let newSlideOrderIndex;
    let column;
    let row;

    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.css({
        '-webkit-order': newSlideOrderIndex,
        order: newSlideOrderIndex
      });
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;

      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;

        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }

    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
  };

  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      spaceBetween,
      centeredSlides,
      roundLengths
    } = swiper.params;
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.$wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
    });

    if (centeredSlides) {
      snapGrid.splice(0, snapGrid.length);
      const newSlidesGrid = [];

      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid.push(...newSlidesGrid);
    }
  };

  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');

    if (hash) {
      const speed = 0;

      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', onHashChange);
    }
  };

  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', onHashChange);
    }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};

  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  const getPathValues = urlOverride => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    let location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };

  const setHistory = (key, index) => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    const slide = swiper.slides.eq(index);
    let value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key}/${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }

    if (swiper.params.history.keepQuery) {
      value += location.search;
    }

    const currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };

  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };

  const init = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  const destroy = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* eslint-disable consistent-return */


function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }

      const $el = swiper.$el;
      const swiperWidth = $el[0].clientWidth;
      const swiperHeight = $el[0].clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/lazy/lazy.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lazy; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Lazy({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate = true) {
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(imageEl => {
      const $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(sourceEl => {
              const $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();

        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
        const index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = Math.ceil(slidesPerView);
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (let i = activeIndex + spv; i < maxIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        } // Prev Slides


        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper || swiper.destroyed) return;
    const $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
    const isWindow = $scrollElement[0] === window;
    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    const swiperOffset = swiper.$el.offset();
    const {
      rtlTranslate: rtl
    } = swiper;
    let inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (let i = 0; i < swiperCoord.length; i += 1) {
      const point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', () => {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', () => {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', () => {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', () => {
    const {
      lazy,
      cssMode,
      watchSlidesProgress,
      touchReleaseOnEdges,
      resistanceRatio
    } = swiper.params;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  on('destroy', () => {
    if (!swiper.$el) return;
    swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
  });
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__["default"].bind(swiper),
    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper),
    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper),
    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper),
    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper)
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSlide; }
/* harmony export */ });
function addSlide(index, slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  const baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];

  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendSlide; }
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ prependSlide; }
/* harmony export */ });
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  let newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeAllSlides; }
/* harmony export */ });
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];

  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeSlide; }
/* harmony export */ });
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */



function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY

    let pX = 0;
    let pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);

          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };

  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");



function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }
  }

  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    }

    init();
    render();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }

    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  };

  const setTranslate = () => {
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
      setTransform(el, progress);
    });
    slides.each((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, slideProgress);
      });
    });
  };

  const setTransition = (duration = swiper.params.speed) => {
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
      const $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");




function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    if (!$el) return;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }

  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__["default"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

    if ($dragEl.length === 0) {
      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.scrollbar;
    const $el = swiper.scrollbar.$el;

    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }

    disableDraggable();
  }

  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.scrollbar;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    init();
    updateSize();
    setTranslate();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }

    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }

  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;

    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Virtual({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    const params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    const $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }

      emit('virtualUpdate');
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }

      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];

          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }

      return;
    }

    const prependIndexes = [];
    const appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }

    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  }

  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set(value) {
      if (scale !== value) {
        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }

  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  } // Events


  function onGestureStart(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }

    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function onGestureEnd(e) {
    const device = swiper.device;
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTransitionEnd() {
    const zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(`.${swiper.params.slideClass}`);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    const support = swiper.support;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return `.${swiper.params.slideClass}`;
  }

  function toggleGestures(method) {
    const {
      passiveListener
    } = getListeners();
    const slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const support = swiper.support;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    const support = swiper.support;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classesToSelector; }
/* harmony export */ });
function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/swiper/shared/dom.js");

function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/dom.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

const Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectInit; }
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(slideEl => {
        const $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectTarget; }
/* harmony export */ });
function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectVirtualTransitionEnd; }
/* harmony export */ });
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformEl,
  allSlides
}) {
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": function() { return /* binding */ getBrowser; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let browser;

function calcBrowser() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": function() { return /* binding */ getDevice; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "./node_modules/swiper/shared/get-support.js");


let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": function() { return /* binding */ getSupport; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let support;

function calcSupport() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateCSSModeScroll": function() { return /* binding */ animateCSSModeScroll; },
/* harmony export */   "deleteProps": function() { return /* binding */ deleteProps; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getComputedStyle": function() { return /* binding */ getComputedStyle; },
/* harmony export */   "getTranslate": function() { return /* binding */ getTranslate; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "nextTick": function() { return /* binding */ nextTick; },
/* harmony export */   "now": function() { return /* binding */ now; },
/* harmony export */   "setCSSProperty": function() { return /* binding */ setCSSProperty; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}



/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11y": function() { return /* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "Autoplay": function() { return /* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "Controller": function() { return /* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "EffectCards": function() { return /* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "EffectCoverflow": function() { return /* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "EffectCreative": function() { return /* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "EffectCube": function() { return /* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "EffectFade": function() { return /* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "EffectFlip": function() { return /* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "FreeMode": function() { return /* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "Grid": function() { return /* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "HashNavigation": function() { return /* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "History": function() { return /* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "Keyboard": function() { return /* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Lazy": function() { return /* reexport safe */ _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "Manipulation": function() { return /* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "Mousewheel": function() { return /* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Navigation": function() { return /* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Pagination": function() { return /* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Parallax": function() { return /* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "Scrollbar": function() { return /* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "Swiper": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Thumbs": function() { return /* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "Virtual": function() { return /* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "Zoom": function() { return /* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "default": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "./node_modules/swiper/modules/lazy/lazy.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */



























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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pug */ "./src/index.pug");
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _module_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/module/app.js */ "./src/module/app.js");



}();
/******/ })()
;
//# sourceMappingURL=app.js.map