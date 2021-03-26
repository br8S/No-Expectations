var musicOn = true;

document.querySelector('.fa-volume-mute').addEventListener('click', () => {
    if(musicOn === true) {
        document.querySelector('.song').pause();
        musicOn = false;
    }
    else{
        document.querySelector('.song').play();
        musicOn = true;
    }
})