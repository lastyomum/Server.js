var menuOpen = document.getElementById("menu-open");
var mbs = document.getElementById("mbm");
menuOpen.addEventListener('click', function() {
    mbs.style.display = mbs.style.display == "block" ? "none" : "block";
});

//window.location.href = "construction.html"