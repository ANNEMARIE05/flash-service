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
const sideBar = document.getElementById('sideBar');
const arrierePlanMenu = document.getElementById('arrierePlanMenu');

function ouvrirMenu() {
    sideBar.classList.remove('-translate-x-full');
    arrierePlanMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerMenu() {
    sideBar.classList.add('-translate-x-full');
    arrierePlanMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', function() {
    if (sideBar.classList.contains('-translate-x-full')) {
        ouvrirMenu();
    } else {
        fermerMenu();
    }
});

arrierePlanMenu.addEventListener('click', fermerMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerMenu();
    }
});

const liensMenu = document.querySelectorAll('.lienNav');
liensMenu.forEach(lienMenu => {
    lienMenu.addEventListener('click', function(e) {
        const hrefLien = this.getAttribute('href');
        if (hrefLien && hrefLien !== '#') {
            window.location.href = hrefLien;
            return;
        }
        
        e.preventDefault();
        
        liensMenu.forEach(autreLien => autreLien.classList.remove('lienActif'));
        liensMenu.forEach(autreLien => {
            autreLien.classList.remove('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
            autreLien.classList.add('text-gray-300', 'hover:text-white');
        });
        
        this.classList.add('lienActif');
        this.classList.remove('text-gray-300', 'hover:text-white');
        this.classList.add('bg-gradient-to-r', 'from-bleu-principal', 'to-bleu-fonce', 'text-white');
    });
});

const btnPassword = document.getElementById('btnPassword');
const password = document.getElementById('password');
const btnNewPassword = document.getElementById('btnNewPassword');
const newPassword = document.getElementById('newPassword');
const btnAffichePassword = document.getElementById('btnAffichePassword');
const confirmPassword = document.getElementById('confirmPassword');

btnPassword.addEventListener('click', function() {
    const typePassord = password.type === 'password' ? 'text' : 'password';
    password.type = typePassord;
    this.innerHTML = typePassord === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

btnNewPassword.addEventListener('click', function() {
    const typePassord = newPassword.type === 'password' ? 'text' : 'password';
    newPassword.type = typePassord;
    this.innerHTML = typePassord === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

btnAffichePassword.addEventListener('click', function() {
    const typePassord = confirmPassword.type === 'password' ? 'text' : 'password';
    confirmPassword.type = typePassord;
    this.innerHTML = typePassord === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
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