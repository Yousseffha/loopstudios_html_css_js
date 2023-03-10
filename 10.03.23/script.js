let burgerMenu = document.getElementById("burger-menu")
let xMark = document.getElementById("x-mark")
let landing = document.getElementById("landing")
let ul = document.getElementById("ul")
let text = document.getElementById("text")


burgerMenu.onclick = function() {
    burgerMenu.style.display = "none"
    xMark.style.display = "block"
    landing.style.background = "#000"
    ul.style.display = "block"
    text.style.display = "none"
}

xMark.onclick = function() {
    xMark.style.display = "none"
    burgerMenu.style.display = "block"
    landing.style.background = "url(/images/mobile/image-hero.jpg)"
    ul.style.display = "none"
    text.style.display = "block"
}