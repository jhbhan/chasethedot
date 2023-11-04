const horizontalMax = $(document).innerWidth();
const verticalMax = $(document).innerHeight();

var clickcount = 0;
var secondCounter = 0;
var minCounter = 0;
var xCursorPosition = 0;
var yCursorPosition = 0;

window.onload = init;

$(".chase_circle").css("top", "300px");
$(".chase_circle").css("left", "300px");

$(".chase_circle").mouseover(function () {
    setTimeout(moveDot, 100);
});

$(".bludger").mouseover(function () {
    alert("YOU LOSE: you got bludgeoned");
    clickcount = 0;
    secondCounter = 0;
    minCounter = 0;
});

$(document).click(function () {
    clickcount++;
});

var intervalID = window.setInterval(moveDot, 1750);

var intervalID = window.setInterval(bludgerAttack, 500);
var timer = window.setInterval(updateTime, 1000);
var userName = "";

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
    var username = prompt(
        `got it! \nnumber of clicks taken:${clickcount} \nTime Taken: ${minCounter}:${secondCounter}\n Enter name for leaderboard!`
    );
    updateLeaderboard(username, secondCounter, minCounter, clickcount);
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

function bludgerAttack() {
    $(".bludger").css("top", yCursorPosition + "px");
    $(".bludger").css("left", xCursorPosition + "px");
}

function init() {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    xCursorPosition = window.Event
        ? e.pageX
        : event.clientX +
          (document.documentElement.scrollLeft
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft);
    yCursorPosition = window.Event
        ? e.pageY
        : event.clientY +
          (document.documentElement.scrollTop
              ? document.documentElement.scrollTop
              : document.body.scrollTop);
}
