let progressBar5 = document.querySelector(".circular-progresso5");
let valueCirculo5 = document.querySelector(".value-circulo5");
console.log(progressBar5, valueCirculo5)

let progressValue5 = 0;
let progressEndValue5 = 100;
let speed5 = 30

let progresso5 = setInterval(() => {
    progressValue5++;
    valueCirculo5.innerHTML = `${progressValue5}%`;
    valueCirculo5.style.color = `lime`
    progressBar5.style.background = `conic-gradient(
    lime ${progressValue5 * 3.6}deg,
    #ffff ${progressValue5 * 3.6}deg
    
    )`; 
    if(progressValue5 == progressEndValue5) {
        clearInterval(progresso5);

    } 
}, speed5);




