let img = document.querySelector('img');
let completeName = document.querySelector('#fullname');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let city = document.querySelector('#city');
let btn = document.querySelector('button');
let url = 'https://randomuser.me/api/';


btn.addEventListener('click', function () {
fetch(url)
.then(errorhandling)
.then(parseJson)
.then(updateProfile)
.catch(displayErrors)
})
// --------------------------------
function errorhandling(response) {
    if ( !response.ok) {
        throw Error(response.status)
    }
    return response;
}
// --------------------------------
function parseJson(response) {
        return response.json()       
}
// --------------------------------
function updateProfile(data) {
    let extract = data.results[0]
    let img2 = data.results[0].picture.medium;
    img.src = img2
    
    let fullname  = extract.name.first + " " + data.results[0].name.last;
    completeName.innerText = fullname;

    let username2 = extract.login.username;
    username.innerText = username2;

    let email2 = extract.email;
    email.innerText = email2;

    let city2 = extract.location.city;
    city.innerText = city2;
}
function displayErrors(err) {
    console.log('Inside Display Error')
    console.log(err)
}

