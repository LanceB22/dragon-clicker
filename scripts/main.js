const dragonEl = document.querySelector('.dragon-container1')
const clickEl = document.querySelector('.clicks1')

const dragon2EL = document.querySelector('.dragon-container2')
const click2El = document.querySelector('.clicks2')


const dragon3EL = document.querySelector('.dragon-container3')
const click3El = document.querySelector('.clicks3')


const dragon4EL = document.querySelector('.dragon-container4')
const click4El = document.querySelector('.clicks4')

let clicks = 0

dragonEl.addEventListener('click', e => {
    clicks += 1
    clickEl.innerText = clicks
})

let clicks2 = 0

dragon2EL.addEventListener('click', e => {
    clicks2 += 1
    click2El.innerText = clicks2
console.log("clicks2",clicks2,"clicks",clicks);
})

let clicks3 = 0

dragon3EL.addEventListener('click', e => {
    clicks3 += 1
    click3El.innerText = clicks3
console.log("clicks3",clicks3,"clicks",clicks);
})

let clicks4 = 0

dragon4EL.addEventListener('click', e => {
    clicks4 += 1
    click4El.innerText = clicks4
console.log("clicks4",clicks4,"clicks",clicks);
})

