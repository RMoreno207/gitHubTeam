function validateUser() {

    const form = [{
        user: "pepe",
        pass: "1234"
    }, {
        user: "paco",
        pass: "1234"
    }, {
        user: "juan",
        pass: "1234"
    }
    ];

}



document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    //Añadido RegEx de medium strong
    let regEx = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    let email = event.target.elements.email.value;
    let pass = event.target.elements.pass.value;
    let pass2 = event.target.elements.pass2.value;

    if (regEx.test(pass)) {
        pass === pass2 ? signUpUser(email, pass) : alert("error password");
    }
    else {
        alert("Your password is too weak");
    }
})
    }