
<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function sevenbee_setup() {
    // Add theme support
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
    
    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'sevenbee'),
    ));
}
add_action('after_setup_theme', 'sevenbee_setup');

// Enqueue styles and scripts
function sevenbee_scripts() {
    wp_enqueue_style('sevenbee-style', get_stylesheet_uri());
    
    // Add custom CSS for better mobile responsiveness
    wp_add_inline_style('sevenbee-style', '
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr !important;
                text-align: center;
            }
            .hero-text h1 {
                font-size: 2rem !important;
            }
            .nav-menu {
                display: none !important;
            }
            .mobile-menu-toggle {
                display: block !important;
            }
            .cards-grid {
                grid-template-columns: 1fr !important;
            }
            .steps-grid {
                grid-template-columns: 1fr !important;
            }
        }
    ');
}
add_action('wp_enqueue_scripts', 'sevenbee_scripts');

// Custom logo support
function sevenbee_custom_logo_setup() {
    $defaults = array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'sevenbee_custom_logo_setup');

// Remove WordPress admin bar for better UX
add_action('after_setup_theme', 'sevenbee_remove_admin_bar');
function sevenbee_remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}

// Add viewport meta tag
function sevenbee_viewport_meta() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}
add_action('wp_head', 'sevenbee_viewport_meta');

// Custom excerpt length
function sevenbee_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'sevenbee_excerpt_length');

// Custom excerpt more
function sevenbee_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'sevenbee_excerpt_more');

// Add custom CSS classes to body
function sevenbee_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'sevenbee_body_classes');

// Security: Remove WordPress version
remove_action('wp_head', 'wp_generator');

// Optimize WordPress
function sevenbee_optimize() {
    // Remove unnecessary meta tags
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'sevenbee_optimize');

// Custom post types (if needed)
function sevenbee_custom_post_types() {
    // You can add custom post types here if needed
    // Example: testimonials, case studies, etc.
}
add_action('init', 'sevenbee_custom_post_types');

// Theme customizer
function sevenbee_customize_register($wp_customize) {
    // WhatsApp Number
    $wp_customize->add_section('sevenbee_contact', array(
        'title'    => __('Contato 7Bee.AI', 'sevenbee'),
        'priority' => 120,
    ));
    
    $wp_customize->add_setting('whatsapp_number', array(
        'default'   => '553184849770',
        'transport' => 'refresh',
    ));
    
    $wp_customize->add_control('whatsapp_number', array(
        'label'    => __('Número WhatsApp', 'sevenbee'),
        'section'  => 'sevenbee_contact',
        'type'     => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array(
        'default'   => 'andre@7bee.com',
        'transport' => 'refresh',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email de Contato', 'sevenbee'),
        'section'  => 'sevenbee_contact',
        'type'     => 'email',
    ));
}
add_action('customize_register', 'sevenbee_customize_register');

// Get WhatsApp URL
function sevenbee_get_whatsapp_url() {
    $number = get_theme_mod('whatsapp_number', '553184849770');
    return 'https://wa.me/' . $number;
}

// Get contact email
function sevenbee_get_contact_email() {
    return get_theme_mod('contact_email', 'andre@7bee.com');
}
?>
