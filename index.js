const ratingEls=document.querySelectorAll(".ratings");



ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        console.log(event.target.innerText ||  event.target.parentNode.innerText);
    });
});