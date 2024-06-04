const quadraticButton = document.getElementById('quadratic-button');
quadraticButton.addEventListener('click', gotoQuadraticCalculator);

const GCDButton= document.getElementById('gcd-button');
GCDButton.addEventListener('click', gotoGCDCalculator);

const newNoteButton = document.getElementById('new-note-button');
newNoteButton.addEventListener('click', gotoCreateNewNoteButton);

function gotoCreateNewNoteButton() {
    window.location.href = "../html/new-note.html";
}

function gotoQuadraticCalculator() {
    window.location.href = "../html/quadratic-calculator.html";
}

function gotoGCDCalculator(){
    window.location.href = "../html/gcd-calculator.html";
}