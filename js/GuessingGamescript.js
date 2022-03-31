var tries = 0;

var correct = Math.floor(Math.random() * 10 + 1);
correct = String(correct);

function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var screenoverlay = document.getElementById('divoverlay');
        screenoverlay.style.display = "block";
        var dialogbox = document.getElementById('dialogbox');
        screenoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="ok" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('divoverlay').style.display = "none";

    }
}
var Alert = new CustomAlert();


function check() {
    if (document.getElementById('answer').value != correct) {
        tries++;
        document.getElementById('answer').value = "";
        Alert.render("Guess Again!");
        console.log(tries);
    }
    else {
        tries++;
        Alert.render("Correct! The answer was " + correct + "! <br> You got it in " + tries + " guesses - you must be psychic!")
    }

}