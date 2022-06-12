let progressBar4 = document.querySelector(".circular-progresso4");
let valueCirculo4 = document.querySelector(".value-circulo4");
console.log(progressBar4, valueCirculo4)

let progressValue4 = 0;
let progressEndValue4 = 15;
let speed4 = 30

let progresso4 = setInterval(() => {
    progressValue4++;
    valueCirculo4.innerHTML = `${progressValue4}%`;
    valueCirculo4.style.color = `red`
    progressBar4.style.background = `conic-gradient(
    red ${progressValue4 * 3.4}deg,
    #ffff ${progressValue4 * 3.4}deg
    
    )`; 
    if(progressValue4 == progressEndValue4) {
        clearInterval(progresso4);

    } 
}, speed4);




