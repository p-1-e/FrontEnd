document.getElementById('logout-btn').addEventListener('click', logOut)

document.getElementById('back-btn').addEventListener('click', gotoHome)


const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", getSolutionQuadraticEquation)


function getSolutionQuadraticEquation() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    const user = sessionStorage.getItem('user');
    console.log(user)
    const url = new URL("http://localhost:8080/quadratic");
    url.searchParams.append("a", a);
    url.searchParams.append("b", b);
    url.searchParams.append("c", c);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user,
    }
    fetch(url, options).then(res => {
        if (res.ok) {
            res.json().then(r => {
                console.log(r);
                console.log(r['result']);
                document.getElementById('roots').textContent = r['result']
            }) ;
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
