var original = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", 'tile10', "tile11", "tile12", "tile13", "tile14", "tile15", "tile16"];
var classN = ["cell11", "cell12", "cell13", "cell14", "cell21", "cell22", "cell23", "cell24", "cell31", "cell32", "cell33", "cell34", "cell41", "cell42", "cell43", "cell44"];
var move = 0;
var start = false;
var max = 0;
if (!start) {
    shuffle();
    start = true;
}
function swap(div1, div2) {
    var audio=new Audio("side.mp3");
    audio.play();
    var temp = document.getElementById(div1).className;
    document.getElementById(div1).className = document.getElementById(div2).className;
    document.getElementById(div2).className = temp;
    document.querySelector("h2").innerHTML = "moves:" + move;
}

function shuffle() {
    move = 0;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            var row1 = Math.floor(Math.random()*4 + 1);
            var row2 = Math.floor(Math.random()*4 + 1);
            swap("cell" + i + j, "cell" + row1 + row2);
        }
    }
}

function box(row, col) {
    document.querySelector("h1").innerHTML="15-PUZZLE GAME";
    var box1 = document.getElementById("cell" + row + col);
    var tile = box1.className;
    if (tile !== "tile16") {
        //right
        if (col < 4) {
            if (document.getElementById("cell" + row + (col + 1)).className === "tile16") {
                move++;
                swap("cell" + row + col, "cell" + row + (col + 1));
                return;
            }
        }

        //below
        if (row < 4) {
            if (document.getElementById("cell" + (row + 1) + col).className === "tile16") {
                move++;
                swap("cell" + row + col, "cell" + (row + 1) + col);
                return;
            }
        }

        //above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + col).className === "tile16") {
                move++;
                swap("cell" + row + col, "cell" + (row - 1) + col);
                return;
            }
        }
        //left
        if (col > 1) {
            if (document.getElementById("cell" + row + (col - 1)).className === "tile16") {
                move++;
                swap("cell" + row + col, "cell" + row + (col - 1));
                return;
            }
        }
    }
}
var flag = 1;
document.querySelector("button").addEventListener("click", function () {
    for (let i = 0; i < 16; i++) {
        if (document.getElementById(classN[i]).className === original[i]) {
            flag = 1;
        }
        else {
            flag = 0;
            break;
        }

    }
    if (flag === 1) {
        document.querySelector("h1").innerHTML="🎉YOU WON!!!🎉";
        if (move < max) {
            max = move;
            document.querySelector(".leaderboard").innerHTML = "Best score:" + move + "moves";
        }
    }
    else document.querySelector("h1").innerHTML="YOU LOSE!! START AGAIN";


})


document.querySelector(".shuffle").addEventListener("click", function () {
    shuffle();
})


function changeLayout() {
    for (let j = 1; j <= 16; j++) {
       
        document.querySelector(".tile" + [j]).style.background = "url('images/lotus.jpg')";
        
        // if ((j % 4) !== 0) document.querySelector(".tile" + [j]).addEventListener("click", function () { box(Math.ceil(j / 4), j % 4); });
        // else document.querySelector(".tile" + [j]).addEventListener("click", function () { box(Math.ceil(j / 4), 4); });
    }
    document.querySelector(".tile1").style.backgroundPosition = "0px 0px";
    document.querySelector(".tile2").style.backgroundPosition = "-90px 0px";
    document.querySelector(".tile3").style.backgroundPosition = "-180px 0px";
    document.querySelector(".tile4").style.backgroundPosition = "-270px 0px";
    document.querySelector(".tile5").style.backgroundPosition = "0px -90px";
    document.querySelector(".tile6").style.backgroundPosition = "-90px -90px";
    document.querySelector(".tile7").style.backgroundPosition = "-180px -90px";
    document.querySelector(".tile8").style.backgroundPosition = "-270px -90px";
    document.querySelector(".tile9").style.backgroundPosition = "0px -180px";
    document.querySelector(".tile10").style.backgroundPosition = "-90px -180px";
    document.querySelector(".tile11").style.backgroundPosition = "-180px -180px";
    document.querySelector(".tile12").style.backgroundPosition = "-270px -180px";
    document.querySelector(".tile13").style.backgroundPosition = "0px -270px";
    document.querySelector(".tile14").style.backgroundPosition = "-90px -270px";
    document.querySelector(".tile15").style.backgroundPosition = "-180px -270px";
    document.querySelector(".tile16").style.backgroundPosition = "-270px -270px";
    move = 0;
    shuffle();

}

document.querySelector(".change").addEventListener("click", function () {
    changeLayout();
})
