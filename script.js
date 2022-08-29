const form = [{
    user: "pepe@a.com",
    pass: "1234"
}, {
    user: "paco@a.com",
    pass: "1234"
}, {
    user: "juan@a.com",
    pass: "1234"
}
];



document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let user1 = event.target.elements.user.value;
    let pass1 = event.target.elements.pass.value;
    const userPass = {
        user: user1,
        pass: pass1
    }



    for (const key in form) {
        if (userPass.user1 == form[key].user && userPass.pass1 == form[key].pass) {
            console.log("Bienvenido!" + form[key].user);;
        } else {
            console.log("Usuario no registrado");
            break;
        }
    }
})
