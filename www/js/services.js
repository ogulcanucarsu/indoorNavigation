var barcodeSonuc;
var gitBolgeIndex=0;
var sonHedefX;
var sonHedefY;
var engelliBool=false;
var yazdirmaAdim=0;
var adimAralik=5;
angular.module('starter.services', [])

    .factory('Chats', function () {
 
        var hedefler = [
            { s_id:301,  s_kat:3,  s_name:'BM 301',                   s_x:1232, s_y:96},
            { s_id:303,  s_kat:3,  s_name:'BM 303',                   s_x:1211, s_y:96},
            { s_id:305,  s_kat:3,  s_name:'BM 305',                   s_x:1141, s_y:96},
            { s_id:306,  s_kat:3,  s_name:'BM Amfi A',                s_x:1283, s_y:111},
            { s_id:307,  s_kat:3,  s_name:'BM Amfi B',                s_x:1387, s_y:111},  
            { s_id:308,  s_kat:3,  s_name:'BM Elektronik Lab.',       s_x:1320, s_y:125},  
            { s_id:309,  s_kat:3,  s_name:'BM Kablosuz İletisim Lab.',s_x:1128, s_y:120},  
            { s_id:310,  s_kat:3,  s_name:'BM Görüntü İşleme Lab.',   s_x:1128, s_y:205},  
            { s_id:311,  s_kat:3,  s_name:'BM Bilgisayar Lab.',       s_x:1130, s_y:237},  
            { s_id:312,  s_kat:3,  s_name:'BM Dekanlık Lab.',         s_x:1202, s_y:238},  
            { s_id:313,  s_kat:3,  s_name:'BM Gömülü Sistem Lab.',    s_x:1400, s_y:257},  
            { s_id:314,  s_kat:3,  s_name:'BM Öğretim Üyeleri Ofis',  s_x:1578, s_y:105},  
            { s_id:315,  s_kat:3,  s_name:'BM Bölüm Başlanlığı',      s_x:1688, s_y:106},
            { s_id:316,  s_kat:3,  s_name:'BM BAY WC',                s_x:1315, s_y:349},
            { s_id:317,  s_kat:3,  s_name:'BM BAYAN WC',              s_x:1315, s_y:447},
            { s_id:318,  s_kat:3,  s_name:'BM Giriş',                 s_x:1396, s_y:366},
            { s_id:300,  s_kat:3,  s_name:'F Giriş Asansör',          s_x:865,  s_y:97},

            { s_id:399,  s_kat:2,  s_name:'Sismoloji DENEME',        s_x:577,  s_y:226},                           

            { s_id:102,  s_kat:3,  s_name:'Jeofizik 102',              s_x:421,  s_y:97},                           
            { s_id:104,  s_kat:3,  s_name:'Jeofizik 104',              s_x:421,  s_y:97},                           
            { s_id:106,  s_kat:3,  s_name:'Jeofizik 106',              s_x:441,  s_y:97},                           
            { s_id:108,  s_kat:3,  s_name:'Jeofizik 108',              s_x:577,  s_y:97},                           
            { s_id:110,  s_kat:3,  s_name:'Jeofizik 110',              s_x:419,  s_y:148},                           
            { s_id:111,  s_kat:3,  s_name:'Jeofizik Doktora Sınıfı',   s_x:557,  s_y:97},                           
            { s_id:112,  s_kat:3,  s_name:'Jeofizik Lab',              s_x:604,  s_y:130},                           
            { s_id:113,  s_kat:3,  s_name:'Jeofizik Sismoloji Lab',    s_x:577,  s_y:226},                           
            { s_id:114,  s_kat:3,  s_name:'Jeofizik Dekanlik Lab',     s_x:541,  s_y:236},                           
            { s_id:115,  s_kat:3,  s_name:'Jeofizik Veri işleme Lab',  s_x:462,  s_y:235}    

        ];

        return {
            all: function () {
                return hedefler;
            },
            allBolum: function (bolumId) {
                var yeniListe=[];
                for (var i = 0; i < hedefler.length; i++) {
                    var _id=(hedefler[i].s_id).toString();
                    var _id=_id.charAt(0);
                    if (_id == bolumId) {
                        yeniListe.push(hedefler[i]);
                    }
                }
                return yeniListe;
            },
            get: function (chatId) {
                for (var i = 0; i < hedefler.length; i++) {
                    if (hedefler[i].s_id === parseInt(chatId)) {
                        return hedefler[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Bolumler', function () {

        var bolumHedefler = [
            { s_id:3,  s_name:'Bilgisayar Mühendisliği' },
            { s_id:1,  s_name:'Jeofizik Mühendisliği' },  
            { s_id:2,  s_name:'Çevre Mühendisliği' },  
            { s_id:4,  s_name:'Elektronik ve Haberleşme Mühendisliği', },  
            { s_id:5,  s_name:'Endüstri Mühendisliği' },  
            { s_id:6,  s_name:'Harita Mühendisliği' },  
            { s_id:7,  s_name:'İnşaat Mühendisliği' },  
            { s_id:8,  s_name:'Elektrik Mühendisliği' },  
            { s_id:9,  s_name:'Jeoloji Mühendisliği' },  
            { s_id:10, s_name:'Kimya Mühendisliği' },  
            { s_id:11, s_name:'Makine Mühendisliği' },  
            { s_id:12, s_name:'Metalurji ve Malzeme Mühendisliği' },  
            { s_id:13, s_name:'Diğer' },  
        ];

        return {
            all: function () {
                return bolumHedefler;
            },
            get: function (chatId) {
                for (var i = 0; i < bolumHedefler.length; i++) {
                    if (bolumHedefler[i].s_id === parseInt(chatId)) {
                        return bolumHedefler[i];
                    }
                }
                return null;
            }
        };
    });

var hedefX;
var hedefY;
var caprazGit = false;
var oncekiRotaX;
var oncekiRotaY;
function hedefFunc(rotaX, rotaY) {
// console.log("calisiyor");
    var yeniHedefX; //top cakisirsa
    var yeniHedefY;
    var yeniHedefBool = false;
    var yeniHedefBool2 = false;

    function yeniHedefFunc(hedefX, hedefY) {
        yazdirmaAdim++;
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
        //#region Rotate
            if(rotaX<oncekiRotaX && rotaY<oncekiRotaY)
            {img.className='rotate-45';} //sol üst
            else if(rotaX<oncekiRotaX && rotaY>oncekiRotaY)
            {img.className='rotate-135';} //sol alt
            else if(rotaX>oncekiRotaX && rotaY>oncekiRotaY)
            {img.className='rotate135';} //sağ alt
            else if(rotaX>oncekiRotaX && rotaY<oncekiRotaY)
            {img.className='rotate45';} //sağ üst
            else if(rotaX>oncekiRotaX && rotaY==oncekiRotaY)
            {img.className='rotate90';}
            else if(rotaX<oncekiRotaX && rotaY==oncekiRotaY)
            {img.className='rotate-90';}
            else if(rotaX==oncekiRotaX && rotaY>oncekiRotaY)
            {img.className='rotate-180';}
            else {img.className='rotate0';}
        //#endregion Rotate
        var div = document.getElementById('harita');

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
            oncekiRotaX=rotaX;
            oncekiRotaY=rotaY;  

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

                if(yazdirmaAdim%adimAralik==0){
                    img.onload = function () {
                            div.appendChild(img);
                    };
                    document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                    document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                }

                if (yeniHedefBool) {
                    // console.log("yeni hedef 1 calisti");
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
                if(yazdirmaAdim%adimAralik==0)
                {
                    img.onload = function () {
                        div.appendChild(img);
                    };
                    document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                    document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                }
                if (yeniHedefBool2) {
                    // console.log("yeni hedef 2 calisti");
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
                if(yazdirmaAdim%adimAralik==0)
                {
                    img.onload = function () {
                        div.appendChild(img);
                    };
                    document.getElementById("buradasinizRota").style["left"] = rotaX + "px";
                    document.getElementById("buradasinizRota").style["top"] = rotaY + "px";
                }
                break;
            }
        }

    }

    yeniHedefFunc(hedefX, hedefY);

    
    if(durdurD)
    {
        //  setTimeout(function(){
            if (hedefY == rotaY && hedefX == rotaX) 
            {
                gitBolgeIndex++;
            }
            
            if(gitBolgeIndex!=gitBolgeler.length)
            {
                try
                {
                    hedefX=gitBolgeler[gitBolgeIndex].x;
                    hedefY=gitBolgeler[gitBolgeIndex].y;    
                }
                catch(err)
                {

                }
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
        //  },1);
    }

}

//#region Bölgeler Arası Yönlendirme
    var kat3Koordinatlar=[];
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'1',x:854,y:95}); //kuzey
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'3',x:1314,y:365}); //doğu
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'5',x:0,y:0}); //güney
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'7',x:0,y:0}); //batı

    var kat2Koordinatlar=[];
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'1',x:854,y:95}); //kuzey
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'3',x:1404,y:365}); //doğu
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'5',x:854,y:694}); //güney
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'7',x:307,y:365}); //batı

    var bolgeler=[];
    bolgeler.push({kat:'0',x:0,y:0});
    bolgeler.push({kat:'1',x:0,y:0});
    bolgeler.push({kat:'2',x:853,y:398,gitKoordinat:kat2Koordinatlar});
    bolgeler.push({kat:'3',x:853,y:398,gitKoordinat:kat3Koordinatlar});

    function bolgeKontrol(bolgeX,bolgeY,kat)
    {
        if(bolgeX<bolgeler[kat].x && bolgeY<bolgeler[kat].y)      { return 0;}
        else if(bolgeX>bolgeler[kat].x && bolgeY<bolgeler[kat].y) { return 2;}
        else if(bolgeX>bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 4;}
        else if(bolgeX<bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 6;}
    }
    var gitBolgeler=[];
    function gidilecekBolgeler(kendiBolgesi,hedefBolgesi,kat)
    {
        gitBolgeler=[];
        console.log(kendiBolgesi,hedefBolgesi);    
        var isaret=-1;
        var fark=hedefBolgesi-kendiBolgesi;
        if(fark>0) isaret=1;
        if(fark>2) isaret=isaret*(-1);
        if(fark==0) {  //cikis 
        }
        else
        {
            while(kendiBolgesi!=hedefBolgesi)
            {
                var katIndex=kendiBolgesi+1*isaret;
                kendiBolgesi+=2*isaret;
                if(katIndex==-1) katIndex=7;
                else if(katIndex==9) katIndex=1;          
                if(kendiBolgesi==-2) kendiBolgesi=6;
                else if(kendiBolgesi==8) kendiBolgesi=0;  

                gitBolgeler.push({x:bolgeler[kat].gitKoordinat[katIndex].x,y:bolgeler[kat].gitKoordinat[katIndex].y});

            }
        }
        console.log(gitBolgeler);
    }
//#endregion Bölgeler Arası Yönlendirme

//#region Sınıf Duvarları Koordinat Belirleme
    var sinifListe = [];
    sinifListe.push({ sinifAdi: 'jeoDerslikler',            sinifId:'1',    x1: 0,      x2: 633,         y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'fenElektrikUstSiniflar',   sinifId:'2',    x1: 650,    x2: 1054,        y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'bilgisayar301_303_305',    sinifId:'3',    x1: 1072,   x2: 1297,        y1: 0,       y2: 94 });
    sinifListe.push({ sinifAdi: 'bilgisayarAmfiAB',         sinifId:'4',    x1: 1290,   x2: 1381,        y1: 0,       y2: 124 });
    sinifListe.push({ sinifAdi: 'bilgisayarOgretimUyeleri', sinifId:'5',    x1: 1410,   x2: 1687,        y1: 0,       y2: 104 });
    sinifListe.push({ sinifAdi: 'fenElektrikAltSiniflar',   sinifId:'6',    x1: 644,    x2: 1122,        y1: 98,      y2: 10000 });  //
    sinifListe.push({ sinifAdi: 'jeoSagdakiDerslikler',     sinifId:'7',    x1: 580,    x2: 660,         y1: 132,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'jeoGALERI',                sinifId:'8',    x1: 430,    x2: 559,         y1: 128,     y2: 199 });
    sinifListe.push({ sinifAdi: 'GaleriBilgisayar',         sinifId:'9',    x1: 1141,   x2: 1270,        y1: 128,     y2: 202 });
    sinifListe.push({ sinifAdi: 'JeoSoldakiDerslikler',     sinifId:'10',   x1: 0,      x2: 412,         y1: 0,       y2: 202 });
    sinifListe.push({ sinifAdi: 'bilgisayarLablar',         sinifId:'11',   x1: 1112,   x2: 1270,        y1: 238 ,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarObssSol',        sinifId:'12',   x1: 1294,   x2: 1333,        y1: 126,     y2: 198 });
    sinifListe.push({ sinifAdi: 'bilgisayarObss',           sinifId:'12',   x1: 1319,   x2: 1381,        y1: 126,     y2: 271 });
    sinifListe.push({ sinifAdi: 'bilgisayarWC',             sinifId:'13',   x1: 1316,   x2: 1391,        y1: 295,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarSagLab',         sinifId:'14',   x1: 1401,   x2: 1686,        y1: 106,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'bilgisayarLablarSag',      sinifId:'15',   x1: 1260,   x2: 1307,        y1: 303,     y2: 10000 });
    sinifListe.push({ sinifAdi: 'jeoAltLablar',             sinifId:'16',   x1: 366,    x2: 597,         y1: 243,     y2: 10000 });

    sinifListe.push({ son: 'son' });
    console.log(sinifListe);
//#endregion Sınıf Duvarları Koordinat Belirleme

//#region Merdiven ve Asansör Koordinat Belirleme
    var merdivenlerListe = [];
    var merdivenListeKat3=[];
    var merdivenListeKat2=[];    
    function altKataInıs()
    {
        merdivenlerListe = [];

        merdivenListeKat2=[];    
        merdivenListeKat3=[];
        
        //Kat 3 merdiven koordinatlar
            merdivenListeKat3.push({ merdivenAdi: 'ogretmenlerMerdiven', x1: 1480, y1: 105 });
            merdivenListeKat3.push({ merdivenAdi: 'BilgisayarGirisMerdiven', x1: 1398, y1: 394 });
            merdivenListeKat3.push({ merdivenAdi: 'bilgisayarYanMerdiven', x1: 1063, y1: 97 });
            merdivenListeKat3.push({ merdivenAdi: 'FgirisYanMerdiven', x1: 852, y1: 97 });
            // merdivenListeKat3.push({ merdivenAdi: 'jeoFizikMerdiven', x1: 641, y1: 97 });
            merdivenListeKat3.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 306, y1: 483 });
            merdivenListeKat3.push({ son: 'son' });
        //Kat 3 merdiven koordinatlar

        //Kat 2 merdiven koorinatlar
            merdivenListeKat2.push({ merdivenAdi: 'bilgisayarYanMerdiven', x1: 1063, y1: 97 });
            merdivenListeKat2.push({ merdivenAdi: 'ogretmenlerMerdiven', x1: 1480, y1: 105 });
            merdivenListeKat2.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 306, y1: 483 });
            merdivenListeKat2.push({ merdivenAdi: 'BGirisMerdiven', x1: 1398, y1: 394 });
            merdivenListeKat2.push({ merdivenAdi: 'FgirisYanMerdiven', x1: 852, y1: 97 });            
            merdivenListeKat2.push({ son: 'son' });
        //Kat 2 merdiven koorinatlar

        merdivenlerListe.push({ kat: 3, merdivenListe: merdivenListeKat3 });   
    }
    function EaltKataInıs()
    {
        merdivenlerListe = [];
        merdivenListeKat3=[];
        merdivenListeKat2=[];  

        //Kat 3 asansor koordinatlar
            merdivenListeKat3.push({ merdivenAdi: 'asansor', x1: 852, y1: 97 });
            merdivenListeKat3.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 306, y1: 483 });
            merdivenListeKat3.push({ son: 'son' });
        //Kat 3 asansor koordinatlar

        //Kat 2 asansor koordinatlar
            merdivenListeKat2.push({ merdivenAdi: 'asansor', x1: 852, y1: 97 });
            merdivenListeKat2.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 306, y1: 483 });
            merdivenListeKat2.push({ son: 'son' });
        //Kat 2 asansor koordinatlar


        merdivenlerListe.push({ kat: 3, merdivenListe: merdivenListeKat3 });   
        console.log(merdivenlerListe); 
    }
    
    function enYakinMerdiven(solHiza3, topHiza3) {
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
        sonHedefX = hedefX;
        sonHedefY = hedefY;
    }

//#endregion Merdiven ve Asansör Koordinat Belirleme


function iecompattest() {
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}


var durdurD=true;
function durdur()
{
    durdurD=false;
}