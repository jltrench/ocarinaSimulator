document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let input = document.querySelector('#input');
    let song = input.value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

    input.value = '';
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    let ocarina = document.querySelector('.ocarina');

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        ocarina.classList.add('rotate');
        
        setTimeout(() => {
            ocarina.classList.remove('rotate');
            
        }, 300);

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songIndex of songArray) {
        setTimeout(() => {
            playSound(`key${songIndex}`);
        }, wait);

        wait += 500;
    }
}