/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Configuration globale
var CONFIG = {
  // Durées d'animation
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2
  },
  // Easings
  easings: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)'
  }
};

// Classe principale de l'application
var JACApp = /*#__PURE__*/function () {
  function JACApp() {
    _classCallCheck(this, JACApp);
    this.init();
  }
  return _createClass(JACApp, [{
    key: "init",
    value: function init() {
      console.log('🚀 Initialisation de JAC Clone...');

      // Initialiser les composants
      this.initHeader();
      this.initHeroSlider();
      this.initModelsSection();
      this.initAnimations();
      this.initEventListeners();
      console.log('✅ JAC Clone initialisé avec succès !');
    }

    // Initialisation du header
  }, {
    key: "initHeader",
    value: function initHeader() {
      var header = document.querySelector('.app-header');

      // Animation du header au scroll
      gsap.to(header, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '+=100',
          scrub: true
        },
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(15px)'
      });

      // Animation des éléments du header
      gsap.from('.header-left .logo', {
        duration: CONFIG.durations.normal,
        opacity: 0,
        x: -50,
        ease: CONFIG.easings.smooth
      });
      gsap.from('.nav-item', {
        duration: CONFIG.durations.normal,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: CONFIG.easings.smooth
      });
    }

    // Initialisation du slider hero
  }, {
    key: "initHeroSlider",
    value: function initHeroSlider() {
      var _this = this;
      var heroSwiper = new Swiper('.hero-swiper', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        },
        on: {
          init: function init() {
            _this.animateSlideContent(0);
          },
          slideChange: function slideChange(swiper) {
            _this.animateSlideContent(swiper.activeIndex);
          }
        }
      });
      this.heroSwiper = heroSwiper;
    }

    // Animation du contenu des slides
  }, {
    key: "animateSlideContent",
    value: function animateSlideContent(slideIndex) {
      var slides = document.querySelectorAll('.hero-slide');
      var currentSlide = slides[slideIndex];
      if (!currentSlide) return;
      var slideContent = currentSlide.querySelector('.slide-content');
      var slideTitle = currentSlide.querySelector('.slide-title');
      var slideSubtitle = currentSlide.querySelector('.slide-subtitle');
      var exploreBtn = currentSlide.querySelector('.explore-btn');
      var featureBadge = currentSlide.querySelector('.feature-badge');

      // Timeline pour l'animation du contenu
      var tl = gsap.timeline();
      tl.set([slideTitle, slideSubtitle, exploreBtn, featureBadge], {
        opacity: 0,
        y: 60,
        scale: 0.85
      }).to(slideTitle, {
        duration: CONFIG.durations.slow,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power3.out'
      }).to(slideSubtitle, {
        duration: CONFIG.durations.normal,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power2.out'
      }, '-=0.5').to(exploreBtn, {
        duration: CONFIG.durations.normal,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: CONFIG.easings.bounce
      }, '-=0.4').to(featureBadge, {
        duration: CONFIG.durations.normal,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power2.out'
      }, '-=0.2');
    }

    // Initialisation de la section modèles
  }, {
    key: "initModelsSection",
    value: function initModelsSection() {
      var _this2 = this;
      var tabButtons = document.querySelectorAll('.tab-btn');
      var modelGrids = document.querySelectorAll('.models-grid');

      // Données des modèles pour chaque catégorie
      var categoryData = {
        'sedan-suv': {
          models: ['E30X', 'J7 Plus', 'JS8 PRO', 'JS6', 'JS4', 'JS2 PRO'],
          activeModel: 'E30X',
          images: {
            'E30X': 'assets/images/E30X.1d6d4d6.png',
            'J7 Plus': 'assets/images/J7Plus.cbdf756.png',
            'JS8 PRO': 'assets/images/JS8PRO.cbdf44e.png',
            'JS6': 'assets/images/JS6.a0dbc8b.png',
            'JS4': 'assets/images/JS4.1c36d90.png',
            'JS2 PRO': 'assets/images/JS2PRO.733cb25.png'
          },
          descriptions: {
            'E30X': 'Smart city electric vehicle',
            'J7 Plus': 'Premium sedan for family',
            'JS8 PRO': 'Premium SUV for family',
            'JS6': 'Compact SUV',
            'JS4': 'Urban SUV',
            'JS2 PRO': 'Sport SUV'
          }
        },
        'truck-van': {
          models: ['N-Series', 'K7', 'X-Series', 'Sunray EV', 'M3 EV'],
          activeModel: 'N-Series',
          images: {
            'N-Series': 'assets/images/N-Series.908eec9.png',
            'K7': 'assets/images/K7.624d590.png',
            'X-Series': 'assets/images/X-Series.0c20cc7.png',
            'Sunray EV': 'assets/images/N-Series.908eec9.png',
            // Using N-Series as placeholder
            'M3 EV': 'assets/images/K7.624d590.png' // Using K7 as placeholder
          },
          descriptions: {
            'N-Series': 'Commercial truck solution',
            'K7': 'Heavy duty truck',
            'X-Series': 'Delivery van',
            'Sunray EV': 'Electric commercial vehicle',
            'M3 EV': 'Electric van'
          }
        },
        'pickup': {
          models: ['T9', 'T9 EV'],
          activeModel: 'T9',
          images: {
            'T9': 'assets/images/T9.d56103b.png',
            'T9 EV': 'assets/images/T9EV.1e4c431.png'
          },
          descriptions: {
            'T9': 'Adventure pickup truck',
            'T9 EV': 'Electric pickup truck'
          }
        }
      };
      tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var category = button.dataset.category;
          var categoryInfo = categoryData[category];

          // Mettre à jour les boutons actifs
          tabButtons.forEach(function (btn) {
            return btn.classList.remove('active');
          });
          button.classList.add('active');

          // Mettre à jour les noms de modèles
          _this2.updateModelNames(categoryInfo.models, categoryInfo.activeModel);

          // Afficher la grille correspondante
          modelGrids.forEach(function (grid) {
            if (grid.dataset.category === category) {
              grid.classList.add('active');
              _this2.animateModelCards(grid);
            } else {
              grid.classList.remove('active');
            }
          });

          // Mettre à jour l'image et les informations
          _this2.updateModelDisplay(categoryInfo.activeModel, categoryInfo);
        });
      });

      // Animation initiale des cartes
      var activeGrid = document.querySelector('.models-grid.active');
      if (activeGrid) {
        this.animateModelCards(activeGrid);
      }
    }

    // Mise à jour des noms de modèles
  }, {
    key: "updateModelNames",
    value: function updateModelNames(models, activeModel) {
      var _this3 = this;
      var modelNamesContainer = document.querySelector('.model-names');
      modelNamesContainer.innerHTML = '';
      models.forEach(function (model) {
        var modelName = document.createElement('div');
        modelName.className = "model-name ".concat(model === activeModel ? 'active' : '');
        modelName.dataset.model = model.toLowerCase().replace(/\s+/g, '');
        modelName.textContent = model;
        modelName.addEventListener('click', function () {
          // Mettre à jour l'état actif
          document.querySelectorAll('.model-name').forEach(function (name) {
            return name.classList.remove('active');
          });
          modelName.classList.add('active');

          // Mettre à jour l'affichage
          var currentCategory = document.querySelector('.tab-btn.active').dataset.category;
          var categoryInfo = _this3.getCategoryData(currentCategory);
          _this3.updateModelDisplay(model, categoryInfo);
        });
        modelNamesContainer.appendChild(modelName);
      });
    }

    // Mise à jour de l'affichage du modèle
  }, {
    key: "updateModelDisplay",
    value: function updateModelDisplay(model, categoryInfo) {
      var modelImage = document.getElementById('model-image') || document.getElementById('truck-model-image') || document.getElementById('pickup-model-image');
      var modelTitle = document.getElementById('model-title') || document.getElementById('truck-model-title') || document.getElementById('pickup-model-title');
      var modelDescription = document.getElementById('model-description') || document.getElementById('truck-model-description') || document.getElementById('pickup-model-description');
      if (modelImage && modelTitle && modelDescription) {
        // Animer le changement d'image
        gsap.to(modelImage, {
          duration: 0.3,
          opacity: 0,
          scale: 0.95,
          onComplete: function onComplete() {
            modelImage.src = categoryInfo.images[model];
            modelImage.alt = model;
            gsap.to(modelImage, {
              duration: 0.4,
              opacity: 1,
              scale: 1,
              ease: 'power2.out'
            });
          }
        });

        // Animer le changement de titre et description
        gsap.to([modelTitle, modelDescription], {
          duration: 0.3,
          opacity: 0,
          y: -10,
          onComplete: function onComplete() {
            modelTitle.textContent = model;
            modelDescription.textContent = categoryInfo.descriptions[model];
            gsap.to([modelTitle, modelDescription], {
              duration: 0.4,
              opacity: 1,
              y: 0,
              ease: 'power2.out'
            });
          }
        });
      }
    }

    // Obtenir les données de catégorie
  }, {
    key: "getCategoryData",
    value: function getCategoryData(category) {
      var categoryData = {
        'sedan-suv': {
          images: {
            'E30X': 'assets/images/E30X.1d6d4d6.png',
            'J7 Plus': 'assets/images/J7Plus.cbdf756.png',
            'JS8 PRO': 'assets/images/JS8PRO.cbdf44e.png',
            'JS6': 'assets/images/JS6.a0dbc8b.png',
            'JS4': 'assets/images/JS4.1c36d90.png',
            'JS2 PRO': 'assets/images/JS2PRO.733cb25.png'
          },
          descriptions: {
            'E30X': 'Smart city electric vehicle',
            'J7 Plus': 'Premium sedan for family',
            'JS8 PRO': 'Premium SUV for family',
            'JS6': 'Compact SUV',
            'JS4': 'Urban SUV',
            'JS2 PRO': 'Sport SUV'
          }
        },
        'truck-van': {
          images: {
            'N-Series': 'assets/images/N-Series.908eec9.png',
            'K7': 'assets/images/K7.624d590.png',
            'X-Series': 'assets/images/X-Series.0c20cc7.png',
            'Sunray EV': 'assets/images/N-Series.908eec9.png',
            // Using N-Series as placeholder
            'M3 EV': 'assets/images/K7.624d590.png' // Using K7 as placeholder
          },
          descriptions: {
            'N-Series': 'Commercial truck solution',
            'K7': 'Heavy duty truck',
            'X-Series': 'Delivery van',
            'Sunray EV': 'Electric commercial vehicle',
            'M3 EV': 'Electric van'
          }
        },
        'pickup': {
          images: {
            'T9': 'assets/images/T9.d56103b.png',
            'T9 EV': 'assets/images/T9EV.1e4c431.png'
          },
          descriptions: {
            'T9': 'Adventure pickup truck',
            'T9 EV': 'Electric pickup truck'
          }
        }
      };
      return categoryData[category];
    }

    // Animation des cartes de modèles
  }, {
    key: "animateModelCards",
    value: function animateModelCards(grid) {
      var cards = grid.querySelectorAll('.model-card');
      gsap.fromTo(cards, {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        duration: CONFIG.durations.normal,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: CONFIG.easings.smooth
      });
    }

    // Initialisation des animations GSAP
  }, {
    key: "initAnimations",
    value: function initAnimations() {
      // Animation du titre de section
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        duration: CONFIG.durations.normal,
        opacity: 0,
        y: 50,
        ease: CONFIG.easings.smooth
      });

      // Animation des cartes de modèles au scroll
      gsap.from('.model-card', {
        scrollTrigger: {
          trigger: '.models-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        duration: CONFIG.durations.normal,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: CONFIG.easings.smooth
      });

      // Animation du footer
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        duration: CONFIG.durations.normal,
        opacity: 0,
        y: 30,
        ease: CONFIG.easings.smooth
      });
    }

    // Initialisation des event listeners
  }, {
    key: "initEventListeners",
    value: function initEventListeners() {
      var _this4 = this;
      // Gestion de la recherche
      var searchInput = document.querySelector('.search-input');
      var searchBtn = document.querySelector('.search-btn');
      if (searchBtn) {
        searchBtn.addEventListener('click', function () {
          _this4.handleSearch(searchInput.value);
        });
      }

      // Gestion des liens de navigation
      var navLinks = document.querySelectorAll('.nav-item a');
      navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var target = link.getAttribute('href');
          _this4.smoothScrollTo(target);
        });
      });

      // Gestion des cartes de modèles
      var modelCards = document.querySelectorAll('.model-card');
      modelCards.forEach(function (card) {
        card.addEventListener('click', function () {
          var model = card.dataset.model;
          _this4.handleModelClick(model);
        });
      });

      // Gestion du responsive
      window.addEventListener('resize', function () {
        _this4.handleResize();
      });
    }

    // Gestion de la recherche
  }, {
    key: "handleSearch",
    value: function handleSearch(query) {
      if (!query.trim()) return;
      console.log("\uD83D\uDD0D Recherche: ".concat(query));
      // Ici on pourrait implémenter une vraie fonctionnalité de recherche
      alert("Recherche pour: ".concat(query));
    }

    // Scroll fluide vers une section
  }, {
    key: "smoothScrollTo",
    value: function smoothScrollTo(target) {
      var element = document.querySelector(target);
      if (element) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: element,
            offsetY: 80
          },
          ease: CONFIG.easings.smooth
        });
      }
    }

    // Gestion du clic sur un modèle
  }, {
    key: "handleModelClick",
    value: function handleModelClick(model) {
      console.log("\uD83D\uDE97 Mod\xE8le s\xE9lectionn\xE9: ".concat(model));
      // Ici on pourrait naviguer vers une page de détail du modèle
      alert("D\xE9tails du mod\xE8le: ".concat(model));
    }

    // Gestion du redimensionnement
  }, {
    key: "handleResize",
    value: function handleResize() {
      // Recalculer les animations si nécessaire
      ScrollTrigger.refresh();

      // Réinitialiser le slider si nécessaire
      if (this.heroSwiper) {
        this.heroSwiper.update();
      }
    }
  }]);
}(); // Initialisation de l'application quand le DOM est prêt
document.addEventListener('DOMContentLoaded', function () {
  new JACApp();
});

// Export pour utilisation dans d'autres modules
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JACApp);
/******/ })()
;
//# sourceMappingURL=main.js.map