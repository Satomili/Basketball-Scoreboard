let homeScoreBoard = document.getElementById("home-score")
let guestScoreBoard = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homeAdd1() {
    homeScore += 1
    homeScoreBoard.textContent = homeScore 
}

function homeAdd2() {
    homeScore += 2
    homeScoreBoard.textContent = homeScore 
}

function homeAdd3() {
    homeScore += 3
    homeScoreBoard.textContent = homeScore 
}

function guestAdd1() {
    guestScore += 1
    guestScoreBoard.textContent = guestScore 
}

function guestAdd2() {
    guestScore += 2
    guestScoreBoard.textContent = guestScore 
}

function guestAdd3() {
    guestScore += 3
    guestScoreBoard.textContent = guestScore 
}