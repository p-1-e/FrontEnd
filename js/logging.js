// navigation button 

let backButton = document.getElementById("back-button");
backButton.addEventListener("click", back)

function back() {
    window.location.href = "../html/index.html"
}


// logging request 

let loggingButton = document.getElementById("logging-button"); 
loggingButton.addEventListener("click", fetchLogin);


function goToHome() {
    window.location.href = "../html/home.html"
}


function fetchLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 

    const url = `http://localhost:8080/login?username=${username}&password=${password}`
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
            gotoInvalidRegister();
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