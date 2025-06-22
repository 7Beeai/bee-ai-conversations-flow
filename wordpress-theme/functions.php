
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
    wp_enqueue_style('sevenbee-style', get_stylesheet_uri(), array(), '1.0.0');
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
        'sanitize_callback' => 'sanitize_text_field',
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
        'sanitize_callback' => 'sanitize_email',
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

// Add /chat URL rewrite rule
function sevenbee_add_chat_rewrite() {
    add_rewrite_rule('^chat/?$', 'index.php?chat_page=1', 'top');
}
add_action('init', 'sevenbee_add_chat_rewrite');

// Add query vars
function sevenbee_query_vars($vars) {
    $vars[] = 'chat_page';
    return $vars;
}
add_filter('query_vars', 'sevenbee_query_vars');

// Template redirect for chat page
function sevenbee_template_redirect() {
    if (get_query_var('chat_page')) {
        include(get_template_directory() . '/page-chat.php');
        exit;
    }
}
add_action('template_redirect', 'sevenbee_template_redirect');

// Flush rewrite rules on theme activation
function sevenbee_activation() {
    sevenbee_add_chat_rewrite();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'sevenbee_activation');

// Create a virtual page for chat in admin
function sevenbee_admin_init() {
    if (is_admin()) {
        // Create virtual page entry for chat
        $chat_page = array(
            'post_title' => 'Chat',
            'post_name' => 'chat',
            'post_status' => 'publish',
            'post_type' => 'page'
        );
        
        // Check if chat page doesn't exist
        $existing_page = get_page_by_path('chat');
        if (!$existing_page) {
            wp_insert_post($chat_page);
        }
    }
}
add_action('admin_init', 'sevenbee_admin_init');

// Ensure proper page template for chat
function sevenbee_page_template($template) {
    if (is_page('chat')) {
        $new_template = locate_template(array('page-chat.php'));
        if ('' != $new_template) {
            return $new_template;
        }
    }
    return $template;
}
add_filter('page_template', 'sevenbee_page_template');
?>
