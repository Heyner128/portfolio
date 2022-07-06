function toggleMenu() {
    document.querySelector("#sidebar-content").classList.toggle("scale-x-0");
    document.querySelector("#sidebar-content").classList.toggle("w-0");

    document.querySelector("#sidebar").classList.toggle("w-full");
    document.querySelector("#sidebar").style.backgroundColor = "RGBA(0,0,0,0.4)";
    document.querySelector("#sidebar div").classList.toggle("shadow-md")
}