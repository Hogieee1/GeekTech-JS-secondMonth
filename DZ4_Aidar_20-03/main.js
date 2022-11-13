// First task
const incr = document.querySelector('.incr')
const decr = document.querySelector('.decr')
const cnt = document.getElementById('count')

let count = 0

incr.addEventListener('click', function ()  {
    count++
    if (count > 0) {
        cnt.textContent = count
        cnt.style.color = "green"
    }
})

decr.addEventListener('click', function () {

    if (count > 0) {
        count--
        cnt.textContent = count
        cnt.style.color = "red"
    }
})


// =========================

// Second task

const posX = document.querySelector('#posX')
const posY = document.querySelector('#posY')
const mBlock = document.querySelector('#main-block')

block.addEventListener('mousemove', event => {
    let x = event.screenX
    let y = event.screenY

    posX.innerHTML = x
    posY.innerHTML = y

})

// ==========================

// Third task

const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const colors = document.querySelectorAll('cirlce')

let pmt = prompt('Введите цвета сфетофора: Красный, Желтый, Зеленый.')

if (pmt === "Красный") {
    alert("STOP!")
    red.style.backgroundColor = 'red'
} 

else if (pmt === 'Желтый') {
    alert("BE READY!")
    yellow.style.backgroundColor = 'yellow'
}
else if (pmt === 'Зеленый') {
    alert("GO!")
    green.style.backgroundColor = 'green'
}
else (
    alert('Введите только ниже перечисленные цвета!\nКрасный, Желтый, Зеленый.')
)




