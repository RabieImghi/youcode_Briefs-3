let   cont = 0;
var tablImage=["images/women.png","images/women2.png","images/women3.png"];
var image= document.getElementById("imageHomeSlide");
function sliderImagesHomeNex(){
    if(cont<3) cont ++;
    if(cont==3) cont = 0;
    image.src = tablImage[cont];
}
function sliderImagesHomePrev(){
    if(cont>=0) cont --;
    if(cont<0) cont = 2;
    image.src = tablImage[cont];
}