var cod = document.getElementById("ide");
var valid = false;


function lol() {
    const tokenList = [
        "QedU1543gfheru4g54h3jGj",
        "48uHYT78tyhr9yHh4y77097",
        "526DSFGyut73hgr7647yhgd",
        "yYHJREGBGDFHMHYG5Hghjk5",
        "3677yFGVHj6tgrb4g3beher",
        "y3hUHTGYUhj734r47yt4y4B"
    ];
    var Cord = Math.floor(Math.random() * tokenList.length);
        var main = tokenList[Cord];
        if(cod.value.includes(main)) {
            valid = true
        };
if(valid == true) {
    document.getElementById("sub").addEventListener('click', function() {
        window.location.href = "dashboard.html"
    });
}
};

setInterval(lol, 10);

var log = document.getElementById("logo");
var men = document.getElementById("menu");
var s = document.getElementById("proc");
log.addEventListener('click', function() {
    men.style.display = men.style.display == "flex" ? "none" : "flex";
});

var man = document.getElementById("mans");

function mk() {
    man.style.display = "block";
}
function timeH(time, alertTxt, place) {
    setTimeout(() => {
        alert(alertTxt);
        window.location.href = place;
    }, time);
}

function mks() {
    s.style.display = "flex";
    timeH(5000, "Connected", "games.html");

};
