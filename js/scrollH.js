let mainH = document.querySelector(".main").offsetHeight;
let header = document.querySelector(".header");

window.addEventListener('scroll', function() {
    let y = window.pageYOffset;
    
    if(y > mainH){
        if(header.classList.contains("HActive")){
        }else{
            header.classList.add("HActive")
        }
    }
    else{
        header.classList.remove("HActive");     
    }
})
  
