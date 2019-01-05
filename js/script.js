var letterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"
                , "J", "K", "L", "M", "N", "O", "P", "Q", "R"
                , "S", "T", "U", "V", "W", "X", "Y", "Z"];
var difficulty = document.querySelector("#difficulty");
var result = document.querySelector("#result");
var correctAnswer=0;
var wrongAnswer=0;

//move.addEventListener("click",letterPicker);

window.addEventListener("load", function(){
    setInterval(moveItem, 1/(difficulty.value));
    var item = document.querySelector("#item");
    var correct = document.querySelector("#correct");
    var wrong = document.querySelector("#wrong");
    item.innerText = letterPicker();
    correct.innerText = correctAnswer;
    wrong.innerText = wrongAnswer;
    difficulty.value = "1";
});

difficulty.addEventListener("input",function(){
    console.log(difficulty.value);
    setInterval(moveItem, 1/(difficulty.value));
});

window.addEventListener("keypress",function(event){
    var item = document.querySelector("#item");
    console.log(item.textContent);
    console.log(event.key);
    if(item.textContent.toLowerCase() == event.key.toLowerCase()){
        pointsCounter(1);
        var correct = document.querySelector("#correct");
        correct.innerText = correctAnswer;
        console.log("Correct Answer: "+correctAnswer);
    }
    else{
        pointsCounter(0);
        var wrong = document.querySelector("#wrong");
        wrong.innerText = wrongAnswer;
        console.log("Wrong Answer: "+wrongAnswer);
    }
});

function pointsCounter(flag){
    flag==1?correctAnswer++ : wrongAnswer++;
}

function letterPicker(){
    var indexNumber = Math.floor(Math.random()*26);
    return letterSet[indexNumber];
}

function moveItem(){
    var item = document.querySelector("#item");
    var itemPosition = item.getBoundingClientRect();
    if(screen.width > itemPosition.right){
        item.style.left = (itemPosition.left + 1) + "px";
    }
    else {
        item.style.left = "0px";
        item.innerText = letterPicker();
    }
}
