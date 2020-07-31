const horizontalMax = $(document).innerWidth();
const verticalMax = $(document).innerHeight();

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

var intervalID = window.setInterval(moveDot, 750);
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
    $("#timer").html(minCounter + ":" + secondCounter);
}

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
    if (newtop > verticalMax * 0.9) {
        newtop = verticalMax * 0.9;
    }
    if (newleft > horizontalMax * 0.9) {
        newleft = horizontalMax * 0.9;
    }
    $(".chase_circle").css("top", newtop + "px");
    $(".chase_circle").css("left", newleft + "px");
}
