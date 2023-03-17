// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const mainBoard = document.getElementById('mainBoard')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const currentNumber = document.getElementById('currentNumber')
const button = document.getElementById('button')

let numberToPlay = Array(99)
    .fill()
    .map((_, index) => index +1);


let numbersRandomCard1 = Array(99)
    .fill()
    .map((_, index) => index +1);

let numbersRandomCard2 = Array(99)
    .fill()
    .map((_, index) => index +1);

let winner = false;
let timeoutId;





const extractRandomNumber= array => {
    const index = Math.floor(Math.random() * array.length)
    const number = array[index]
    array.splice(index, 1)
    return number
}



const paintNumberPlayersBoard = (numberSelected) => {
    const player1Numbers = ([...player1.children]);
    const player2Numbers = ([...player2.children]);
    player1Numbers.forEach(number => {
        if(Number(number.textContent) === numberSelected){
            number.classList.add('number--selected')
        }}
    );
    player2Numbers.forEach(number => {
        if(Number(number.textContent) === numberSelected){
            number.classList.add('number--selected')
        }}
    )
}
    
    



const paintNumbersMainBoard = (numberRandom) => {
    const numbers =(mainBoard.children);
    numbers[numberRandom -1].classList.add('number--selected');
    paintNumberPlayersBoard(numberRandom)
    currentNumber.textContent = `Number: ${numberRandom}`
}





const paintPlayersBoards = (board, array) => {
    const fragment = document.createDocumentFragment()
    for (let index = 1; index <= 15; index++) {
        const newNumberPlayer = document.createElement('span')
        newNumberPlayer.classList.add('number')
        newNumberPlayer.textContent= extractRandomNumber(array)
        fragment.append(newNumberPlayer)
    }
    board.append(fragment)
}


const resetArray = (array) => {
    array = []
    array = Array(99)
        .fill()
        .map((_, index) => index +1);
}

paintPlayersBoards(player1, numbersRandomCard1)
paintPlayersBoards(player2, numbersRandomCard2)

const restartGame= () => {
    const player1Numbers = ([...player1.children]);
    const player2Numbers = ([...player2.children]);
    const mainBoardNumbers = ([...mainBoard.children])
    player1Numbers.forEach(number => {
        number.classList.remove('number--selected')
    });
    player2Numbers.forEach(number => {
        number.classList.remove('number--selected')
    });
    mainBoardNumbers.forEach(number => {
        number.classList.remove('number--selected')
    });
    currentNumber.textContent = `Number:`

    numberToPlay = []
    numberToPlay = Array(99)
        .fill()
        .map((_, index) => index +1);

    numbersRandomCard1 = []
    numbersRandomCard1 = Array(99)
        .fill()
        .map((_, index) => index +1);
    
    numbersRandomCard1 = []
    numbersRandomCard1 = Array(99)
        .fill()
        .map((_, index) => index +1);

    extractNumberEvery2Seconds()
}





const extractNumberEvery2Seconds = () => {
    clearTimeout(timeoutId);
    if(!button.classList.contains('button--disabled')){button.classList.add('button--disabled')}
        let numbersSelected1 = player1.querySelectorAll('.number--selected');
        let numbersSelected2 = player2.querySelectorAll('.number--selected');
        if([...numbersSelected1].length === 15 || [...numbersSelected2].length === 15){
            button.classList.remove('button--disabled')
            clearTimeout(timeoutId);
            return
        }
        else{
            let numberRandom = extractRandomNumber(numberToPlay)
            paintNumbersMainBoard(numberRandom )
        }
      timeoutId = setTimeout(extractNumberEvery2Seconds, 200);
    }

extractNumberEvery2Seconds()

button.addEventListener('click', () => {
    if(button.classList.contains('button--disabled')) return
    else restartGame()
    
})





        