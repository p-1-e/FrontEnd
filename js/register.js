const registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", register);

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", gotoIndex);

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const url = "http://localhost:8080/register";
    console.log(`user: ${username}, password: ${password}`);
    const user = {
        "userName": username,
        "password": password
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(user),
    }

    console.log(user);
    fetch(url, options).then(response => {
        if (!response.ok) {
            console.log(response);
            window.alert('you was not registered');

            gotoInvalidRegister();
        } else {
            console.log(response);
            gotoLogging();
        }
    })
}

function gotoLogging() {
    window.location.href = "../html/logging.html"
}

function gotoInvalidRegister(){
    window.location.href = "/html/invalid-username-register.html"
}
function gotoIndex(){
    window.location.href = "../html/index.html"
}