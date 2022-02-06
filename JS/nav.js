var nav = document.getElementById('nav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active'): nav.classList.add('active');
}

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
        toggleNav();
    });
}

const contenedor = document.querySelector('#contenedor');

const comprobarAncho = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove('active');
    } else {
        contenedor.classList.add('active');
    }
}

comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
});

$("button").click(function() {
    $("button").toggleClass("active");
    $(".title").toggleClass("active");
    $("nav").toggleClass("active");
});