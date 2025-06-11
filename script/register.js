        const btnVoirPasse = document.getElementById('btnVoirPasse');
        const motPasse = document.getElementById('motPasse');
        const btnVoirConfirm = document.getElementById('btnVoirConfirm');
        const confirmPasse = document.getElementById('confirmPasse');
        const zoneErreur = document.getElementById('zoneErreur');
        const texteErreur = document.getElementById('texteErreur');

        function montrerErreur(message) {
            texteErreur.textContent = message;
            zoneErreur.classList.remove('hidden');
        }

        function cacherErreur() {
            zoneErreur.classList.add('hidden');
        }

        btnVoirPasse.addEventListener('click', function() {
            const type = motPasse.getAttribute('type') === 'password' ? 'text' : 'password';
            motPasse.setAttribute('type', type);
        });

        btnVoirConfirm.addEventListener('click', function() {
            const type = confirmPasse.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasse.setAttribute('type', type);
        });

        const formInscription = document.getElementById('formInscription');
        const btnValider = document.getElementById('btnValider');
        const texteBtn = document.getElementById('texteBtn');
        const loader = document.getElementById('loader');

        formInscription.addEventListener('submit', function(e) {
            e.preventDefault();
            cacherErreur();
            
            if (motPasse.value !== confirmPasse.value) {
                montrerErreur('Les mots de passe ne correspondent pas');
                return;
            }

            if (motPasse.value.length < 8) {
                montrerErreur('Le mot de passe doit contenir au minimum 8 caractères');
                return;
            }

            btnValider.disabled = true;
            texteBtn.classList.add('hidden');
            loader.classList.remove('hidden');

            setTimeout(function() {
                alert('Inscription réussie !');
                window.location.href = 'login.html';
            }, 2000);
        });