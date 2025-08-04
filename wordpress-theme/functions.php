<?php
/**
 * JAC-Clone Theme Functions
 * 
 * @package JAC-Clone
 */

// Sécurité
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Configuration du thème
 */
function jac_clone_setup() {
    // Support des fonctionnalités WordPress
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Enregistrement des menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'jac-clone'),
        'footer' => __('Menu Footer', 'jac-clone'),
        'languages' => __('Menu Langues', 'jac-clone'),
    ));
}
add_action('after_setup_theme', 'jac_clone_setup');

/**
 * Enregistrement des scripts et styles
 */
function jac_clone_scripts() {
    // Styles
    wp_enqueue_style('jac-clone-style', get_stylesheet_uri());
    wp_enqueue_style('jac-clone-main', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper@11/swiper-bundle.min.css');
    
    // Scripts
    wp_enqueue_script('gsap', 'https://unpkg.com/gsap@3.12.2/dist/gsap.min.js', array(), null, true);
    wp_enqueue_script('scrolltrigger', 'https://unpkg.com/gsap@3.12.2/dist/ScrollTrigger.min.js', array('gsap'), null, true);
    wp_enqueue_script('scrollto', 'https://unpkg.com/gsap@3.12.2/dist/ScrollToPlugin.min.js', array('gsap'), null, true);
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper@11/swiper-bundle.min.js', array(), null, true);
    wp_enqueue_script('jac-clone-main', get_template_directory_uri() . '/assets/js/main.js', array('gsap', 'swiper-js'), null, true);
}
add_action('wp_enqueue_scripts', 'jac_clone_scripts');

/**
 * Enregistrement des Custom Post Types
 */
function jac_clone_post_types() {
    // CPT Véhicules
    register_post_type('vehicles', array(
        'labels' => array(
            'name' => __('Véhicules', 'jac-clone'),
            'singular_name' => __('Véhicule', 'jac-clone'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-car',
    ));

    // CPT Slides
    register_post_type('slides', array(
        'labels' => array(
            'name' => __('Slides', 'jac-clone'),
            'singular_name' => __('Slide', 'jac-clone'),
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-slides',
    ));
}
add_action('init', 'jac_clone_post_types');

/**
 * Configuration ACF
 */
if (function_exists('acf_add_local_field_group')) {
    // Champs pour les slides
    acf_add_local_field_group(array(
        'key' => 'group_slides',
        'title' => 'Configuration Slide',
        'fields' => array(
            array(
                'key' => 'field_slide_title',
                'label' => 'Titre Principal',
                'name' => 'slide_title',
                'type' => 'text',
            ),
            array(
                'key' => 'field_slide_subtitle',
                'label' => 'Sous-titre',
                'name' => 'slide_subtitle',
                'type' => 'text',
            ),
            array(
                'key' => 'field_slide_button_text',
                'label' => 'Texte du bouton',
                'name' => 'slide_button_text',
                'type' => 'text',
            ),
            array(
                'key' => 'field_slide_button_link',
                'label' => 'Lien du bouton',
                'name' => 'slide_button_link',
                'type' => 'url',
            ),
            array(
                'key' => 'field_slide_video',
                'label' => 'Vidéo (optionnel)',
                'name' => 'slide_video',
                'type' => 'file',
                'return_format' => 'url',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'slides',
                ),
            ),
        ),
    ));

    // Champs pour les véhicules
    acf_add_local_field_group(array(
        'key' => 'group_vehicles',
        'title' => 'Configuration Véhicule',
        'fields' => array(
            array(
                'key' => 'field_vehicle_category',
                'label' => 'Catégorie',
                'name' => 'vehicle_category',
                'type' => 'select',
                'choices' => array(
                    'sedan-suv' => 'SEDAN & SUV',
                    'truck-van' => 'TRUCK & VAN',
                    'pickup' => 'PICKUP',
                ),
            ),
            array(
                'key' => 'field_vehicle_description',
                'label' => 'Description courte',
                'name' => 'vehicle_description',
                'type' => 'text',
            ),
            array(
                'key' => 'field_vehicle_specs',
                'label' => 'Spécifications',
                'name' => 'vehicle_specs',
                'type' => 'repeater',
                'sub_fields' => array(
                    array(
                        'key' => 'field_spec_name',
                        'label' => 'Nom',
                        'name' => 'spec_name',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_spec_value',
                        'label' => 'Valeur',
                        'name' => 'spec_value',
                        'type' => 'text',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'vehicles',
                ),
            ),
        ),
    ));
}

/**
 * Fonctions utilitaires
 */
function jac_clone_get_slides() {
    return get_posts(array(
        'post_type' => 'slides',
        'numberposts' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ));
}

function jac_clone_get_vehicles($category = '') {
    $args = array(
        'post_type' => 'vehicles',
        'numberposts' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    );
    
    if ($category) {
        $args['meta_query'] = array(
            array(
                'key' => 'vehicle_category',
                'value' => $category,
                'compare' => '=',
            ),
        );
    }
    
    return get_posts($args);
} 