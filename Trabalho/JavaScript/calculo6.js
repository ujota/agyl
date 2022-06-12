let progressBar6 = document.querySelector(".circular-progresso6");
let valueCirculo6 = document.querySelector(".value-circulo6");
console.log(progressBar6, valueCirculo6)

let progressValue6 = 0;
let progressEndValue6 = 25;
let speed6 = 30

let progresso6 = setInterval(() => {
    progressValue6++;
    valueCirculo6.innerHTML = `${progressValue6}%`;
    valueCirculo6.style.color = `red`
    progressBar6.style.background = `conic-gradient(
    red ${progressValue6 * 3.6}deg,
    #ffff ${progressValue6 * 3.6}deg
    
    )`; 
    if(progressValue6 == progressEndValue6) {
        clearInterval(progresso6);

    } 
}, speed6);




