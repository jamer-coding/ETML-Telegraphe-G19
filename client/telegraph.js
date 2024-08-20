let audioLoaded = false;
let isMouseDownOnButton = false; 

document.addEventListener('DOMContentLoaded', async (event) => {
    const telegraphButton = document.getElementById('telegraphButton');
    const telegraphAudio = document.getElementById('telegraphAudio');
    telegraphAudio.load();
    telegraphAudio.addEventListener('canplaythrough', () => {
        audioLoaded = true;
    });
    
    
    /* TODO : A compléter, ajouter un écouteur d'évenement lorsque la souris descend */
    
    
    // Gestion du click de la souris
    telegraphButton.addEventListener('mousedown', async (event) => {
        event.preventDefault();
        console.log("mousedown");
        isMouseDownOnButton = true;
        await changeToDown(telegraphButton, telegraphAudio);
    });
        
    // Gestion du touchstart sur mobile
    telegraphButton.addEventListener('touchstart', async (event) => {
        event.preventDefault();
        isMouseDownOnButton = true;
        await changeToDown(telegraphButton, telegraphAudio);
    });

    // Gestion du relâchement de la souris
    document.addEventListener('mouseup', (event) => {
        if (isMouseDownOnButton) { 
            console.log("mouseup");
            changeToUp(telegraphButton, telegraphAudio);
            isMouseDownOnButton = false; 
        }
    });

    // Gestion du touchend sur mobile
    document.addEventListener('touchend', (event) => {
        if (isMouseDownOnButton) { 
            changeToUp(telegraphButton, telegraphAudio);
            isMouseDownOnButton = false; 
        }
    });

    // Gestion de l'annulation du touchstart sur mobile
    document.addEventListener('touchcancel', () => {
        if (isMouseDownOnButton) {
            changeToUp(telegraphButton, telegraphAudio);
            isMouseDownOnButton = false;
        }
    });

    // Gestion de la sortie de la souris du bouton
    telegraphButton.addEventListener('mouseout', () => {
        if (isMouseDownOnButton) {
            changeToUp(telegraphButton, telegraphAudio);
            isMouseDownOnButton = false;
        }
    });
});
