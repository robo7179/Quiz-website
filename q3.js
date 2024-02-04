function startup(){
    if (localStorage.getItem("q3")){
        let choice = JSON.parse(localStorage.getItem("q3"));
        let options = document.getElementsByTagName("input");
        options[choice].checked = true;
    }
}

function showQuestion(n){
    // console.log("question " + n + ".html")
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++){
        if (options[i].checked){
            localStorage.setItem("q3", JSON.stringify(i));
        }
    }
    window.location.href = ("question " + n + ".html");
}

function reset(){
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++){
        options[i].checked = false;
    }
    if (localStorage.getItem("q3")){
        localStorage.removeItem("q3");
    }
}

function submit(){
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++){
        if (options[i].checked){
            localStorage.setItem("q3", JSON.stringify(i));
        }
    }
    window.location.href = "dashboard page-1.html";
    
}