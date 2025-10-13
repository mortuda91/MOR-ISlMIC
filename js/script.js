// JavaScript for المبدأ التعليمية Platform
document.addEventListener('DOMContentLoaded', function() {
    console.log('منصة المبدأ التعليمية - جاهزة للتشغيل');
    
    // تفعيل التنقل النشط
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // تأثيرات تفاعلية للوحدات
    const unitDropdowns = document.querySelectorAll('.unit-dropdown');
    unitDropdowns.forEach(dropdown => {
        dropdown.addEventListener('toggle', function() {
            if (this.open) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
});