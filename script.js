const displayedImage = document.querySelector(`#current`)
const imgs = document.querySelector(`.imgs`)

for (let i = 0; i <= imgs.length; i++) {
    let newImg = document.createElement(`img`);
    newImg.setAttribute(`src`,`img` + [i] `.jpg`);
    imgs.appendChild(newImg)
}

imgs.addEventListener(`click`,function (e) {
    let imgsrc = e.target.getAttribute(`src`);
    displayedImage.setAttribute(`src`,imgsrc)
});