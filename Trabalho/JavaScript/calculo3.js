let progressBar3 = document.querySelector(".circular-progresso3");
let valueCirculo3 = document.querySelector(".value-circulo3");
console.log(progressBar3, valueCirculo3)

let progressValue3 = 0;
let progressEndValue3 = 70;
let speed3 = 30

let progresso3 = setInterval(() => {
    progressValue3++;
    valueCirculo3.textContent = `${progressValue3}%`;
    valueCirculo3.style.color = `#ffd900`
    progressBar3.style.background = `conic-gradient(
    #ffd900 ${progressValue3 * 3.8}deg,
    #ffff ${progressValue3 * 3.8}deg
    )`;
    if(progressValue3 == progressEndValue3) {
        clearInterval(progresso3);
    }
}, speed3);


