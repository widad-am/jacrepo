# JAC Motors Clone

Un clone fidèle du site officiel de JAC Motors (https://jacen.jac.com.cn/) avec toutes les animations et fonctionnalités.

## 🚀 Fonctionnalités

- **Hero Slider** avec 4 slides (E30X, T9, JS8 PRO, N75EV)
- **Animations GSAP** avec ScrollTrigger pour les effets de scroll
- **Design responsive** mobile/desktop
- **Navigation multilingue** (Chinois, Espagnol, Arabe)
- **Section modèles** avec grille interactive
- **Vidéos et images** haute qualité
- **Fonts personnalisées** (Aileron, Cormorant, Source Sans Pro)

## 📁 Structure du projet

```
jac-clone/
├── assets/
│   ├── css/
│   │   └── main.css          # CSS compilé
│   ├── js/
│   │   └── main.js           # JavaScript principal
│   ├── images/               # Images téléchargées
│   ├── videos/               # Vidéos téléchargées
│   └── fonts/                # Fonts personnalisées
├── src/
│   ├── scss/
│   │   └── main.scss         # Source SCSS
│   └── js/
│       └── main.js           # Source JavaScript (modules)
├── index.html                # Page principale
├── package.json              # Dépendances
├── webpack.config.js         # Configuration Webpack
├── .eslintrc.js             # Configuration ESLint
└── README.md                 # Documentation
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **SCSS/Sass** - Préprocesseur CSS
- **JavaScript ES6+** - Logique interactive
- **GSAP 3** - Animations avancées
- **Swiper.js** - Slider hero
- **Webpack** - Bundling JavaScript
- **Live Server** - Serveur de développement

## 🎨 Design System

### Couleurs
- **Primary**: `#cc000c` (Rouge JAC)
- **Secondary**: `#400003` (Rouge foncé)
- **Text**: `#000000` (Noir)
- **White**: `#ffffff`
- **Gray**: `#686868`

### Typographie
- **Aileron-Regular** - Texte principal
- **Cormorant-Bold** - Titres
- **Source Sans Pro** - Sous-titres

### Breakpoints
- **Mobile**: `max-width: 767px`
- **Tablet**: `min-width: 768px`
- **Desktop**: `min-width: 1366px`

## 🚀 Installation et démarrage

### Prérequis
- Node.js (version 14+)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd jac-clone

# Installer les dépendances
npm install

# Télécharger les assets (images, vidéos, fonts)
node harvest-assets.js

# Compiler le CSS
npm run build:css

# Démarrer le serveur de développement
npm start
```

### Scripts disponibles

```bash
# Démarrage en mode développement
npm start

# Build complet (CSS + JS)
npm run build

# Build CSS uniquement
npm run build:css

# Build JS uniquement
npm run build:js

# Mode développement avec watch
npm run dev

# Linting JavaScript
npm run lint

# Linting avec auto-fix
npm run lint:fix
```

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile-first** approach
- **Breakpoints** optimisés
- **Images adaptatives**
- **Vidéos optimisées**
- **Navigation mobile** adaptée

## 🎭 Animations GSAP

### Animations implémentées
- **Header** - Animation au scroll avec blur
- **Hero Slider** - Transitions fluides entre slides
- **Section modèles** - Apparition progressive des cartes
- **Scroll animations** - Effets au scroll
- **Hover effects** - Interactions utilisateur

### Configuration GSAP
```javascript
const CONFIG = {
    durations: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.2
    },
    easings: {
        smooth: 'power2.out',
        bounce: 'back.out(1.7)',
        elastic: 'elastic.out(1, 0.3)'
    }
};
```

## 🎯 Sections principales

### 1. Header
- Navigation fixe avec blur effect
- Menu multilingue
- Barre de recherche
- Logo JAC Motors

### 2. Hero Slider
- 4 slides avec vidéos/images
- Transitions fade
- Contenu animé
- Pagination interactive

### 3. Section Modèles
- Grille de véhicules
- Filtres par catégorie
- Cartes interactives
- Animations au hover

### 4. Footer
- Liens rapides
- Informations de contact
- Sélecteur de langue

## 🔧 Configuration avancée

### Webpack
Le projet utilise Webpack pour :
- Bundling JavaScript
- Transpilation ES6+
- Source maps
- Optimisation production

### ESLint
Configuration ESLint pour :
- Qualité du code
- Standards ES6+
- Règles personnalisées

### Sass
Structure SCSS avec :
- Variables et mixins
- Breakpoints responsives
- Organisation modulaire

## 📦 Déploiement

### Build de production
```bash
npm run build
```

### Structure de déploiement
```
dist/
├── index.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── images/
│   ├── videos/
│   └── fonts/
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **JAC Motors** pour l'inspiration
- **GSAP** pour les animations
- **Swiper.js** pour le slider
- **Sass** pour le préprocesseur CSS

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

---

**Note** : Ce projet est un clone éducatif du site officiel de JAC Motors. Tous les droits appartiennent à leurs propriétaires respectifs. # jacrepo
