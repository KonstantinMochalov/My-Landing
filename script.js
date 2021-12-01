window.addEventListener("DOMContentLoaded",()=>{
    const menuBtn = document.getElementById("menu")
    const menuHeader = document.getElementById("menu_header")
    menuBtn.addEventListener("click", ()=>{
        menuBtn.classList.toggle("fa-times");
        menuHeader.classList.toggle("toggle")
    })
    
});

