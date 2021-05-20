
var randomOne = parseInt(document.getElementById('random01'))
var randomTwo = parseInt(document.getElementById('random02'))

function newRatsel() {
    randomOne = parseInt(random01.innerText = Math.floor(Math.random() * (100 - 0)) + 0);
    randomTwo = parseInt(random02.innerText = Math.floor(Math.random() * (100 - 0)) + 0);
    resultIn = randomOne + randomTwo
    answer.innerHTML = " "
    wrongAnswer.innerHTML = " "
    return resultIn
}

var resultIn = newRatsel();
console.log(resultIn)

const inputEmpty = document.getElementById('result')

function resultIs() {
    var resulto = parseInt(document.getElementById('result').value)
    console.log(resulto);
    if (resulto === resultIn) {
        answer.classList.add('correct')
        answer.innerHTML = "Very noice! <br> *Borat voice*"
        console.log('mmh!')
        wrongAnswer.innerHTML = " "
    }
    else {
        wrongAnswer.classList.add('wrong')
        wrongAnswer.innerHTML = "Try again, buddy!"
        console.log('Not correct!')
    } 
    inputEmpty.value = ''
}

