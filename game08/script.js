/*
 _
| | _   _   ___   __ _  ___
| || | | | / __| / _` |/ __|
| || |_| || (__ | (_| |\__ \
|_| \__,_| \___| \__,_||___/
*/

const grid = document.querySelector('.grid')
const score_display = document.querySelector('.score')
const characterdiv = document.querySelector('.characterdiv')
const characterdisplay = document.querySelector('.character')
const w = document.querySelector('.w')
const a = document.querySelector('.a')
const s = document.querySelector('.s')
const d = document.querySelector('.d')
const squares = []
const width = 28
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

let snakeHead = 340
let last_position = snakeHead
const lista_cobra = []

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        var square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
        if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('snake-head')
        } else if (layout[i] === 3) {
            squares[i].classList.add('apple')
        }
    }
}
createBoard()


const lista_cobra_last = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let c123 = 0
let value = 'no'
var ultimo = lista_cobra_last[lista_cobra_last.length - 1]
const snake = {
    pos: snakeHead,
    andar() {
        squares[snakeHead].classList.remove('snake-head')
        snake.remover_ultimo()
        if (value == 'up') {
            snakeHead -= width
        } else if (value == 'down') {
            snakeHead += width
        } else if (value == 'right') {
            snakeHead += 1
        } else if (value == 'left') {
            snakeHead -= 1
        }
    },
    atualiza() {
        ultimo = lista_cobra_last[lista_cobra_last.length - 1]
        squares[snakeHead].classList.add('snake-head')
        lista_cobra.forEach(Element => {
            squares[ultimo].classList.add('snake-body')
        });
    },
    verifica_colisao() {
        if (squares[snakeHead].classList.contains('wall')) {
            document.removeEventListener('keyUp', moveSnake)
            this.gameover()
        }
        if (squares[snakeHead].classList.contains('snake-body')) {
            document.removeEventListener('keyUp', moveSnake)
            this.gameover()
        }
    },
    aumenta() {
        lista_cobra.push(snakeHead)
    },
    remover_ultimo() {
        lista_cobra_last.push(snakeHead)
        ultimo = lista_cobra_last[lista_cobra_last.length - apple.macas_comidas - 1]
        if (lista_cobra.length >= 1) {
            if (lista_cobra_last.length > 1) {
                squares[ultimo].classList.remove('snake-body')
            }
        }
        if (lista_cobra_last.length > apple.macas_comidas + 5) {
            lista_cobra_last.shift()
        }
    },
    gameover() {
        value = ''
        document.querySelector('.gameover-message').innerHTML = 'VOCÊ PERDEU!!!'
        squares[apple.pos].classList.remove('apple')
        squares[snakeHead].classList.remove('snake-head')
        lista_cobra.forEach(element => {
            lista_cobra.shift()
        });
        lista_cobra_last.forEach(element => {
            squares[element].classList.remove('snake-body')
        });
        lista_cobra_last.forEach(element => {
            lista_cobra_last.shift()
        });
        snakeHead = 340
        this.restart()
    },
    restart() {
        changekeyscolor('nothing')
        apple.macas_comidas = 0
        score_display.innerHTML = `PONTOS: ${apple.macas_comidas}`
        apple.pos = 355
        createBoard()
        setTimeout(() => {
            document.querySelector('.gameover-message').innerHTML = ''
            value = 'no'
        }, 1000);
    }
}

const apple = {
    pos: 355,
    macas_comidas: 0,
    randomizar() {
        squares[apple.pos].classList.remove('apple')
        apple.pos = Math.floor(Math.random() * layout.length)
        if (squares[apple.pos].classList.contains('wall') || squares[apple.pos].classList.contains(
                'snake-head') || squares[apple.pos].classList.contains('snake-body')) {
            apple.randomizar()
        } else {
            squares[apple.pos].classList.add('apple')
        }
    },
    verifica_comida() {
        if (squares[apple.pos].classList.contains('snake-head')) {
            apple.macas_comidas++
            score_display.innerHTML = `PONTOS: ${apple.macas_comidas}`
            apple.randomizar()
            snake.aumenta()
        }
    }
}

listkeys = [w, a, s, d]
function changekeyscolor(x){
    try {
        x.style.backgroundColor = 'white'
        x.style.color = 'black'
        x.style.border = '3px solid rgb(0, 0, 0)'
    } catch (error) {
        console.log('')
    }
    listkeys.forEach(element => {
        if(element!=x){
            element.style.backgroundColor = 'black'
            element.style.color = 'white'
            element.style.border = '3px solid rgb(255, 255, 255)'
        }
    });
}

function moveSnake(event) {
    console.log(event.code)
    if (value == '') {
        return
    }
    squares[snakeHead].classList.remove('snake-head')
    switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
            changekeyscolor(w)
            value = 'up'
            break
        case 'KeyS':
        case 'ArrowDown':
            changekeyscolor(s)
            value = 'down'
            break
        case 'KeyD':
        case 'ArrowRight':
            changekeyscolor(d)
            value = 'right'
            break
        case 'KeyA':
        case 'ArrowLeft':
            changekeyscolor(a)
            value = 'left'
            break
    }
    squares[snakeHead].classList.add('snake-head')
}
document.addEventListener('keyup', moveSnake)


/*
const character = ['Snake', 'RoundSnake', 'SquareSnake', 'DickSnake']
const charactercaracteristics = {
    'Snake': 
    {
        'colorhead': 'white', 
        'colorbody': 'white',
        'round': '15%'
    },
    'RoundSnake': 
    {
        'colorhead': 'blue',
        'colorbody': 'blue',
        'round': '50%'
    }
};
characterActualPos = 1
characterActual = character[characterActualPos]
function changeCharacter(){
    characterActualPos++    
    if(characterActualPos>3){        
        characterActualPos = 0    
    }
    characterdisplay.value = 'Character - '+character[characterActualPos]    
    applyStyle(
        charactercaracteristics[character[characterActualPos]]['colorhead'], 
        charactercaracteristics[character[characterActualPos]]['colorbody'], 
        charactercaracteristics[character[characterActualPos]]['round']
               )
}

function applyStyle(colorhead, colorbody, round){
    document.querySelector('.snake-head').style.backgroundColor = colorhead
    document.querySelector('.snake-body').style.backgroundColor = colorbody
    document.querySelector('.snake-head').style.borderRadius = round
    document.querySelector('.snake-body').style.borderRadius = round
}
*/
/*
FIXME: OLD:
async function loop() {
    await sleep(50)
    snake.andar()
    snake.atualiza()
    snake.verifica_colisao()
    apple.verifica_comida()
    requestAnimationFrame(loop)
}
loop()
*/

function gameLoop() {
    setInterval(show, 1000 / 20)
}

function show() {
    update();
}

function update() {
    snake.andar()
    snake.atualiza()
    snake.verifica_colisao()
    apple.verifica_comida()
}
gameLoop()
