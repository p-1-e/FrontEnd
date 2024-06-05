const searchBtn = document.getElementById('search-button')
searchBtn.addEventListener('click', searchNotes)

function searchNotes(){
    const user = JSON.parse(sessionStorage.getItem('user'))
    const list = document.getElementById('notes-list'); 
    const title = document.getElementById('title-input').value; 
    const url = new URL('http://localhost:8080/notes/search-title')
    url.searchParams.append('title', title)
    url.searchParams.append('userID', user['id'])
    const options = {
        method: 'GET', 
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch(url, options).then(res => {
        if(!res.ok){
            window.alert("can not find the note")
        } else {
            console.log(res); 
            res.json().then(notes => {
                console.log(notes); 
                createListNotes(notes, list)
            })
        }
    })

    
}

function createListNotes(notes, list){
    notes.forEach(note => {
        const li= document.createElement('li')
        li.textContent = note['title'];
        list.appendChild(li);

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

const backBtn = document.getElementById('back-btn')
backBtn.addEventListener('click', function() {
   window.location.href = '/html/home.html' 
}) 
