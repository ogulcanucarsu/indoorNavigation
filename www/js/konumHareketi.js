var pusulaListe =[];
var adimPusulaListe=[];
var konumX = 420;
var konumY = 226;
var baslangicNoktasi = 290;

function hareketEt(adim) {
    adimPusulaListe = pusulaListe.slice(Math.max(pusulaListe.length - adim, 0));

    for (var i = 0; i < adim; i++) {
        pusulaDegeri = adimPusulaListe[i];
        var fark = baslangicNoktasi - 90;
        if (pusulaDegeri >= (22.5 + fark) % 360 && pusulaDegeri <= (67.5 + fark) % 360) {
            solaGit();
            yukariGit();
        }
        else if (pusulaDegeri >= (67.5 + fark) % 360 && pusulaDegeri <= (112.5 + fark) % 360) {
            yukariGit();
        }
        else if (pusulaDegeri >= (112.5 + fark) % 360 && pusulaDegeri <= (157.5 + fark) % 360) {
            sagaGit();
            yukariGit();
        }
        else if (pusulaDegeri >= (157.5 + fark) % 360 && pusulaDegeri <= (202.5 + fark) % 360) {
            sagaGit();
        }
        else if (pusulaDegeri >= (202.5 + fark) % 360 && pusulaDegeri <= (247.5 + fark) % 360) {
            sagaGit();
            asagiGit();
        }
        else if (pusulaDegeri >= (247.5 + fark) % 360 && pusulaDegeri <= (292.5 + fark) % 360) {
            asagiGit();
        }
        else if (pusulaDegeri >= (292.5 + fark) % 360 && pusulaDegeri <= (337.5 + fark) % 360) {
            solaGit();
            asagiGit();
        }
        else if (pusulaDegeri >= (337.5 + fark) % 360 && pusulaDegeri <= (360 + fark) % 360) {
            solaGit();
        }
        else if (pusulaDegeri >= (0 + fark) % 360 && pusulaDegeri <= (22.5 + fark) % 360) {
            solaGit();
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

    konumX = konumX - 5;
    konumY = konumY + 0;
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

    konumX = konumX + 5;
    konumY = konumY + 0;
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

    konumX = konumX + 0;
    konumY = konumY + 5;
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

    konumX = konumX + 0;
    konumY = konumY - 5;
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}