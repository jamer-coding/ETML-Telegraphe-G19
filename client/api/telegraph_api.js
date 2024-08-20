let pressStartTime = 0;
let currentBit = 0;
let bitsSaved = [0, 0, 0, 0, 0, 0, 0, 0];
let currentLength = 0

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

function stopTimer() {

    pressDuration = Date.now() - pressStartTime;

    /* TODO : A compléter */
    return pressDuration;
}


function startTimer() {
    pressStartTime = Date.now();
}

async function changeToDown(telegraphButton, telegraphAudio) {
    startTimer();

    await playSound(telegraphAudio);
}

function sampleBit(timePressed) {

    return currentBit;
}

function changeToUp(telegraphButton, telegraphAudio) {
    let time = stopTimer();

    if (time <= 200) {
        currentBit = 0
    } else {
        currentBit = 1
    }

    accumulateBits(currentBitPos)

    /* TODO : A compléter */
}

function accumulateBits(newBit) {
    if (currentLength != 8 && currentLength + 1 != 8) {
        bitsSaved[currentLength] = newBit
        currentLength += 1
    } else {
        bitsSaved[currentLength] = newBit

        calculateAscii(bitsSaved)
        currentLength = 0
    } 

    /* TODO : A compléter */

}

function calculateAscii(bitsArray) {
    /* TODO : A compléter */
    console.log(bitsArray)
    clearBitsSaved()
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
function getBitsSaved() {
    return bitsSaved;
}

function clearBitsSaved() {
    bitsSaved = [0, 0, 0, 0, 0, 0, 0, 0];
}
