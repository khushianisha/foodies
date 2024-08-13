let navbar = document.getElementById("navLinks");

let openNav = document.getElementById("open");

let closeNav =document.getElementById("close");
openNav.addEventListener("click",()=>{
    navbar.style.right="0px";
});
closeNav.addEventListener("click",()=>{
    navbar.style.right="-250px";
});



