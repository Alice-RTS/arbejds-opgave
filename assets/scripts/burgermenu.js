(function(){
    const BUTTON = document.querySelector(".burgerMenuButton")
    const MENU = document.querySelector(".primaryNavigation")

    BUTTON.addEventListener("click", clickHandler)

    function clickHandler(event){
        MENU.classList.toggle("primaryNavigation--show")

        if (MENU.ariaHidden == "false"){
            setAttribute("aria-hidden", true)
        } else {
            setAttribute("aria-hidden", false)
        }
    }

})()