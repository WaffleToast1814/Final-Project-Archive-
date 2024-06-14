//selecting each individual button for sound
let button = document.querySelector(".Herta-Spin");
let audio = document.getElementById('Kuru-Kuru-Sound');
let button2 = document.querySelector(".Herta-Spin-2");
let audio2 = document.getElementById('Kuru-Kuru-Sound-2');
let button3 = document.querySelector(".Herta-Spin-3");
let audio3 = document.getElementById('Kuru-Kuru-Sound-3');
let button4 = document.querySelector(".Color-Change");
let array = ["#8E44AD", "#3498DB", "#1ABC9C", "#F1C40F", "#839192", "#FF0096", ];
let div = document.querySelector(".Color-Button");

function KuruKuruAudio(){
    audio.play()
}
function KuruKuruAudio2(){
    audio2.play()
}
function KuruKuruAudio3(){
    audio3.play()
}
function BackgroundChange(){
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";

    document.body.style.backgroundColor = randomcolor;
}

button.addEventListener('click', KuruKuruAudio);
button2.addEventListener('click',KuruKuruAudio2);
button3.addEventListener('click',KuruKuruAudio3);
button4.addEventListener('click',BackgroundChange);




