const email = document.getElementById('exampleInputEmail1').value;
const password = document.getElementById('exampleInputPassword1').value;

$(document).ready(function () {
    boton.click(function (e) { 
        e.preventDefault();
        console.log(email , password);
    });
});
