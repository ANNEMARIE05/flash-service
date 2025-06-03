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
const arrierePlanMenu = document.getElementById('arrierePlanMenu');
const form = document.getElementById('form');
const modal = document.getElementById('modal');
const fermer = document.getElementById('fermer');
const identifiant = document.getElementById('identifiant');
const code = document.getElementById('code');
const montant = document.getElementById('montant');
const tel = document.getElementById('tel');
const methode = document.getElementById('methode');

function ouvrir() {
    sidebar.classList.remove('-translate-x-full');
    arrierePlanMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    sidebar.classList.add('-translate-x-full');
    arrierePlanMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', function() {
    if (sidebar.classList.contains('-translate-x-full')) {
        ouvrir();
    } else {
        fermerMenu();
    }
});

arrierePlanMenu.addEventListener('click', fermerMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
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
        
        liens.forEach(autre => autre.classList.remove('actif'));
        liens.forEach(autre => {
            autre.classList.remove('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
            autre.classList.add('text-gray-300', 'hover:text-white');
        });
        
        this.classList.add('actif');
        this.classList.remove('text-gray-300', 'hover:text-white');
        this.classList.add('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
    });
});

const choix = document.querySelectorAll('.choix');
choix.forEach(item => {
    item.addEventListener('click', function() {
        choix.forEach(autre => {
            const div = autre.querySelector('div');
            div.classList.remove('border-jaune-accent', 'bg-jaune-accent/10');
            div.classList.add('border-gray-600', 'bg-gray-700');
        });
        
        const div = this.querySelector('div');
        div.classList.remove('border-gray-600', 'bg-gray-700');
        div.classList.add('border-jaune-accent', 'bg-jaune-accent/10');
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = identifiant.value.trim();
    const codeVal = code.value.trim();
    const montantVal = parseFloat(montant.value);
    const telVal = tel.value.trim();
    const methodeVal = methode.value;
    const plateforme = document.querySelector('input[name="plateforme"]:checked');
    
    if (!id || !codeVal || !montantVal || !telVal || !methodeVal || !plateforme) {
        alert('Veuillez remplir tous les champs requis');
        return;
    }
    
    if (montantVal < 1000) {
        alert('Le montant minimum de retrait est de 1000 FCFA');
        return;
    }
    
    modal.classList.remove('hidden');
});

fermer.addEventListener('click', function() {
    modal.classList.add('hidden');
    form.reset();
    
    choix.forEach(item => {
        const div = item.querySelector('div');
        div.classList.remove('border-jaune-accent', 'bg-jaune-accent/10');
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