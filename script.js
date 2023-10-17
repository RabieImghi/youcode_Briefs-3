let cont = 0;
let countProduit=0;
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
function afichageAccesoire(){
    var cartActive = document.getElementById('accesoire_div');
    // if(cartActive.style.display === "none") 
    // cartActive.style.display="block";
    // else cartActive.style.display="none";

    if(cartActive.className == "hidden-nav") 
        cartActive.classList.add("hidden-nav","hidden-navWeb");
    else if(cartActive.className == "hidden-nav hidden-navWeb") 
    cartActive.classList.remove('hidden-navWeb');
}
function afichageMenu(){
    var menuMobile = document.getElementById('menuMobile');
    if(menuMobile.className == "navigation_info") 
        menuMobile.classList.add("navigation_info","menuBlock");
    else if(menuMobile.className == "navigation_info menuBlock") 
    menuMobile.classList.remove('menuBlock');
}
function panieCart(){
    var cartActive = document.getElementById('cart-panie');
    if(cartActive.style.display === "none") 
    cartActive.style.display="block";
    else cartActive.style.display="none";
}
function addPanie(){
    var produitCount= document.getElementById("produitCount");
    var cartActive = document.getElementById('produitsCard');
    var prixProduit = document.getElementById('prixTotal');
    produitCount.innerHTML = ++countProduit;
    cartActive.innerHTML="";
    for(var i=0;i<countProduit;i++){
        cartActive.innerHTML+= "<div class='produits' style='display: flex; justify-content: space-between; margin:20px 10px;'> <h4>Produit Name</h4>  <h4>1900 $</h4> </div>";
    }
    prixProduit.innerHTML= countProduit*1900+" $";

} 
function test(){
    
}
// definition of done planing pooker