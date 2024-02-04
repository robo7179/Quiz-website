function startup(){
    let score = 0;
    score += checkquestion1();
    score += checkquestion2();
    score += checkquestion3();
    let scoreboard = document.getElementById("mark.span");
    scoreboard.innerHTML += score.toString();
    scoreboard.innerHTML += "/3";
    // console.log(scoreboard);
}

function checkquestion1() {
    let buttons = document.getElementById("q1.span");
    if (localStorage.getItem("q1")){
        buttons.removeChild(buttons.childNodes[2]);
        if (JSON.parse(localStorage.getItem("q1")) == 12){
            buttons.removeChild(buttons.childNodes[2]);
            return 1;
        }
        else {
            buttons.removeChild(buttons.childNodes[1]);
        }
    }
    else {
        buttons.removeChild(buttons.childNodes[1]);
        buttons.removeChild(buttons.childNodes[2]);
    }
    return 0;
}

function checkquestion2() {
    let arr = ["1 picture of banana", "2 pictures of banana","3 pictures of banana","4 pictures of banana"]
    let buttons = document.getElementById("q2.span");
    if (localStorage.getItem("q2")){
        buttons.removeChild(buttons.childNodes[2]);
        if (localStorage.getItem("q2") == JSON.stringify(arr)){
            buttons.removeChild(buttons.childNodes[2]);
            return 1;
        }
        else {
            buttons.removeChild(buttons.childNodes[1]);
        }
    }
    else {
        buttons.removeChild(buttons.childNodes[1]);
        buttons.removeChild(buttons.childNodes[2]);
    }
    // console.log(localStorage.getItem("q2"));
    return 0;
}

function checkquestion3(){
    let buttons = document.getElementById("q3.span");
    if (localStorage.getItem("q3")){
        buttons.removeChild(buttons.childNodes[2]);
        if (localStorage.getItem("q3") == JSON.stringify(0)){
            buttons.removeChild(buttons.childNodes[2]);
            return 1;
        }
        else {
            buttons.removeChild(buttons.childNodes[1]);
        }
    }
    else {
        buttons.removeChild(buttons.childNodes[1]);
        buttons.removeChild(buttons.childNodes[2]);
    }
    // console.log(localStorage.getItem("q3"));
    return 0;
}