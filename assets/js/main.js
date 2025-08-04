// JAC Motors Website - Main JavaScript
(() => {
    "use strict";

    class JACWebsite {
        constructor() {
            this.heroSwiper = null;
            this.currentModelIndex = 0;
            this.currentCategory = 'sedan-suv';
            this.modelData = {
                'sedan-suv': {
                    models: ['E30X', 'J7 Plus', 'JS8 PRO', 'JS6', 'JS4', 'JS2 PRO'],
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
                    models: ['N-Series', 'K7', 'X-Series'],
                    images: {
                        'N-Series': 'assets/images/N-Series.908eec9.png',
                        'K7': 'assets/images/K7.624d590.png',
                        'X-Series': 'assets/images/X-Series.0c20cc7.png'
                    },
                    descriptions: {
                        'N-Series': 'Commercial truck solution',
                        'K7': 'Heavy duty truck',
                        'X-Series': 'Delivery van'
                    }
                },
                'pickup': {
                    models: ['T9', 'T9 EV'],
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
            this.countryData = {
                'europe': ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Poland'],
                'asia': ['China', 'Japan', 'South Korea', 'India', 'Thailand', 'Vietnam', 'Malaysia', 'Singapore', 'Indonesia', 'Philippines'],
                'africa': ['South Africa', 'Egypt', 'Morocco', 'Nigeria', 'Kenya', 'Ghana', 'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda'],
                'north-america': ['United States', 'Canada', 'Mexico', 'Costa Rica', 'Panama', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Belize'],
                'south-america': ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay'],
                'australia': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Solomon Islands', 'Vanuatu', 'New Caledonia', 'Samoa', 'Tonga', 'Cook Islands']
            };
            this.init();
        }

        init() {
            console.log("🚀 Initializing JAC Motors Website...");
            this.initHeader();
            this.initHeroSlider();
            this.initModelsSection();
            this.initDiscoverSection();
            this.initShoppingToolsSection();
            this.initGlobalLayoutSection();
            this.initWonderfulJACSection();
            this.initAnimations();
            this.initEventListeners();
            console.log("✅ JAC Motors Website initialized successfully!");
        }

        initHeader() {
            // Header scroll effect
            const header = document.querySelector(".app-header");
            
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            });

            // Header animations
            gsap.from(".header-left .logo", {
                duration: 0.8,
                opacity: 0,
                x: -50,
                ease: "power2.out"
            });

            gsap.from(".nav-item", {
                duration: 0.6,
                opacity: 0,
                y: -20,
                stagger: 0.1,
                ease: "power2.out"
            });

            gsap.from(".header-icons", {
                duration: 0.6,
                opacity: 0,
                x: 50,
                ease: "power2.out",
                delay: 0.2
            });
        }

        initHeroSlider() {
            // Initialize Swiper for hero slider
            this.heroSwiper = new Swiper(".hero-swiper", {
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                loop: true,
                autoplay: {
                    delay: 6000, // 6 seconds per slide
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                speed: 1000,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active"
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
        }

        animateSlideContent(slideIndex) {
            const slides = document.querySelectorAll(".hero-slide");
            const currentSlide = slides[slideIndex];
            
            if (!currentSlide) return;

            const title = currentSlide.querySelector(".slide-title");
            const subtitle = currentSlide.querySelector(".slide-subtitle");
            const button = currentSlide.querySelector(".explore-btn");

            // Reset elements
            gsap.set([title, subtitle, button], {
                opacity: 0,
                y: 60,
                scale: 0.85
            });

            // Animate in sequence
            gsap.timeline()
                .to(title, {
                    duration: 1.2,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power3.out"
                })
                .to(subtitle, {
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power2.out"
                }, "-=0.5")
                .to(button, {
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "back.out(1.7)"
                }, "-=0.4");
        }

        initModelsSection() {
            // Initialize models section functionality
            this.initCategoryTabs();
            this.initModelNames();
            this.initNavigationArrows();
        }

        initCategoryTabs() {
            const tabButtons = document.querySelectorAll(".tab-btn");
            
            tabButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const category = button.dataset.category;
                    this.switchCategory(category);
                });
            });
        }

        initModelNames() {
            const modelNames = document.querySelectorAll(".model-name");
            
            modelNames.forEach(modelName => {
                modelName.addEventListener("click", () => {
                    const model = modelName.dataset.model;
                    this.selectModel(model);
                });
            });
        }

        initNavigationArrows() {
            const prevArrow = document.querySelector(".nav-prev");
            const nextArrow = document.querySelector(".nav-next");
            
            if (prevArrow) {
                prevArrow.addEventListener("click", () => {
                    this.navigateModel(-1);
                });
            }
            
            if (nextArrow) {
                nextArrow.addEventListener("click", () => {
                    this.navigateModel(1);
                });
            }
        }

        switchCategory(category) {
            // Update tab buttons
            document.querySelectorAll(".tab-btn").forEach(btn => {
                btn.classList.remove("active");
            });
            document.querySelector(`[data-category="${category}"]`).classList.add("active");
            
            // Update models grid
            document.querySelectorAll(".models-grid").forEach(grid => {
                grid.classList.remove("active");
            });
            document.querySelector(`[data-category="${category}"]`).classList.add("active");
            
            // Update model names
            this.updateModelNames(category);
            
            // Reset to first model
            this.currentModelIndex = 0;
            this.currentCategory = category;
            this.updateModelDisplay();
        }

        updateModelNames(category) {
            const modelNamesContainer = document.querySelector(".model-names");
            const models = this.modelData[category].models;
            
            modelNamesContainer.innerHTML = "";
            
            models.forEach((model, index) => {
                const modelName = document.createElement("div");
                modelName.className = `model-name ${index === 0 ? "active" : ""}`;
                modelName.dataset.model = model.toLowerCase().replace(/\s+/g, "");
                modelName.textContent = model;
                modelName.addEventListener("click", () => {
                    this.selectModel(model);
                });
                modelNamesContainer.appendChild(modelName);
            });
        }

        selectModel(model) {
            // Update active model name
            document.querySelectorAll(".model-name").forEach(name => {
                name.classList.remove("active");
            });
            document.querySelector(`[data-model="${model.toLowerCase().replace(/\s+/g, "")}"]`).classList.add("active");
            
            // Update model display
            this.currentModelIndex = this.modelData[this.currentCategory].models.indexOf(model);
            this.updateModelDisplay();
        }

        navigateModel(direction) {
            const models = this.modelData[this.currentCategory].models;
            this.currentModelIndex = (this.currentModelIndex + direction + models.length) % models.length;
            this.updateModelDisplay();
        }

        updateModelDisplay() {
            const models = this.modelData[this.currentCategory].models;
            const currentModel = models[this.currentModelIndex];
            const modelData = this.modelData[this.currentCategory];
            
            // Update image
            const modelImage = document.querySelector("#model-image, #truck-model-image, #pickup-model-image");
            if (modelImage) {
                gsap.to(modelImage, {
                    duration: 0.3,
                    opacity: 0,
                    scale: 0.95,
                    onComplete: () => {
                        modelImage.src = modelData.images[currentModel];
                        modelImage.alt = currentModel;
                        gsap.to(modelImage, {
                            duration: 0.4,
                            opacity: 1,
                            scale: 1,
                            ease: "power2.out"
                        });
                    }
                });
            }
            
            // Update title and description
            const modelTitle = document.querySelector("#model-title, #truck-model-title, #pickup-model-title");
            const modelDescription = document.querySelector("#model-description, #truck-model-description, #pickup-model-description");
            
            if (modelTitle && modelDescription) {
                gsap.to([modelTitle, modelDescription], {
                    duration: 0.3,
                    opacity: 0,
                    y: -10,
                    onComplete: () => {
                        modelTitle.textContent = currentModel;
                        modelDescription.textContent = modelData.descriptions[currentModel];
                        gsap.to([modelTitle, modelDescription], {
                            duration: 0.4,
                            opacity: 1,
                            y: 0,
                            ease: "power2.out"
                        });
                    }
                });
            }
            
            // Update active model name
            document.querySelectorAll(".model-name").forEach((name, index) => {
                name.classList.toggle("active", index === this.currentModelIndex);
            });
        }

        initDiscoverSection() {
            // Initialize discover section functionality
            this.initDiscoverTabs();
        }

        initDiscoverTabs() {
            const tabButtons = document.querySelectorAll(".discover-tabs .tab-btn");
            
            tabButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const tab = button.dataset.tab;
                    this.switchDiscoverTab(tab);
                });
            });
        }

        switchDiscoverTab(tab) {
            // Update tab buttons
            document.querySelectorAll(".discover-tabs .tab-btn").forEach(btn => {
                btn.classList.remove("active");
            });
            document.querySelector(`.discover-tabs .tab-btn[data-tab="${tab}"]`).classList.add("active");
            
            // Update content
            document.querySelectorAll(".discover-content").forEach(content => {
                content.classList.remove("active");
            });
            document.querySelector(`.discover-content[data-tab="${tab}"]`).classList.add("active");
            
            // Animate content change
            const activeContent = document.querySelector(`.discover-content[data-tab="${tab}"]`);
            if (activeContent) {
                gsap.from(activeContent, {
                    duration: 0.5,
                    opacity: 0,
                    y: 20,
                    ease: "power2.out"
                });
            }
        }

        initShoppingToolsSection() {
            // Initialize shopping tools section functionality
            this.initToolItems();
        }

        initToolItems() {
            const toolItems = document.querySelectorAll(".tool-item");
            
            toolItems.forEach(item => {
                item.addEventListener("click", () => {
                    const toolLabel = item.querySelector(".tool-label").textContent;
                    this.handleToolClick(toolLabel);
                });
            });
        }

        handleToolClick(toolName) {
            console.log("🛠️ Tool clicked:", toolName);
            
            // Add specific functionality for each tool
            switch (toolName) {
                case "Build Your JAC":
                    alert("Build Your JAC - Vehicle configuration tool coming soon!");
                    break;
                case "Message":
                    alert("Message - Contact form coming soon!");
                    break;
                case "JAC Life":
                    alert("JAC Life - Lifestyle content coming soon!");
                    break;
                case "Survey":
                    alert("Survey - Customer feedback form coming soon!");
                    break;
                default:
                    alert(`${toolName} functionality coming soon!`);
            }
        }

        initGlobalLayoutSection() {
            // Initialize global layout section functionality
            this.initLayoutDropdowns();
        }

        initLayoutDropdowns() {
            const continentSelect = document.getElementById("continent-select");
            const countrySelect = document.getElementById("country-select");
            const exploreBtn = document.querySelector(".layout-explore-btn");
            
            if (continentSelect) {
                continentSelect.addEventListener("change", (e) => {
                    const selectedContinent = e.target.value;
                    this.updateCountryDropdown(selectedContinent);
                });
            }
            
            if (countrySelect) {
                countrySelect.addEventListener("change", (e) => {
                    const selectedCountry = e.target.value;
                    this.handleCountrySelection(selectedCountry);
                });
            }
            
            if (exploreBtn) {
                exploreBtn.addEventListener("click", () => {
                    this.handleExploreClick();
                });
            }
        }

        updateCountryDropdown(continent) {
            const countrySelect = document.getElementById("country-select");
            
            if (!countrySelect) return;
            
            // Clear existing options
            countrySelect.innerHTML = '<option value="" selected disabled>Select a country or region</option>';
            
            if (continent && this.countryData[continent]) {
                // Enable country dropdown
                countrySelect.disabled = false;
                
                // Add countries for selected continent
                this.countryData[continent].forEach(country => {
                    const option = document.createElement("option");
                    option.value = country.toLowerCase().replace(/\s+/g, "-");
                    option.textContent = country;
                    countrySelect.appendChild(option);
                });
                
                // Animate the dropdown
                gsap.from(countrySelect, {
                    duration: 0.3,
                    opacity: 0,
                    y: -10,
                    ease: "power2.out"
                });
            } else {
                // Disable country dropdown
                countrySelect.disabled = true;
            }
        }

        handleCountrySelection(country) {
            console.log("🌍 Country selected:", country);
            // Add country-specific functionality here
            alert(`Redirecting to JAC Motors ${country} website...`);
        }

        handleExploreClick() {
            const continentSelect = document.getElementById("continent-select");
            const countrySelect = document.getElementById("country-select");
            
            const selectedContinent = continentSelect.value;
            const selectedCountry = countrySelect.value;
            
            if (!selectedContinent) {
                alert("Please select a continent first.");
                return;
            }
            
            if (!selectedCountry) {
                alert("Please select a country or region.");
                return;
            }
            
            console.log("🚀 Explore clicked:", selectedContinent, selectedCountry);
            alert(`Exploring JAC Motors in ${countrySelect.options[countrySelect.selectedIndex].text}...`);
        }

        initWonderfulJACSection() {
            // Initialize wonderful JAC section functionality
            this.initWonderfulButtons();
        }

        initWonderfulButtons() {
            const exploreBtn = document.querySelector(".wonderful-explore-btn");
            
            if (exploreBtn) {
                exploreBtn.addEventListener("click", () => {
                    this.handleWonderfulExploreClick();
                });
            }
        }

        handleWonderfulExploreClick() {
            console.log("🌟 Wonderful JAC explore clicked");
            alert("Exploring more JAC stories and lifestyle content...");
        }

        initAnimations() {
            // Scroll-triggered animations
            gsap.registerPlugin(ScrollTrigger);

            // Hero section entrance animation
            gsap.from(".hero-section", {
                duration: 1.5,
                opacity: 0,
                scale: 1.05,
                ease: "power2.out"
            });

            // Pagination animation
            gsap.from(".swiper-pagination", {
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.5
            });

            // Models section animations
            gsap.from(".section-title", {
                scrollTrigger: {
                    trigger: ".section-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: "power2.out"
            });

            gsap.from(".tab-nav", {
                scrollTrigger: {
                    trigger: ".tab-nav",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.from(".model-names", {
                scrollTrigger: {
                    trigger: ".model-names",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.4
            });

            gsap.from(".model-showcase", {
                scrollTrigger: {
                    trigger: ".model-showcase",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "power2.out",
                delay: 0.6
            });

            // Discover section animations
            gsap.from(".discover-section .section-title", {
                scrollTrigger: {
                    trigger: ".discover-section .section-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: "power2.out"
            });

            gsap.from(".discover-tabs .tab-nav", {
                scrollTrigger: {
                    trigger: ".discover-tabs .tab-nav",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.from(".discover-grid", {
                scrollTrigger: {
                    trigger: ".discover-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "power2.out",
                delay: 0.4
            });

            gsap.from(".discover-explore-btn", {
                scrollTrigger: {
                    trigger: ".discover-explore-btn",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.6
            });

            // Shopping tools section animations
            gsap.from(".shopping-tools-section .section-title", {
                scrollTrigger: {
                    trigger: ".shopping-tools-section .section-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: "power2.out"
            });

            gsap.from(".tool-item", {
                scrollTrigger: {
                    trigger: ".tools-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.from(".tool-separator", {
                scrollTrigger: {
                    trigger: ".tools-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                opacity: 0,
                scaleY: 0,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.4
            });

            // Global layout section animations
            gsap.from(".layout-content", {
                scrollTrigger: {
                    trigger: ".global-layout-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 1,
                opacity: 0,
                x: -50,
                ease: "power2.out"
            });

            gsap.from(".layout-title", {
                scrollTrigger: {
                    trigger: ".layout-content",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.from(".layout-subtitle", {
                scrollTrigger: {
                    trigger: ".layout-content",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 20,
                ease: "power2.out",
                delay: 0.4
            });

            gsap.from(".form-group", {
                scrollTrigger: {
                    trigger: ".layout-form",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                opacity: 0,
                y: 20,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.6
            });

            gsap.from(".layout-explore-btn", {
                scrollTrigger: {
                    trigger: ".layout-form",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 20,
                ease: "power2.out",
                delay: 0.8
            });

            // Wonderful JAC section animations
            gsap.from(".wonderful-banner", {
                scrollTrigger: {
                    trigger: ".wonderful-jac-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: -30,
                ease: "power2.out"
            });

            gsap.from(".wonderful-grid", {
                scrollTrigger: {
                    trigger: ".wonderful-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 1,
                opacity: 0,
                scale: 0.95,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.from(".wonderful-column", {
                scrollTrigger: {
                    trigger: ".wonderful-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                x: -50,
                stagger: 0.3,
                ease: "power2.out",
                delay: 0.4
            });

            gsap.from(".wonderful-image", {
                scrollTrigger: {
                    trigger: ".wonderful-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                opacity: 0,
                scale: 0.9,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.6
            });

            gsap.from(".wonderful-content", {
                scrollTrigger: {
                    trigger: ".wonderful-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.8
            });
        }

        initEventListeners() {
            // Search icon click
            const searchIcon = document.querySelector(".search-icon");
            if (searchIcon) {
                searchIcon.addEventListener("click", () => {
                    this.handleSearch();
                });
            }

            // Globe icon click
            const globeIcon = document.querySelector(".globe-icon");
            if (globeIcon) {
                globeIcon.addEventListener("click", () => {
                    this.handleLanguageChange();
                });
            }

            // Navigation links
            document.querySelectorAll(".nav-item a").forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const href = link.getAttribute("href");
                    this.smoothScrollTo(href);
                });
            });

            // Explore buttons
            document.querySelectorAll(".explore-btn").forEach(button => {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const href = button.getAttribute("href");
                    this.handleExploreClick(href);
                });
            });

            // Window resize
            window.addEventListener("resize", () => {
                this.handleResize();
            });

            // Keyboard navigation
            document.addEventListener("keydown", (e) => {
                this.handleKeyboardNavigation(e);
            });
        }

        handleSearch() {
            console.log("🔍 Search functionality triggered");
            // Add search modal or functionality here
            alert("Search functionality coming soon!");
        }

        handleLanguageChange() {
            console.log("🌐 Language change triggered");
            // Add language selection functionality here
            alert("Language selection coming soon!");
        }

        smoothScrollTo(target) {
            const element = document.querySelector(target);
            if (element) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: element,
                        offsetY: 80
                    },
                    ease: "power2.out"
                });
            }
        }

        handleExploreClick(href) {
            console.log("🚗 Explore clicked:", href);
            // Add model exploration functionality here
            alert(`Exploring ${href.replace("#", "")} model!`);
        }

        handleResize() {
            // Refresh ScrollTrigger
            ScrollTrigger.refresh();
            
            // Update Swiper
            if (this.heroSwiper) {
                this.heroSwiper.update();
            }
        }

        handleKeyboardNavigation(e) {
            if (this.heroSwiper) {
                switch (e.key) {
                    case "ArrowLeft":
                        this.heroSwiper.slidePrev();
                        break;
                    case "ArrowRight":
                        this.heroSwiper.slideNext();
                        break;
                    case " ":
                        e.preventDefault();
                        this.heroSwiper.autoplay.stop();
                        setTimeout(() => {
                            this.heroSwiper.autoplay.start();
                        }, 1000);
                        break;
                }
            }
        }

        // Public methods for external access
        getHeroSwiper() {
            return this.heroSwiper;
        }

        goToSlide(index) {
            if (this.heroSwiper) {
                this.heroSwiper.slideTo(index);
            }
        }

        pauseAutoplay() {
            if (this.heroSwiper) {
                this.heroSwiper.autoplay.stop();
            }
        }

        resumeAutoplay() {
            if (this.heroSwiper) {
                this.heroSwiper.autoplay.start();
            }
        }
    }

    // Initialize when DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        window.jacWebsite = new JACWebsite();
    });

    // Export for global access
    window.JACWebsite = JACWebsite;
})();