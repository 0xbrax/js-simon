let loading = document.getElementById('loading');
let startBtn = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');
let randomList = document.getElementById('random-number');
let verifyContainer = document.getElementById('verify-container');
let inputList = document.querySelectorAll('.input-number');
const verifyBtn = document.getElementById('verify-btn');
let mainTxt = document.getElementById('main-txt');
let timeTxt = document.getElementById('timer-txt');
let resultTxt = document.getElementById('result-txt');

let randomNumberArray = [];
let clock = undefined;
let timer = 30;

let checkNumber = false;
let counterVerify = [];
let counterTrue;

setTimeout(function() {
    loading.style.display = 'none';
    startBtn.style.display = 'block';
}, 5000);

startBtn.addEventListener('click', function() {
    startBtn.style.display = 'none';
    gameContainer.style.display = 'block';
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].value = '';
    }

    randomUniqueNumber(5, randomNumberArray, 0, 99);
    for (let i = 0; i < randomNumberArray.length; i++) {
        let numberContainer = document.createElement('li');
        numberContainer.append(randomNumberArray[i]);
        randomList.append(numberContainer);
    }

    mainTxt.innerHTML = `Memorizza i numeri.`;
    timeTxt.innerHTML = `Tempo rimanente: ${timer} s`;

    if (clock == undefined && timer == 30) {
        clock = setInterval(function() {
        timer -= 1;

        timeTxt.innerHTML = `Tempo rimanente: ${timer} s`;
        
        if (timer == 0) {
            clearInterval(clock);
            clock = undefined;
            randomList.style.display = 'none';

            timeTxt.innerHTML = '';
            mainTxt.innerHTML = `Prova a indovinare i numeri...`;

            verifyContainer.style.display = 'block';
        }
        }, 1000);
    }

    console.log(randomNumberArray)
});

verifyBtn.addEventListener('click', function() {
    for (let i = 0; i < inputList.length; i++) {
        if (randomNumberArray.includes(parseInt(inputList[i].value))) {
            checkNumber = true;
            
            if (!counterVerify.includes(parseInt(inputList[i].value))) {
                counterVerify.push(parseInt(inputList[i].value));
                inputList[i].classList.add('check-input');
            }
        }

    for (let i = 0; i < counterVerify.length; i++) {
        counterTrue = counterVerify.length;
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

    console.log(counterVerify)
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