let x;
let y;
let ans;
let correctans;

function generateQuestion() {
    x = Math.floor(Math.random()*20);
    y = Math.floor(Math.random()*12);
    ans=prompt(x+" x "+y+" = ")
    correctans=x*y;
    if (ans == correctans) {
        alert("correct!")
    } else {
        alert("The answer should be "+correctans+". Your answer was "+ans+".")
    }
}

generateQuestion();