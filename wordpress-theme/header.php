<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Header -->
<header class="app-header">
    <div class="header-container">
        <div class="header-left">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-nav-pc.fb0453d.png" alt="<?php bloginfo('name'); ?>">
                </a>
            <?php endif; ?>
        </div>

        <nav class="header-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'nav-list',
                'fallback_cb' => false,
            ));
            ?>
        </nav>

        <div class="header-right">
            <!-- Barre de recherche -->
            <div class="search-container">
                <input type="text" class="search-input" placeholder="<?php _e('Rechercher...', 'jac-clone'); ?>">
                <button class="search-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
            </div>

            <!-- Sélecteur de langue -->
            <div class="language-selector">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'languages',
                    'container' => false,
                    'menu_class' => 'language-menu',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <!-- Menu mobile -->
            <button class="mobile-menu-btn" aria-label="<?php _e('Menu mobile', 'jac-clone'); ?>">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <!-- Menu mobile -->
    <div class="mobile-menu">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'mobile-nav-list',
            'fallback_cb' => false,
        ));
        ?>
    </div>
</header> 