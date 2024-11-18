console.log("Fonctionnalité 1 :")

let footClick = document.getElementsByTagName("footer")[0];
let count = 0
let oneClick = function(){ 
    count++
    console.log(`clic numéro ${count}`)};

footClick.addEventListener("click", oneClick);


console.log("Fonctionnalité 2 :")

let burger = document.getElementsByClassName("navbar-toggler")[0];
let burgerClick = function(){
    let navbar = document.getElementById("navbarHeader")
    navbar.classList.toggle("collapse")
};
burger.addEventListener("click", burgerClick);



console.log("Fonctionnalité 3 :")

let card1 = document.getElementsByClassName("btn-outline-secondary")[0];

let editClick = function(){
    let text = document.getElementsByClassName("card-text")[0];
    text.style="color: red"
};
card1.addEventListener("click", editClick);



console.log("Fonctionnalité 4 :")

let card2 = document.getElementsByClassName("btn-outline-secondary")[1];

let editClick2 = function(){
    let text2 = document.getElementsByClassName("card-text")[1];
    if (text2.style.color==='green'){
        text2.style="color: ";
    }else{
        text2.style="color: green";
    }
};
card2.addEventListener("click", editClick2);



console.log("Fonctionnalité 5 :")

let navclick = document.getElementsByClassName("navbar")[0];

let bootDel = function(){
    let bootLink = document.getElementsByTagName("link")[0];
    if (bootLink.disabled === false){
    bootLink.disabled = true;
    }   
    else{
        bootLink.disabled = false;
    }
};
navclick.addEventListener("dblclick", bootDel);



console.log("Fonctionnalité 6 :")

let btnViews = document.querySelectorAll(".btn-success");

btnViews.forEach(function(btnView){
    btnView.addEventListener("mouseover", function(){

    let cardComplet = btnView.closest(".card");
    let cardText = cardComplet.querySelector(".card-text");
    let img = cardComplet.querySelector("img");

    if (cardComplet.classList.toggle("collapsed")){
        cardText.style.display = "none";
        img.style.width = "20%";
    }
       else{
        cardText.style.display = "";
        img.style.width = "";
       }});
});



