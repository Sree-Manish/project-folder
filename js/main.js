let companies = document.querySelector(".companies")
let text = ""
for(let i=1;i<6;i++){
    text += `<img src="./assets/images/comp${i}.png" alt="">`;
}
companies.innerHTML += text

let images = document.querySelector(".gallery .images")
text=""
for(let i=1;i<9;i++){
    let img = new Image()
    img.src = `../assets/images/carousel/prod${i}.png`
    let natrat = img.naturalWidth / img.naturalHeight
    text += `<div><img src="./assets/images/carousel/prod${i}.png" alt="" style="--natural-ratio:${natrat}"></div>`
}
images.innerHTML = text

let quals = document.querySelector(".product .qualities")
text=""
let qualities = ["Non-GMO", "Dairy Free", "Vegan", "Keto", "GMP Certified", "NSP Certified"]
for(let i=1;i<7;i++){
    text += `<div><img src="./assets/images/qual${i}.png" alt="" style="margin-right: 16px;">${qualities[i-1]}</div>`;
}
quals.innerHTML = text

let reviews = document.querySelector(".reviews .review-cont")
text=""
for(let i=1;i<7;i++){
    text += `<div class="review">
                    <div>
                            <svg width="16px" height="16px"><use href="#star"></use></svg>
                            <svg width="16px" height="16px"><use href="#star"></use></svg>
                            <svg width="16px" height="16px"><use href="#star"></use></svg>
                            <svg width="16px" height="16px"><use href="#star"></use></svg>
                            <svg width="16px" height="16px"><use href="#star"></use></svg>
                    </div>
                    <div style="width: 400px; white-space: normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus hic! Obcaecati consequatur cum, dolores nisi, accusantium ab laboriosam officia, iste vitae ad consequuntur alias repudiandae vero eos voluptas id!</div>
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <img src="" alt="" width="48px" height="48px" style="border-radius: 50%;">
                        <div>
                            <h4>Name Surname</h4>
                            <p>Position, Company name</p>
                        </div>
                    </div>
                </div>`;
}
reviews.innerHTML += text


const carprev = document.querySelector(".carousel .prev")
const carnext = document.querySelector(".carousel .next")
const cardots = document.querySelector(".carousel .dots").children
const cardis = document.querySelector(".carousel-display")
const carimg = document.querySelector(".carousel-display").children

let carimg_width = carimg[0].clientWidth
let img_sno = 1

carprev.addEventListener("click",()=>{
    if(img_sno===2) carprev.disabled = true
    if(img_sno===carimg.length) carnext.disabled = false
    let leftval = Math.max(0,(img_sno-2)*573)
    console.log(leftval)
    cardis.scrollTo({left: leftval, top: 0, behavior: 'smooth'})
    cardots[img_sno-1].classList.remove("active")
    img_sno -= 1
    cardots[img_sno-1].classList.add("active")
})

carnext.addEventListener("click",()=>{
    if(img_sno===1) carprev.disabled = false
    if(img_sno===carimg.length-1) carnext.disabled = true
    let leftval = Math.max(0,(img_sno)*573)
    console.log(leftval)
    cardis.scrollTo({left: leftval, top: 0, behavior: 'smooth'})
    cardots[img_sno-1].classList.remove("active")
    img_sno += 1
    cardots[img_sno-1].classList.add("active")
    console.log(img_sno)
})

const revprev = document.querySelector(".reviews .prev")
const revnext = document.querySelector(".reviews .next")
const revdots = document.querySelector(".review-dots").children
const revcont = document.querySelector(".review-cont")
const review = document.querySelector(".review-cont").children

let rev_width = review[0].clientWidth
let rev_sno = 1

revprev.addEventListener("click",()=>{
    if(rev_sno===2) revprev.disabled = true
    if(rev_sno===review.length) revnext.disabled = false
    let leftval = Math.max(0,(rev_sno-2)*456)
    console.log(leftval)
    revcont.scrollTo({left: leftval, top: 0, behavior: 'smooth'})
    revdots[rev_sno-1].classList.remove("active")
    rev_sno -= 1
    revdots[rev_sno-1].classList.add("active")
})

revnext.addEventListener("click",()=>{
    if(rev_sno===1) revprev.disabled = false
    if(rev_sno===review.length-1) revnext.disabled = true
    let leftval = Math.max(0,(rev_sno)*456)
    console.log(leftval)
    revcont.scrollTo({left: leftval, top: 0, behavior: 'smooth'})
    revdots[rev_sno-1].classList.remove("active")
    rev_sno += 1
    revdots[rev_sno-1].classList.add("active")
})


// prev.addEventListener("click", ()=>{
//     if(img_sno===2) prev.setAttribute("disabled") = true;
//     if(img_sno===carimg.length) next.setAttribute("disabled") = false;

//     carimg[img_sno-1].classList.remove("focused")
//     dots[img_sno-1].classList.remove("active")
//     img_sno -= 1;
//     carimg[img_sno-1].classList.add("focused")
//     dots[img_sno-1].classList.add("active")
// })

// next.addEventListener("click", ()=>{
//     if(img_sno===carimg.length-1) next.setAttribute("disabled") = true;
//     if(img_sno===1) prev.setAttribute("disabled") = false;
    
//     carimg[img_sno-1].classList.remove("focused")
//     dots[img_sno-1].classList.remove("active")
//     img_sno += 1;
//     carimg[img_sno-1].classList.add("focused")
//     dots[img_sno-1].classList.add("active")
// })


