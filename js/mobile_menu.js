let btn_open = document.querySelector(".open_menu");
let btn_close = document.querySelector(".close_menu");

let navbtn = document.querySelectorAll(".mob_menu_nav a");

let menu = document.querySelector(".block_mob_menu");


btn_open.addEventListener("click", open)
btn_close.addEventListener("click", close)
function open(){
    
    menu.classList.add("menu_active");
    setTimeout(function(){
        menu.style.right = 0 + "px";
        menu.style.opacity = 1;
        
    },490)
    
    setTimeout(function(){
       menu.classList.remove("menu_active"); 
    },1000)
}

function close(){
    
    menu.classList.add("false_menu");
    
    setTimeout(function(){
        menu.style.right = -400 + "px";
        menu.style.opacity = 0;
        
    },500)
    
    setTimeout(function(){
       menu.classList.remove("false_menu"); 
    },1000)
}


navbtn.forEach(item => {
    item.addEventListener("click", close);

})
