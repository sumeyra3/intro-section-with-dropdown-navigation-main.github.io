const menuDOM = document.querySelector(".menubar")
const closeDOM= document.querySelector(".close")
const mobileNav = document.querySelector(".mobile-nav")
const liste =document.querySelector(".list")
const altliste = document.querySelector(".altlist")
const list =document.querySelector(".liste")
const altlist = document.querySelector(".altliste")
const down = document.getElementById("downn")
const up = document.getElementById("upp")
const dow = document.getElementById("dow")
const u = document.getElementById("u")

dow.style.display = "inline-block"
u.style.display = "none"
down.style.display = "inline-block"
up.style.display = "none"
mobileNav.style.display = "none"
altliste.style.display = "none"
altlist.style.display = "none"

menuDOM.addEventListener("click",function(){
    mobileNav.style.display = "block";
})

closeDOM.addEventListener("click",function(){
    mobileNav.style.display = "none"
})

liste.addEventListener("click",function(){
  
    if (altliste.style.display == "block") {
        altliste.style.display = "none"
        down.style.display = "inline-block"
        up.style.display = "none"

    } else {
        altliste.style.display = "block"
        down.style.display = "none"
        up.style.display = "inline-block"
    }
})

list.addEventListener("click",function(){
    if (altlist.style.display == "block") {
        altlist.style.display = "none"
        dow.style.display = "inline-block"
        u.style.display = "none"
    } else {
        altlist.style.display = "block"
        dow.style.display = "none"
        u.style.display = "inline-block"

    }
})

