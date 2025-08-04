const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const BASE_URL = 'https://jacen.jac.com.cn';
const OUTPUT_DIR = './assets'; 

// Créer les dossiers de sortie
const dirs = ['images', 'videos', 'fonts', 'css', 'js'];
dirs.forEach(dir => {
    if (!fs.existsSync(path.join(OUTPUT_DIR, dir))) {
        fs.mkdirSync(path.join(OUTPUT_DIR, dir), { recursive: true });
    }
});

// Fonction pour télécharger un fichier
function downloadFile(url, outputPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https:') ? https : http;
        
        const file = fs.createWriteStream(outputPath);
        
        protocol.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Téléchargé: ${url}`);
                    resolve();
                });
            } else {
                console.log(`❌ Erreur ${response.statusCode}: ${url}`);
                resolve(); // Continue même en cas d'erreur
            }
        }).on('error', (err) => {
            console.log(`❌ Erreur réseau: ${url}`);
            resolve(); // Continue même en cas d'erreur
        });
    });
}

// Assets identifiés dans le HTML
const assets = {
    images: [
        '/_nuxt/img/logo-nav-pc.fb0453d.png',
        '/_nuxt/img/E30X.b17a632.jpg',
        '/_nuxt/img/T9.0dc9d30.jpg',
        '/_nuxt/img/js8pro.39d4e96.jpg',
        '/_nuxt/img/T9EV.2167e8e.jpg',
        '/_nuxt/img/url-select.f4a5aa2.png',
        '/_nuxt/img/right.0d1a8fd.png',
        '/_nuxt/img/tools-bg.e000dc0.png'
    ],
    videos: [
        '/_nuxt/videos/e30x.b0f0a4d.mp4',
        '/_nuxt/videos/t9.1f9afc7.mp4',
        '/_nuxt/videos/n75ev.cd96b65.mp4'
    ],
    fonts: [
        '/_nuxt/fonts/Open-Sans.a958155.ttf',
        '/_nuxt/fonts/Open-Sans.8b1093e.woff',
        '/_nuxt/fonts/Aileron-Regular-10.309f434.eot',
        '/_nuxt/fonts/Aileron-Regular-10.b008e0c.woff',
        '/_nuxt/fonts/Aileron-Regular-10.7047c8f.ttf',
        '/_nuxt/fonts/Crimson-Text-Medium.c3f0a04.ttf',
        '/_nuxt/fonts/Crimson-Text-Medium.1e2457b.eot',
        '/_nuxt/fonts/Crimson-Text-Medium.9edb741.woff',
        '/_nuxt/fonts/Crimson-Text-Medium.6205e7f.otf',
        '/_nuxt/fonts/crimson_text_roman.1d85438.ttf',
        '/_nuxt/fonts/crimson_text_roman.f629c2b.eot',
        '/_nuxt/fonts/crimson_text_roman.c9a5e95.woff',
        '/_nuxt/fonts/crimson_text_roman.95b1b6d.otf',
        '/_nuxt/fonts/Roboto-Thin.92b0800.ttf',
        '/_nuxt/fonts/SourceSansPro-Light.0d4a9a1.otf',
        '/_nuxt/fonts/SourceSansPro-Regular.7a9975d.otf',
        '/_nuxt/fonts/SourceSansPro-Semibold.94f13d0.otf',
        '/_nuxt/fonts/Source-Sans-Pro-Bold-2.751d4a1.otf',
        '/_nuxt/fonts/FZHTJW.1085e3a.ttf'
    ]
};

// Télécharger tous les assets
async function downloadAllAssets() {
    console.log('🚀 Début du téléchargement des assets...\n');
    
    // Télécharger les images
    console.log('📸 Téléchargement des images...');
    for (const image of assets.images) {
        const filename = path.basename(image);
        await downloadFile(BASE_URL + image, path.join(OUTPUT_DIR, 'images', filename));
    }
    
    // Télécharger les vidéos
    console.log('\n🎥 Téléchargement des vidéos...');
    for (const video of assets.videos) {
        const filename = path.basename(video);
        await downloadFile(BASE_URL + video, path.join(OUTPUT_DIR, 'videos', filename));
    }
    
    // Télécharger les fonts
    console.log('\n🔤 Téléchargement des fonts...');
    for (const font of assets.fonts) {
        const filename = path.basename(font);
        await downloadFile(BASE_URL + font, path.join(OUTPUT_DIR, 'fonts', filename));
    }
    
    console.log('\n✅ Téléchargement terminé !');
}

// Lancer le téléchargement
downloadAllAssets().catch(console.error); 