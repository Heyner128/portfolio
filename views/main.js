let test=false

function toggleMenu() {
    test=!test;
    document.querySelector("#sidebar").classList.toggle("scale-x-0");
    document.querySelector("#sidebar").classList.toggle("w-0");
    document.querySelector("#sidebar-div").classList.toggle("shadow-md")
}