let progressBar = document.querySelector(".circular-progresso");
let valueCirculo = document.querySelector(".value-circulo");
console.log(progressBar, valueCirculo)

let progressValue = 0;
let progressEndValue = 100;
let speed = 30

let progresso = setInterval(() => {
    progressValue++;
    valueCirculo.innerHTML = `${progressValue}%`;
    valueCirculo.style.color = `lime`
    progressBar.style.background = `conic-gradient(
    lime ${progressValue * 3.6}deg,
    #ffff ${progressValue * 3.6}deg
    
    )`; 
    if(progressValue == progressEndValue) {
        clearInterval(progresso);

    } 
}, speed);




