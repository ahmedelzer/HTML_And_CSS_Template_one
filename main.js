let icon=document.querySelector(".header .container .icon")
let ul=document.querySelector(".header .container ul")
let foot=document.querySelector(".footer")
let scroll=document.querySelector(".scroll-to-top");
let services=document.querySelector(".services");
let deta=new Date();
        icon.onclick=function () {
        // ul.style.display="block";
    if(ul.style.display=="block"){
        ul.style.display="none";
    }else{
        ul.style.display="block";
    }
    
}
scroll.style.cssText="display:none;";
window.onscroll = function(){
if(window.scrollY>=services.offsetTop){
scroll.style.cssText="display:block;";
}
else{
scroll.style.cssText="display:none;";
}
}
scroll.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
foot.innerHTML=`&copy; ${deta.getFullYear()} <span>Leon</span> All Right Reserved`;
