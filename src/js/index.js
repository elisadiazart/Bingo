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




const extractRandomNumber= array => {
    const index = Math.floor(Math.random() * array.length)
    const number = array[index]
    array.splice(index, 1)
    return number
}

const paintNumberPlayersBoard = (numberSelected) => {
    const player1Numbers = ([...player1.children]);
    player1Numbers.forEach(number => {
        if(number.textContent === numberSelected)
        console.log(`El numero seleccionado es ${number}`);
    })
}


const paintNumbersMainBoard = () => {
    const numbers =(mainBoard.children);
    let numberRandom = extractRandomNumber(numberToPlay)
    numbers[numberRandom].classList.add('number--selected');
    console.log(numberRandom + 1);
    paintNumberPlayersBoard(numberRandom + 1)
    currentNumber.textContent = `Number: ${numberRandom + 1}`
}

paintNumbersMainBoard()



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
paintNumberPlayersBoard()