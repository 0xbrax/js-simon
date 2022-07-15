let loading = document.getElementById('loading');
let startBtn = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');
let randomList = document.getElementById('random-number');
let verifyContainer = document.getElementById('verify-container');
let inputList = document.querySelectorAll('.input-number');
const verifyBtn = document.getElementById('verify-btn');
let timetTxt = document.getElementById('timer-txt');
let resultTxt = document.getElementById('result-txt');

setTimeout(function() {
    loading.style.display = 'none';
    startBtn.style.display = 'block';
}, 1000);

startBtn.addEventListener('click', function() {
    startBtn.style.display = 'none';
    gameContainer.style.display = 'block';
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].value = '';
    }



    let randomNumberArray = [];
    randomUniqueNumber(5, randomNumberArray, 1, 99);
    for (let i = 0; i < randomNumberArray.length; i++) {
        let numberContainer = document.createElement('li');
        numberContainer.append(randomNumberArray[i]);
        randomList.append(numberContainer);
    }
    console.log(randomNumberArray)



    let clock = undefined;
    let timer = 5;

    timetTxt.innerHTML = `Memorizza i numeri ancora per ${timer} secondi.`;

    if (clock == undefined && timer == 5) {
        clock = setInterval(function() {
        timer -= 1;

        timetTxt.innerHTML = `Memorizza i numeri ancora per ${timer} secondi.`;

        if (timer == 0) {
            clearInterval(clock);
            clock = undefined;
            randomList.style.display = 'none';
            verifyContainer.style.display = 'block';

            timetTxt.innerHTML = `Prova a indovinare i numeri...`;
        }
        }, 1000);
    }



    verifyBtn.addEventListener('click', function() {

        let checkNumber = false;
        let counterTrue = 0;
        for (let i = 0; i < inputList.length; i++) {
            if (randomNumberArray.includes(parseInt(inputList[i].value))) {
                checkNumber = true;
                counterTrue++;
            }
        }
        if (checkNumber == true) {
            if (counterTrue == 1) {
                resultTxt.innerHTML = `Hai indovinato ${counterTrue} numero.`;
            } else if (counterTrue == 5) {
                resultTxt.innerHTML = `Congratulazioni, hai indovinato tutti i numeri!`;
            } else {
                resultTxt.innerHTML = `Hai indovinato ${counterTrue} numeri.`;
            }
        } else {
            resultTxt.innerHTML = `Non hai indovinato nessun numero...`;
        }
    });
});








function randomUniqueNumber(maxNumberList, numberListName, min, max) {
    let numberList;
    let numberVerify = false;

    for (let list = 0; list < maxNumberList; list++) {
        numberList = randomNumber(min, max);
        
        if (numberListName.includes(numberList)) {
            numberVerify = true;
        }
        
        while (numberVerify == true) {
            numberList = randomNumber(min, max);

            if (!numberListName.includes(numberList)) {
                numberVerify = false;
            }
        }
        
        numberListName.push(numberList);
        }
}

function randomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    
    return number;
}