var firebaseConfig = {
    apiKey: "AIzaSyCylccodVy-XhsyOoTKZYKtoaGb0lxC2FQ",
    authDomain: "chasethedot-39882.firebaseapp.com",
    databaseURL: "https://chasethedot-39882.firebaseio.com",
    projectId: "chasethedot-39882",
    storageBucket: "chasethedot-39882.appspot.com",
    messagingSenderId: "184536009170",
    appId: "1:184536009170:web:b1a7e612a557cf1800600b",
    measurementId: "G-8LE4BB0CLJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

$(".testbutton").click(function (e) {
    e.preventDefault();
    console.log("hello");
});

function updateLeaderboard(username, minute, seconds, clicks) {
    database.ref("leaderboard/" + username).set({
        minute: minute,
        seconds: seconds,
        click: clicks,
    });
}

function loadLeaderboard() {
    database;.ref("leaderboard").once()
}
