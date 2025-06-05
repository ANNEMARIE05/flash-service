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

const ouvrir = document.getElementById('ouvrir');
const fermer = document.getElementById('fermer');
const menu = document.getElementById('menu');
const fond = document.getElementById('fond');
const pop = document.getElementById('pop');
const close = document.getElementById('close');
const titre = document.getElementById('titre');
const voir = document.querySelectorAll('.voir');
const depot = document.getElementById('depot');
const retrait = document.getElementById('retrait');
const deco = document.getElementById('deco');
const vid = document.getElementById('vid');

ouvrir.addEventListener('click', () => {
    menu.classList.remove('-translate-x-full');
    fond.classList.remove('hidden');
});

fermer.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
    fond.classList.add('hidden');
});

fond.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
    fond.classList.add('hidden');
});

function ouvrirVideo(t) {
    titre.textContent = t;
    pop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerVideo() {
    pop.classList.add('hidden');
    document.body.style.overflow = 'auto';
    vid.pause();
    vid.currentTime = 0;
}

close.addEventListener('click', fermerVideo);

voir.forEach(function(btn) {
    btn.addEventListener('click', function() {
    const carte = this.closest('.bg-gray-800');
        const t = carte.querySelector('h3').textContent;
        ouvrirVideo(t);
    });
});

depot.addEventListener('click', () => {
    window.location.href = 'dashboardDepot.html';
});

retrait.addEventListener('click', () => {
    window.location.href = 'dashboardRetrait.html';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        menu.classList.add('-translate-x-full');
        fond.classList.add('hidden');
        fermerVideo();
    }
});

deco.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        window.location.href = 'login.html';
    }
});