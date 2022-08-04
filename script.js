// general 
const resultEl = document.getElementById('result')
const startBtn = document.getElementById('start')
const loadingEl = document.getElementById('loading')
// event listener for start button

    startBtn.addEventListener('click', function () {

  
        hideResult()
        unHideLoading()
        setTimeout(hideLoading, 300)
        setTimeout(showResult, 300)
 

})


// shows the loading animation
function unHideLoading() {
    loadingEl.style.display = 'flex'
}
// hides the loading animation
function hideLoading() {
    loadingEl.style.display = 'none'
}
// hides the result (#result element)
function hideResult() {
    resultEl.style.display = 'none'
}
/*
picks a random objebt between "شیر" & "خط" , then shows it in
the #result element
*/
function showResult() {
    let turn = Math.floor(Math.random() * 10) + 1
    if (turn > 5) {
        resultEl.textContent = 'شیر'
        resultEl.style.animation = 'none'
        resultEl.style.display = 'flex'
    }
    else {
        resultEl.textContent = 'خط'
        resultEl.style.animation = 'none'
        resultEl.style.display = 'flex'

    }
}
// shows and calculates each turn user takes.

const countResultEl = document.getElementById('count-number')
const countEl = document.getElementById('count')

countResultEl.textContent = localStorage.getItem('count')
let count = JSON.parse(localStorage.getItem('count'))
startBtn.addEventListener('click', function () {
    count += 1
    countResultEl.textContent = count
    // sends the value to local storage
    localStorage.setItem('count', count)

})

// resets the count from storage

const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function () {
    localStorage.clear()
    countResultEl.textContent = ''
    count = 0
    resultEl.style.display = 'none'

})

