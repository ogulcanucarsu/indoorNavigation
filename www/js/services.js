var barcodeSonuc;
var gitBolgeIndex=0;
var sonHedefX;
var sonHedefY;
angular.module('starter.services', [])

    .factory('Chats', function () {

        var liste = [
            { s_id:301,  s_kat:3,  s_name:'BM 301',                   s_x:1232, s_y:96},
            { s_id:303,  s_kat:3,  s_name:'BM 303',                   s_x:1211, s_y:96},
            { s_id:305,  s_kat:3,  s_name:'BM 305',                   s_x:1141, s_y:96},
            { s_id:306,  s_kat:3,  s_name:'BM Amfi A',                s_x:1283, s_y:111},
            { s_id:307,  s_kat:3,  s_name:'BM Amfi B',                s_x:1387, s_y:111},  
            { s_id:308,  s_kat:3,  s_name:'BM Elektronik Lab.',       s_x:1320, s_y:127},  
            { s_id:309,  s_kat:3,  s_name:'BM Kablosuz İletisim Lab.',s_x:1128, s_y:120},  
            { s_id:310,  s_kat:3,  s_name:'BM Görüntü İşleme Lab.',   s_x:1128, s_y:205},  
            { s_id:311,  s_kat:3,  s_name:'BM Bilgisayar Lab.',       s_x:1130, s_y:237},  
            { s_id:312,  s_kat:3,  s_name:'BM Dekanlık Lab.',         s_x:1202, s_y:238},  
            { s_id:313,  s_kat:3,  s_name:'BM Gömülü Sistem Lab.',    s_x:1402, s_y:257},  
            { s_id:314,  s_kat:3,  s_name:'BM Öğretim Üyeleri Ofis',  s_x:1578, s_y:108},  
            { s_id:315,  s_kat:3,  s_name:'BM Bölüm Başlanlığı',      s_x:1688, s_y:106},
            { s_id:300,  s_kat:3,  s_name:'F Giriş Asansör',          s_x:865,  s_y:97},
            { s_id:333,  s_kat:3,  s_name:'DENEMEEEE',                s_x:445,  s_y:228}                
        ];

        return {
            all: function () {
                return liste;
            },
            get: function (chatId) {
                for (var i = 0; i < liste.length; i++) {
                    if (liste[i].s_id === parseInt(chatId)) {
                        return liste[i];
                    }
                }
                return null;
            }
        };
    });

var hedefX;
var hedefY;
var caprazGit = false;
var caprazIkinciDefa = 3;
function hedefFunc(rotaX, rotaY) {
console.log("calisiyor");
    var yeniHedefX;
    var yeniHedefY;
    var yeniHedefX; //top cakisirsa
    var yeniHedefY;
    var yeniHedefBool = false;
    var yeniHedefBool2 = false;

    function yeniHedefFunc(hedefX, hedefY) {
        var xIsaret;
        if (hedefX >= rotaX) xIsaret = 1;
        else { xIsaret = -1; }

        var yIsaret;
        if (hedefY >= rotaY) yIsaret = 1;
        else { yIsaret = -1; }


        var img = new Image();
        img.src = 'img/buradasinizRota.png';
        img.style["left"] = rotaX + "px";
        img.style["top"] = rotaY + "px";
        img.style["position"] = "absolute";

        var div = document.getElementById('harita');

        img.onload = function () {
            div.appendChild(img);
        };

        var xKalanMesafe = Math.abs(hedefX - rotaX);
        var yKalanMesafe = Math.abs(hedefY - rotaY);
        var xArtir = 1;
        var yArtir = 1;
        var xArtirBool = false;
        var yArtirBool = false;
        
        if (yKalanMesafe > xKalanMesafe) {
            yArtirBool = true;
        }
        else if (yKalanMesafe < xKalanMesafe) {
            xArtirBool = true;          
        }
        
        for (var i = 0; i < sinifListe.length; i++) {

            if (rotaX > sinifListe[i].x1 && rotaX < sinifListe[i].x2 && (rotaY == sinifListe[i].y1 || rotaY == sinifListe[i].y2)) {
                rotaX = rotaX + 1 * xIsaret;
                rotaY = rotaY + 0;

                if (rotaX == hedefX && Math.abs((sinifListe[i].x1 - rotaX)) < Math.abs((sinifListe[i].x2 - rotaX))) {
                    yeniHedefX = sinifListe[i].x1;
                    //sola Yakın X1
                    if (Math.abs((sinifListe[i].y1 - rotaY)) > Math.abs((sinifListe[i].y2 - rotaY))) {
                        yeniHedefY = sinifListe[i].y1;
                    }
                    else {
                        yeniHedefY = sinifListe[i].y2;
                    }
                    yeniHedefBool = true;
                }
                else if (rotaX == hedefX && Math.abs((sinifListe[i].x1 - rotaX)) > Math.abs((sinifListe[i].x2 - rotaX))) {
                    yeniHedefX = sinifListe[i].x2;
                    //sola Yakın X1
                    if (Math.abs((sinifListe[i].y1 - rotaY)) > Math.abs((sinifListe[i].y2 - rotaY))) {
                        yeniHedefY = sinifListe[i].y1;
                    }
                    else {
                        yeniHedefY = sinifListe[i].y2;
                    }
                    yeniHedefBool = true;
                }

                if (rotaX == yeniHedefX && rotaY == yeniHedefY) {
                    yeniHedefBool = false;
                    alert("hedeftamamlandı");
                }

                document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                
                if (yeniHedefBool) {
                    console.log("yeni hedef 1 calisti");
                    yeniHedefFunc(yeniHedefX, yeniHedefY);
                }
                caprazGit = true;
                break;
            }
            else if (rotaY > sinifListe[i].y1 && rotaY < sinifListe[i].y2 && (rotaX == sinifListe[i].x1 || rotaX == sinifListe[i].x2)) {
                rotaX = rotaX + 0;
                rotaY = rotaY + 1 * yIsaret;

                if (rotaY == hedefY && Math.abs((sinifListe[i].y1 - rotaY)) < Math.abs((sinifListe[i].y2 - rotaY))) {
                    yeniHedefY = sinifListe[i].y1;
                    //yukarı yakin y1
                    if (Math.abs((sinifListe[i].x1 - rotaX)) > Math.abs((sinifListe[i].x2 - rotaX))) {
                        yeniHedefX = sinifListe[i].x1;
                    }
                    else {
                        yeniHedefX = sinifListe[i].x2;
                    }
                    yeniHedefBool2 = true;
                }
                else if (rotaY == hedefY && Math.abs((sinifListe[i].y1 - rotaY)) > Math.abs((sinifListe[i].y2 - rotaY))) {
                    yeniHedefY = sinifListe[i].y2;
                    //asagi Yakın y2
                    if (Math.abs((sinifListe[i].x1 - rotaX)) > Math.abs((sinifListe[i].x2 - rotaX))) {
                        yeniHedefX = sinifListe[i].x1;
                    }
                    else {
                        yeniHedefX = sinifListe[i].x2;
                    }
                    yeniHedefBool2 = true;
                }

                if (rotaX == yeniHedefX && rotaY == yeniHedefY) {
                    yeniHedefBool2 = false;
                    alert("hedeftamamlandı");
                }

                document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                if (yeniHedefBool2) {
                    console.log("yeni hedef 2 calisti");
                    yeniHedefFunc(yeniHedefX, yeniHedefY);
                }
                caprazGit = true;
                break;
            }
            else if (sinifListe[i].son == 'son') {
                if (caprazGit) {
                    yArtir = 1;
                    xArtir = 1;
                    caprazGit = false;
                }
                else if (yArtirBool) {
                    yArtir = 1;
                    xArtir = 0;
                }
                else if (xArtirBool) {
                    yArtir = 0;
                    xArtir = 1;
                }
                if (hedefX != rotaX) {
                    rotaX = rotaX + xArtir * xIsaret;
                }
                if (hedefY != rotaY) {
                    rotaY = rotaY + yArtir * yIsaret;
                }
                document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                break;
            }
        }

    }

    yeniHedefFunc(hedefX, hedefY);

    
     if(durdurD)
    {
        setTimeout(function()
        {
            if (hedefY == rotaY && hedefX == rotaX) 
            {
                gitBolgeIndex++;
            }
            
            if(gitBolgeIndex!=gitBolgeler.length)
            {
                hedefX=gitBolgeler[gitBolgeIndex].x;
                hedefY=gitBolgeler[gitBolgeIndex].y;    
            }
            else
            {
                hedefX=sonHedefX;
                hedefY=sonHedefY;
            }
            
            if (hedefY == rotaY && hedefX == rotaX) 
            {
                console.log("tamamlandı");
            }
            else
            hedefFunc(rotaX, rotaY);  
        },1);
    }

}

var kat3Koordinatlar=[];
kat3Koordinatlar.push({}); //bos
kat3Koordinatlar.push({name:'1',x:854,y:95}); //kuzey
kat3Koordinatlar.push({}); //bos
kat3Koordinatlar.push({name:'3',x:0,y:0}); //doğu
kat3Koordinatlar.push({}); //bos
kat3Koordinatlar.push({name:'5',x:0,y:0}); //güney
kat3Koordinatlar.push({}); //bos
kat3Koordinatlar.push({name:'7',x:0,y:0}); //batı

var bolgeler=[];
bolgeler.push({kat:'0',x:0,y:0});
bolgeler.push({kat:'1',x:0,y:0});
bolgeler.push({kat:'2',x:0,y:0});
bolgeler.push({kat:'3',x:853,y:398,gitKoordinat:kat3Koordinatlar});

function bolgeKontrol(bolgeX,bolgeY,kat)
{
    if(bolgeX<bolgeler[kat].x && bolgeY<bolgeler[kat].y)      { return 0;}
    else if(bolgeX>bolgeler[kat].x && bolgeY<bolgeler[kat].y) { return 2;}
    else if(bolgeX<bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 4;}
    else if(bolgeX>bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 6;}
}
var gitBolgeler=[];
function gidilecekBolgeler(kendiBolgesi,hedefBolgesi,kat)
{
    var isaret=-1;
    var fark=hedefBolgesi-kendiBolgesi;
    if(fark>0) isaret=1;
    if(fark==0) {  //cikis 
    }
    else
    {
        while(kendiBolgesi!=hedefBolgesi)
        {
            gitBolgeler.push({x:bolgeler[kat].gitKoordinat[kendiBolgesi+1*isaret].x,y:bolgeler[kat].gitKoordinat[kendiBolgesi+1*isaret].y});
            kendiBolgesi+=2*isaret;
        }
    }
}
var durdurD=true;
function durdur()
{
    durdurD=false;
}



var sinifListe = [];

function ekle() {
    sinifListe = [];
    sinifListe.push({ sinifAdi: 'jeoDerslikler',            sinifId:'1',    x1: 0,      x2: 633,         y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'fenElektrikUstSiniflar',   sinifId:'2',    x1: 650,    x2: 1054,        y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'bilgisayar301_303_305',    sinifId:'3',    x1: 1072,   x2: 1297,        y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'bilgisayarAmfiAB',         sinifId:'4',    x1: 1290,   x2: 1381,        y1: 0,       y2: 128 });
    sinifListe.push({ sinifAdi: 'bilgisayarOgretimUyeleri', sinifId:'5',    x1: 1410,   x2: 1687,        y1: 0,       y2: 104 });
    sinifListe.push({ sinifAdi: 'fenElektrikAltSiniflar',   sinifId:'6',    x1: 644,    x2: 1122,        y1: 98,     y2: 10000 });  //
    sinifListe.push({ sinifAdi: 'jeoSagdakiDerslikler',     sinifId:'7',    x1: 580,    x2: 660,         y1: 132,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'jeoGALERI',                sinifId:'8',    x1: 436,    x2: 559,         y1: 136,     y2: 199 });
    sinifListe.push({ sinifAdi: 'GaleriBilgisayar',         sinifId:'9',    x1: 1149,   x2: 1270,        y1: 128,     y2: 202 });
    sinifListe.push({ sinifAdi: 'JeoSoldakiDerslikler',     sinifId:'10',   x1: 0,      x2: 412,         y1: 0,       y2: 202 });
    sinifListe.push({ sinifAdi: 'bilgisayarLablar',         sinifId:'11',   x1: 1112,   x2: 1272,        y1: 240,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarObss',           sinifId:'12',   x1: 1296,   x2: 1381,        y1: 134,     y2: 271 });
    sinifListe.push({ sinifAdi: 'bilgisayarWC',             sinifId:'13',   x1: 1324,   x2: 1391,        y1: 295,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarSagLab',         sinifId:'14',   x1: 1412,   x2: 1686,        y1: 112,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarLablarSag',      sinifId:'15',   x1: 1260,   x2: 1307,        y1: 303,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'jeoAltLablar',             sinifId:'16',   x1: 366,    x2: 597,         y1: 243,     y2: 10000 });

    sinifListe.push({ son: 'son' });
    console.log(sinifListe);
}

// ESKİ SINIRLAR
// sinifListe.push({sinifAdi:'301_303_305', x1:28,x2:270,y1:0,y2:92});
// sinifListe.push({sinifAdi:'ofis', x1:376,x2:674,y1:0,y2:104});
// sinifListe.push({sinifAdi:'ofis2', x1:376,x2:1000,y1:114,y2:1000});
// sinifListe.push({sinifAdi:'bolumBaskanligi', x1:686,x2:740,y1:0,y2:162});
// sinifListe.push({sinifAdi:'galeriBoslugu', x1:100,x2:234,y1:130,y2:208});
// sinifListe.push({sinifAdi:'elektronikLab', x1:254,x2:350,y1:134,y2:282});
// // sinifListe.push({sinifAdi:'obss', x1:280,x2:350,y1:194,y2:282});
// sinifListe.push({sinifAdi:'amfiAB', x1:254,x2:350,y1:0,y2:128});
// sinifListe.push({sinifAdi:'bayWC', x1:285,x2:364,y1:308,y2:1000});
// sinifListe.push({sinifAdi:'goruntuIslemeKablosuzIletisi', x1:0,x2:80,y1:104,y2:1000});
// sinifListe.push({sinifAdi:'bilgisayarDekanlikLab', x1:0,x2:236,y1:254,y2:1000});
// sinifListe.push({sinifAdi:'WConu', x1:0,x2:274,y1:314,y2:1000});
// ESKİ SINIRLAR  

var merdivenlerListe = [];

function merdivenEkle() {
    var merdivenListe = [];
    merdivenListe.push({ merdivenAdi: 'ogretmenlerMerdiven', x1: 456, y1: 111 });
    merdivenListe.push({ merdivenAdi: 'BgirisMerdiven', x1: 367, y1: 399 });
    merdivenListe.push({ merdivenAdi: 'FgirisYanMerdiven', x1: 24, y1: 91 });
    merdivenListe.push({ son: 'son' });

    merdivenlerListe.push({ kat: '3', merdivenListe: merdivenListe });
    console.log(merdivenListe);

}
function merdivenGit(solHiza3, topHiza3) {
    var enKucuk = { deger: 9999, index: 99 };
    for (var i = 0; i < merdivenlerListe.length; i++) {
        for (var k = 0; k < merdivenlerListe[i].merdivenListe.length; k++) {
            console.log(merdivenlerListe[i].merdivenListe[k].x1 + "--" + merdivenlerListe[i].merdivenListe[k].y1);
            var a = solHiza3 - merdivenlerListe[i].merdivenListe[k].x1;
            var b = topHiza3 - merdivenlerListe[i].merdivenListe[k].y1;
            var c = Math.sqrt(a * a + b * b);
            console.log("C= " + c);
            if (c < enKucuk.deger) {
                enKucuk.deger = c;
                enKucuk.index = k;
            }
            console.log("En Kucuk= " + enKucuk.deger + " index = " + enKucuk.index);
        }
    }
    hedefX = merdivenlerListe[0].merdivenListe[enKucuk.index].x1;
    hedefY = merdivenlerListe[0].merdivenListe[enKucuk.index].y1;
    hedefFunc(solHiza3, topHiza3);
}

function kendiKonumuKoordinat(barcodeSonuc) {
    if (barcodeSonuc == 0) {
        konumX = 1391;
        konumY = 357;
    }
    else if (barcodeSonuc == 1) {
        konumX = 1400;
        konumY = 366;
    }
    else if (barcodeSonuc == 2) {
        konumX = 1388;
        konumY = 99;
    }
    else if (barcodeSonuc == 3) {
        konumX = 1132;
        konumY = 222;
    }
}

function iecompattest() {
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

function tarayici()
{
        barcodeSonuc = 1;
        kendiKonumuKoordinat(barcodeSonuc);
}