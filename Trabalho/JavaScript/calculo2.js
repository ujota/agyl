let progressBar2 = document.querySelector(".circular-progresso2");
let valueCirculo2 = document.querySelector(".value-circulo2");
console.log(progressBar2, valueCirculo2)

let progressValue2 = 0;
let progressEndValue2 = 50;
let speed2 = 30

let progresso2 = setInterval(() => {
    progressValue2++;
    valueCirculo2.textContent = `${progressValue2}%`;
    valueCirculo2.style.color = `#ffd900`;
    progressBar2.style.background = `conic-gradient(
    #ffd900 ${progressValue2 * 3.8}deg,
    #ffff ${progressValue2 * 3.8}deg
    )`;
    if(progressValue2 == progressEndValue2) {
        clearInterval(progresso2);
    }
}, speed2);


