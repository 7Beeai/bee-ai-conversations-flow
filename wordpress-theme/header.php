
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <a href="<?php echo home_url(); ?>">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="7Bee.AI Logo">
                    <?php endif; ?>
                </a>
            </div>
            
            <nav class="main-nav">
                <ul class="nav-menu">
                    <li><a href="#como-funciona">Como Funciona</a></li>
                    <li><a href="#beneficios">Benefícios</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
            
            <div class="header-cta">
                <button class="btn-demo" onclick="handleDemoClick()">
                    👉 Quero uma demonstração agora
                </button>
            </div>
            
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                ☰
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu" style="display: none; background: white; padding: 1rem;">
        <nav>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 1rem;"><a href="#como-funciona">Como Funciona</a></li>
                <li style="margin-bottom: 1rem;"><a href="#beneficios">Benefícios</a></li>
                <li style="margin-bottom: 1rem;"><a href="#faq">FAQ</a></li>
                <li>
                    <button class="btn-demo" onclick="handleDemoClick()" style="width: 100%;">
                        👉 Demonstração
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</header>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
</script>
