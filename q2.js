function startup(){
    if (localStorage.getItem("q2")){
        let arr = JSON.parse(localStorage.getItem("q2"));
        let options = document.getElementsByClassName("drop-container");
        for (i = 0; i < arr.length; i++){
            if (arr[i]){
                let Element = document.createElement("div");
                Element.textContent = arr[i];
                Element.classList.add("match-item");
                options[i].appendChild(Element);
            }
            console.log(arr[i]);
        }
    }
}

function showQuestion(n){
    // console.log("question " + n + ".html")
    let arr = [];
    let options = document.getElementsByClassName("drop-container");
    let flag = false;
    for (i = 0; i < options.length; i++){
        // console.log(options[i]);
        if (options[i].firstChild){
            console.log(options[i].firstChild);
            arr[i] = options[i].textContent;
            flag = true;
            // console.log(arr[i])
        }
        else {
            arr[i] = null;
        }
    }
    if (flag){
        localStorage.setItem("q2", JSON.stringify(arr));
    }
    window.location.href = ("question " + n + ".html");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
}

function drop(ev) {
    ev.preventDefault();
    if (ev.target.firstChild){
        ev.target.firstChild.remove();
        // console.log(ev.target);
    }
    let data = ev.dataTransfer.getData("text");
    let draggedElement = document.createElement("div");
    draggedElement.textContent = data;
    draggedElement.classList.add("match-item");
    ev.target.appendChild(draggedElement);
}

function reset(){
    let options = document.getElementsByClassName("drop-container");
    for (i = 0; i < options.length; i++){
        // console.log(options[i]);
        options[i].replaceChildren();
    }
    if (localStorage.getItem("q2")){
        localStorage.removeItem("q2");
    }
}

function submit(){
    let arr = [];
    let options = document.getElementsByClassName("drop-container");
    flag = false;
    for (i = 0; i < options.length; i++){
        // console.log(options[i]);
        if (options[i].firstChild){
            // console.log(options[i].firstChild);
            arr[i] = options[i].textContent;
            flag = true;
            // console.log(arr[i])
        }
        else {
            arr[i] = null;
        }
    }
    if (flag){
        localStorage.setItem("q2", JSON.stringify(arr));
    }
    window.location.href = "dashboard page-1.html";

}