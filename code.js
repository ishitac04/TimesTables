let x;
let y;
let ans="";
let correctans;
let score=0;
let questioncount=0;

let innerinnerbox = document.getElementById("innerinnerbox");
let scorebox = document.getElementById("scorebox");

function generateQuestion() {
    ans="";
    questioncount=questioncount+1;
    x = Math.floor(Math.random()*19) + 2;
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
        if (Number(ans) == correctans) {
            score++;
            scorebox.textContent = "Score: "+score;
        } else {
            alert("The answer was "+correctans);
        }
        generateQuestion();
    }
});

for (i=0;i<30;i++) {
    generateQuestion();
}