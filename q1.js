function startup(){
    if (localStorage.getItem("q1")){
        let val = JSON.parse(localStorage.getItem("q1"));
        let options = document.getElementsByTagName("input");
        options[0].value = val;
    }
}

function showQuestion(n){
    // console.log("question " + n + ".html")
    let options = document.getElementsByTagName("input");
    localStorage.setItem("q1", JSON.stringify(options[0].value));
    window.location.href = ("question " + n + ".html");
}

function reset(){
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++){
        options[i].value = 0;
    }
    if (localStorage.getItem("q1")){
        localStorage.removeItem("q1");
    }
}

function submit(){
    let options = document.getElementsByTagName("input");
    localStorage.setItem("q1", JSON.stringify(options[0].value));
    window.location.href = "dashboard page-1.html";
}