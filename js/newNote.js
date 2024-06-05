const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', saveNewNote)

document.getElementById('back-btn').addEventListener('click', function() {
    sessionStorage.removeItem('note');
    window.location.href = "/html/home.html"
});

document.getElementById('logout-btn').addEventListener('click', function() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('note');
    window.location.href = "/html/index.html";
})

function saveNewNote() {
    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;

    const user = sessionStorage.getItem('user');
    console.log(user);
    const url = new URL(`http://localhost:8080/note/save`);
    url.searchParams.append('title', title);
    url.searchParams.append('text', text);
    const options = {
        body: user,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    }

    fetch(url, options).then(res => {
        if (!res.ok) {
            window.alert("can not save the note");
            console.log(res);
        } else {
            res.json().then(note => {
                console.log(note);
                window.alert("note saved");
                gotoHome()
            })
        }
    })

}

function gotoHome(){
    sessionStorage.removeItem('note');
    window.location.href = "../html/home.html"
}