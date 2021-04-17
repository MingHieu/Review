alert('Nhập 1 số trong khoảng 1 đến 100. Good Luck!!!!!')
let time = 3;
let guessNumber = document.getElementById('guess-number')
let btn = document.getElementById('admit-btn')
let finalNumber = Math.round(Math.random() * 100)
btn.addEventListener('click', game)

function game() {
    guess = guessNumber.value
    if (time == 0) {
        alert('Con số của chương trình là ' + guess)
        return 0
    }
    if (check(guess)) {
        if (guess == finalNumber)
            alert('Bạn đã chiến thắng.')
        else alert('Sai rồi lêu lêu, bạn còn ' + --time + ' lượt chơi')
    }
    else alert('Bạn nhập không đúng tiêu chuẩn, xin mời nhập lại')
    if (time == 0) {
        alert('Con số của chương trình là ' + guess)
        return 0
    }
}
function check(guessNumber) {
    if (guessNumber > 100 || guessNumber < 1) return 0
    let isTrue = 0
    let guess = String(guessNumber)
    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (guess[i] == String(j)) isTrue++
        }
        if (isTrue == 0) return 0
    }
    return 1
}
