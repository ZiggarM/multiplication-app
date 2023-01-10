const score = document.querySelector('.score')
const btn = document.querySelector('.btn')
const question = document.querySelector('#question')
const form = document.querySelector('form')
const input = document.querySelector('#input')

const num1 = Math.floor(Math.random() * 9) + 1
const num2 = Math.floor(Math.random() * 9) + 1
const ans = num1 * num2

question.innerText = `What is ${num1} multiply by ${num2}?`

let result = JSON.parse(localStorage.getItem('result'))

if (!result) {
    result = 0
}
score.innerText = `Score: ${result}`

form.addEventListener('submit', () => {
    const userAns = +input.value
    if (userAns === ans) {
        result++
        updateLocalStorage()
    } else {
        result--
        updateLocalStorage()
    }
})


function updateLocalStorage() {
    localStorage.setItem('result', JSON.stringify(result))
}