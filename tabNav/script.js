const menuItems = document.querySelectorAll(".menus");
const line = document.querySelector(".underLine");
const result = document.querySelector(".result");

const runLine = (event) => {
    const menuId = event.target.id;
    const menu = document.getElementById(menuId);
    line.style.width = menu.offsetWidth + "px";
    line.style.transform = `translateX(${menu.offsetLeft}px)`; 
    result.textContent = menu.innerHTML;
    event.preventDefault(); // Prevent default behavior
};

for(let i = 0; i < menuItems.length; i++){
    menuItems[i].id = i;
    menuItems[i].addEventListener("click", runLine);
    if( i === 0){
        line.style.width = menuItems[i].offsetWidth + "px";
        result.textContent = menuItems[i].innerHTML;
    };
}

