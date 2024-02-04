function login() {
    let inputs = document.getElementsByTagName("input");
    let username = inputs[0].value;
    let password = inputs[1].value;

    if (username == "PPM" && password == "1234"){
        window.location.href = "dashboard page-1.html";
    }
    else {
        let element = document.getElementById("failed-login");
        element.innerHTML = "Incorrect username (or) password";
    }
}