$(document).ready(function() {
    // Agrega la clase 'mostrar' a las cartas cuando están en el área visible
    $(window).on('scroll resize', function() {
        $('.seccion2, .seccion3').each(function() {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                $(this).addClass('mostrar');
                $(this).find('.carta-animada, .carta-experiencia').each(function(index) {
                    var carta = $(this);
                    setTimeout(function() {
                        carta.addClass('mostrar');
                    }, 300 * index); // Ajusta la velocidad de la transición aquí
                });
            }
        });
    });

    // Función para verificar si un elemento está en el área visible del viewport
    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Agrega un evento scroll adicional para detectar cuando el usuario pasa por la sección
    $(window).on('scroll', function() {
        $('.seccion2, .seccion3').each(function() {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                $(this).trigger('inViewport');
            }
        });
    });

    // Agrega la animación cuando el usuario pasa por la sección
    $('.seccion2, .seccion3').on('inViewport', function() {
        $(this).addClass('mostrar');
        $(this).find('.carta-animada, .carta-experiencia').each(function(index) {
            var carta = $(this);
            setTimeout(function() {
                carta.addClass('mostrar');
            }, 300 * index); // Ajusta la velocidad de la transición aquí
        });
    });
});



$(document).ready(function() {
    // Agrega la clase 'mostrar' a las cartas cuando están en el área visible
    $(window).scroll(function() {
        $('.carta-experiencia').each(function(index) {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                var carta = $(this);
                setTimeout(function() {
                    carta.addClass('mostrar');
                }, 300 * index); // Ajusta la velocidad de la transición aquí
            }
        });
    });
});

// Función para verificar si un elemento está en el área visible
function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
ScrollReveal().reveal('.seccion2', { delay: 300 });
ScrollReveal().reveal('.seccion3', { delay: 300 });
ScrollReveal().reveal('.seccion4', { delay: 300 });


