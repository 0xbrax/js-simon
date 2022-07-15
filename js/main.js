let loading = document.getElementById('loading');
let startBtn = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');
const randomList = document.getElementById('random-number');
const verifyBtn = document.getElementById('verify-btn');

setTimeout(function() {

    loading.style.display = 'none';
    startBtn.style.display = 'block';

}, 1000);

startBtn.addEventListener('click', function() {

    startBtn.style.display = 'none';
    gameContainer.style.display = 'block';

});


let clock = undefined;
let timer = 5;
if (clock == undefined && timer == 5) {
    clock = setInterval(function() {

    timer -= 1;

    console.log(timer);

    if (timer == 0) {
        clearInterval(clock);
        clock = undefined;
    }
    }, 1000);
}






let randomNumberArray = [];
randomUniqueNumber(5, randomNumberArray, 1, 99);

console.log(randomNumberArray)

for (let i = 0; i < randomNumberArray.length; i++) {
    let numberContainer = document.createElement('li');
    numberContainer.append(randomNumberArray[i]);
    randomList.append(numberContainer);
}

const inputList = document.querySelectorAll('.input-number');

verifyBtn.addEventListener('click', function() {

    let checkNumber = false;
    let counterTrue = 0;
    for (let i = 0; i < inputList.length; i++) {
        console.log(inputList[i].value)
        if (randomNumberArray.includes(parseInt(inputList[i].value))) {
            checkNumber = true;
            counterTrue++;
        }
    }
    if (checkNumber == true) {
        console.log('ciaooo')
        console.log(counterTrue)
    } else {
        console.log('nooo')
    }
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