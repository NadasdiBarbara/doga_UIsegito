function hiba(e) {
    let szoveg = document.getElementById("szoveg").value;
    document.getElementById("elonezet").innerHTML = szoveg;
    if(szoveg===""){

        document.getElementById("hiba").innerHTML = "A szöveget meg kell adni!";

    }else{

       document.getElementById("hiba").innerHTML = "";

    }
    
}


function betuMeret(e) {
    let betu = document.getElementById("betu").value;
    document.getElementById("elonezet").style.fontSize = betu + "pt";
}

function szovegSzin(e) {
    let szovegszin = document.getElementById("szovegszin").value;
    document.getElementById("elonezet").style.color = szovegszin;
}

function szovegHatter(e) {
    let szoveghatter = document.getElementById("hatter").value;
    document.getElementById("elonezet").style.backgroundColor = szoveghatter;
}


function alaphelyzet() {
    document.getElementById("szoveg").value = "Árvíztűrű tükörfúrógép";
    document.getElementById("betu").value = "12";
    document.getElementById("szovegszin").value = "#000000";
    document.getElementById("hatter").value = "#FFFFFF";
    document.getElementById("elonezet").style.fontSize = "12pt";
    document.getElementById("elonezet").style.color = "#000000";
    document.getElementById("elonezet").style.backgroundColor = "#FFFFFF";
    document.getElementById("elonezet").innerHTML = "Árvíztűrű tükörfúrógép";
}


function init() {
    alaphelyzet();
    document.getElementById("alaphelyzet").addEventListener("click", alaphelyzet);
    document.getElementById("szoveg").addEventListener("input", hiba);
    document.getElementById("betu").addEventListener("input", betuMeret);
    document.getElementById("szovegszin").addEventListener("input", szovegSzin);
    document.getElementById("hatter").addEventListener("input", szovegHatter);
}
document.addEventListener("DOMContentLoaded", init);