// Configuration globale
const CONFIG = {
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
class JACApp {
    constructor() {
        this.init();
    }
    
    init() {
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
    initHeader() {
        const header = document.querySelector('.app-header');
        
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
    initHeroSlider() {
        const heroSwiper = new Swiper('.hero-swiper', {
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
                init: () => {
                    this.animateSlideContent(0);
                },
                slideChange: (swiper) => {
                    this.animateSlideContent(swiper.activeIndex);
                }
            }
        });
        
        this.heroSwiper = heroSwiper;
    }
    
    // Animation du contenu des slides
    animateSlideContent(slideIndex) {
        const slides = document.querySelectorAll('.hero-slide');
        const currentSlide = slides[slideIndex];
        
        if (!currentSlide) return;
        
        const slideContent = currentSlide.querySelector('.slide-content');
        const slideTitle = currentSlide.querySelector('.slide-title');
        const slideSubtitle = currentSlide.querySelector('.slide-subtitle');
        const exploreBtn = currentSlide.querySelector('.explore-btn');
        const featureBadge = currentSlide.querySelector('.feature-badge');
        
        // Timeline pour l'animation du contenu
        const tl = gsap.timeline();
        
        tl.set([slideTitle, slideSubtitle, exploreBtn, featureBadge], { 
            opacity: 0, 
            y: 60,
            scale: 0.85
        })
          .to(slideTitle, {
              duration: CONFIG.durations.slow,
              opacity: 1,
              y: 0,
              scale: 1,
              ease: 'power3.out'
          })
          .to(slideSubtitle, {
              duration: CONFIG.durations.normal,
              opacity: 1,
              y: 0,
              scale: 1,
              ease: 'power2.out'
          }, '-=0.5')
          .to(exploreBtn, {
              duration: CONFIG.durations.normal,
              opacity: 1,
              y: 0,
              scale: 1,
              ease: CONFIG.easings.bounce
          }, '-=0.4')
          .to(featureBadge, {
              duration: CONFIG.durations.normal,
              opacity: 1,
              y: 0,
              scale: 1,
              ease: 'power2.out'
          }, '-=0.2');
    }
    
    // Initialisation de la section modèles
    initModelsSection() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const modelGrids = document.querySelectorAll('.models-grid');
        
        // Données des modèles pour chaque catégorie
        const categoryData = {
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
                    'Sunray EV': 'assets/images/N-Series.908eec9.png', // Using N-Series as placeholder
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
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                const categoryInfo = categoryData[category];
                
                // Mettre à jour les boutons actifs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Mettre à jour les noms de modèles
                this.updateModelNames(categoryInfo.models, categoryInfo.activeModel);
                
                // Afficher la grille correspondante
                modelGrids.forEach(grid => {
                    if (grid.dataset.category === category) {
                        grid.classList.add('active');
                        this.animateModelCards(grid);
                    } else {
                        grid.classList.remove('active');
                    }
                });
                
                // Mettre à jour l'image et les informations
                this.updateModelDisplay(categoryInfo.activeModel, categoryInfo);
            });
        });
        
        // Animation initiale des cartes
        const activeGrid = document.querySelector('.models-grid.active');
        if (activeGrid) {
            this.animateModelCards(activeGrid);
        }
    }
    
    // Mise à jour des noms de modèles
    updateModelNames(models, activeModel) {
        const modelNamesContainer = document.querySelector('.model-names');
        modelNamesContainer.innerHTML = '';
        
        models.forEach(model => {
            const modelName = document.createElement('div');
            modelName.className = `model-name ${model === activeModel ? 'active' : ''}`;
            modelName.dataset.model = model.toLowerCase().replace(/\s+/g, '');
            modelName.textContent = model;
            
            modelName.addEventListener('click', () => {
                // Mettre à jour l'état actif
                document.querySelectorAll('.model-name').forEach(name => name.classList.remove('active'));
                modelName.classList.add('active');
                
                // Mettre à jour l'affichage
                const currentCategory = document.querySelector('.tab-btn.active').dataset.category;
                const categoryInfo = this.getCategoryData(currentCategory);
                this.updateModelDisplay(model, categoryInfo);
            });
            
            modelNamesContainer.appendChild(modelName);
        });
    }
    
    // Mise à jour de l'affichage du modèle
    updateModelDisplay(model, categoryInfo) {
        const modelImage = document.getElementById('model-image') || 
                          document.getElementById('truck-model-image') || 
                          document.getElementById('pickup-model-image');
        const modelTitle = document.getElementById('model-title') || 
                          document.getElementById('truck-model-title') || 
                          document.getElementById('pickup-model-title');
        const modelDescription = document.getElementById('model-description') || 
                               document.getElementById('truck-model-description') || 
                               document.getElementById('pickup-model-description');
        
        if (modelImage && modelTitle && modelDescription) {
            // Animer le changement d'image
            gsap.to(modelImage, {
                duration: 0.3,
                opacity: 0,
                scale: 0.95,
                onComplete: () => {
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
                onComplete: () => {
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
    getCategoryData(category) {
        const categoryData = {
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
                    'Sunray EV': 'assets/images/N-Series.908eec9.png', // Using N-Series as placeholder
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
    animateModelCards(grid) {
        const cards = grid.querySelectorAll('.model-card');
        
        gsap.fromTo(cards, 
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                duration: CONFIG.durations.normal,
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.1,
                ease: CONFIG.easings.smooth
            }
        );
    }
    
    // Initialisation des animations GSAP
    initAnimations() {
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
    initEventListeners() {
        // Gestion de la recherche
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.handleSearch(searchInput.value);
            });
        }
        
        // Gestion des liens de navigation
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.smoothScrollTo(target);
            });
        });
        
        // Gestion des cartes de modèles
        const modelCards = document.querySelectorAll('.model-card');
        modelCards.forEach(card => {
            card.addEventListener('click', () => {
                const model = card.dataset.model;
                this.handleModelClick(model);
            });
        });
        
        // Gestion du responsive
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    // Gestion de la recherche
    handleSearch(query) {
        if (!query.trim()) return;
        
        console.log(`🔍 Recherche: ${query}`);
        // Ici on pourrait implémenter une vraie fonctionnalité de recherche
        alert(`Recherche pour: ${query}`);
    }
    
    // Scroll fluide vers une section
    smoothScrollTo(target) {
        const element = document.querySelector(target);
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
    handleModelClick(model) {
        console.log(`🚗 Modèle sélectionné: ${model}`);
        // Ici on pourrait naviguer vers une page de détail du modèle
        alert(`Détails du modèle: ${model}`);
    }
    
    // Gestion du redimensionnement
    handleResize() {
        // Recalculer les animations si nécessaire
        ScrollTrigger.refresh();
        
        // Réinitialiser le slider si nécessaire
        if (this.heroSwiper) {
            this.heroSwiper.update();
        }
    }
}

// Initialisation de l'application quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new JACApp();
});

// Export pour utilisation dans d'autres modules
export default JACApp; 