let pressStartTime = 0;
let currentBitPos = 0;
let bitsSaved = [0, 0, 0, 0, 0, 0, 0, 0];

async function playSound(telegraphAudio) {
    telegraphAudio.currentTime = 0;
    try {
        await telegraphAudio.play();
    } catch (error) {
        console.error('Erreur lors de la lecture audio :', error);
    }
}

function stopSound(telegraphAudio) {
    telegraphAudio.pause();
}

function stopTimer(){

    pressDuration = Date.now() - pressStartTime;
    
    console.log(pressDuration)
    /* TODO : A compléter */
    return pressDuration;
}


function startTimer(){
    pressStartTime = Date.now();
}

async function changeToDown(telegraphButton, telegraphAudio) {
    startTimer();

    /* TODO : A compléter */
    await playSound(telegraphAudio);    
}

function sampleBit(timePressed){    
    
    /* TODO : A compléter */
    return currentBit;
}

function changeToUp(telegraphButton, telegraphAudio) {
    stopTimer();

    /* TODO : A compléter */    
}

function accumulateBits(newBit){
    
    /* TODO : A compléter */
    
}

function calculateAscii(bitsArray){
    /* TODO : A compléter */
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        playSound,
        stopSound,
        changeToDown,
        changeToUp,
    };
}

// Ne pas modifier ces deux fonctions
function getBitsSaved(){
    return bitsSaved;
}

function clearBitsSaved(){
    bitsSaved = [0, 0, 0, 0, 0, 0, 0, 0];
}
