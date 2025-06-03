tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bleu-principal': '#1e40af',
                'bleu-fonce': '#1e3a8a',
                'jaune-accent': '#fbbf24',
                'jaune-clair': '#fef3c7'
            }
        }
    }
}

const btnMenu = document.getElementById('btnMenu');
const sidebar = document.getElementById('sidebar');
const arrierPlanMenu = document.getElementById('arrierPlanMenu');
const modaleVideo = document.getElementById('modaleVideo');
const btnFermerModale = document.getElementById('btnFermerModale');
const titreVideoModale = document.getElementById('titreVideoModale');
const btnRegarderVideo = document.querySelectorAll('.boutonRegarderVideo');

function ouvrirMenu() {
    sidebar.classList.remove('-translate-x-full');
    arrierPlanMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    sidebar.classList.add('-translate-x-full');
    arrierPlanMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function ouvrirModaleVideo(titreVideo) {
    titreVideoModale.textContent = titreVideo;
    modaleVideo.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerModaleVideo() {
    modaleVideo.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', function() {
    if (sidebar.classList.contains('-translate-x-full')) {
        ouvrirMenu();
    } else {
        fermerMenu();
    }
});

arrierPlanMenu.addEventListener('click', fermerMenu);
btnFermerModale.addEventListener('click', fermerModaleVideo);

btnRegarderVideo.forEach(function(boutonRegarder) {
    boutonRegarder.addEventListener('click', function() {
        const carteVideo = this.closest('.bg-gray-800');
        const titreVideo = carteVideo.querySelector('h3').textContent;
        ouvrirModaleVideo(titreVideo);
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
        fermerModaleVideo();
    }
});

const liensMenuNavigation = document.querySelectorAll('.menuLien');
liensMenuNavigation.forEach(function(lienMenu) {
    lienMenu.addEventListener('click', function(e) {
        const hrefLien = this.getAttribute('href');
        if (hrefLien && hrefLien !== '#') {
            window.location.href = hrefLien;
            return;
        }
        
        e.preventDefault();
        
        liensMenuNavigation.forEach(function(lienMenuAutre) {
            lienMenuAutre.classList.remove('menuLienActif');
            lienMenuAutre.classList.remove('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
            lienMenuAutre.classList.add('text-gray-300', 'hover:text-white');
        });
        
        this.classList.add('menuLienActif');
        this.classList.remove('text-gray-300', 'hover:text-white');
        this.classList.add('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
    });
});

const btnDeco = document.getElementById('btnDeco');
if (btnDeco) {
    btnDeco.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {            
            window.location.href = '/auth/login.html';
        }
    });
}