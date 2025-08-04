// Configuration
const CONFIG = {
    durations: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.2
    },
    easings: {
        smooth: "power2.out",
        bounce: "bounce.out",
        elastic: "elastic.out"
    }
};

// Main Application Class
class ShoppingToolsApp {
    constructor() {
        this.init();
    }

    // Initialisation principale
    init() {
        console.log('🚀 Shopping Tools App Initialized');
        
        // Initialiser les fonctionnalités
        this.initHeader();
        this.initShoppingTools();
        this.initGlobalLayout();
        this.initSection6Images();
        
        // Animation d'entrée
        this.animateEntrance();
    }

    // Initialisation du header
    initHeader() {
        const header = document.querySelector('.app-header');
        
        // Gestion du scroll pour le header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Gestion de la recherche
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) {
                    this.handleSearch(query);
                }
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = searchInput.value.trim();
                    if (query) {
                        this.handleSearch(query);
                    }
                }
            });
        }
    }

    // Initialisation de la section Shopping Tools
    initShoppingTools() {
        const toolItems = document.querySelectorAll('.tool-item');
        
        toolItems.forEach(tool => {
            tool.addEventListener('click', () => {
                const toolName = tool.querySelector('.tool-label').textContent;
                this.handleToolClick(toolName);
            });
        });
        
        // Animation initiale des outils
        gsap.from('.tool-item', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            ease: CONFIG.easings.smooth
        });
    }

    // Initialisation de la section Global Layout
    initGlobalLayout() {
        const continentSelect = document.getElementById('continent-select');
        const countrySelect = document.getElementById('country-select');
        const exploreBtn = document.getElementById('explore-btn');
        
        // Données des pays par continent
        const countriesData = {
            asia: ['China', 'Japan', 'South Korea', 'India', 'Thailand', 'Vietnam', 'Malaysia', 'Indonesia', 'Philippines', 'Singapore'],
            europe: ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Poland'],
            africa: ['South Africa', 'Egypt', 'Morocco', 'Nigeria', 'Kenya', 'Ghana', 'Tanzania', 'Uganda', 'Ethiopia', 'Algeria'],
            'north-america': ['United States', 'Canada', 'Mexico', 'Costa Rica', 'Panama', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Belize'],
            'south-america': ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay'],
            oceania: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Solomon Islands', 'Vanuatu', 'New Caledonia', 'Samoa', 'Tonga', 'Cook Islands']
        };
        
        // Gestionnaire de changement de continent
        continentSelect.addEventListener('change', () => {
            const selectedContinent = continentSelect.value;
            const countrySelect = document.getElementById('country-select');
            
            // Réinitialiser le sélecteur de pays
            countrySelect.innerHTML = '<option value="" selected disabled>Select a country or region</option>';
            
            if (selectedContinent && countriesData[selectedContinent]) {
                // Ajouter les pays du continent sélectionné
                countriesData[selectedContinent].forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.toLowerCase().replace(' ', '-');
                    option.textContent = country;
                    countrySelect.appendChild(option);
                });
                
                // Activer le sélecteur de pays
                countrySelect.disabled = false;
            } else {
                countrySelect.disabled = true;
            }
            
            // Désactiver le bouton Explore
            exploreBtn.disabled = true;
        });
        
        // Gestionnaire de changement de pays
        countrySelect.addEventListener('change', () => {
            const selectedCountry = countrySelect.value;
            exploreBtn.disabled = !selectedCountry;
        });
        
        // Gestionnaire du bouton Explore
        exploreBtn.addEventListener('click', () => {
            const selectedContinent = continentSelect.value;
            const selectedCountry = countrySelect.value;
            
            if (selectedContinent && selectedCountry) {
                this.handleExploreClick(selectedContinent, selectedCountry);
            }
        });
        
        // Animation d'entrée de la section Global Layout
        gsap.from('.global-title', {
            duration: CONFIG.durations.slow,
            opacity: 0,
            y: -50,
            ease: CONFIG.easings.smooth
        });
        
        gsap.from('.global-subtitle', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            y: 30,
            delay: 0.3,
            ease: CONFIG.easings.smooth
        });
        
        gsap.from('.form-group', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            y: 30,
            stagger: 0.2,
            delay: 0.6,
            ease: CONFIG.easings.smooth
        });
        
        gsap.from('.explore-btn', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            y: 30,
            delay: 1.2,
            ease: CONFIG.easings.smooth
        });
    }

    // Initialisation de la section 6 Images Grid
    initSection6Images() {
        const imageItems = document.querySelectorAll('.section6-images .image-item');
        
        // Gestionnaire de clic pour chaque image
        imageItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.handleImageClick(index + 1);
            });
        });
        
        // Animation d'entrée des images
        gsap.from('.section6-images .image-item', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            x: 50,
            stagger: 0.2,
            delay: 0.8,
            ease: CONFIG.easings.smooth
        });
    }

    // Gestion du clic sur un outil
    handleToolClick(toolName) {
        console.log(`🛠️ Outil sélectionné: ${toolName}`);
        
        // Animation de clic
        gsap.to(`[data-tool="${toolName}"]`, {
            duration: CONFIG.durations.fast,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: CONFIG.easings.smooth
        });
        
        // Ici on pourrait implémenter la logique pour chaque outil
        switch(toolName) {
            case 'Build Your JAC':
                alert('Configuration de véhicule JAC');
                break;
            case 'Message':
                alert('Système de messagerie JAC');
                break;
            case 'JAC Life':
                alert('Découvrir JAC Life');
                break;
            case 'Survey':
                alert('Système de sondage JAC');
                break;
            default:
                console.log(`Outil non reconnu: ${toolName}`);
        }
    }

    // Gestion de la recherche
    handleSearch(query) {
        console.log(`🔍 Recherche: ${query}`);
        alert(`Recherche pour: ${query}`);
    }

    // Gestion du clic sur le bouton Explore
    handleExploreClick(continent, country) {
        console.log(`🌍 Exploration: ${continent} - ${country}`);
        
        // Animation du bouton
        gsap.to('#explore-btn', {
            duration: CONFIG.durations.fast,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: CONFIG.easings.smooth
        });
        
        // Ici on pourrait rediriger vers la page du pays ou afficher des informations
        alert(`Exploring JAC in ${country} (${continent})`);
    }

    // Gestion du clic sur les images de la section 6
    handleImageClick(imageNumber) {
        console.log(`🖼️ Image clicked: ${imageNumber}`);
        
        // Animation de l'image cliquée
        gsap.to(`.section6-images .image-item:nth-child(${imageNumber})`, {
            duration: CONFIG.durations.fast,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: CONFIG.easings.smooth
        });
        
        // Ici on pourrait afficher des détails sur l'image ou naviguer
        alert(`Section 6 Image ${imageNumber} clicked`);
    }

    // Initialisation des images de la section 6
    initSection6Images() {
        const imageItems = document.querySelectorAll('.section6-images .image-item');
        
        imageItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const imageSrc = item.querySelector('img').src;
                const imageName = imageSrc.split('/').pop().split('.')[0];
                this.handleImageClick(imageName, index);
            });
            
            // Animation d'entrée des images
            gsap.from(item, {
                duration: CONFIG.durations.normal,
                opacity: 0,
                x: 50,
                delay: 0.5 + (index * 0.2),
                ease: CONFIG.easings.smooth
            });
        });
    }

    // Gestion du clic sur une image
    handleImageClick(imageName, index) {
        console.log(`🖼️ Image cliquée: ${imageName} (index: ${index})`);
        
        // Animation de clic
        gsap.to(`.section6-images .image-item:nth-child(${index + 1})`, {
            duration: CONFIG.durations.fast,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: CONFIG.easings.smooth
        });
        
        // Ici on pourrait afficher des informations sur l'image ou naviguer
        alert(`Image sélectionnée: ${imageName}`);
    }

    // Animation d'entrée
    animateEntrance() {
        // Animation du titre
        gsap.from('.section-title', {
            duration: CONFIG.durations.slow,
            opacity: 0,
            y: -50,
            ease: CONFIG.easings.smooth
        });

        // Animation des outils avec délai
        gsap.from('.tool-item', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            delay: 0.3,
            ease: CONFIG.easings.smooth
        });

        // Animation des séparateurs
        gsap.from('.tool-separator', {
            duration: CONFIG.durations.normal,
            opacity: 0,
            scaleY: 0,
            stagger: 0.1,
            delay: 0.5,
            ease: CONFIG.easings.smooth
        });
    }
}

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new ShoppingToolsApp();
});

// Initialisation quand la page est complètement chargée
window.addEventListener('load', () => {
    console.log('✅ Shopping Tools Page Fully Loaded');
}); 