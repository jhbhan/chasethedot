$(".chase_circle").css("top", "300px");
$(".chase_circle").css("left", "300px");

$(".chase_circle").mouseover(function () {
    setTimeout(moveDot, 100);
});

var clickcount = 0;
var secondCounter = 0;
var minCounter = 0;

$(document).click(function () {
    clickcount++;
});

var intervalID = window.setInterval(moveDot, 1500);
var timer = window.setInterval(updateTime, 1000);

function updateTime() {
    secondCounter++;
    if (secondCounter == 60) {
        secondCounter = 0;
        minCounter++;
    }
    if (secondCounter < 10) {
        secondCounter = "0" + secondCounter;
    }
    console.log($("#timer").html());
    $("#timer").html(minCounter + ":" + secondCounter);
}

const horizontalMax = window.innerWidth;
const verticalMax = window.innerHeight;

$(".chase_circle").click(function (e) {
    clickcount++;
    e.preventDefault();
    alert(
        `got it! \nnumber of clicks taken:${clickcount} \nTime Taken: ${minCounter}:${secondCounter}`
    );
    clickcount = 0;
    minCounter = 0;
    secondCounter = 0;
});

function moveDot() {
    var newtop = horizontalMax * Math.random();
    var newleft = verticalMax * Math.random();
    if (newtop > 900) {
        newtop = 900;
    }
    if (newleft > horizontalMax) {
        newleft = horizontalMax;
    }
    $(".chase_circle").css("top", newtop + "px");
    $(".chase_circle").css("left", newleft + "px");
}
