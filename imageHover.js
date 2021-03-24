document.querySelector(".img-5").addEventListener('mouseover', () => {
    document.querySelector(".img-5").src = "images/artist-005-320p.jpg";
})

document.querySelector(".img-5").addEventListener('mouseleave', () => {
    document.querySelector(".img-5").src = "images/mix-005-320p.jpg";
})

document.querySelector(".img-4").addEventListener('mouseover', () => {
    document.querySelector(".img-4").src = "images/artist-004-320p.jpg";
})

document.querySelector(".img-4").addEventListener('mouseleave', () => {
    document.querySelector(".img-4").src = "images/mix-004-320p.jpg";
})

document.querySelector(".img-3").addEventListener('mouseover', () => {
    document.querySelector(".img-3").src = "images/artist-003-320p.jpg";
})

document.querySelector(".img-3").addEventListener('mouseleave', () => {
    document.querySelector(".img-3").src = "images/mix-003-320p.jpg";
})

document.querySelector(".img-2").addEventListener('mouseover', () => {
    document.querySelector(".img-2").src = "images/artist-002-320p.jpg";
})

document.querySelector(".img-2").addEventListener('mouseleave', () => {
    document.querySelector(".img-2").src = "images/mix-002-320p.jpg";
})

document.querySelector(".img-1").addEventListener('mouseover', () => {
    document.querySelector(".img-1").src = "images/artist-001-320p.jpg";
})

document.querySelector(".img-1").addEventListener('mouseleave', () => {
    document.querySelector(".img-1").src = "images/mix-001-320p.jpg";
})

/* OPACITY INCREASE ON HOVER */

var mix_images = document.querySelectorAll(".image");
console.log(mix_images)

for(var i=0; i < mix_images.length; i++){
    (function(i){
        mix_images[i].addEventListener('mouseover', () => {
            mix_images[i].style.opacity = "1";
            console.log
        })

        mix_images[i].addEventListener('mouseleave', () => {
            mix_images[i].style.opacity = "0.8";
            console.log
        })
    }(i));
}