// Traigo el boton del login y redirecciono al home
// window.location.href = "https://professor-falken.com";

const btnRedirection = document.getElementById('btn-redirection-home');
btnRedirection.addEventListener('click',redirection )
// windows.location.href = 'http://url.com';

function redirection() {
    location.href = "../home.html"
}