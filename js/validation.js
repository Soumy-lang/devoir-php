
document.querySelector('form').addEventListener('submit', function (event) {
    const numeroCompte = document.getElementById('numeroCompte').value;
    const solde = document.getElementById('solde').value;
    const typeDeCompte = document.getElementById('typeDeCompte').value;
    const mdp = document.getElementById('mdp').value;

    if (numeroCompte.length < 5 || numeroCompte.length > 15) {
        alert("Le numéro de compte doit contenir entre 5 et 15 caractères.");
        event.preventDefault();
    }

    if (solde < 10 || solde > 2000) {
        alert("Le solde doit être compris entre 10 et 2000.");
        event.preventDefault();
    }

    if (!['courant', 'epargne', 'entreprise'].includes(typeDeCompte.toLowerCase())) {
        alert("Le type de compte doit être 'courant', 'épargne' ou 'entreprise'.");
        event.preventDefault();
    }

    if (/\s/.test(mdp)) {
        alert("Le mot de passe ne doit pas contenir d'espaces.");
        event.preventDefault();
    }
});
