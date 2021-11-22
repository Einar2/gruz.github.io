let blocks = document.querySelectorAll(".slide_content");
let line = document.querySelector(".slider_line");
let step = 0;
let width;
let btnR = document.querySelector(".btnR");
let btnL = document.querySelector(".btnL");
let bits = document.querySelectorAll(".circle");

function slide(){
    width = document.querySelector(".slider").offsetWidth;
    console.log(width);
    line.style.width = width*blocks.length + "px";
    blocks.forEach(item => {
        item.style.width = width + "px";
    })
   
    skipSlide();
        
    
}

window.addEventListener("resize", slide);
slide();


btnR.addEventListener("click", function(){
    step++;
    if(step >= blocks.length){
        step = 0;
    }
    skipSlide();
    bits.forEach(item =>{
        item.classList.remove("active");
        item.classList.add("step"); 
    })
    bits[step].classList.remove("step");
    bits[step].classList.add("active");
})

function skipSlide(){
    line.style.transform = 'translate(-'+step*width+'px)'

}

btnL.addEventListener("click", function(){
    step--;
    if(step < 0){
        step = blocks.length - 1;
    }
    skipSlide();
    bits.forEach(item =>{
        item.classList.remove("active");
        item.classList.add("step");
    })
    bits[step].classList.add("active");
    bits[step].classList.remove("step");    

    
})