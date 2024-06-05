getCalculators()

function getCalculators(){
    let user = sessionStorage.getItem('user'); 
    user = JSON.parse(user); 
    console.log(user)
    
    const url = new URL('http://localhost:8080/calculators')
    console.log(user['id'])
    url.searchParams.append('userId', user['id']); 

    const options = {
        method: 'GET', 
        headers: {
            'Accept': 'application/json'
        }
    }

    const listCalculations = document.getElementById('calculations-list')
    
    fetch(url, options).then(res => {
        if(!res.ok){
            window.alert('can not find your calculations')
        } else {
            res.json().then(calculations => {
                console.log(calculations);
                calculations.forEach(calc => {
                    console.log(calc); 
                    createElementCalculation(listCalculations, calc); 
                }); 
            })
        }
    })
}

function createElementCalculation(elementList, calc) {
    const li = document.createElement('li'); 
    const message = `numbers: ${calc['number']} | operation: ${calc['operator']} | result ${calc['result']}`
    li.textContent = message; 
    elementList.appendChild(li); 
}

document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = '/html/home.html'
})