const textArea = document.querySelector('textarea');
const playBut = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFig = document.querySelector('figure');

// Make the duck say something when the button is pressed

function onButtonClick() {
    if (textArea.value.length > 0) {
        speak();
    }
}

function speak() {
    const text = textArea.value;

    const utterance = new SpeechSynthesisUtterance(text);

    // btw 0 and 2
    utterance.pitch = pitchBar.value;

    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', function () {
        playBut.disabled = true;
        textArea.disabled = true;
        pitchBar.disabled = true;
        duckFig.classList.add('talking');
    })

    utterance.addEventListener('end', function () {
        playBut.disabled = false;
        textArea.disabled = false;
        pitchBar.disabled = false;
        duckFig.classList.remove('talking');
    })
}

playBut.addEventListener('click', onButtonClick);