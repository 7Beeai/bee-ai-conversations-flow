
<footer class="bg-dark-base text-white py-16">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div class="footer-section">
                <div class="mb-8">
                    <a href="<?php echo home_url(); ?>" class="text-2xl font-bold">
                        7Bee<span class="text-[#f1c232]">.AI</span>
                    </a>
                </div>
                <p class="text-gray-300 mb-8">
                    Inteligência Artificial com comportamento humano para vendas, cobranças e atendimento.
                </p>
                <div class="flex gap-4">
                    <a href="https://www.linkedin.com/company/7bee-ai" target="_blank" class="text-gray-300 hover:text-[#f1c232] transition-colors text-2xl">
                        📱
                    </a>
                    <a href="https://www.instagram.com/7bee.ai" target="_blank" class="text-gray-300 hover:text-[#f1c232] transition-colors text-2xl">
                        📷
                    </a>
                </div>
            </div>
            
            <div class="footer-section">
                <h3 class="text-xl font-semibold mb-6 text-[#f1c232]">Soluções</h3>
                <ul class="space-y-3">
                    <li><a href="#" class="text-gray-300 hover:text-[#f1c232] transition-colors">Atendimento ao Cliente</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-[#f1c232] transition-colors">Vendas & Prospecção</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-[#f1c232] transition-colors">Cobrança & Recuperação</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-[#f1c232] transition-colors">Suporte Técnico</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-[#f1c232] transition-colors">Pesquisas de Satisfação</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3 class="text-xl font-semibold mb-6 text-[#f1c232]">Contato</h3>
                <ul class="space-y-3">
                    <li>
                        <a href="https://wa.me/<?php echo get_theme_mod('whatsapp_number', '553184849770'); ?>" class="text-gray-300 hover:text-[#f1c232] transition-colors flex items-center gap-2">
                            📱 WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="mailto:<?php echo get_theme_mod('contact_email', 'andre@7bee.com'); ?>" class="text-gray-300 hover:text-[#f1c232] transition-colors flex items-center gap-2">
                            ✉️ <?php echo get_theme_mod('contact_email', 'andre@7bee.com'); ?>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-700 pt-8 text-center">
            <p class="text-gray-400">
                © <?php echo date('Y'); ?> 7Bee.AI. Todos os direitos reservados.
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
