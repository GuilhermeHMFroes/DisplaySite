let sidebarLower = document.querySelector("#sidebar-lower");
let iconeMenu = document.querySelector("#iconeMenu");

console.log(window.innerWidth);

let body = document.querySelector("body");

function hideMenuWhenClicksOutside(event) {
    if (!sidebarLower.contains(event.target) && !iconeMenu.contains(event.target)) {
        sidebarLower.style.display = "none";
        siderbarLowerActive = 0;
    }
}

body.onresize = () => {
    if (window.innerWidth <= 980) {
        let siderbarLowerActive = 0;
        sidebarLower.style.display = "none";
        
        iconeMenu.addEventListener("click", () => {
            if (!siderbarLowerActive) {
                sidebarLower.style.display = "flex";
                siderbarLowerActive = 1;
            } else {
                sidebarLower.style.display = "none";
                siderbarLowerActive = 0;
            }
        })
        
        document.addEventListener("click", hideMenuWhenClicksOutside)
    } else {
        sidebarLower.style.display = "flex";
        document.removeEventListener("click", hideMenuWhenClicksOutside);
    }
}
