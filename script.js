let cont = 0;
let countProduit=0;
var tablImage=["images/women.png","images/women2.png","images/women3.png"];
var image= document.getElementById("imageHomeSlide");
var previewsImage=document.getElementById("previews");
var nextImage=document.getElementById("next");
// Afichage l'image suivant
nextImage.addEventListener('click',  function sliderImagesHomeNex(){
    if(cont<3) cont ++;
    if(cont==3) cont = 0;
    image.src = tablImage[cont];
});
// afichage l'image preview
previewsImage.addEventListener('click', function sliderImagesHomePrev(){
    if(cont>=0) cont --;
    if(cont<0) cont = 2;
    image.src = tablImage[cont];
});
// afichge menu mobil
var previewsImage=document.getElementById("afichagMenu");
previewsImage.addEventListener('click', function afichageMenu(){
    var menuMobile = document.getElementById('menuMobile');
    if(menuMobile.className == "navigation_info") 
        menuMobile.classList.add("menuBlock");
    else if(menuMobile.className == "navigation_info menuBlock") 
    menuMobile.classList.remove('menuBlock');
});
// afichge panie
var afichagePanie=document.getElementById("afichagePanie");
afichagePanie.addEventListener('click', function panieCart(){
    var cartActive = document.getElementById('cart-panie');
    if(cartActive.style.display === "none") 
    cartActive.style.display="block";
    else cartActive.style.display="none";
});
// definition of done planing pooker