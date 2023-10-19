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
    if(menuMobile.className == "navigation_info") 
        menuMobile.classList.add("menuBlock");
    else if(menuMobile.className == "navigation_info menuBlock") 
    menuMobile.classList.remove('menuBlock');
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

// function addPanie(){
//     var produitCount= document.getElementById("produitCount");
//     var cartActive = document.getElementById('produitsCard');
//     var prixProduit = document.getElementById('prixTotal');
//     produitCount.innerHTML = ++countProduit;
//     cartActive.innerHTML="";
//     for(var i=0;i<countProduit;i++){
//         cartActive.innerHTML+= "<div class='produits' style='display: flex; justify-content: space-between; margin:20px 10px;'> <h4>Produit Name</h4>  <h4>1900 $</h4> </div>";
//     }
//     prixProduit.innerHTML= countProduit*1900+" $";
// } 
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
    location.reload();
}
// definition of done planing pooker
// panie.splice(0, 1);
