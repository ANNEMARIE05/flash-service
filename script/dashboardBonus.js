tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bleu-principal': '#1e40af',
                'bleu-fonce': '#1e3a8a',
                'jaune-accent': '#fbbf24',
                'jaune-clair': '#fef3c7',
                'vert-bonus': '#10b981',
                'rouge-bonus': '#ef4444'
            }
        }
    }
}

const ouvrir = document.getElementById('ouvrir');
const fermer = document.getElementById('fermer');
const menu = document.getElementById('menu');
const fond = document.getElementById('fond');
const depot = document.getElementById('depot');
const retrait = document.getElementById('retrait');
const deco = document.getElementById('deco');

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

depot.addEventListener('click', () => {
    window.location.href = 'dashboardDepot.html';
});

retrait.addEventListener('click', () => {
    window.location.href = 'dashboardRetrait.html';
});

deco.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        window.location.href = 'login.html';
    }
});

function ouvQuiz() {
    document.getElementById('quiz').classList.remove('hidden');
}

document.getElementById('fermerQuiz').addEventListener('click', () => {
    document.getElementById('quiz').classList.add('hidden');
});

document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rep = e.target.dataset.rep;
        e.target.classList.add('bg-bleu-principal');
        
        setTimeout(() => {
            if (rep === '1000') {
                alert('Bonne réponse! Vous avez gagné 1 500 XOF!');
            } else {
                alert('Mauvaise réponse. La bonne réponse était 1 000 XOF.');
            }
            document.getElementById('quiz').classList.add('hidden');
        }, 1000);
    });
});
function startCompteur() {
    let temps = 23 * 3600 + 47 * 60 + 32; 
    
    const compteurElement = document.getElementById('compteur');
    
    const interval = setInterval(() => {
        if (temps <= 0) {
            clearInterval(interval);
            compteurElement.textContent = "00:00:00";
            return;
        }
        
        const heures = Math.floor(temps / 3600);
        const minutes = Math.floor((temps % 3600) / 60);
        const secondes = temps % 60;
        
        compteurElement.textContent = 
            `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
        
        temps--;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCompteur);