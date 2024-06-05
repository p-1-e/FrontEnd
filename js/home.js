const user = JSON.parse(sessionStorage.getItem("user"));
if (user){
    console.log(user);
    console.log(user['userName']);
    const usernameContainer = document.getElementById('username-text');
    usernameContainer.textContent = `Hello ${user['userName']}!`;
}

listNotes()

function listNotes(){
    const user = JSON.parse(sessionStorage.getItem('user'));
    const url = new URL("http://localhost:8080/notes");
    url.searchParams.append("userID", user['id']);
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }

    fetch(url, options).then(res => {
        if (!res.ok) {
            console.log('there are not nay note', res);
        } else {
            console.log(res);
            res.json().then(notes => {
                console.log(notes);
                createListNotes(notes);
            })
        }
    })
}

function createListNotes(notes){
    const listNotes = document.getElementById('notes-list');
    notes.forEach(note => {
        const li= document.createElement('li')
        li.textContent = note['title'];
        listNotes.appendChild(li);

        li.addEventListener('click', function (){
            const url = new URL(`http://localhost:8080/notes/${note['id']}`);

            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            }
            fetch(url, options).then(res => {
                if (!res.ok) {
                    window.alert("can not open the note")
                } else {
                    res.json().then(note => {
                        console.log(note);
                        sessionStorage.setItem('note', JSON.stringify(note));
                        openNote()
                    })

                }
            })
        })
    })
}

function openNote(){
    window.location.href = "../html/note.html";
}

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function () {
    sessionStorage.removeItem('user');
    window.location.href = '/html/index.html';
})


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