const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const redExp = /^[a-zA-Z0-9]+@gmail\.com$/

gmailButton.onclick = () => {
    if (redExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}


// BOX
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionW = 0
let positionH = 0

const moveBox = () => {
    if (positionW <= 450 && positionH === 0) {
        positionW += 1
        childBlock.style.left = positionW + 'px'
    } else if (positionH <= 450 && positionW > 449) {
        positionH += 1
        childBlock.style.top = positionH + 'px'
    } else if (positionW > 0) {
        positionW -= 1
        childBlock.style.left = positionW + 'px'
    } else if (positionH > 0) {
        positionH -= 1
        childBlock.style.top = positionH + 'px'
    }
    setTimeout(moveBox, 0)
}
moveBox()




// TIMER
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const seconds = document.getElementById('seconds')

let timer = 0
let swithers = true

start.onclick = () => {
    if (swithers === true) {
        const timers = setInterval(() => {
            timer++
            seconds.innerHTML = timer
        }, 1000)
        stop.onclick = () => {
            swithers = true
            clearInterval(timers)
        }
        reset.onclick = () => {
            clearInterval(timers)
            timer = 0
            seconds.innerHTML = '0'
        }
    }
    swithers = false
}   