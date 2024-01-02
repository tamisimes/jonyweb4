$(document).ready(function() {
    // Agrega la clase 'mostrar' a las cartas cuando están en el área visible
    $(window).scroll(function() {
        $('.seccion2').each(function() {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                $(this).addClass('mostrar');
                $('.carta-animada').each(function(index) {
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
