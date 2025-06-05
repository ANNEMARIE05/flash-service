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
const fondMenu = document.getElementById('fondMenu');
const fermer = document.getElementById('fermer');
const form = document.getElementById('formRetrait');
const modal = document.getElementById('modal');
const fermerModal = document.getElementById('fermerModal');
const btnDepot = document.getElementById('btnDepot');
const btnRetrait = document.getElementById('btnRetrait');
const id = document.getElementById('id');
const code = document.getElementById('code');
const montant = document.getElementById('montant');
const tel = document.getElementById('tel');
const btn = document.getElementById('btn');
const liste = document.getElementById('liste');
const option = document.getElementById('option');
const deco = document.getElementById('deco');

let methode = '';

function ouvrirMenu() {
    menu.classList.remove('-translate-x-full');
    fondMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    menu.classList.add('-translate-x-full');
    fondMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', ouvrirMenu);
fermer.addEventListener('click', fermerMenu);
fondMenu.addEventListener('click', fermerMenu);

btnDepot.addEventListener('click', function() {
    window.location.href = 'dashboardDepot.html';
});

btnRetrait.addEventListener('click', function() {
    window.location.href = 'dashboardRetrait.html';
});

btn.addEventListener('click', function() {
    liste.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !liste.contains(e.target)) {
        liste.classList.remove('active');
    }
});

const items = document.querySelectorAll('.dropdown-item');
items.forEach(item => {
    item.addEventListener('click', function() {
        methode = this.dataset.value;
        const img = this.querySelector('img');
        const text = this.querySelector('span').textContent;
        
        const newImg = img.cloneNode(true);
        newImg.className = 'selected-img';
        
        option.innerHTML = '';
        option.appendChild(newImg);
        option.appendChild(document.createTextNode(text));
        
        liste.classList.remove('active');
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
        liste.classList.remove('active');
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

const platformes = document.querySelectorAll('.platforme');
platformes.forEach(item => {
    item.addEventListener('click', function() {
        platformes.forEach(autre => {
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
    
    const idVal = id.value.trim();
    const codeVal = code.value.trim();
    const montantVal = parseFloat(montant.value);
    const telVal = tel.value.trim();
    const platformeSelec = document.querySelector('input[name="platformeeforme"]:checked');
    
    if (!idVal || !codeVal || !montantVal || !telVal || !methode || !platformeSelec) {
        alert('Veuillez remplir tous les champs requis');
        return;
    }
            
    if (montantVal < 1000) {
        alert('Le montant minimum de retrait est de 1000 FCFA');
        return;
    }
            
    modal.classList.remove('hidden');
});

fermerModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    form.reset();
    option.textContent = 'Sélectionnez une méthode';
    methode = '';
    
    platformes.forEach(item => {
        const div = item.querySelector('div');
        div.classList.remove('border-jaune-accent', 'bg-jaune-accent/10');
        div.classList.add('border-gray-600', 'bg-gray-700');
    });
});

deco.addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        window.location.href = 'index.html';
    }
});