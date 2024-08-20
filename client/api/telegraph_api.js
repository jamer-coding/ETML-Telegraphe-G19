let pressStartTime = 0;
let isTimerRunning = false
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
    isTimerRunning = false

    pressDuration = pressStartTime
    
    /* TODO : A compléter */
    return pressDuration;
}

function incrementTimer(){
    if (isTimerRunning) {
        pressStartTime += 1;
    }
}

function startTimer(){
    isTimerRunning = true;

    pressStartTime = 0;
    
    let Timer = setTimeout(incrementTimer, 1)

    Timer.
}

function onClick(){

}

function mouseDown(params){

}

async function changeToDown(telegraphButton, telegraphAudio) {
    
    /* TODO : A compléter */
    await playSound(telegraphAudio);    
}

function sampleBit(timePressed){    
    
    /* TODO : A compléter */
    return currentBit;
}

function changeToUp(telegraphButton, telegraphAudio) {
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
        changeToUp
    };
}

// Ne pas modifier ces deux fonctions
function getBitsSaved(){
    return bitsSaved;
}

function clearBitsSaved(){
    bitsSaved = [0, 0, 0, 0, 0, 0, 0, 0];
}
