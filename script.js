let selection = document.getElementById('selection')
let option1 = document.getElementById('option_1')
let option2 = document.getElementById('option_2')
let option3 = document.getElementById('option_3')
let option4 = document.getElementById('option_4')
let option5 = document.getElementById('option_5')

function thankYou() {
    document.querySelector('.thank_you').classList.remove('hide')
    document.querySelector('.grade').classList.add('hide')

    if (option1.checked) {
        selection.innerHTML = '1'
    }
    if (option2.checked) {
        selection.innerHTML = '2'
    }
    if (option3.checked) {
        selection.innerHTML = '3'
    }
    if (option4.checked) {
        selection.innerHTML = '4'
    }
    if (option5.checked) {
        selection.innerHTML = '5'
    }
}