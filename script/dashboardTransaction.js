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
const overlay = document.getElementById('overlay');

function ouvrirMenu() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', ouvrirMenu);
overlay.addEventListener('click', fermerMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
    }
});

const btnVoirDetail = document.querySelectorAll('.btnVoirDetail');
btnVoirDetail.forEach(btnDetail => {
    btnDetail.addEventListener('click', function() {
        const identifiantTransaction = this.getAttribute('data-transaction-id');
        window.location.href = `detailTransaction.html`;
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