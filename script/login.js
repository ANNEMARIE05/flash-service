let champEmailUtilisateur = document.getElementById('champAdresseEmailUtilisateur');
        let champMotDePasseUtilisateur = document.getElementById('champMotDePasseUtilisateur');
        let boutonAffichageMotDePasse = document.getElementById('boutonAffichageMasquerMotDePasse');
        let formulaireConnexion = document.getElementById('formulaireDeConnexion');
        let boutonConnexion = document.getElementById('boutonValidationConnexion');
        let texteConnexion = document.getElementById('texteActionConnexion');
        let chargementConnexion = document.getElementById('indicateurChargementConnexion');
        let zoneMessageResultat = document.getElementById('messageResultatConnexion');
        let messageSucces = document.getElementById('messageSuccesConnexion');
        let messageErreur = document.getElementById('messageErreurConnexion');

        let estMotDePasseVisible = false;

        boutonAffichageMotDePasse.addEventListener('click', function() {
            estMotDePasseVisible = !estMotDePasseVisible;
            champMotDePasseUtilisateur.type = estMotDePasseVisible ? 'text' : 'password';
        });

        formulaireConnexion.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let emailSaisi = champEmailUtilisateur.value;
            let motDePasseSaisi = champMotDePasseUtilisateur.value;
            
            zoneMessageResultat.classList.add('hidden');
            messageSucces.classList.add('hidden');
            messageErreur.classList.add('hidden');
            
            texteConnexion.classList.add('hidden');
            chargementConnexion.classList.remove('hidden');
            boutonConnexion.disabled = true;
            
            setTimeout(function() {
                chargementConnexion.classList.add('hidden');
                texteConnexion.classList.remove('hidden');
                boutonConnexion.disabled = false;
                
                zoneMessageResultat.classList.remove('hidden');
                
                if (emailSaisi === 'admin@flash.com' && motDePasseSaisi === 'admin123') {
                    messageSucces.classList.remove('hidden');
                    setTimeout(function() {
                        window.location.href = '/admin/dashboardAdmin.html';
                    }, 2000);
                } else if (emailSaisi === 'user@flash.com' && motDePasseSaisi === 'user123') {
                    messageSucces.classList.remove('hidden');
                    setTimeout(function() {
                        window.location.href = '/users/dashboardUser.html';
                    }, 2000);
                } else {
                    messageErreur.classList.remove('hidden');
                }
            }, 2000);
        });