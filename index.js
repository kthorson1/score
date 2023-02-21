let theScore = 0
let theScore2 = 0

function onePoint() {
    theScore += 1
    document.getElementById("score1").innerText = theScore
}

function onePointTwo() {
    theScore2 += 1
    document.getElementById("score2").innerText = theScore2
}

function twoPoint() {
    theScore += 2
    document.getElementById("score1").innerText = theScore
}

function twoPointTwo() {
    theScore2 += 2
    document.getElementById("score2").innerText = theScore2
}

function threePoint() {
    theScore += 3
    document.getElementById("score1").innerText = theScore
}

function threePointTwo() {
    theScore2 += 3
    document.getElementById("score2").innerText = theScore2
}