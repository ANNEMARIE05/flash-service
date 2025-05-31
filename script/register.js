const formulaireInscription = document.getElementById('formulaireInscription');
        const boutonSoumissionInscription = document.getElementById('boutonSoumissionInscription');
        const texteInscription = document.getElementById('texteInscription');
        const chargementInscription = document.getElementById('chargementInscription');
        const boutonAfficherMotDePasse = document.getElementById('boutonAfficherMotDePasse');
        const motDePasseUtilisateur = document.getElementById('motDePasseUtilisateur');

        boutonAfficherMotDePasse.addEventListener('click', function() {
            const typeInput = motDePasseUtilisateur.type === 'password' ? 'text' : 'password';
            motDePasseUtilisateur.type = typeInput;
        });

        formulaireInscription.addEventListener('submit', function(evenement) {
            evenement.preventDefault();
            
            const prenomUtilisateur = document.getElementById('prenomUtilisateur').value;
            const nomUtilisateur = document.getElementById('nomUtilisateur').value;
            const acceptationConditionsGenerales = document.getElementById('acceptationConditionsGenerales').checked;

            if (!acceptationConditionsGenerales) {
                alert('Vous devez accepter les conditions générales');
                return;
            }

            boutonSoumissionInscription.disabled = true;
            texteInscription.classList.add('hidden');
            chargementInscription.classList.remove('hidden');

            setTimeout(function() {
                boutonSoumissionInscription.disabled = false;
                texteInscription.classList.remove('hidden');
                chargementInscription.classList.add('hidden');
                
                alert('Inscription réussie ! Bienvenue ' + prenomUtilisateur + ' ' + nomUtilisateur);
                formulaireInscription.reset();
            }, 2000);
        });