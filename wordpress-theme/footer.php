<!-- Footer -->
<footer class="site-footer">
    <div class="footer-content">
        <div class="container">
            <div class="footer-grid">
                <!-- Logo et description -->
                <div class="footer-brand">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-nav-pc.fb0453d.png" alt="<?php bloginfo('name'); ?>" class="footer-logo">
                    <?php endif; ?>
                    <p class="footer-description">
                        <?php _e('Ever so Fun. Ever so Colorful.', 'jac-clone'); ?>
                    </p>
                </div>

                <!-- Liens rapides -->
                <div class="footer-links">
                    <h3><?php _e('Quick Links', 'jac-clone'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container' => false,
                        'menu_class' => 'footer-menu',
                        'fallback_cb' => false,
                    ));
                    ?>
                </div>

                <!-- Contact -->
                <div class="footer-contact">
                    <h3><?php _e('Contact', 'jac-clone'); ?></h3>
                    <div class="contact-info">
                        <p><?php _e('Email: info@jac.com.cn', 'jac-clone'); ?></p>
                        <p><?php _e('Phone: +86 400-888-8888', 'jac-clone'); ?></p>
                        <p><?php _e('Address: Hefei, Anhui, China', 'jac-clone'); ?></p>
                    </div>
                </div>

                <!-- Langues -->
                <div class="footer-languages">
                    <h3><?php _e('Languages', 'jac-clone'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'languages',
                        'container' => false,
                        'menu_class' => 'language-menu-footer',
                        'fallback_cb' => false,
                    ));
                    ?>
                </div>
            </div>

            <!-- Copyright -->
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved.', 'jac-clone'); ?></p>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html> 