let cont = 0;
let countProduit=0;
let produitNumbers= document.getElementById("produitCount");
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
function afichageMenu(){
    var menuMobile = document.getElementById('menuMobile');
    var imageMenu= document.getElementById("imageMenu");
    var body= document.getElementById('body');
    if(menuMobile.className == "navigation_info"){
        menuMobile.classList.add("menuBlock");
        imageMenu.src="images/ferme.png";
        body.style.filter= "brightness(80%)";
    }else if(menuMobile.className == "navigation_info menuBlock"){
        menuMobile.classList.remove('menuBlock');
        imageMenu.src="images/2099043.png";
        body.style.filter= "opacity(100%)";
    }
}
// afichge panie
function panieCart(){
    var cartActive = document.getElementById('cart-panie');
    if(cartActive.style.display === "none") 
    cartActive.style.display="block";
    else cartActive.style.display="none";
}
// afichge Accesoire
var afichageAccesoire=document.getElementById("afichageAccesoire");
afichageAccesoire.addEventListener('click',function afichageAccesoire(){
    var cartActive = document.getElementById('accesoire_div');
    if(cartActive.className == "hidden-nav") 
        cartActive.classList.add("hidden-nav","hidden-navWeb");
    else if(cartActive.className == "hidden-nav hidden-navWeb") 
    cartActive.classList.remove('hidden-navWeb');
});

function addPanie(indice, prx,nbPrd){
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    var qte=1;
    panie.push({ indice, prx,nbPrd,qte});
    localStorage.setItem('panie', JSON.stringify(panie));
    updateAffichagePanie();

} 
function updateAffichagePanie() {
    let produitGroup = document.getElementById('produitsCard');
    let prixDiv = document.getElementById('prixTotal');
    var produits="";
    var panie = JSON.parse(localStorage.getItem('panie')) || [];
    var ctTotal=0;
    prixTotal =0;
    for (let i = 0; i < panie.length; i++) {
        let item = panie[i];
        produits+= "<div class='produits' style='display: flex; justify-content: space-between; margin:20px 10px;'>"+
        "<h4>Produit "+item.indice+"</h4> <h4>"+item.prx+"$</h4> </div>";
        prixTotal+= item.prx;
        countProduit = ++ctTotal;
    }
    produitNumbers.innerHTML = countProduit;
    produitGroup.innerHTML = produits;
    prixDiv.innerHTML = prixTotal +" $";
    
}
function plusPanie(position,prix){
    var totalProduit =document.getElementById("totalProduit");
    var elements = document.querySelectorAll('.quantite');
    var totalShipping = document.getElementById('PrixShipping');
    var total = parseInt(totalProduit.textContent);
    elements[position].innerHTML=Number(elements[position].textContent)+1;
    for(var i=0;i<elements.length;i++){
        if(i==position){
            total+=prix;
            let panie = JSON.parse(localStorage.getItem('panie')) || [];
            panie[i].qte = Number(elements[position].textContent);
            localStorage.setItem('panie', JSON.stringify(panie));
        } 

    }
    
    var totalPrixShipping = document.getElementById("totalPrixShipping");
    totalPrixShipping.innerHTML=Number(total+totalShipping);
    totalProduit.innerHTML = total;
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    totalPrixShipping.innerHTML=total+panie.length*15;
}
function poinPanie(position,prix){
    var totalPrixShipping = document.getElementById("totalPrixShipping");
    var totalProduit =document.getElementById("totalProduit");
    var elements = document.querySelectorAll('.quantite');
    var total = parseInt(totalProduit.textContent);
    if(Number(elements[position].textContent)>0){
        elements[position].innerHTML=Number(elements[position].textContent)-1;
        for(var i=0;i<elements.length;i++){
            if(i==position){
                total-=prix;
                let panie = JSON.parse(localStorage.getItem('panie')) || [];
                panie[i].qte = Number(elements[position].textContent);
                localStorage.setItem('panie', JSON.stringify(panie));
            } 
        }
        totalProduit.innerHTML = total;
        let panie = JSON.parse(localStorage.getItem('panie')) || [];
        totalPrixShipping.innerHTML=total+panie.length*15;
    }
    
}
function delet(indice){
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    panie.splice(indice, 1);
    localStorage.setItem('panie', JSON.stringify(panie));
    updateAffichagePanie();
    aff();
}
function aff(){
    var listProduit = document.getElementById('productlist');
    var totalProduit = document.getElementById('totalProduit');
    var totalShipping = document.getElementById('PrixShipping');
    var totalPrixShipping = document.getElementById('totalPrixShipping');
    let produits="";
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    let total=0;
    let PrixShipping=0;
    for(let i = 0; i < panie.length; i++){
        let item=panie[i];
            
            produits+="<a href='detail.html'><div class='produit_selected'><div class='prd_image'>";
            produits+=" <label class='filter_check'  style='margin: 20px 0; margin-left: 10px;'>";
            produits+="<input type='checkbox'> <span class='virify'></span></label> ";
            produits+="<img src='images/Clavie.png' alt='clavie'>";
            produits+="<span>Produit "+item.indice+" <br> <p>Produit </p> <h3>$ "+item.prx+"</h3><span>Shipping : $15 </span> </span> </div>";
            produits+="<div class='sup_plus'> <div class='h_d'> <img src='images/heart.png' alt='heart'> <img src='images/delet.png' onclick='delet("+i+")' alt='delet'></div>";
            produits+="<div class='add_cart_counyt'> <div class='moin' onclick='poinPanie("+i+","+item.prx+")'>-</div>";
            produits+="<span class='quantite'>"+item.qte+"</span><div class='moin plus' onclick='plusPanie("+i+","+item.prx+")'>+</div>";
            produits+=" </div> </div> </div></a>";
            if(item.qte>0)
            total+=Number(item.prx*item.qte);
            PrixShipping+=15;
    }
    var prxShipin = panie.length*15;
    totalShipping.innerHTML = prxShipin;
    listProduit.innerHTML = produits;
    totalProduit.innerHTML = total;
    totalPrixShipping.innerHTML = total+PrixShipping;
}
function afichageSearch(){
    var menuMobile = document.getElementById('search');
    var img = document.getElementById('sr_img');

    if(menuMobile.className == "lg-header2"){
        menuMobile.classList.add("lg-header-block");
        img.src="images/ferme.png"
    }else if(menuMobile.className == "lg-header2 lg-header-block"){
        menuMobile.classList.remove('lg-header-block');
        img.src="images/search.png"
    }
}
// definition of done planing pooker
// panie.splice(0, 1);
