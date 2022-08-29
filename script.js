//Array de usuarios y contraseñas
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

//Funcion para comprobar usuario y contraseña
document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let user1 = event.target.elements.user.value;
    let pass1 = event.target.elements.pass.value;

    for (const key in form) {
        if (user1 == form[key].user && pass1 == form[key].pass) {
            console.log("Bienvenido!" + form[key].user);
            break;
        } else {
            console.log("Usuario no registrado");
            break;
        }
    }
})