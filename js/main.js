


 function myFunction () {
    let name = document.getElementById('namef').value;
    let surname = document.getElementById('surnamef').value;
    let phone = document.getElementById('phonef').value;

    document.getElementById('name').innerHTML = name;
    document.getElementById('surname').innerHTML = surname;
    document.getElementById('phone').innerHTML = phone;
}

document.getElementById('myButton').onclick = myFunction;