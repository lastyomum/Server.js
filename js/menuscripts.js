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
var op = document.getElementById("mkss");
op.innerHTML = main;