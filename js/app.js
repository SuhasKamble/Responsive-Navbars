const navLinks = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');
const bars = document.querySelectorAll('.burger span');
const links = document.querySelectorAll(".navLinks li ");

let isActive = false;

burger.addEventListener('click',()=>{
    navLinks.classList.toggle("show");
   
    if(!isActive){
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.opacity = '0'
        bars[2].style.transform = "rotate(-45deg)";
        isActive=true
    }else{
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = '1'
        bars[2].style.transform = "rotate(0deg)";
        isActive = false;
    }
})

links.forEach(link => {
    link.addEventListener('click',()=>{
        navLinks.classList.remove("show");
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = '1'
        bars[2].style.transform = "rotate(0deg)";
        isActive = false;
    })
});