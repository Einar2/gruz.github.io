let btn_open = document.querySelector(".open_menu");
let btn_close = document.querySelector(".close_menu");

let navbtn = document.querySelectorAll(".mob_menu_nav a");

let menu = document.querySelector(".block_mob_menu");


btn_open.addEventListener("click", open)
btn_close.addEventListener("click", close)


function open(){
    if(menu.classList.contains("false_menu") == true){
        menu.classList.remove("false_menu");
    }
    menu.classList.add("menu_active");
    menu.style.opacity = 1;
    menu.style.right = 0;
}

function close(){
    if(menu.classList.contains("menu_active") == true){
        menu.classList.remove("menu_active");
    }
    menu.classList.add("false_menu");
    setTimeout(function(){
        menu.style.opacity = 0;
        menu.style.right = -400 + "px";
    },900)
    
}


navbtn.forEach(item => {
    item.addEventListener("click", close);

})
