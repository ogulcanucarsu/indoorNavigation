var barcodeSonuc;
angular.module('starter.services', [])

    .factory('Chats', function () {

        var liste = [
            { s_id: 301, s_kat: 3, s_name: 'BM 301' },
            { s_id: 303, s_kat: 3, s_name: 'BM 303' },
            { s_id: 305, s_kat: 3, s_name: 'BM 305' },
            { s_id: 300, s_kat: 3, s_name: 'F Giriş Asansör' },
            { s_id: 333, s_kat: 3, s_name: 'DENEMEEEE' }
            //  {s_id:306, s_kat:3, s_name:'BM Amfi A'}
            //   {s_id:307, s_kat:3, s_name:'BM Amfi B'},  
            //   {s_id:308, s_kat:3, s_name:'BM Elektronik Lab.'},  
            //   {s_id:309, s_kat:3, s_name:'BM Kablosuz İletisim Lab.'},  
            //   {s_id:310, s_kat:3, s_name:'BM Görüntü İşleme Lab.'},  
            //   {s_id:311, s_kat:3, s_name:'BM Bilgisayar Lab.'},  
            //   {s_id:312, s_kat:3, s_name:'BM Dekanlık Lab.'},  
            //   {s_id:313, s_kat:3, s_name:'BM Gömülü Sistem Lab.'},  
            //   {s_id:314, s_kat:3, s_name:'BM Öğretim Üyeleri Ofis'},  
            //   {s_id:315, s_kat:3, s_name:'BM Bölüm Başlanlığı'}  
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

var kendiKonumuX;
var kendiKonumuY;

var hedefX;
var hedefY;
var caprazGit = false;
var caprazIkinciDefa = 3;
function hedefFunc(rotaX, rotaY) {

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
        // console.log("Top Kalan: "+(yKalanMesafe)+" Left Kalan: "+(xKalanMesafe));
        if (yKalanMesafe > xKalanMesafe) {
            // yArtir=2;
            yArtirBool = true;
            // console.log("topBuyuk");
        }
        else if (yKalanMesafe < xKalanMesafe) {
            // xArtir=2;
            xArtirBool = true;
            // console.log("leftBuyuk");            
        }
        // if(caprazIkinciDefa<=2)
        //     {
        //         if(caprazIkinciDefa==1)
        //         {
        //             caprazGit=true;
        //             caprazIkinciDefa=3;
        //         }
        //         else
        //         {
        //             caprazIkinciDefa--;                            
        //         }                                           
        //     }
        for (var i = 0; i < sinifListe.length; i++) {
            // if((rotaX==sinifListe[i].x1 || rotaX==sinifListe[i].x2) && (rotaY==sinifListe[i].y1 || rotaY==sinifListe[i].y2))
            // {
            //     rotaX=rotaX+1*xIsaret*(-1);
            //     rotaY=rotaY+1*yIsaret*(-1);
            //     document.getElementById("buradasinizRota").style["left"] = rotaX+"px";
            //     document.getElementById("buradasinizRota").style["top"] = rotaY+"px";  
            //     caprazIkinciDefa=2;
            //     yeniHedefFunc(hedefX-5,hedefY);                      
            //     break;
            // }
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

    if (hedefY == rotaY && hedefX == rotaX) console.log("tamamlandı");
    else hedefFunc(rotaX, rotaY);

}



var sinifListe = [];

function ekle() {
    sinifListe = [];
    sinifListe.push({ sinifAdi: 'jeoFizikSolUst', x1: 0, x2: 633, y1: 0, y2: 94 });
    sinifListe.push({ sinifAdi: 'fenBilimleri', x1: 650, x2: 1054, y1: 0, y2: 94 });
    sinifListe.push({ sinifAdi: '301_303_305', x1: 1072, x2: 1286, y1: 0, y2: 94 });
    sinifListe.push({ sinifAdi: 'amfiAB', x1: 1286, x2: 1381, y1: 0, y2: 128 });
    sinifListe.push({ sinifAdi: 'ogretimUyeleri', x1: 1410, x2: 1687, y1: 0, y2: 104 });
    sinifListe.push({ sinifAdi: 'fenBilim', x1: 649, x2: 883, y1: 105, y2: 10000 });  //
    sinifListe.push({ sinifAdi: 'elektronikHaberlesme', x1: 883, x2: 1131, y1: 95, y2: 10000 });
    sinifListe.push({ sinifAdi: 'jeoFizikGaleriBosluguSagi', x1: 586, x2: 701, y1: 135, y2: 10000 });
    sinifListe.push({ sinifAdi: 'GaleriJEO', x1: 438, x2: 559, y1: 136, y2: 198 });
    sinifListe.push({ sinifAdi: 'GaleriBilgisayar', x1: 1149, x2: 1270, y1: 128, y2: 202 });
    sinifListe.push({ sinifAdi: 'JeoDerslikler', x1: 0, x2: 412, y1: 0, y2: 202 });
    sinifListe.push({ sinifAdi: 'BilgisayarLablar', x1: 1114, x2: 1274, y1: 230, y2: 10000 });
    sinifListe.push({ sinifAdi: 'obss', x1: 1296, x2: 1381, y1: 129, y2: 271 });
    sinifListe.push({ sinifAdi: 'wc', x1: 1324, x2: 1391, y1: 295, y2: 373 });

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


function sinifKoordinat(sinif) {
    if (sinif == '300') //BM301
    {
        hedefX = 854;
        hedefY = 95;
    }
    if (sinif == '301') //BM301
    {
        hedefX = 1236;
        hedefY = 98;
    }
    else if (sinif == '303') //BM303
    {
        hedefX = 1206;
        hedefY = 98;
    }
    else if (sinif == '305') //BM305
    {
        hedefX = 1170;
        hedefY = 99;
    }
    else if (sinif == '306') //BMamfiA
    {
        hedefX = 358;
        hedefY = 116;
    }
    else if (sinif == '307') //BMamfiB
    {
        hedefX = 244;
        hedefY = 118;
    }
    else if (sinif == '308') //BMelektronikLab
    {
        hedefX = 294;
        hedefY = 132;
    }
    else if (sinif == '309') //BMkablosuzLab
    {
        hedefX = 86;
        hedefY = 128;
    }
    else if (sinif == '310') //BMgoruntuLab
    {
        hedefX = 86;
        hedefY = 216;
    }
    else if (sinif == '311') //BMbilgisayarLab
    {
        hedefX = 86;
        hedefY = 250;
    }
    else if (sinif == '312') //BMdekanlikLab
    {
        hedefX = 164;
        hedefY = 250;
    }
    else if (sinif == '313') //BMgomuluSistemLab
    {
        hedefX = 372;
        hedefY = 272;
    }
    else if (sinif == '314') //BMofis
    {
        hedefX = 560;
        hedefY = 110;
    }
    else if (sinif == '315') //BMbolumBaskanligi
    {
        hedefX = 678;
        hedefY = 108;
    }
    else if (sinif == '333') //DENEME
    {
        hedefX = 854;
        hedefY = 95;
    }
}

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
        konumX = 427;
        konumY = 223;
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