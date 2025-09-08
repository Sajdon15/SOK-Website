/* ****************** Home Page ****************** */
var video = document.getElementById("introVideo");
var poster = video.getAttribute("poster");

video.addEventListener("ended",() => {
    video.load();
});

video.addEventListener("pause",() => {
    if (video.currentTime == 0) {
        video.load();
    }
});

function rotate(id) {
    img = document.getElementById(id);
    img.style.transform = 'scale(1.3) rotate(5deg)';
}

function normal(id) {
    img = document.getElementById(id);
    img.style.transform = 'scale(1) rotate(0deg)';
}

/* ****************** Catalogue ****************** */
function uncover(index) {
    document.querySelectorAll(".fortification img")[index].style.filter = "brightness(50%)";
    document.querySelectorAll(".fortification a")[index].style.opacity = "1";
    document.querySelectorAll(".fortification img")[index].style.boxShadow = "10px 10px 15px black";
}

function cover(index) {
    document.querySelectorAll(".fortification img")[index].style.filter = "brightness(100%)";
    document.querySelectorAll(".fortification a")[index].style.opacity = "0";
    document.querySelectorAll(".fortification img")[index].style.boxShadow = "none";
}