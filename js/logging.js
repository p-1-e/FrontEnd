// navigation button 

let backButton = document.getElementById("back-button");
backButton.addEventListener("click", back)

function back() {
    window.location.href = "/Html/index.html"
}


// logging request 

let loggingButton = document.getElementById("logging-button"); 
loggingButton.addEventListener("click", loggingRequest); 


async function loggingRequest() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;  

    let httpRequest = new XMLHttpRequest();
    let url = await  fetch("http://localhost:8080/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}");
    httpRequest.open("POST", url);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                goToHome();
            } else {
                console.log("you are not register")
            }
        }
    }
    httpRequest.send(); 
}

function goToHome() {
    window.location.href = "/Html/home.index"
}

