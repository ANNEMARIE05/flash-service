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

const btnOuvrir = document.getElementById('btnOuvrir');
const btnFermer = document.getElementById('btnFermer');
const menuNav = document.getElementById('menuNav');
const fondEcran = document.getElementById('fondEcran');

btnOuvrir.addEventListener('click', () => {
    menuNav.classList.remove('-translate-x-full');
    fondEcran.classList.remove('hidden');
});

btnFermer.addEventListener('click', () => {
    menuNav.classList.add('-translate-x-full');
    fondEcran.classList.add('hidden');
});

fondEcran.addEventListener('click', () => {
    menuNav.classList.add('-translate-x-full');
    fondEcran.classList.add('hidden');
});


const btnsFiltres = document.querySelectorAll('.btn-filtre');
const cartes = document.querySelectorAll('.carte');

btnsFiltres.forEach(btn => {
    btn.addEventListener('click', () => {
        btnsFiltres.forEach(b => {
            b.classList.remove('bg-blue-600', 'text-white');
            b.classList.add('bg-gray-700', 'text-gray-300');
        });

        btn.classList.remove('bg-gray-700', 'text-gray-300');
        btn.classList.add('bg-blue-600', 'text-white');

        const filtre = btn.id;

        cartes.forEach(carte => {
            if (filtre === 'tous') {
                carte.style.display = 'block';
            } else if (filtre === 'aujourdhui') {
                if (carte.dataset.statut === 'aujourdhui') {
                    carte.style.display = 'block';
                } else {
                    carte.style.display = 'none';
                }
            } else if (filtre === 'gagnes') {
                if (carte.dataset.statut === 'gagne') {
                    carte.style.display = 'block';
                } else {
                    carte.style.display = 'none';
                }
            }
        });
    });
});

const btnDeco = document.getElementById('btnDeco');
btnDeco.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        window.location.href = '/auth/login.html';
    }
});

cartes.forEach(carte => {
    carte.addEventListener('mouseenter', () => {
        carte.style.transform = 'translateY(-5px) scale(1.02)';
    });

    carte.addEventListener('mouseleave', () => {
        carte.style.transform = 'translateY(0) scale(1)';
    });
});