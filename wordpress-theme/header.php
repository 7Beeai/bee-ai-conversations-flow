
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

<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <div class="logo">
                <a href="<?php echo home_url(); ?>" class="text-2xl font-bold">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        7Bee<span class="text-[#f1c232]">.AI</span>
                    <?php endif; ?>
                </a>
            </div>
            
            <nav class="hidden md:flex">
                <ul class="flex gap-8">
                    <li><a href="#como-funciona" class="text-dark-base hover:text-[#f1c232] transition-colors font-medium">Como Funciona</a></li>
                    <li><a href="#beneficios" class="text-dark-base hover:text-[#f1c232] transition-colors font-medium">Benefícios</a></li>
                    <li><a href="#faq" class="text-dark-base hover:text-[#f1c232] transition-colors font-medium">FAQ</a></li>
                </ul>
            </nav>
            
            <div class="header-cta hidden md:block">
                <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    👉 Quero uma demonstração agora
                </button>
            </div>
            
            <button class="md:hidden p-2" onclick="toggleMobileMenu()" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
        <nav class="container mx-auto px-4 py-4">
            <ul class="space-y-4">
                <li><a href="#como-funciona" class="block text-dark-base hover:text-[#f1c232] transition-colors font-medium">Como Funciona</a></li>
                <li><a href="#beneficios" class="block text-dark-base hover:text-[#f1c232] transition-colors font-medium">Benefícios</a></li>
                <li><a href="#faq" class="block text-dark-base hover:text-[#f1c232] transition-colors font-medium">FAQ</a></li>
                <li class="pt-4 border-t border-gray-200">
                    <button onclick="handleDemoClick()" class="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
    menu.classList.toggle('hidden');
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });
});
</script>
