// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const mainBoard = document.getElementById('mainBoard')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const currentNumber = document.getElementById('currentNumber')

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
    console.log(numberSelected);
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
    
    



const paintNumbersMainBoard = () => {
    const numbers =(mainBoard.children);
    let numberRandom = extractRandomNumber(numberToPlay)
    numbers[numberRandom].classList.add('number--selected');
    paintNumberPlayersBoard(numberRandom + 1)
    currentNumber.textContent = `Number: ${numberRandom + 1}`
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




paintPlayersBoards(player1, numbersRandomCard1)
paintPlayersBoards(player2, numbersRandomCard2)



const extractNumberEvery2Seconds = () => {
    clearTimeout(timeoutId);
        paintNumbersMainBoard()
        paintNumberPlayersBoard()
  
      timeoutId = setTimeout(extractNumberEvery2Seconds, 200);
    }

extractNumberEvery2Seconds()