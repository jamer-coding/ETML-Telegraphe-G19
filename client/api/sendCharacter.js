function sendCharacter(charAscii) {
    const url = ""; // TODO : A compléter l'URL backend de la fonction pour lire les messages dans la base de données.
        
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // TODO implémenter le body de la méthod (on souhaite envoyer charAscii), il est important d'encoder correctement l'URI
        body: ''
    })
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            
            // TODO : on aimerait voir la data dans la console du navigateur
            // Si la data a un message, on souhaite afficher dans une alert la réussite et le message
            // Si parcontre la data a une error, alors on souhaite afficher une alert "Error : ..." avec l'erreur obtenue
            
            
        } catch (error) {
            console.error('Error parsing JSON:', error, 'Response text:', text);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}