// general 
const resultEl = document.getElementById('result')
const startBtn = document.getElementById('start')
const loadingEl = document.getElementById('loading')
// event listener for start button
startBtn.addEventListener('click', function () {
    hideResult()
    unHideLoading()
    setTimeout(hideLoading, 850)
    setTimeout(showResult, 850)


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
    let turn = Math.floor(Math.random() * 2) + 1
    console.log(turn);
    if (turn === 1) {
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