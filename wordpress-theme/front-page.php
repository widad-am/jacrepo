<?php get_header(); ?>

<main class="main-content">
    <!-- Hero Slider -->
    <section class="hero-section">
        <div class="hero-swiper swiper">
            <div class="swiper-wrapper">
                <?php
                $slides = jac_clone_get_slides();
                if ($slides) :
                    foreach ($slides as $slide) :
                        $slide_title = get_field('slide_title', $slide->ID);
                        $slide_subtitle = get_field('slide_subtitle', $slide->ID);
                        $slide_button_text = get_field('slide_button_text', $slide->ID);
                        $slide_button_link = get_field('slide_button_link', $slide->ID);
                        $slide_video = get_field('slide_video', $slide->ID);
                        $slide_image = get_the_post_thumbnail_url($slide->ID, 'full');
                ?>
                    <div class="swiper-slide hero-slide">
                        <?php if ($slide_video) : ?>
                            <video class="slide-video" autoplay muted loop playsinline>
                                <source src="<?php echo esc_url($slide_video); ?>" type="video/mp4">
                            </video>
                        <?php elseif ($slide_image) : ?>
                            <img src="<?php echo esc_url($slide_image); ?>" alt="<?php echo esc_attr($slide->post_title); ?>" class="slide-image">
                        <?php endif; ?>
                        
                        <div class="slide-content">
                            <h1 class="slide-title"><?php echo esc_html($slide_title ?: $slide->post_title); ?></h1>
                            <?php if ($slide_subtitle) : ?>
                                <p class="slide-subtitle"><?php echo esc_html($slide_subtitle); ?></p>
                            <?php endif; ?>
                            <?php if ($slide_button_text && $slide_button_link) : ?>
                                <a href="<?php echo esc_url($slide_button_link); ?>" class="explore-btn">
                                    <?php echo esc_html($slide_button_text); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php
                    endforeach;
                else :
                    // Slides par défaut si aucun slide n'est créé
                    $default_slides = array(
                        array('title' => 'E30X', 'subtitle' => 'Electric Sedan', 'image' => 'E30X.b17a632.jpg'),
                        array('title' => 'T9', 'subtitle' => 'SUV Excellence', 'image' => 'T9.0dc9d30.jpg'),
                        array('title' => 'JS8 PRO', 'subtitle' => 'Premium SUV', 'image' => 'js8pro.39d4e96.jpg'),
                        array('title' => 'N75EV', 'subtitle' => 'Electric Innovation', 'image' => 'T9EV.2167e8e.jpg'),
                    );
                    
                    foreach ($default_slides as $slide) :
                ?>
                    <div class="swiper-slide hero-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo $slide['image']; ?>" alt="<?php echo $slide['title']; ?>" class="slide-image">
                        <div class="slide-content">
                            <h1 class="slide-title"><?php echo $slide['title']; ?></h1>
                            <p class="slide-subtitle"><?php echo $slide['subtitle']; ?></p>
                            <a href="#models" class="explore-btn">Explore</a>
                        </div>
                    </div>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
            
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <!-- Section Modèles -->
    <section id="models" class="models-section">
        <div class="container">
            <h2 class="section-title"><?php _e('EXPLORE JAC MODELS', 'jac-clone'); ?></h2>
            
            <!-- Filtres -->
            <div class="models-filters">
                <button class="tab-btn active" data-category="sedan-suv"><?php _e('SEDAN & SUV', 'jac-clone'); ?></button>
                <button class="tab-btn" data-category="truck-van"><?php _e('TRUCK & VAN', 'jac-clone'); ?></button>
                <button class="tab-btn" data-category="pickup"><?php _e('PICKUP', 'jac-clone'); ?></button>
            </div>

            <!-- Grilles de modèles -->
            <?php
            $categories = array('sedan-suv', 'truck-van', 'pickup');
            foreach ($categories as $category) :
                $vehicles = jac_clone_get_vehicles($category);
            ?>
                <div class="models-grid <?php echo $category === 'sedan-suv' ? 'active' : ''; ?>" data-category="<?php echo $category; ?>">
                    <?php if ($vehicles) : ?>
                        <?php foreach ($vehicles as $vehicle) : ?>
                            <div class="model-card" data-model="<?php echo esc_attr($vehicle->post_name); ?>">
                                <?php if (has_post_thumbnail($vehicle->ID)) : ?>
                                    <div class="model-image">
                                        <?php echo get_the_post_thumbnail($vehicle->ID, 'medium'); ?>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="model-content">
                                    <h3 class="model-title"><?php echo esc_html($vehicle->post_title); ?></h3>
                                    <?php 
                                    $description = get_field('vehicle_description', $vehicle->ID);
                                    if ($description) : 
                                    ?>
                                        <p class="model-description"><?php echo esc_html($description); ?></p>
                                    <?php endif; ?>
                                    
                                    <a href="<?php echo get_permalink($vehicle->ID); ?>" class="model-link">
                                        <?php _e('Learn More', 'jac-clone'); ?>
                                    </a>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php else : ?>
                        <!-- Modèles par défaut -->
                        <?php
                        $default_models = array(
                            'sedan-suv' => array(
                                array('name' => 'E30X', 'image' => 'E30X.b17a632.jpg'),
                                array('name' => 'JS8 PRO', 'image' => 'js8pro.39d4e96.jpg'),
                                array('name' => 'JS6', 'image' => 'E30X.b17a632.jpg'),
                            ),
                            'truck-van' => array(
                                array('name' => 'T9', 'image' => 'T9.0dc9d30.jpg'),
                                array('name' => 'N75EV', 'image' => 'T9EV.2167e8e.jpg'),
                            ),
                            'pickup' => array(
                                array('name' => 'T8', 'image' => 'T9.0dc9d30.jpg'),
                            ),
                        );
                        
                        if (isset($default_models[$category])) :
                            foreach ($default_models[$category] as $model) :
                        ?>
                            <div class="model-card" data-model="<?php echo esc_attr($model['name']); ?>">
                                <div class="model-image">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo $model['image']; ?>" alt="<?php echo $model['name']; ?>">
                                </div>
                                <div class="model-content">
                                    <h3 class="model-title"><?php echo $model['name']; ?></h3>
                                    <a href="#" class="model-link"><?php _e('Learn More', 'jac-clone'); ?></a>
                                </div>
                            </div>
                        <?php
                            endforeach;
                        endif;
                        ?>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?> 