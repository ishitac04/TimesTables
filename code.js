let x;
let y;
let wrongx = [];
let wrongy = [];
let ans="";
let correctans;
let score=0;
let questioncount=0;
let timeleft = 10;
let timepercent=100;
const timebar = document.getElementById("timerbar");
let innerinnerbox = document.getElementById("innerinnerbox");
let scorebox = document.getElementById("scorebox");

function reduceTime() {
    if (timeleft > 0) {
        timeleft = timeleft - 1;
        timepercent=(timeleft/10) * 100;
        timebar.style.height = timepercent + "%";
    } else if (timeleft <= 0) {
        timeleft=100;
        alert("The answer was "+correctans);
        scorebox.textContent = "Score: "+score;
        score=0;
        wrongx.push(x);
        wrongy.push(y);
        console.log(wrongx)
        console.log(wrongy)
        generateQuestion();
    }
}

function generateQuestion() {
    ans="";
    questioncount=questioncount+1;
    x = Math.floor(Math.random()*10) + 10;
    y = Math.floor(Math.random()*11) + 2;
    innerinnerbox.textContent = x+" x "+y+" = ";
    correctans=x*y;
}

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        ans += e.key;
        innerinnerbox.textContent = x+" x "+y+" = "+ans;
    }

    if (e.key == "Backspace") {
        ans = ans.slice(0, -1);
        innerinnerbox.textContent = x+" x "+y+" = "+ans;
    }

    if (e.key == "Enter") {
        clearInterval(timerInterval);
        timeleft = 10;
        timerInterval = setInterval(reduceTime, 1000);

        if (Number(ans) == correctans) {
            score++;
            scorebox.textContent = "Score: "+score;
        } else {
            alert("The answer was "+correctans);
            score=0;
            scorebox.textContent = "Score: "+score;
            wrongx.push(x);
            wrongy.push(y);
        }
        generateQuestion();
    }
});

timerInterval = setInterval(reduceTime,1000);
for (i=0;i<30;i++) {
    generateQuestion();
}