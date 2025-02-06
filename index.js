import { articlesArry } from "/data.js"
const articlesGridContainer = document.getElementById('articles-grid-container')
const viewMore = document.getElementById('view-more')
let isViewMoreClicked = false

window.addEventListener("resize", checkScreenSize);

viewMore.addEventListener("click", handleViewMoreClick)

function checkScreenSize() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        console.log("RESIZED")
        renderFullGrid(true)
    }
    else {
        renderFullGrid(false)
    }
}

function renderFullGrid(isSmallScreen) {
    let arrayIndex = articlesArry.length
    if (isSmallScreen) {
        arrayIndex = 3
    }
    let htmlString =``
    for (let i =0; i<arrayIndex; i++) {
        htmlString+= `
        <div class="grid-item-container">
                <img class="grid-article-img" src="${articlesArry[i].img}" alt="open laptop with code on the screen">
                <div class="grid-item-text-container">
                    <time class="grid-article-time">${articlesArry[i].time}</time>
                    <h3>${articlesArry[i].name}</h3>
                    <p class="grid-article-paragraph">${articlesArry[i].intro}.</p>
            </div>
        </div>    
        `
    }
    articlesGridContainer.innerHTML = htmlString;
}

function handleViewMoreClick() {
    isViewMoreClicked = !isViewMoreClicked
    if (isViewMoreClicked) {
        renderFullGrid(false)
        viewMore.innerText="View Less"
    }
    else {
        renderFullGrid(true)
        viewMore.innerText="View More"
    }
}

checkScreenSize();