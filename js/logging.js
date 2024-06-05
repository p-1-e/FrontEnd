// navigation button 

let backButton = document.getElementById("back-button");
backButton.addEventListener("click", back)

function back() {
    window.location.href = "../html/index.html"
}


// logging request 

let loggingButton = document.getElementById("logging-button"); 
loggingButton.addEventListener("click", fetchLogin);


function fetchLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 

    const url = new URL('http://localhost:8080/login')
    url.searchParams.append('username', username)
    url.searchParams.append('password', password)

    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch(url, options).then(res => {
        if (!res.ok) {
            console.log('you are not logged in ', res);
            gotoInvalidLogging();
        } else {
            res.json().then(user => {
                sessionStorage.setItem('user', JSON.stringify(user));
                gotoHome()
            })
        }
    });
}

function gotoHome(){
    sessionStorage.removeItem('note');
    window.location.href = "../html/home.html";
}

function gotoInvalidLogging(){
    window.location.href = '/html/invalid-logging.html'
}