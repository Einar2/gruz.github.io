let mainH = document.querySelector(".main").offsetHeight;
let header = document.querySelector(".header");

window.addEventListener('scroll', function() {
    let y = window.pageYOffset;
    
    if(y >= mainH){
        if(header.classList.contains("HActive") !== true){
            header.classList.remove("headerAnim");
            header.classList.add("HActive");
        }
        else{}
    }
    else{
        if(header.classList.contains("HActive") == true){
            header.classList.add("headerAnim");
        }
        
        header.classList.remove("HActive");
        
    }
})
  
