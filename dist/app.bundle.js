/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/class/photographer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Photographer = function Photographer(name, city, country, tags, tagline, price, portrait, id) {
  var _this = this;

  _classCallCheck(this, Photographer);

  _defineProperty(this, "dom", {
    photographers: document.querySelector('.photographers'),
    photographer: document.querySelector('.photographer'),
    nameInForm: document.querySelector('.modal__head')
  });

  _defineProperty(this, "displayTags", function (page) {
    var spanTags = '';

    for (var i = 0; i < _this.tags.length; i++) {
      if (page == 'Accueil') spanTags += "<span class=\"photographer__tag\"><a href=\"./index.html?tag=".concat(_this.tags[i], "\">#").concat(_this.tags[i], "</a></span>");
      if (page == 'Gallery') spanTags += "<span class=\"photographer__tag\"><a href=\"../../index.html?tag=".concat(_this.tags[i], "\">#").concat(_this.tags[i], "</a></span>");
    }

    return spanTags;
  });

  _defineProperty(this, "constructCardPhotographer", function () {
    if (document.title == 'Accueil') {
      return _this.dom.photographers.insertAdjacentHTML('beforeend', "\n\t\t\t<acticle class=\"photographer\">\n\t\t\t<a href=\"./public/pages/photographer.html?id=".concat(_this.id, "\" class=\"photographer__header\">\n\t\t\t<img class=\"photographer__img\" src=\"public/images/photographers/id_photos/").concat(_this.portrait, "\" alt=\"\">\n\t\t\t<h2 class=\"photographer__name\">").concat(_this.name, "</h2>\n\t\t\t</a>\n\t\t\t<div class=\"photographer__content\">\n\t\t\t<p class=\"photographer__location\">").concat(_this.city, ", ").concat(_this.country, "</p>\n\t\t\t<p class=\"photographer__tagline\">").concat(_this.tagline, "</p>\n\t\t\t<p class=\"photographer__price\">").concat(_this.price, "\u20AC/jour</p>\n\t\t\t</div>\n\t\t\t<div class=\"photographer__tags\">") + _this.displayTags('Accueil') + "</div>\n\t\t\t</acticle>\n\t\t\t");
    } else if (document.title == 'Gallery') {
      var photographerById = _this.dom.photographer.insertAdjacentHTML('beforeend', "\n\t\t\t<acticle class=\"photographer__profil\">\n\t\t\t\t<div class=\"photographer__content\">\n\t\t\t\t\t<h1 class=\"photographer__name\">".concat(_this.name, "</h1>\n\t\t\t\t\t<p class=\"photographer__location\">").concat(_this.city, ", ").concat(_this.country, "</p>\n\t\t\t\t\t<p class=\"photographer__tagline\">").concat(_this.tagline, "</p>\n\t\t\t\t\t<div class=\"photographer__tags\">") + _this.displayTags('Gallery') + "</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"photographer__contactButton\">Contactez-moi</button>\n\t\t\t\t<img class=\"photographer__img\" src=\"../images/photographers/id_photos/".concat(_this.portrait, "\" alt=\"\">\n\t\t\t</acticle>\n\t\t\t"));

      var photographerNameInForm = _this.dom.nameInForm.insertAdjacentHTML('afterend', "\n\t\t\t\t<p class=\"modal__photographer-name\">".concat(_this.name, "</p>\n\t\t\t"));

      return photographerById, photographerNameInForm;
    }
  });

  this.name = name;
  this.city = city;
  this.country = country;
  this.tags = tags;
  this.tagline = tagline;
  this.price = price;
  this.portrait = portrait;
  this.id = id;
};


;// CONCATENATED MODULE: ./src/class/media.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function media_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function media_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Media = /*#__PURE__*/function () {
  function Media(title, filename, likes, typeMedia) {
    media_classCallCheck(this, Media);

    media_defineProperty(this, "dom", {
      media: document.querySelector('.media')
    });

    this.title = title;
    this.filename = filename;
    this.likes = likes;
    this.typeMedia = typeMedia;
  }

  _createClass(Media, [{
    key: "createMedia",
    value: function createMedia() {
      switch (this.typeMedia) {
        case 'image':
          return new media_Image(this.title, this.filename, this.likes).createImage();

        case 'video':
          return new Video(this.title, this.filename, this.likes).createVideo();

        default:
          break;
      }
    }
  }]);

  return Media;
}();



var media_Image = /*#__PURE__*/function (_Media) {
  _inherits(Image, _Media);

  var _super = _createSuper(Image);

  function Image(title, filename, likes) {
    media_classCallCheck(this, Image);

    return _super.call(this, title, filename, likes);
  }

  _createClass(Image, [{
    key: "createImage",
    value: function createImage() {
      return this.dom.media.insertAdjacentHTML('beforeend', "<artcle class=\"media__card\">\n\t\t\t\t<a href=\"../images/photographers/photos/".concat(this.filename, "\">\n\t\t\t\t\t<img src=\"../images/photographers/photos/").concat(this.filename, "\" class=\"media__thumb\">\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"image\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<title id=\"title\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</artcle>"));
    }
  }]);

  return Image;
}(Media);

var Video = /*#__PURE__*/function (_Media2) {
  _inherits(Video, _Media2);

  var _super2 = _createSuper(Video);

  function Video(title, filename, likes) {
    media_classCallCheck(this, Video);

    return _super2.call(this, title, filename, likes);
  }

  _createClass(Video, [{
    key: "createVideo",
    value: function createVideo() {
      return this.dom.media.insertAdjacentHTML('beforeend', "<artcle class=\"media__card\">\n\t\t\t\t<a href=\"../images/photographers/videos/".concat(this.filename, "\" >\n\t\t\t\t<div class=\"media__playIcon\"></div>\n\t\t\t\t\t<video class=\"media__thumb\">\n\t\t\t\t\t\t<source src=\"../images/photographers/videos/").concat(this.filename, "\"\n\t\t\t\t\t\ttype=\"video/mp4\">\n\t\t\t\t\t</video>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"image\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<title id=\"title\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</artcle>"));
    }
  }]);

  return Video;
}(Media);
;// CONCATENATED MODULE: ./src/class/filter.js
function filter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Filter = function Filter(filter) {
  var _this = this;

  filter_classCallCheck(this, Filter);

  filter_defineProperty(this, "dom", {
    filtersList: document.querySelector('.header__filter-list')
  });

  filter_defineProperty(this, "displayfilter", function () {
    return _this.dom.filtersList.insertAdjacentHTML('beforeend', "\n\t\t<li class=\"header__filter-list-item\">\n\t\t\t<a href=\"./index.html?tag=".concat(_this.filter, "\" class=\"header__filter-tag\">#").concat(_this.filter, "</a>\n\t\t</li>\n\t\t"));
  });

  this.filter = filter;
};


;// CONCATENATED MODULE: ./src/query.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getPhotographers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, response, data, photographers, queryString, urlParams, paramTag, dataphotographers, _iterator, _step, photographer, _iterator2, _step2, tag;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json';
            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 22;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;
            photographers = data.photographers; // to get params

            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);
            paramTag = urlParams.get('tag');

            if (!(paramTag == null)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", photographers);

          case 16:
            dataphotographers = [];
            _iterator = _createForOfIteratorHelper(photographers);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                photographer = _step.value;
                _iterator2 = _createForOfIteratorHelper(photographer.tags);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    tag = _step2.value;

                    if (tag == paramTag) {
                      dataphotographers.push(photographer);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", dataphotographers);

          case 20:
            _context.next = 23;
            break;

          case 22:
            console.error(response.status);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPhotographers() {
    return _ref.apply(this, arguments);
  };
}();

var displaysPhotographersCards = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var photographers, i, photographerCard, _iterator3, _step3, photographer;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getPhotographers();

          case 2:
            photographers = _context2.sent;
            i = 0;
            photographerCard = {};
            _iterator3 = _createForOfIteratorHelper(photographers);

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                photographer = _step3.value;
                photographerCard[i] = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait, photographer.id);
                photographerCard[i].constructCardPhotographer();
                i++;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function displaysPhotographersCards() {
    return _ref2.apply(this, arguments);
  };
}();

var getPhotographerById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var url, response, queryString, urlParams, paramId, data, photographers, _iterator4, _step4, photographer;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json';
            _context3.next = 3;
            return fetch(url);

          case 3:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 31;
              break;
            }

            // // to get params
            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);
            paramId = urlParams.get('id');
            _context3.next = 10;
            return response.json();

          case 10:
            data = _context3.sent;
            photographers = data.photographers;
            _iterator4 = _createForOfIteratorHelper(photographers);
            _context3.prev = 13;

            _iterator4.s();

          case 15:
            if ((_step4 = _iterator4.n()).done) {
              _context3.next = 21;
              break;
            }

            photographer = _step4.value;

            if (!(photographer.id == paramId)) {
              _context3.next = 19;
              break;
            }

            return _context3.abrupt("return", photographer);

          case 19:
            _context3.next = 15;
            break;

          case 21:
            _context3.next = 26;
            break;

          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](13);

            _iterator4.e(_context3.t0);

          case 26:
            _context3.prev = 26;

            _iterator4.f();

            return _context3.finish(26);

          case 29:
            _context3.next = 32;
            break;

          case 31:
            console.error(response.status);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[13, 23, 26, 29]]);
  }));

  return function getPhotographerById() {
    return _ref3.apply(this, arguments);
  };
}();

var displaysPhotographersPofilsById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var photographer, photographerInfo;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getPhotographerById();

          case 2:
            photographer = _context4.sent;
            photographerInfo = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait, photographer.id);
            photographerInfo.constructCardPhotographer();

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function displaysPhotographersPofilsById() {
    return _ref4.apply(this, arguments);
  };
}(); // Fetch to get media 


var getMedia = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var url, response, data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json';
            _context5.next = 3;
            return fetch(url);

          case 3:
            response = _context5.sent;

            if (!response.ok) {
              _context5.next = 11;
              break;
            }

            _context5.next = 7;
            return response.json();

          case 7:
            data = _context5.sent;
            return _context5.abrupt("return", data.media);

          case 11:
            console.error(response.status);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getMedia() {
    return _ref5.apply(this, arguments);
  };
}();

var displaysMediaById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var medias, queryString, urlParams, id, i, mediaArray, _iterator5, _step5, media;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getMedia();

          case 2:
            medias = _context6.sent;
            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);
            id = urlParams.get('id');
            i = 0;
            mediaArray = {};
            _iterator5 = _createForOfIteratorHelper(medias);

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                media = _step5.value;

                if (media.photographerId == id) {
                  if (media['image'] !== undefined) {
                    mediaArray[i] = new Media(media.title, media.image, media.likes, 'image');
                    mediaArray[i].createMedia();
                  } else if (media['video'] !== undefined) {
                    mediaArray[i] = new Media(media.title, media.video, media.likes, 'video');
                    mediaArray[i].createMedia();
                  }

                  i++;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function displaysMediaById() {
    return _ref6.apply(this, arguments);
  };
}();

var getFilters = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var url, response, data, photographers, filters, _iterator6, _step6, photographer, _iterator7, _step7, tag;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            url = '../fisheyeData.json';
            _context7.next = 3;
            return fetch(url);

          case 3:
            response = _context7.sent;

            if (!response.ok) {
              _context7.next = 15;
              break;
            }

            _context7.next = 7;
            return response.json();

          case 7:
            data = _context7.sent;
            photographers = data.photographers;
            filters = [];
            _iterator6 = _createForOfIteratorHelper(photographers);

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                photographer = _step6.value;
                _iterator7 = _createForOfIteratorHelper(photographer.tags);

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    tag = _step7.value;

                    if (!filters.includes(tag)) {
                      filters.push(tag);
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return _context7.abrupt("return", filters);

          case 15:
            console.error(response.status);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getFilters() {
    return _ref7.apply(this, arguments);
  };
}();

var displayFilters = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var filters, _iterator8, _step8, filter, filterElement;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return getFilters();

          case 2:
            filters = _context8.sent;
            _iterator8 = _createForOfIteratorHelper(filters);

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                filter = _step8.value;
                filterElement = new Filter(filter);
                filterElement.displayfilter();
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function displayFilters() {
    return _ref8.apply(this, arguments);
  };
}();


;// CONCATENATED MODULE: ./src/class/lightbox.js
function lightbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lightbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lightbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) lightbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) lightbox_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @property {HTMLElement} element
 * @property {string[]} images lightbox image paths
 * @property {string} url image currently displayed
 */
var Lightbox = /*#__PURE__*/function () {
  /**
   * 
   * @param {string} url Image's URL
   * @param {string[]} media lightbox media paths
   */
  function Lightbox(url, media) {
    lightbox_classCallCheck(this, Lightbox);

    this.element = this.buildDOM(url);
    this.media = media;
    this.loadMedia(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener('keyup', this.onKeyUp);
  }
  /**
   * 
   * @param {string} url Image's URL
   */


  lightbox_createClass(Lightbox, [{
    key: "loadMedia",
    value: function loadMedia(url) {
      this.url = null;
      var container = this.element.querySelector('.lightbox__container'); // to display a loader

      var loader = document.createElement('div');
      loader.classList.add('lightbox__loader'); // to display the close button

      container.innerHTML = '<button class="lightbox__close lightbox__button">Fermer</button>';
      container.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
      container.appendChild(loader);
      this.url = url; // for images

      if (url.includes('.jpg')) {
        var image = new Image();

        image.onload = function () {
          container.removeChild(loader);
          container.appendChild(image);
        };

        image.classList.add('lightbox__media');
        image.src = url;
      } // for videos


      if (url.includes('.mp4')) {
        var video = document.createElement('VIDEO');

        video.onloadeddata = function () {
          container.removeChild(loader);
          container.appendChild(video);
        };

        video.setAttribute('src', url);
        video.setAttribute('controls', 'controls');
        video.classList.add('lightbox__media');
      }
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      if (e.key === 'Escape') {
        this.close(e);
      } else if (e.key === 'ArrowLeft') {
        this.previous(e);
      } else if (e.key === 'ArrowRight') {
        this.next(e);
      }
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "close",
    value: function close(e) {
      var _this = this;

      e.preventDefault();
      this.element.classList.add('fadeout');
      window.setTimeout(function () {
        _this.element.parentElement.removeChild(_this.element);
      }, 500);
      document.removeEventListener('keyup', this.onKeyUp);
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "next",
    value: function next(e) {
      var _this2 = this;

      e.preventDefault();
      var position = this.media.findIndex(function (media) {
        return media === _this2.url;
      });
      if (position === this.media.length - 1) position = -1;
      this.loadMedia(this.media[position + 1]);
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "previous",
    value: function previous(e) {
      var _this3 = this;

      e.preventDefault();
      var position = this.media.findIndex(function (media) {
        return media === _this3.url;
      });
      if (position === 0) position = this.media.length;
      this.loadMedia(this.media[position - 1]);
    }
    /**
     * 
     * @param {string} url Image's URL
     * @return {HTMLElement}
     */

  }, {
    key: "buildDOM",
    value: function buildDOM() {
      var dom = document.createElement('div');
      dom.classList.add('lightbox');
      dom.innerHTML = "<button class=\"lightbox__next lightbox__button\">Suivant</button>\n\t\t\t<button class=\"lightbox__previous lightbox__button\">Pr\xE9c\xE9dent</button>\n\t\t\t<div class=\"lightbox__container\" aria-label=\"image closeup view\">\n\t\t\t</div>";
      dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
      dom.querySelector('.lightbox__previous').addEventListener('click', this.previous.bind(this));
      return dom;
    }
  }], [{
    key: "init",
    value: function init() {
      var links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
      var gallery = links.map(function (link) {
        return link.getAttribute('href');
      });
      links.forEach(function (link) {
        return link.addEventListener('click', function (e) {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute('href'), gallery);
        });
      });
    }
  }]);

  return Lightbox;
}();


;// CONCATENATED MODULE: ./src/class/modal.js
function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

function modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    modal_classCallCheck(this, Modal);
  }

  modal_createClass(Modal, null, [{
    key: "onKeyUp",
    value: // DOM    

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    function onKeyUp(e) {
      if (e.key === 'Escape') this.closeModal();
    } // launch modal form

  }]);

  return Modal;
}();

modal_defineProperty(Modal, "element", {
  contact: document.querySelector('.photographer__contactButton'),
  modal: document.querySelector('.modal'),
  close: document.querySelector('.modal__close')
});

modal_defineProperty(Modal, "modalEvents", function () {
  document.querySelector('.photographer__contactButton').addEventListener('click', function () {
    Modal.launchModal();
  });
  document.querySelector('.modal__close').addEventListener('click', function () {
    Modal.closeModal();
  });
  document.addEventListener('keyup', Modal.onKeyUp.bind(Modal));
});

modal_defineProperty(Modal, "launchModal", function () {
  document.querySelector('.modal').style.display = 'block';
});

modal_defineProperty(Modal, "closeModal", function () {
  Modal.element.modal.style.display = 'none';
  document.removeEventListener('keyup', Modal.onKeyUp);
});


;// CONCATENATED MODULE: ./src/class/validator.js
function validator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validator = function Validator(inputs, containerInput) {
  var _this = this;

  validator_classCallCheck(this, Validator);

  validator_defineProperty(this, "valid", true);

  validator_defineProperty(this, "nameValidation", function (element, regex) {
    return element.value == '' || element.value.length < 2 || !regex.test(element.value) ? false : true;
  });

  validator_defineProperty(this, "emailValidation", function (element, regex) {
    return !regex.test(element.value) ? false : true;
  });

  validator_defineProperty(this, "textareaValidation", function (element, regex) {
    return !regex.test(element.value) ? false : true;
  });

  validator_defineProperty(this, "removeErrorMessage", function () {
    _this.valid = true;
    Array.from(_this.containerInput).map(function (field) {
      field.removeAttribute('data-error-visible');
    });
  });

  validator_defineProperty(this, "launchValidation", function () {
    _this.removeErrorMessage();

    for (var input in _this.inputs) {
      switch (input) {
        case 'firstname':
          if (!_this.nameValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'lastname':
          if (!_this.nameValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'email':
          if (!_this.emailValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'message':
          if (!_this.textareaValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        default:
          break;
      }
    }

    return _this.valid;
  });

  this.inputs = inputs;
  this.containerInput = containerInput;
};


;// CONCATENATED MODULE: ./src/configValidator.js
// to reach all the inputs and configure the validation
var inputs = {
  firstname: {
    element: document.querySelector('#firstname'),
    regex: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  lastname: {
    element: document.querySelector('#lastname'),
    regex: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/
  },
  email: {
    element: document.querySelector('#email'),
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  message: {
    element: document.querySelector('#textArea'),
    regex: /^[a-zA-Z\-,.?!;*'")(_<>\séëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{1,}$/
  }
}; // to reach all elements that display error messages for the form validation

var containerInput = document.querySelectorAll('.form__data');

;// CONCATENATED MODULE: ./src/index.js
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







if (document.title == 'Accueil') {
  displayFilters();
  displaysPhotographersCards();
}

if (document.title == 'Gallery') {
  displaysPhotographersPofilsById();

  var lightbox = /*#__PURE__*/function () {
    var _ref = src_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var loadedMedia;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return displaysMediaById();

            case 2:
              loadedMedia = _context.sent;

              if (loadedMedia == undefined) {
                Lightbox.init();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function lightbox() {
      return _ref.apply(this, arguments);
    };
  }();

  lightbox();
  setTimeout(function () {
    Modal.modalEvents();
  }, 2000); // form validation

  var src_form = document.querySelector('.form');
  var modalForm = document.querySelector('.modal');
  var validator = new Validator(inputs, containerInput);
  src_form.addEventListener('click', function (e) {
    e.preventDefault();

    if (validator.launchValidation()) {
      src_form.reset();
      modalForm.style.display = 'none';
    }
  });
}
/******/ })()
;