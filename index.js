var mainNav=document.getElementsByClassName("main-nav__link-list__item");
console.log(mainNav);
Array.from(mainNav).forEach(element => {
//    element.style.background ='red'; 
});
const moreWrapper=document.querySelector(".js-main-nav-more-wrapper");

moreWrapper.classList.remove("main-nav__more--transform-expanded");
moreWrapper.classList.remove("main-nav__more--transform-collapsed");
let animated=false;
function collapse() {
    
    if(animated){
        moreWrapper.classList.toggle("main-nav__more--transform-collapsed") ;moreWrapper.classList.toggle("main-nav__more--transform-expanded");
        // moreWrapper.classList.toggle("main-nav__more--transform-expanded"); 
   }else{
    moreWrapper.classList.toggle("main-nav__more--transform-collapsed");
    animated=true
   }
    
    // document.querySelector(".main-nav__hide-on-more-collapsed").classList.toggle("is-display");
    // document.querySelector(".main-nav__hide-on-more-expanded").classList.toggle("is-display");
    console.log(document.querySelector(".main-nav__icon--expand::after"))
    document.querySelector(".main-nav__icon--expand::after").style.animation=" turn-expend 200ms linear 0s infinite normal both";
    document.documentElement.style.setProperty('--variable', "turn-expend 200ms linear 0s infinite normal both")
}

const mainNavMoreButton=document.querySelector(".main-nav__more-button");
mainNavMoreButton.addEventListener("click",collapse);
// console.log(mainNavMoreButton);

function stickyNav(){
     document.querySelector(".main-nav__link-list--secondary").classList.toggle("sticky",window.scrollY>0);
}
// window.addEventListener("scroll",stickyNav);
