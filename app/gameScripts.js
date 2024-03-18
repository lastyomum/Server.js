var gamedsa = document.getElementById("gameDs");
var nams = document.getElementById("name");
var icos = document.getElementById("icon");
document.getElementById("mksd").addEventListener('click', function() {
    gamedsa.style.display = "none"
});
document.getElementById("subwaySurfers").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/FirstAvatar.webp"
    nams.textContent = "Subway Surfers"
});

document.getElementById("templeRun").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/f4b3ac7fe25cad9bc028b33f7a407f28.avif"
    nams.textContent = "Temple Run"
});

document.getElementById("minionRush").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/Minion_Rush_icon.webp"
    nams.textContent = "Minion Rush"
});

document.getElementById("pixelGun").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/81mD3-AlcCL.png"
    nams.textContent = "Pixel Gun"
});

document.getElementById("GunStrikeFPS").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/unnamed.png"
    nams.textContent = "Gun Strike FPS"
});

document.getElementById("Sniper3D").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/oppp.png"
    nams.textContent = "Sniper 3D"
});
document.getElementById("amongUs").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/among-us-button-fin-1608054673652.webp"
    nams.textContent = "Among Us"
});

document.getElementById("geom").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/images.jpeg"
    nams.textContent = "Geometry Dash"
});

document.getElementById("clashroyal").addEventListener("click", function() {
    gamedsa.style.display = "block"
    icos.src = "mediaApp/channels4_profile.jpg"
    nams.textContent = "Clash Royal"
});

