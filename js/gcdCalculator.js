const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculateGCD)

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", logOut)

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", gotoHome);

function calculateGCD() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;

    const url = new URL("http://localhost:8080/gcd")
    url.searchParams.append('a', a);
    url.searchParams.append('b', b);
    const user = sessionStorage.getItem('user');
    const options = {
        body: user,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    fetch(url, options).then(res => {
        if (!res.ok) {
            window.alert("Ups! something went wrong");
        } else {
            res.json().then(r => {
                console.log(r);
                document.getElementById('result').value = r['result'];
            })
        }
    })
}

function logOut(){
    sessionStorage.removeItem('user');
    window.location.href = "../html/index.html";
}

function gotoHome() {
    window.location.href = "../html/home.html";
}
