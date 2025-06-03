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
const menu = document.getElementById('menu');
const arrierPlanMenu = document.getElementById('arrierPlanMenu');

function ouvrirMenu() {
    menu.classList.remove('-translate-x-full');
    arrierPlanMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    menu.classList.add('-translate-x-full');
    arrierPlanMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', function() {
    if (menu.classList.contains('-translate-x-full')) {
        ouvrirMenu();
    } else {
        fermerMenu();
    }
});

arrierPlanMenu.addEventListener('click', fermerMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
    }
});

const liens = document.querySelectorAll('.lien-nav');
liens.forEach(lien => {
    lien.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
            return;
        }
        
        e.preventDefault();
        
        liens.forEach(l => l.classList.remove('actif'));
        liens.forEach(l => {
            l.classList.remove('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
            l.classList.add('text-gray-300', 'hover:text-white');
        });
        
        this.classList.add('actif');
        this.classList.remove('text-gray-300', 'hover:text-white');
        this.classList.add('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
    });
});

const btnsBonus = document.querySelectorAll('.btn-bonus');
btnsBonus.forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = 'Réclamé';
        this.classList.remove('bg-red-400', 'bg-blue-400');
        this.classList.add('bg-green-500');
        this.disabled = true;
    });
});

const btnsDetail = document.querySelectorAll('.btn-detail');
btnsDetail.forEach(btn => {
    btn.addEventListener('click', function() {
        window.location.href = 'dashboardTransaction.html';
    });
});

const voirProno = document.getElementById('voirProno');
if (voirProno) {
    voirProno.addEventListener('click', function() {
        window.location.href = 'dashboardPronostic.html';
    });
}

const voirBonus = document.getElementById('voirBonus');
if (voirBonus) {
    voirBonus.addEventListener('click', function() {
        window.location.href = 'dashboardBonus.html';
    });
}

const btnDeco = document.getElementById('btnDeco');
if (btnDeco) {
    btnDeco.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {            
            window.location.href = '/auth/login.html';
        }
    });
}

const cartesStats = document.querySelectorAll('.carte-stat');
cartesStats.forEach((carte, index) => {
    carte.style.opacity = '0';
    carte.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        carte.style.transition = 'all 0.5s ease';
        carte.style.opacity = '1';
        carte.style.transform = 'translateY(0)';
    }, index * 200);
});