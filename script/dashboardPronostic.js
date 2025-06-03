const btnMenu = document.getElementById('btnMenu');
const sidebar = document.getElementById('sidebar');
const arrierePlanMenu = document.getElementById('arrierePlanMenu');

btnMenu.addEventListener('click', function() {
    sidebar.classList.toggle('-translate-x-full');
    arrierePlanMenu.classList.toggle('hidden');
});

arrierePlanMenu.addEventListener('click', function() {
    sidebar.classList.add('-translate-x-full');
    arrierePlanMenu.classList.add('hidden');
});

const btnFiltre = document.querySelectorAll('.btn-filtre');
const cartes = document.querySelectorAll('.carte');

btnFiltre.forEach(bouton => {
    bouton.addEventListener('click', function() {
        btnFiltre.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-700', 'text-gray-300');
        });

        this.classList.remove('bg-gray-700', 'text-gray-300');
        this.classList.add('bg-blue-600', 'text-white');

        const filtre = this.id;
        
        cartes.forEach(carte => {
            if (filtre === 'tous') {
                carte.style.display = 'block';
            } else {
                const statut = carte.getAttribute('data-statut');
                if (statut === filtre) {
                    carte.style.display = 'block';
                } else {
                    carte.style.display = 'none';
                }
            }
        });
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

document.getElementById('deco').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        window.location.href = '/auth/login.html';
    }
});

