document.addEventListener('DOMContentLoaded', function() {
    const titulos = document.querySelectorAll('h2');

    function checkVisibility() {
        titulos.forEach(titulo => {
            const rect = titulo.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight) || (rect.bottom >= 0 && rect.top <= window.innerHeight);

            if (isVisible) {
                titulo.classList.add('visible');
            } else {
                titulo.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
