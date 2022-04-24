const navBar = document.querySelector(".fa-bars")
const navList = document.querySelector(".nav--bar")
const header = document.querySelector("header")

navBar.addEventListener("click", () => {

    if (navList.style.display === "block") {
        navList.style.display = "none";
        header.style.height = "6.25em";
        
    } else {
        navList.style.display = "block";
        header.style.height = "auto";
    }
    });
    window.onclick = function (event) {
    if (!event.target.matches(".fa-bars")) {
        document.querySelector(".nav--bar").style.display = "none";
        header.style.height = "6.25em";
        
    }
}



