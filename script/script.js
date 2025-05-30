tailwind.config = {
    theme: {
        extend: {
            colors: {
                'couleurPrincipale': {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                'couleurAccent': {
                    50: '#fefce8',
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#facc15',
                    500: '#eab308',
                    600: '#ca8a04',
                    700: '#a16207',
                    800: '#854d0e',
                    900: '#713f12',
                },
                'gradientDebut': '#0f172a',
                'gradientMilieu': '#1e293b',
                'gradientFin': '#334155',
                'bleu-principal': '#1e40af',
                'bleu-secondaire': '#3b82f6',
                'bleu-clair': '#60a5fa',
                'bleu-fonce': '#1e3a8a',
                'jaune-accent': '#fbbf24',
                'jaune-clair': '#fcd34d'
            },
            backgroundImage: {
                'gradientRadial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradientConique': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradientMaille': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }
        }
    }
}

function afficherMenuMobile() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.classList.toggle('hidden');
}

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animeApparitionBas, .animeApparitionHaut, .animeApparitionDroite');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
});


document.querySelectorAll('.animeApparitionBas, .animeApparitionHaut, .animeApparitionDroite').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.addEventListener('DOMContentLoaded', function() {
    demarrerCompteur();
});

function demarrerCompteur() {
    let heures = 0;
    let minutes = 2;
    let secondes = 47;

    setInterval(function() {
        if (secondes > 0) {
            secondes--;
        } else if (minutes > 0) {
            minutes--;
            secondes = 59;
        } else if (heures > 0) {
            heures--;
            minutes = 59;
            secondes = 59;
        } else {
            heures = 0;
            minutes = 2;
            secondes = 47;
        }

    const temps = String(heures).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(secondes).padStart(2, '0');
                
        const compteur = document.getElementById('compteur-temps');
        if (compteur) {
            compteur.textContent = temps;
        }
    }, 1000);
}