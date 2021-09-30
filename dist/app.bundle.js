(()=>{"use strict";function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var e=function(){function e(t,n,o,a,i,c,s,u){var h=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"dom",{photographers:document.querySelector(".photographers"),photographer:document.querySelector(".photographer"),nameInForm:document.querySelector(".modal__head")}),r(this,"getPrice",(function(){return'\n\t\t<p class="infos__price">'.concat(h.price,"€ / jour</p>\n\t\t")})),r(this,"tagsForPhotographersCards",(function(){for(var t="",r=0;r<h.tags.length;r++)t+='<span class="photographer__tag"><a href="./index.html?tag='.concat(h.tags[r],'">#').concat(h.tags[r],"</a></span>");return t})),r(this,"tagsForPhotographerHeader",(function(){for(var t="",r=0;r<h.tags.length;r++)t+='<span class="photographer__tag"><a href="../index.html?tag='.concat(h.tags[r],'">#').concat(h.tags[r],"</a></span>");return t})),this.name=t,this.city=n,this.country=o,this.tags=a,this.tagline=i,this.price=c,this.portrait=s,this.id=u}var n,o,a;return n=e,(o=[{key:"photographerCard",get:function(){return'\n\t\t<article class="photographer">\n\t\t\t<a href="./photographers/index.html?id='.concat(this.id,'" class="photographer__header">\n\t\t\t\t<img class="photographer__img" src="public/images/photographers/id_photos/').concat(this.portrait,'" alt="">\n\t\t\t\t<h2 class="photographer__name">').concat(this.name,'</h2>\n\t\t\t</a>\n\t\t\t<div class="photographer__content">\n\t\t\t\t<p class="photographer__location">').concat(this.city,", ").concat(this.country,'</p>\n\t\t\t\t<p class="photographer__tagline">').concat(this.tagline,'</p>\n\t\t\t\t<p class="photographer__price">').concat(this.price,'€/jour</p>\n\t\t\t</div>\n\t\t\t<div class="photographer__tags">')+this.tagsForPhotographersCards()+"</div>\n\t\t</article>\n\t\t"}},{key:"photographerHeader",get:function(){return'\n\t\t<article class="photographer__profil">\n\t\t\t<div class="photographer__body">\n\t\t\t\t<div class="photographer__content">\n\t\t\t\t\t<h1 class="photographer__name">'.concat(this.name,'</h1>\n\t\t\t\t\t<p class="photographer__location">').concat(this.city,", ").concat(this.country,'</p>\n\t\t\t\t\t<p class="photographer__tagline">').concat(this.tagline,'</p>\n\t\t\t\t\t<div class="photographer__tags">')+this.tagsForPhotographerHeader()+'</div>\n\t\t\t\t</div>\n\t\t\t\t<button class="photographer__contactButton">Contactez-moi</button>\n\t\t\t</div>\n\t\t\t<img class="photographer__img" src="../public/images/photographers/id_photos/'.concat(this.portrait,'" alt="').concat(this.name,'">\n\t\t</article>\n\t\t')}},{key:"photographerNameInForm",get:function(){return'\n\t\t\t<h1 class="modal__head" id="contact">Contactez-moi </br> '.concat(this.name,"</h1>\n\t\t")}}])&&t(n.prototype,o),a&&t(n,a),e}();function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.filter=r}var r,e,o;return r=t,(e=[{key:"displayFilter",get:function(){return'\n\t\t<li class="header__filter-list-item">\n\t\t\t<a href="./index.html?tag='.concat(this.filter,'" class="header__filter-tag">#').concat(this.filter,"</a>\n\t\t</li>\n\t\t")}}])&&n(r.prototype,e),o&&n(r,o),t}();function a(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw a}}}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r,e,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))}}var u=function(){var t=s(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json",t.next=3,fetch("https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json");case 3:if(!(r=t.sent).ok){t.next=8;break}return t.abrupt("return",r.json());case 8:console.error(r.status);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=s(regeneratorRuntime.mark((function t(r){var n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r;case 2:return n=t.sent,o=n.photographers,a=[],o.map((function(t){a.push(new e(t.name,t.city,t.country,t.tags,t.tagline,t.price,t.portrait,t.id))})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=s(regeneratorRuntime.mark((function t(r){var e,n,i,c,s,u,h,p,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r;case 2:e=t.sent,n=e.photographers,i=[],c=a(n);try{for(c.s();!(s=c.n()).done;){u=s.value,h=a(u.tags);try{for(h.s();!(p=h.n()).done;)l=p.value,i.includes(l)||i.push(l)}catch(t){h.e(t)}finally{h.f()}}}catch(t){c.e(t)}finally{c.f()}return f=[],i.map((function(t){return f.push(new o(t))})),t.abrupt("return",f);case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();function l(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw a}}}}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var g={photographersContainer:document.querySelector(".photographers"),filtersList:document.querySelector(".header__filter-list")};p(u()).then((function(t){return t.map((function(t){g.filtersList.insertAdjacentHTML("beforeend",t.displayFilter)}))}));var d=window.location.search,m=new URLSearchParams(d).get("tag");h(u()).then((function(t){t.map((function(t){if(null==m)g.photographersContainer.insertAdjacentHTML("beforeend",t.photographerCard);else{var r,e=l(t.tags);try{for(e.s();!(r=e.n()).done;){var n=r.value;m==n&&g.photographersContainer.insertAdjacentHTML("beforeend",t.photographerCard)}}catch(t){e.e(t)}finally{e.f()}}}))}));var y=document.querySelector(".anchor");window.addEventListener("scroll",(function(){document.documentElement.clientWidth>1023&&(y.style.display="block")}))})();
//# sourceMappingURL=app.bundle.js.map