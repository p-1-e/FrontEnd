let note = sessionStorage.getItem('note');
console.log(note);
note = JSON.parse(note);

const titleInput = document.getElementById('note-title');
titleInput.value = note['title']

const textInput = document.getElementById('note-text');
textInput.value = note['text'];

const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', deleteNote);

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', save)

const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', gotoHome);

const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', logOut)

function save(){

    const url = new URL(`http://localhost:8080/notes/${note['id']}`);
    const newNote = {
        id: note['id'],
        title: titleInput.value,
        text: textInput.value,
        date: note['date'],
    }
    const options = {
        body: JSON.stringify(newNote),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    fetch(url, options).then(res => {
        if (!res.ok) {
            window.alert("can not save the note");
            console.log(res);
        } else {
            res.json().then(note => {
                window.alert("note saved");
                console.log(note);
            })
        }

    })
}

function deleteNote(){
    const url = new URL('http://localhost:8080/notes');
    url.searchParams.append('id', note['id']);
    const options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
        }
    }
    fetch(url, options).then(res => {
        if (!res.ok) {
            window.alert("can not delete the note")
        } else {
            gotoHome()
        }
    })
}

function gotoHome(){
    sessionStorage.removeItem('note');
    window.location.href = "../html/home.html";
}

function logOut() {
    sessionStorage.removeItem('note');
    sessionStorage.removeItem('user');
    window.location.href = "../html/index.html";
}