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
const form = document.getElementById('form');
const modal = document.getElementById('modal');
const fermerModal = document.getElementById('fermerModal');
const id = document.getElementById('id');
const tel = document.getElementById('tel');
const montant = document.getElementById('montant');
const methode = document.getElementById('methode');

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

btnMenu.addEventListener('click', function() {
    if (sidebar.classList.contains('-translate-x-full')) {
        ouvrirMenu();
    } else {
        fermerMenu();
    }
});

arrierPlanMenu.addEventListener('click', fermerMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermer();
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});

const liens = document.querySelectorAll('.lien');
liens.forEach(lien => {
    lien.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
            return;
        }
        
        e.preventDefault();
        
        liens.forEach(autreLien => autreLien.classList.remove('actif'));
        liens.forEach(autreLien => {
            autreLien.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');
            autreLien.classList.add('text-gray-300', 'hover:text-white');
        });
        
        this.classList.add('actif');
        this.classList.remove('text-gray-300', 'hover:text-white');
        this.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');
    });
});

const choixPronostic = document.querySelectorAll('.choixPronostic');
choixPronostic.forEach(ch => {
    ch.addEventListener('click', function() {
        choixPronostic.forEach(c => {
            const div = c.querySelector('div');
            div.classList.remove('border-yellow-400', 'bg-yellow-400/10');
            div.classList.add('border-gray-600', 'bg-gray-700');
        });
        
        const div = this.querySelector('div');
        div.classList.remove('border-gray-600', 'bg-gray-700');
        div.classList.add('border-yellow-400', 'bg-yellow-400/10');
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const idVal = id.value.trim();
    const telVal = tel.value.trim();
    const montantVal = parseFloat(montant.value);
    const methodeVal = methode.value;
    const plateformeVal = document.querySelector('input[name="plateforme"]:checked');
    
    if (!idVal || !telVal || !montantVal || !methodeVal || !plateformeVal) {
        alert('Veuillez remplir tous les champs requis');
        return;
    }
    
    if (montantVal < 1000) {
        alert('Le montant minimum de dépôt est de 1000 FCFA');
        return;
    }
    
    modal.classList.remove('hidden');
});

fermerModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    form.reset();
    
    choixPronostic.forEach(ch => {
        const div = ch.querySelector('div');
        div.classList.remove('border-yellow-400', 'bg-yellow-400/10');
        div.classList.add('border-gray-600', 'bg-gray-700');
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