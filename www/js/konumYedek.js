var pusulaListe = [];
var adimPusulaListe = [];
var konumX ;
var konumY ;
var baslangicNoktasi = 300;

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
        else if (pusulaDegeri >= (112.5 + fark) % 360 && pusulaDegeri <= (149.5 + fark) % 360) {
            sagaGit();
            yukariGit();
        }
        else if (pusulaDegeri >= (150.5 + fark) % 360 && pusulaDegeri <= (157.5 + fark) % 360) {
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
        // if (pusulaDegeri >= (11.25 + fark) % 360 && pusulaDegeri <= (33.75 + fark) % 360) {       //211 233
        //     solaGit();
        //     solaGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (33.75 + fark) % 360 && pusulaDegeri <= (56.25 + fark) % 360) { //233 256
        //     solaGit();
        //     solaGit();
        //     yukariGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (56.25 + fark) % 360 && pusulaDegeri <= (78.75 + fark) % 360) { //256 278
        //     solaGit();
        //     yukariGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (78.75 + fark) % 360 && pusulaDegeri <= (101.25 + fark) % 360) { //278 301
        //     yukariGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (101.25 + fark) % 360 && pusulaDegeri <= (123.75 + fark) % 360) { //301 323
        //     sagaGit();
        //     yukariGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (123.75 + fark) % 360 && pusulaDegeri <= (146.25 + fark) % 360) { //323 346
        //     sagaGit();
        //     sagaGit();
        //     yukariGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (146.25 + fark) % 360 && pusulaDegeri <= (159.99 + fark) % 360) { //346 368
        //     sagaGit();
        //     sagaGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (160.01 + fark) % 360 && pusulaDegeri <= (168.75 + fark) % 360) { //346 368
        //     sagaGit();
        //     sagaGit();
        //     yukariGit();
        // }
        // else if (pusulaDegeri >= (168.75 + fark) % 360 && pusulaDegeri <= (191.25 + fark) % 360) { //368 391
        //     sagaGit();
        //     sagaGit();

        // }
        // else if (pusulaDegeri >= (191.25 + fark) % 360 && pusulaDegeri <= (213.75 + fark) % 360) { //391 413
        //     sagaGit();
        //     sagaGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (213.75 + fark) % 360 && pusulaDegeri <= (236.25 + fark) % 360) { //413 - 436
        //     sagaGit();
        //     sagaGit();
        //     asagiGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (236.25 + fark) % 360 && pusulaDegeri <= (258.75 + fark) % 360) { //267 - 312
        //     sagaGit();
        //     asagiGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (258.75 + fark) % 360 && pusulaDegeri <= (281.25 + fark) % 360) { //312 - 357
        //     asagiGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (281.25 + fark) % 360 && pusulaDegeri <= (303.75 + fark) % 360) { //0.5 - 42.5 
        //     solaGit();
        //     asagiGit();
        //     asagiGit();

        // }
        // else if (pusulaDegeri >= (303.75 + fark) % 360 && pusulaDegeri <= (326.25 + fark) % 360) { //42.5 - 87
        //     solaGit();
        //     solaGit();
        //     asagiGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (326.25 + fark) % 360 && pusulaDegeri <= (348.75 + fark) % 360) { //87 - 132
        //     solaGit();
        //     solaGit();
        //     asagiGit();
        // }
        // else if (pusulaDegeri >= (348.75 + fark) % 360 && pusulaDegeri <= (371.25 + fark) % 360) { //132 - 177
        //     solaGit();
        //     solaGit();
        // }
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
    // konumDuzelt(-1);
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
    // konumDuzelt(1);
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
    // konumDuzelt(1);
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
    // konumDuzelt(-1);
    document.getElementById("buradasinizKonum").style["left"] = konumX + "px";
    document.getElementById("buradasinizKonum").style["top"] = konumY + "px";
}