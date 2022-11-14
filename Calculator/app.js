const btnsList = document.querySelectorAll('.col-header')
const textField = document.getElementById('text-field')
const btnPlus = document.getElementById('plus')
let num = 0



for (const btn of btnsList) {
    btn.addEventListener('click', event => {
        if (event.target.getAttribute('number') !== null) {
            num = parseInt(event.target.getAttribute('number'))
            console.log(num)
            textField.value += num
        }

        if (event.target.getAttribute('id') === 'clear') {
            textField.value = ""
        }

        if (event.target.getAttribute('id') === 'plus') {
            btnPlus.style.background = 'rgba(117, 159, 181, 0.75)'
        }
    })
}