let loading = document.getElementById('loading');
let startBtn = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');

setTimeout(function() {

    loading.style.display = 'none';
    startBtn.style.display = 'block';

}, 1000);

startBtn.addEventListener('click', function() {

    startBtn.style.display = 'none';
    gameContainer.style.display = 'block';

});

let randomNumberArray = [];
randomUniqueNumber(5, randomNumberArray, 1, 99);

console.log(randomNumberArray);





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