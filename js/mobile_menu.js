let btn_open = document.querySelector(".open_menu");
let btn_close = document.querySelector(".close_menu");

let navbtn = document.querySelectorAll(".mob_menu_nav a");

let menu = document.querySelector(".block_mob_menu");


btn_open.addEventListener("click", open)
btn_close.addEventListener("click", close)
function open(){
    menu.classList.remove("false_menu");
    menu.classList.add("menu_active");
    setTimeout(function(){
        menu.style.right = 0;
        menu.style.opacity = 1;
    },490)
}

function close(){
    menu.classList.remove("menu_active");
    menu.classList.add("false_menu");
    
    setTimeout(function(){
        menu.style.right = -200 + "px";
        menu.style.opacity = 0;
    },500)
}


navbtn.forEach(item => {
    item.addEventListener("click", close);

})
