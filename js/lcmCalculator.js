const calculateBtn = document.getElementById('calculate-button'); 
calculateBtn.addEventListener('click', calculateLcm);


function calculateLcm(){
    const user = sessionStorage.getItem('user')
    console.log(user)
    const url = new URL('http://localhost:8080/lcm')
    const a = document.getElementById('a').value; 
    const b = document.getElementById('b').value; 
    url.searchParams.append('a', a); 
    url.searchParams.append('b', b); 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: user
    }
    fetch(url, options).then(res => {
        if (!res.ok){
            window.alert('something was wrong')
        } else {
            res.json().then(calculator => {
                console.log(calculator)
                console.log(calculator['result'])
                document.getElementById('result').textContent = calculator['result']
            })
        }
    })

}

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = '/html/home.html'
})

document.getElementById('logout-button').addEventListener('click', function (){
    sessionStorage.removeItem('user')
    window.location.href = '/html/index.html'
})