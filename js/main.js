let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');

document.querySelector('button').onclick = function() {
    name.textContent = document.getElementById('imie').value;
    surname.textContent = document.getElementById('nazwisko').value;
    phone.textContent = document.getElementById('number').value;
}
