const mobileMenu = () => {
    let menu = document.querySelector(".header ul")
    let btn = document.querySelector(".header button")
    
    if(btn.innerText === "Menu"){
        menu.style.display = "block"
        btn.innerText = "Close"
    } else {
        menu.style.display = "none"
        btn.innerText = "Menu"
    }

}

let rightBtn = document.querySelector("#right-btn")
let leftBtn = document.querySelector("#left-btn")
let pictures = document.querySelectorAll(".slider-images img")

let imageNumber = 0

rightBtn.addEventListener("click", () => {
    displayNone(pictures)
    imageNumber ++

    if(imageNumber === pictures.length){
        imageNumber = 0
    }
    pictures[imageNumber].style.display = "block"
})

leftBtn.addEventListener("click", () => {
    displayNone(pictures)
    imageNumber --

    if(imageNumber === -1){
        imageNumber = pictures.length-1
    }
    pictures[imageNumber].style.display = "block"
    
})

const displayNone = (pictures) =>{
    pictures.forEach((img) => {
        img.style.display="none"
    })
}

const portfolioSort = (button) =>{
    let category = button.getAttribute("data-category")
    let portfolioItems = document.querySelectorAll(".portfolio-single-item")
    console.log(category);
    portfolioItems.forEach( (item) => {
        item.style.display = "none"
    })

    if (category === "sve"){
        portfolioItems.forEach( (item) => {
            item.style.display = "block"
        })
    }

    portfolioItems.forEach((item) => {

        if (item.getAttribute("data-category").includes(category)){
            item.style.display = "block"
        }

    })



}

const openModal = () =>{
    let popUp = document.querySelector(".popup-modal")
    let overlay = document.querySelector(".overlay")

    popUp.style.display = "block"
    overlay.style.display = "block"

}
const closeModal = () =>{
    let popUp = document.querySelector(".popup-modal")
    let overlay = document.querySelector(".overlay")

    popUp.style.display = "none"
    overlay.style.display = "none"

}