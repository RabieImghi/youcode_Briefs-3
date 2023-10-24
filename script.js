let cont = 0;
let countProduit=0;
let produitNumbers= document.getElementById("produitCount");
var tablImage=["images/women.png","images/women2.png","images/women3.png"];
var images_group = document.getElementById('images-group');
var image= document.getElementById("imageHomeSlide");
var previewsImage=document.getElementById("previews");
var nextImage=document.getElementById("next");
// Afichage l'image suivant
nextImage.addEventListener('click',  function sliderImagesHomeNex(){
    if(cont<3) cont ++;
    if(cont==3) cont = 0;
    images_group.innerHTML = "<img id='imageHomeSlide' src='"+tablImage[cont]+"' alt='image'>";
});
// afichage l'image preview
previewsImage.addEventListener('click', function sliderImagesHomePrev(){
    if(cont>=0) cont --;
    if(cont<0) cont = 2;
    images_group.innerHTML = "<img id='imageHomeSlide' src='"+tablImage[cont]+"' alt='image'>";
});
// afichge menu mobil
function afichageMenu(){
    var menuMobile = document.getElementById('menuMobile');
    menuMobile.classList.toggle("menuBlock");
}
// afichge panie
function panieCart(){
    var cartActive = document.getElementById('cart-panie');
    cartActive.classList.toggle("cartActive");
    cartActive.classList.remove("cartDesactiveImportant");
}
function hiddenMenu(){
    var menuMobile = document.getElementById('cart-panie');
    menuMobile.classList.add("cartDesactiveImportant");
}
// afichge Accesoire
var afichageAccesoire=document.getElementById("afichageAccesoire");
afichageAccesoire.addEventListener('click',function afichageAccesoire(){
    var cartActive = document.getElementById('accesoire_div');
    cartActive.classList.toggle("hidden-navWeb");
});

function addPanie(indice, prx,nbPrd){
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    var quant=document.getElementById('qtePrdDtl');
    if(Number(quant.textContent)>1) var qte=Number(quant.textContent);
    else var qte=1;
    panie.push({ indice, prx,nbPrd,qte});
    localStorage.setItem('panie', JSON.stringify(panie));
    updateAffichagePanie();
} 

function updateAffichagePanie() {
    let produitGroup = document.getElementById('produitsCard');
    let prixDiv = document.getElementById('prixTotal');
    var produits="<div class='produits' style='display: flex; justify-content: space-between; padding : 20px 10px;'>"+
    "<h4> Produit Name </h4><h4>Quantite </h4> <h4>Price</h4> </div> <hr>";
    var panie = JSON.parse(localStorage.getItem('panie')) || [];
    var ctTotal=0;
    prixTotal =0;
    for (let i = 0; i < panie.length; i++) {
        let item = panie[i];
        var prix = item.prx*item.qte;
        produits+= "<div class='produits' style='display: flex; justify-content: space-between; margin:20px 10px;'>"+
        "<h4 style='display :flex;  align-items: center; gap:20px'><img src='images/phone.jpg' style='width: 40px;'>"+
        " Produit "+item.indice+" </h4><h4 style='padding-top:15px;'>"+item.qte+"</h4> <h4 style='display :flex;  align-items: center; gap:20px'>"+prix+"$ "+
        "<img src='images/delet.png' style='width: 20px;' onclick='delet("+i+")'></h4> </div>";
        prixTotal+= prix;
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
function moinPanieDetail(){
    var qte = document.getElementById('qtePrdDtl');
    if(Number(qte.textContent)>0) 
        qte.innerHTML=Number(--qte.textContent);
}
function plusPanieDetail(){
    var qte = document.getElementById('qtePrdDtl');
    qte.innerHTML=Number(++qte.textContent);
}
function plusPanieDetaily(){
    var indice =0; var prx=4322; var nbPrd=233;  
    var qte = document.getElementById('qtePrdDtl');
    var qt=Number(++qte.textContent);
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    panie.push({ indice, prx,nbPrd,qt});
    localStorage.setItem('panie', JSON.stringify(panie));
    updateAffichagePanie();
    qte.innerHTML=qt ;
}
function delet(indice){
    let panie = JSON.parse(localStorage.getItem('panie')) || [];
    panie.splice(indice, 1);
    localStorage.setItem('panie', JSON.stringify(panie));
    updateAffichagePanie();
    aff();
}
function affichageProduitPanie(){
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
            
            produits+="<div class='produit_selected'><div class='prd_image'>";
            produits+=" <label class='filter_check'  style='margin: 20px 0; margin-left: 10px;'>";
            produits+="<input type='checkbox'> <span class='virify'></span></label> ";
            produits+="<img src='images/Clavie.png' alt='clavie'>";
            produits+="<span>Produit "+item.indice+" <br> <p>Produit </p> <h3>$ "+item.prx+"</h3><span>Shipping : $15 </span> </span> </div>";
            produits+="<div class='sup_plus'> <div class='h_d'> <img src='images/heart.png' alt='heart'> <img src='images/delet.png' onclick='delet("+i+")' alt='delet'></div>";
            produits+="<div class='add_cart_counyt'> <div class='moin' onclick='poinPanie("+i+","+item.prx+")'>-</div>";
            produits+="<span class='quantite'>"+item.qte+"</span><div class='moin plus' onclick='plusPanie("+i+","+item.prx+")'>+</div>";
            produits+=" </div> </div> </div>";
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
//Validation contact
function valid(){
    var email=document.getElementById('email');
    var emailMes=document.getElementById('MessageAlertEmail');
    if(email.value.match("^[A-Za-z0-9]+@gmail.com$")){
        email.style.border='3px solid green';
        emailMes.innerHTML='';
        return true;
    }
    else {
        email.style.border='3px solid  red';
        emailMes.innerHTML='Invalide Email / * format exemle@gmail.com ...*/';
    }
}
function validName(i){
    var name=document.getElementById('name'+i);
    var nameAlert=document.getElementById('MessageAlertName'+i);
    if(name.value.match("^[A-Za-z ]{5}")){
        name.style.border='3px solid green';
        nameAlert.innerHTML='';
        return true;
    }
    else {
        name.style.border='3px solid  red';
        nameAlert.innerHTML='Invalid / *  At lest 5 charachter ...*/';
    }
}
function valideselect(){
    var select=document.getElementById('Probleme_type');
    var nameMess=document.getElementById('MessageAlertSelect');
    if(select.value!='none'){
        nameMess.innerHTML='';
        select.style.border='3px solid green';
        return true;
    }
    else{
        select.style.border='3px solid red';
        nameMess.innerHTML='Invalid  Option / *  At lest 1 option ...*/';
    } 
}
function validForme(){
    if(!validName(1)){
        var name=document.getElementById('MessageAlertName1');
        name.innerHTML='Invalid  First Name / * At lest 5 charachter ...*/';
    }else if(!validName(2) ) {
        var name=document.getElementById('MessageAlertName2');
        name.innerHTML='Invalid  Last Name / * At lest 5 charachter ...*/';
    }
    else if(!valid()){
        var name=document.getElementById('MessageAlertEmail');
        name.innerHTML='Invalide Email / * format exemle@gmail.com ...*/';
    } 
    else if(!valideselect()){
        var name=document.getElementById('MessageAlertSelect');
        name.innerHTML='Invalid  Option / *  At lest 1 option ...*/';
    } 
    else if(!validName(3)) {
        var name=document.getElementById('MessageAlertName3');
        name.innerHTML='Invalid  Message / *  At lest 5 charachter ...*/';
    } 
    else alert('valide');
}



