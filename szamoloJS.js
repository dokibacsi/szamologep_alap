window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}

function CLS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}



function init(){
    $('footer')[0].innerHTML = "Katona Valentin";
    var szamokTomb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    var szoveg = "";

    for (let index = 0; index < szamokTomb.length; index++){
        szoveg += "<button>" + szamokTomb[index] + "</button>"; 
    }

    CLS('szamok')[0].innerHTML = szoveg;

    for (let index = 0; index < szamokTomb.length; index++){
        $('.szamok button')[index].addEventListener("click", kattint);

    }
    var muvjel = "";
        $('.muvjelek #osszeadas')[0].addEventListener("click", kattint);
        $('.muvjelek #kivonas')[0].addEventListener("click", kattint);
        $('.muvjelek #osztas')[0].addEventListener("click", kattint);
        $('.muvjelek #szorzas')[0].addEventListener("click", kattint);
        $('.muvjelek #egyenlo')[0].addEventListener("click", kiszamol);
        $('.muvjelek #torles')[0].addEventListener("click", torol);
        

}

function kattint(){
    var aktIndex = event.target.innerHTML;
    //console.log(aktIndex);
    $(".kijelzo")[0].innerHTML += aktIndex;
}

function kiszamol(){
    var aktIndex = event.target.innerHTML;
    
}

function torol(){
    $(".kijelzo")[0].innerHTML = "";
}