window.addEventListener("scroll",function(){
var y = window.pageYOffset;
var navbar =  document.querySelector("nav");
if(y>640)
{
    
    navbar.style.position = "fixed";
    navbar.style.top="0";
    navbar.style.width="100%";
    navbar.style.marginTop="0px";
    navbar.style.zIndex="999";
    navbar.style.transition ="0.5s";
}
else{
    navbar.style.position = "relative";
    // navbar.style.top="0";
    navbar.style.width="80%";
    navbar.style.marginTop="-30px";
    // navbar.style.zIndex="999";
    navbar.style.transition ="0.5";
}
})