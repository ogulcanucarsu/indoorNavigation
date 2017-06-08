var pusulaListe = [];
var adimPusulaListe = [];
var konumX  ;
var konumY ;
var baslangicNoktasi = 310;

function hareketEt(adim) {
    adimPusulaListe = pusulaListe.slice(Math.max(pusulaListe.length - adim, 0));

    for (var i = 0; i < adim; i++) {
        pusulaDegeri = adimPusulaListe[i];
        var fark = baslangicNoktasi - 90;
        if (pusulaDegeri >= (45 + fark) % 360 && pusulaDegeri <= (135 + fark) % 360) {       //211 233
            yukariGit();
            console.log("yukarı");
        }
        else if (pusulaDegeri >= (135 + fark) % 360 && pusulaDegeri <= (139 + fark) % 360) { //210+1
            sagaGit();
            console.log("saga");
        }
        else if (pusulaDegeri >= (140 + fark) % 360 && pusulaDegeri <= (225 + fark) % 360) { //210+1
            sagaGit();
            console.log("saga");
        }
        else if (pusulaDegeri >= (225 + fark) % 360 && pusulaDegeri <= (315 + fark) % 360) { //256 278
            asagiGit();
            console.log("asagi");
        }
        else if (pusulaDegeri >= (315 + fark) % 360 && pusulaDegeri <= (405 + fark) % 360) { //278 301
            solaGit();
            console.log("sola");
        }
    }
}
function solaGit() {
    var img = new Image();
    img.src = 'img/buradasinizKonum.png';
    img.style["left"] = konumX + "px";
    img.style["top"] = konumY + "px";
    img.style["position"] = "absolute";

    var div = document.getElementById('harita');

    img.onload = function () {
        div.appendChild(img);
    };

    // konumX = konumX - 3;
    // konumY = konumY + 0;
    konumDuzelt(-1,"X");
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}
function sagaGit() {
    var img = new Image();
    img.src = 'img/buradasinizKonum.png';
    img.style["left"] = konumX + "px";
    img.style["top"] = konumY + "px";
    img.style["position"] = "absolute";

    var div = document.getElementById('harita');

    img.onload = function () {
        div.appendChild(img);
    };

    // konumX = konumX + 3;
    // konumY = konumY + 0;
    konumDuzelt(1,"X");    
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}
function asagiGit() {
    var img = new Image();
    img.src = 'img/buradasinizKonum.png';
    img.style["left"] = konumX + "px";
    img.style["top"] = konumY + "px";
    img.style["position"] = "absolute";

    var div = document.getElementById('harita');

    img.onload = function () {
        div.appendChild(img);
    };

    // konumX = konumX + 0;
    // konumY = konumY + 3;
    konumDuzelt(1,"Y");    
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}
function yukariGit() {
    var img = new Image();
    img.src = 'img/buradasinizKonum.png';
    img.style["left"] = konumX + "px";
    img.style["top"] = konumY + "px";
    img.style["position"] = "absolute";

    var div = document.getElementById('harita');

    img.onload = function () {
        div.appendChild(img);
    };

    // konumX = konumX + 0;
    // konumY = konumY - 3;
    konumDuzelt(-1,"Y");    
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}