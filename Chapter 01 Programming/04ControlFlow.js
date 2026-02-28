// if, else if, else, switch case, early return pattern

// if, else, else if
// switch case
// early return pattern
switch(2){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console("Write any number");
}

// Early return pattern

function getVal(val){
    if(val < 25) return 'D';
    else if(val < 50) return 'C';
    else if(val < 75) return 'B';
    else return 'A';
}
console.log(getVal(45));

// Studen grade system
let studentMarks = 70;
if(studentMarks > 90 && studentMarks <=100){
    console.log("A+ Grade");
}
else if(studentMarks >80 && studentMarks <=90){
    console.log("A Grade");
}
else if(studentMarks >70 && studentMarks <=80){
    console.log("B Grade");
}
else if(studentMarks >60 && studentMarks <=70){
    console.log("C Grade");
}
else if(studentMarks >33 && studentMarks <=60){
    console.log("D Grade");
}
else if(studentMarks >=0 && studentMarks <=33){
    console.log("Fail");
}
else {
    console.log("Invalid marks");
}

// student grade by using function
function getGrades(score){
    if(score > 90 && score <=100)
    return console.log("A+ Grade");

else if(score >80 && score <=90)
    return console.log("A Grade");

else if(score >70 && score <=80)
    return console.log("B Grade");

else if(score >60 && score <=70)
    return console.log("C Grade");

else if(score >33 && score <=60)
    return console.log("D Grade");

else if(score >=0 && score <=33)
    return console.log("Fail");

else 
    return console.log("Invalid marks");
}
getGrades(93);

// student grade system by 3rd method
function getGrades(score){
    if(score > 90 && score <=100) return "A+ Grade";
    if(score >80 && score <=90) return "A Grade";
    if(score >70 && score <=80) return "B Grade";
    if(score >60 && score <=70) return "C Grade";
    if(score >33 && score <=60) return "D Grade";
    if(score >=0 && score <=33) return "Fail";
    return "Invalid marks";
}
console.log(getGrades(43));

// ------------------ ROCK PAPER SCISSORS LOGIC ---------------------------------
function rps(user, computer){
    if(user === compueter) return "Draw";
    if(user === "Rock" && computer === "Scissor") return "User";
    if(user === "Scissor" && computer === "Rock") return "Computer";
    if(user === "Paper" && computer === "Scissor") return "Computer";
    if(user === "Scissor" && computer === "Paper") return "User";
    if(user === "Rock" && computer === "Paper") return "Computer";
    if(user === "Paper" && computer === "Rock") return "User";
}
console.log(rps("Rock", "Scissor")); 

// Second Method of ROCK PAPER SCISSOR
function rps(player, computers){
    if(player === computers) return "Draw";

    if(player === "Rock" && computers === "Scissor") return "User";
    if(player === "Scissor" && computers === "Paper") return "User";
    if(player === "Paper" && computers === "Rock") return "User";

    return "Computer";
}
console.log(rps("Rock", "Paper")); 

