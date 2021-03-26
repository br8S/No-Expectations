var musicOn = true;

document.querySelector('.fa-volume-mute').addEventListener('click', () => {
    if(musicOn === true) {
        document.querySelector('.song').pause();
        document.querySelector('.mutePath').style.fill = "#c5ff29";
        musicOn = false;
    }
    else{
        document.querySelector('.song').play();
        document.querySelector('.mutePath').style.fill = "gainsboro";
        musicOn = true;
    }
})