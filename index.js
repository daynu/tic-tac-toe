let squares = document.querySelectorAll('.square')

let squareArray = ['', '', '',
                    '', '', '',
                    '', '', '']


function renderTable(squareArray)
{
    for(let i = 0; i < squares.length; i++)
    {
        squares[i].innerText = squareArray[i];
    }
}

renderTable(squareArray)

let activePlayer;

const game = (playerOne, playerTwo) =>
    {
        activePlayer = playerOne
        for(let i = 0; i < squares.length; i++)
        {
            squares[i].addEventListener('click', function func()
            {
                if(squareArray[i] == '')
                {
                    squareArray[i] = activePlayer.getMark();
                    renderTable(squareArray)
                    if(gameCheck(squareArray))
                    {
                        alert(activePlayer.getMark() + " has won")
                        squareArray = ['', '', '',
                            '', '', '',
                            '', '', '']
                        activePlayer = playerOne
                        renderTable(squareArray)
                    }
                    let count = 0;
                    for(let i = 0; i < squareArray.length; i++)
                    {
                        if(squareArray[i] != '') count++;
                    }
                    if(count == 9) 
                    {
                        alert("TIE")
                        squareArray = ['', '', '',
                        '', '', '',
                        '', '', '']
                    activePlayer = playerOne
                    renderTable(squareArray)
                        

                    }
                    changeTurn(playerOne, playerTwo)
                } 
            })
        }
    }


function changeTurn(a, b)
{
    if(activePlayer == a)
    {
        activePlayer = b
    }
    else activePlayer = a;

    console.log(activePlayer.getMark())
}

    
const player = (mark, name) =>
{
    const getMark = () => mark;
    const getName = () => name;
    return {getMark, getName}
}

let playerOne = player("X", "PLAYER1")
let playerTwo = player("O", "PLAYERTWO")



function equalCheck(a, b, c)
{
    if(a == b && b == c) return true;
    else return false;
}


function gameCheck(squareArray)
{
    if((equalCheck(squareArray[0], squareArray[1], squareArray[2])&&squareArray[0] != '')||(equalCheck(squareArray[3], squareArray[4], squareArray[5])&&squareArray[3] != '')
    ||(equalCheck(squareArray[6], squareArray[7], squareArray[8])&&squareArray[6] != '')||(equalCheck(squareArray[0], squareArray[3], squareArray[6])&&squareArray[0] != '')
    ||(equalCheck(squareArray[1], squareArray[4], squareArray[7])&&squareArray[1] != '')||(equalCheck(squareArray[2], squareArray[5], squareArray[8])&&squareArray[2] != '')
    ||(equalCheck(squareArray[0], squareArray[4], squareArray[8])&&squareArray[0] != '')||(equalCheck(squareArray[2], squareArray[4], squareArray[6])&&squareArray[2] != ''))
    return true
    else return false;
}

let start = document.getElementById('start')

start.onclick = () =>
{
    game(playerOne, playerTwo)
}

