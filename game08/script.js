/*
 _
| | _   _   ___   __ _  ___
| || | | | / __| / _` |/ __|
| || |_| || (__ | (_| |\__ \
|_| \__,_| \___| \__,_||___/
*/

const grid = document.querySelector('.grid')
const score_display = document.querySelector('.score')
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

function moveSnake(event) {
    console.log(event.code)
    if (value == '') {
        return
    }
    squares[snakeHead].classList.remove('snake-head')
    switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
            value = 'up'
            break
        case 'KeyS':
        case 'ArrowDown':
            value = 'down'
            break
        case 'KeyD':
        case 'ArrowRight':
            value = 'right'
            break
        case 'KeyA':
        case 'ArrowLeft':
            value = 'left'
            break
    }
    squares[snakeHead].classList.add('snake-head')
}
document.addEventListener('keyup', moveSnake)
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
