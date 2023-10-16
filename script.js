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
// definition of done planing pooker