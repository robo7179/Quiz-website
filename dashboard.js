function startup(){
    if (localStorage.getItem("quiz")){
        let quizbutton = document.getElementById("quiz-button");
        // console.log(quizbutton);
        quizbutton.disabled = true;

    }
    else{
        let reviewbutton = document.getElementById("review-button");
        reviewbutton.disabled = true;
        // console.log("as");
    }
}

function startquiz(){
    localStorage.setItem("quiz", "yes");
    window.location.href = "question 1.html";
}

function review(){
    window.location.href = "review.html";
}

// function reset(){
//     localStorage.removeItem("quiz");
//     location.reload();
// }
