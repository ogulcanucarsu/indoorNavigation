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
            { s_id:312,  s_kat:3,  s_name:'BM Dekanlık Lab.',         s_x:1202, s_y:237},  
            { s_id:313,  s_kat:3,  s_name:'BM Gömülü Sistem Lab.',    s_x:1400, s_y:257},  
            { s_id:314,  s_kat:3,  s_name:'BM Öğretim Üyeleri Ofis',  s_x:1578, s_y:105},  
            { s_id:315,  s_kat:3,  s_name:'BM Bölüm Başlanlığı',      s_x:1688, s_y:106},
            { s_id:316,  s_kat:3,  s_name:'BM BAY WC',                s_x:1315, s_y:349},
            { s_id:317,  s_kat:3,  s_name:'BM BAYAN WC',              s_x:1315, s_y:447},
            { s_id:318,  s_kat:3,  s_name:'BM Giriş',                 s_x:1396, s_y:366},
            { s_id:300,  s_kat:3,  s_name:'F Giriş Asansör',          s_x:865,  s_y:97},

            // { s_id:399,  s_kat:2,  s_name:'Sismoloji DENEME',        s_x:577,  s_y:97},                           

            { s_id:102,  s_kat:3,  s_name:'Jeofizik 102',              s_x:421,  s_y:97},                           
            { s_id:104,  s_kat:3,  s_name:'Jeofizik 104',              s_x:421,  s_y:97},                           
            { s_id:106,  s_kat:3,  s_name:'Jeofizik 106',              s_x:441,  s_y:97},                           
            { s_id:108,  s_kat:3,  s_name:'Jeofizik 108',              s_x:577,  s_y:97},                           
            { s_id:110,  s_kat:3,  s_name:'Jeofizik 110',              s_x:419,  s_y:148},                           
            { s_id:111,  s_kat:3,  s_name:'Jeofizik Doktora Sınıfı',   s_x:557,  s_y:97},                           
            { s_id:112,  s_kat:3,  s_name:'Jeofizik Lab',              s_x:604,  s_y:130},                           
            { s_id:113,  s_kat:3,  s_name:'Jeofizik Sismoloji Lab',    s_x:577,  s_y:226},                           
            { s_id:114,  s_kat:3,  s_name:'Jeofizik Dekanlik Lab',     s_x:541,  s_y:236},                           
            { s_id:115,  s_kat:3,  s_name:'Jeofizik Veri işleme Lab',  s_x:462,  s_y:235}, 
            { s_id:116,  s_kat:3,  s_name:'Jeofizik Giriş',             s_x:307,  s_y:375}, 


            { s_id:401,  s_kat:2,  s_name:'Elektrik Derslik 202',  s_x:1127,  s_y:698}, 
            { s_id:402,  s_kat:2,  s_name:'Elektrik Derslik 204',  s_x:1155,  s_y:698}, 
            { s_id:403,  s_kat:2,  s_name:'Elektrik Derslik 206',  s_x:1247,  s_y:698}, 
            { s_id:404,  s_kat:2,  s_name:'Elektrik Derslik 208',  s_x:1277,  s_y:698}, 
            { s_id:405,  s_kat:2,  s_name:'Elektrik Derslik 210',  s_x:1198,  s_y:563}, 
            { s_id:406,  s_kat:2,  s_name:'Elektrik Derslik 212',  s_x:1421,  s_y:420}, 
            { s_id:407,  s_kat:2,  s_name:'Elektrik Derslik 214',  s_x:1121,  s_y:565}, 
            { s_id:408,  s_kat:2,  s_name:'Elektrik Ent Analiz',  s_x:1133,  s_y:243}, 
            { s_id:409,  s_kat:2,  s_name:'Elektrik Amfi 1',  s_x:1421,  s_y:388}, 
            { s_id:410,  s_kat:2,  s_name:'Elektrik Tesisleri',  s_x:1311,  s_y:368}, 
            { s_id:411,  s_kat:2,  s_name:'Güç Sistemleri Lab.',  s_x:1311,  s_y:439}, 
            { s_id:412,  s_kat:2,  s_name:'Elektrik Pelsan',  s_x:1269,  s_y:566}, 
            { s_id:413,  s_kat:2,  s_name:'Elektrik Tesisleri ABD Arş. Lab.',  s_x:1313,  s_y:673}, 
            { s_id:414,  s_kat:2,  s_name:'Elektrik Makinaları ABD Arş. Lab.',  s_x:1350,  s_y:673},
            { s_id:415,  s_kat:2,  s_name:'Elektrik Öğretim Üyeleri',  s_x:1569,  s_y:690},
            { s_id:416,  s_kat:2,  s_name:'Elektrik Bay WC',  s_x:1308,  s_y:356}, 
            { s_id:417,  s_kat:2,  s_name:'Elektrik Bayan WC',  s_x:1308,  s_y:450},  


            { s_id:501,  s_kat:2,  s_name:'Jeoloji Derslik 101',  s_x:418,  s_y:698},
            { s_id:502,  s_kat:2,  s_name:'Jeoloji Derslik 103',  s_x:442,  s_y:698},
            { s_id:503,  s_kat:2,  s_name:'Jeoloji Derslik 105',  s_x:541,  s_y:698},
            { s_id:504,  s_kat:2,  s_name:'Jeoloji Derslik 107',  s_x:597,  s_y:698},
            { s_id:505,  s_kat:2,  s_name:'Analitik Jeokimya 1',  s_x:418,  s_y:667},
            { s_id:506,  s_kat:2,  s_name:'Analitik Jeokimya 2',  s_x:418,  s_y:676},
            { s_id:507,  s_kat:2,  s_name:'Jeoloji Lisans Üstü Öğrenci Odası',  s_x:610,  s_y:671},
            { s_id:508,  s_kat:2,  s_name:'Genel Jeoloji Lab',  s_x:580,  s_y:563},
            { s_id:509,  s_kat:2,  s_name:'Jeoloji Mikroskop Lab.',  s_x:461,  s_y:562},
            { s_id:510,  s_kat:2,  s_name:'Jeoloji Maden Yatakları Lab.',  s_x:542,  s_y:562},
            { s_id:511,  s_kat:2,  s_name:'Jeoloji Öğretim Üyeleri',  s_x:319,  s_y:538},
            { s_id:512,  s_kat:2,  s_name:'Jeoloji Bölüm Başlanlığı',  s_x:319,  s_y:538},

            { s_id:601,  s_kat:2,  s_name:'Mühendislik Dekan Yardımcısı',   s_x:721,  s_y:700},
            { s_id:602,  s_kat:2,  s_name:'Mühendislik Dekan',              s_x:738,  s_y:700},
            { s_id:603,  s_kat:2,  s_name:'Mühendislik Fakülte Sekreteri',  s_x:762,  s_y:700},
            { s_id:604,  s_kat:2,  s_name:'Mühendislik Staj SGK Sorumlusu', s_x:947,  s_y:700},
            { s_id:605,  s_kat:2,  s_name:'Mühendislik Teknisyen',          s_x:1008,  s_y:700},
            { s_id:606,  s_kat:2,  s_name:'Mühendislik Muhasebe',           s_x:1023,  s_y:700},

            // { s_id:600,  s_kat:2,  s_name:'xxxxxx',  s_x:0000,  s_y:000},
            // { s_id:600,  s_kat:2,  s_name:'xxxxxx',  s_x:0000,  s_y:000},
            // { s_id:600,  s_kat:2,  s_name:'xxxxxx',  s_x:0000,  s_y:000},

            { s_id:210,  s_kat:2,  s_name:'Kimya Derslik 201',               s_x:1128,  s_y:220},             
            { s_id:207,  s_kat:2,  s_name:'Kimya Derslik 203',               s_x:1244,  s_y:107}, 
            { s_id:201,  s_kat:2,  s_name:'Kimya Derslik 205',               s_x:918,   s_y:106}, 
            { s_id:202,  s_kat:2,  s_name:'Kimya Derslik 207',               s_x:918,  s_y:107}, 
            { s_id:203,  s_kat:2,  s_name:'Kimya Derslik 209',               s_x:969,  s_y:107}, 
            { s_id:204,  s_kat:2,  s_name:'Kimya Kule',                s_x:945,  s_y:107}, 
            { s_id:205,  s_kat:2,  s_name:'Kimya Yüksek Lisans',       s_x:996,  s_y:107}, 
            { s_id:206,  s_kat:2,  s_name:'Kimya Lab.',                s_x:1159,  s_y:107}, 
            { s_id:208,  s_kat:2,  s_name:'Kimya Membran',             s_x:1308,  s_y:107}, 
            { s_id:209,  s_kat:2,  s_name:'Fiziko Kimya Lab.',         s_x:1128,  s_y:157}, 
            { s_id:211,  s_kat:2,  s_name:'Kimya İşleme Lab.',         s_x:1330,  s_y:134}, 
            { s_id:212,  s_kat:2,  s_name:'Kimya Polimer Atölyesi',          s_x:1283,  s_y:249}, 
            { s_id:213,  s_kat:2,  s_name:'Kimyasal Madde Odası',      s_x:1336,  s_y:273}, 
            { s_id:214,  s_kat:2,  s_name:'Kimya Karakterizasyon Lab.',      s_x:1393,  s_y:147}, 
            { s_id:215,  s_kat:2,  s_name:'Kimya Reaksiyon Lab.',            s_x:1376,  s_y:228}, 
            { s_id:216,  s_kat:2,  s_name:'Kimya Öğretim Üyeleri Ofis',s_x:1567,  s_y:118}, 
            { s_id:217,  s_kat:2,  s_name:'Kimya Bölüm Başlanlığı',    s_x:1680,  s_y:118}
            // { s_id:218,  s_kat:2,  s_name:'2. Kat Deneme',    s_x:316,  s_y:536}    ,        
            // { s_id:219,  s_kat:2,  s_name:'2. Kat Deneme2',    s_x:431,  s_y:684}            
            // { s_id:212,  s_kat:2,  s_name:'xxxxxx',  s_x:1336,  s_y:273}, 

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
            },
            sorgu: function (chatId)
            {
                for (var i = 0; i < hedefler.length; i++) {
                    if (hedefler[i].s_id === parseInt(chatId)) {
                        return true;
                    }
                }
                return false;
            }
        };
    })
    .factory('Bolumler', function () {

        var bolumHedefler = [
            { s_id:3,  s_name:'Bilgisayar Mühendisliği' },
            { s_id:1,  s_name:'Jeofizik Mühendisliği' },
            { s_id:2,  s_name:'Kimya Mühendisliği' }, 
            { s_id:4,  s_name:'Elektrik Mühendisliği' },
            { s_id:5,  s_name:'Jeoloji Mühendisliği' },
            { s_id:6,  s_name:'Diğer' }

            // { s_id:2,  s_name:'Çevre Mühendisliği' },  
            // { s_id:4,  s_name:'Elektronik ve Haberleşme Mühendisliği', },  
            // { s_id:5,  s_name:'Endüstri Mühendisliği' },  
            // { s_id:6,  s_name:'Harita Mühendisliği' },  
            // { s_id:7,  s_name:'İnşaat Mühendisliği' },  
            // { s_id:11, s_name:'Makine Mühendisliği' },  
            // { s_id:12, s_name:'Metalurji ve Malzeme Mühendisliği' },  
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
function hedefFunc(rotaX, rotaY,sinifKat) {
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

        // document.getElementById("myCanvas").style["left"] = 1078 + "px";
        // document.getElementById("myCanvas").style["top"] = 24 + "px";

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
        
        for (var i = 0; i < siniflar[sinifKat].sinif.length; i++) {
            oncekiRotaX=rotaX;
            oncekiRotaY=rotaY;  

            if (rotaX > siniflar[sinifKat].sinif[i].x1 && rotaX < siniflar[sinifKat].sinif[i].x2 && (rotaY == siniflar[sinifKat].sinif[i].y1 || rotaY == siniflar[sinifKat].sinif[i].y2)) {
                rotaX = rotaX + 1 * xIsaret;
                rotaY = rotaY + 0;

                if (rotaX == hedefX && Math.abs((siniflar[sinifKat].sinif[i].x1 - rotaX)) < Math.abs((siniflar[sinifKat].sinif[i].x2 - rotaX))) {
                    yeniHedefX = siniflar[sinifKat].sinif[i].x1;
                    //sola Yakın X1
                    if (Math.abs((siniflar[sinifKat].sinif[i].y1 - rotaY)) > Math.abs((siniflar[sinifKat].sinif[i].y2 - rotaY))) {
                        yeniHedefY = siniflar[sinifKat].sinif[i].y1;
                    }
                    else {
                        yeniHedefY = siniflar[sinifKat].sinif[i].y2;
                    }
                    yeniHedefBool = true;
                }
                else if (rotaX == hedefX && Math.abs((siniflar[sinifKat].sinif[i].x1 - rotaX)) > Math.abs((siniflar[sinifKat].sinif[i].x2 - rotaX))) {
                    yeniHedefX = siniflar[sinifKat].sinif[i].x2;
                    //sola Yakın X1
                    if (Math.abs((siniflar[sinifKat].sinif[i].y1 - rotaY)) > Math.abs((siniflar[sinifKat].sinif[i].y2 - rotaY))) {
                        yeniHedefY = siniflar[sinifKat].sinif[i].y1;
                    }
                    else {
                        yeniHedefY = siniflar[sinifKat].sinif[i].y2;
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
            else if (rotaY > siniflar[sinifKat].sinif[i].y1 && rotaY < siniflar[sinifKat].sinif[i].y2 && (rotaX == siniflar[sinifKat].sinif[i].x1 || rotaX == siniflar[sinifKat].sinif[i].x2)) {
                rotaX = rotaX + 0;
                rotaY = rotaY + 1 * yIsaret;

                if (rotaY == hedefY && Math.abs((siniflar[sinifKat].sinif[i].y1 - rotaY)) < Math.abs((siniflar[sinifKat].sinif[i].y2 - rotaY))) {
                    yeniHedefY = siniflar[sinifKat].sinif[i].y1;
                    //yukarı yakin y1
                    if (Math.abs((siniflar[sinifKat].sinif[i].x1 - rotaX)) > Math.abs((siniflar[sinifKat].sinif[i].x2 - rotaX))) {
                        yeniHedefX = siniflar[sinifKat].sinif[i].x1;
                    }
                    else {
                        yeniHedefX = siniflar[sinifKat].sinif[i].x2;
                    }
                    yeniHedefBool2 = true;
                }
                else if (rotaY == hedefY && Math.abs((siniflar[sinifKat].sinif[i].y1 - rotaY)) > Math.abs((siniflar[sinifKat].sinif[i].y2 - rotaY))) {
                    yeniHedefY = siniflar[sinifKat].sinif[i].y2;
                    //asagi Yakın y2
                    if (Math.abs((siniflar[sinifKat].sinif[i].x1 - rotaX)) > Math.abs((siniflar[sinifKat].sinif[i].x2 - rotaX))) {
                        yeniHedefX = siniflar[sinifKat].sinif[i].x1;
                    }
                    else {
                        yeniHedefX = siniflar[sinifKat].sinif[i].x2;
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
            else if (siniflar[sinifKat].sinif[i].son == 'son') {              
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
            setTimeout(function(){
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
            hedefFunc(rotaX, rotaY,sinifKat);
          },1);
    }

}

//#region Bölgeler Arası Yönlendirme
    var kat3Koordinatlar=[];
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'1',x:854,y:95}); //kuzey
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'3',x:1314,y:365}); //doğu
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'5',x:854,y:95}); //güney
    kat3Koordinatlar.push({}); //bos
    kat3Koordinatlar.push({name:'7',x:308,y:430}); //batı

    var kat2Koordinatlar=[];
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'1',x:854,y:107}); //kuzey
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'3',x:1400,y:385}); //doğu
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'5',x:852,y:699}); //güney
    kat2Koordinatlar.push({}); //bos
    kat2Koordinatlar.push({name:'7',x:310,y:403}); //batı

    var bolgeler=[];
    bolgeler.push({kat:'0',x:0,y:0});
    bolgeler.push({kat:'1',x:0,y:0});
    bolgeler.push({kat:'2',x:853,y:404,gitKoordinat:kat2Koordinatlar});
    bolgeler.push({kat:'3',x:853,y:398,gitKoordinat:kat3Koordinatlar});

    function bolgeKontrol(bolgeX,bolgeY,kat)
    {
        if(bolgeX<bolgeler[kat].x && bolgeY<bolgeler[kat].y)      { return 0;}
        else if(bolgeX>bolgeler[kat].x && bolgeY<bolgeler[kat].y) { return 2;}
        else if(bolgeX>bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 4;}
        else if(bolgeX<bolgeler[kat].x && bolgeY>bolgeler[kat].y) { return 6;}
    }
    var gitBolgeler=[];
    function gidilecekBolgeler(kendiBolgesi,hedefBolgesi,kat,hedefX,hedefY,katFarkli)
    {
        gitBolgeler=[];
        console.log(kendiBolgesi,hedefBolgesi);    
        var isaret=-1;
        var fark=hedefBolgesi-kendiBolgesi;
        if(fark>0) isaret=1;
        if(katFarkli=="true" || kat=='3') 
        {
            if(fark>2) 
            isaret=isaret*(-1);
        }
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

                if(bolgeler[kat].gitKoordinat[katIndex].x==1400 && bolgeler[kat].gitKoordinat[katIndex].y==385)
                {
                    if(hedefX<1378)
                    {
                        bolgeler[kat].gitKoordinat[katIndex].x=1307;
                        bolgeler[kat].gitKoordinat[katIndex].y=404;
                    }
                    if(hedefX>1378 && hedefY<360)  //Yukardan aşağı gelirken kısmı eksik
                    {
                        bolgeler[kat].gitKoordinat[katIndex].x=1330;
                        bolgeler[kat].gitKoordinat[katIndex].y=289;
                    }
                }
                //  if(bolgeler[kat].gitKoordinat[katIndex].x==1314 && bolgeler[kat].gitKoordinat[katIndex].y==365)
                // {
                //     if(hedefX>1378)
                //     {
                //         bolgeler[kat].gitKoordinat[katIndex].x=1397;
                //         bolgeler[kat].gitKoordinat[katIndex].y=365;
                //     }
                // }
                gitBolgeler.push({x:bolgeler[kat].gitKoordinat[katIndex].x,y:bolgeler[kat].gitKoordinat[katIndex].y});
                
            }
        }
        console.log("Gidilen Bolgeler: "+gitBolgeler);
    }
//#endregion Bölgeler Arası Yönlendirme

//#region Sınıf Duvarları Koordinat Belirleme
    var siniflar=[];
    var sinifDuvarlariKat3=[];
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoDerslikler',            sinifId:'1',    x1: 0,      x2: 633,         y1: 0,       y2: 94 });
    sinifDuvarlariKat3.push({ sinifAdi: 'fenElektrikUstSiniflar',   sinifId:'2',    x1: 650,    x2: 1054,        y1: 0,       y2: 94 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayar301_303_305',    sinifId:'3',    x1: 1072,   x2: 1297,        y1: 0,       y2: 94 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarAmfiAB',         sinifId:'4',    x1: 1290,   x2: 1381,        y1: 0,       y2: 124 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarOgretimUyeleri', sinifId:'5',    x1: 1410,   x2: 1687,        y1: 0,       y2: 104 });
    sinifDuvarlariKat3.push({ sinifAdi: 'fenElektrikAltSiniflar',   sinifId:'6',    x1: 644,    x2: 1122,        y1: 98,      y2: 10000 });  //
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoSagdakiDerslikler',     sinifId:'7',    x1: 580,    x2: 660,         y1: 132,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoGALERI',                sinifId:'8',    x1: 430,    x2: 559,         y1: 128,     y2: 199 });
    sinifDuvarlariKat3.push({ sinifAdi: 'GaleriBilgisayar',         sinifId:'9',    x1: 1141,   x2: 1270,        y1: 128,     y2: 202 });
    sinifDuvarlariKat3.push({ sinifAdi: 'JeoSoldakiDerslikler',     sinifId:'10',   x1: 0,      x2: 412,         y1: 0,       y2: 202 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarLablar',         sinifId:'11',   x1: 1112,   x2: 1270,        y1: 238 ,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarObssSol',        sinifId:'12',   x1: 1294,   x2: 1333,        y1: 126,     y2: 198 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarObss',           sinifId:'12',   x1: 1319,   x2: 1381,        y1: 126,     y2: 271 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarWC',             sinifId:'13',   x1: 1316,   x2: 1391,        y1: 295,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarSagLab',         sinifId:'14',   x1: 1401,   x2: 1686,        y1: 106,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'bilgisayarLablarSag',      sinifId:'15',   x1: 1260,   x2: 1307,        y1: 303,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoAltLablar',             sinifId:'16',   x1: 366,    x2: 597,         y1: 238,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoOgretimUyeleri',        sinifId:'17',   x1: 0,    x2: 298,         y1: 243,     y2: 10000 });
    sinifDuvarlariKat3.push({ sinifAdi: 'jeoOgretimUyeleri',        sinifId:'18',   x1: 318,    x2: 385,         y1: 303,     y2: 493 });
    sinifDuvarlariKat3.push({ son: 'son' });

    var sinifDuvarlariKat2=[];
    sinifDuvarlariKat2.push({ sinifAdi: 'kimyaUstDerslikler',       sinifId:'1',    x1: 0,      x2: 1377,        y1: 0,       y2: 100 });
    sinifDuvarlariKat2.push({ sinifAdi: 'haritaOrtaKisim',          sinifId:'2',    x1: 650,    x2: 1055,        y1: 108,     y2: 693 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaGaleriBoslugu',      sinifId:'3',    x1: 1138,   x2: 1264,        y1: 135,     y2: 213 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaFizikoLab',          sinifId:'4',    x1: 1054,   x2: 1120,        y1: 140,     y2: 665 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaEntAnaliz2',         sinifId:'5',    x1: 1119,   x2: 1306,        y1: 306,     y2: 558 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaEntAnaliz1',         sinifId:'6',    x1: 1119,   x2: 1267,        y1: 247,     y2: 322 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaWC',                 sinifId:'7',    x1: 1319,   x2: 1385,        y1: 305,     y2: 498 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaOgretimUyeleri',     sinifId:'8',    x1: 1397,   x2: 1675,        y1: 0,       y2: 114 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaOgretimUyeleri2',    sinifId:'9',    x1: 1397,   x2: 1675,        y1: 120,     y2: 320 });
     sinifDuvarlariKat2.push({ sinifAdi: 'kimyaIslemeLab',          sinifId:'10',   x1: 1287,   x2: 1370,        y1: 142,     y2: 265 });
     sinifDuvarlariKat2.push({ sinifAdi: 'elektrikAmfi1',           sinifId:'11',   x1: 1434,   x2: 10000,       y1: 310,     y2: 500 });
     sinifDuvarlariKat2.push({ sinifAdi: 'elektrikOgretimOfisleri', sinifId:'12',   x1: 1400,   x2: 10000,       y1: 488,     y2: 687 });
     sinifDuvarlariKat2.push({ sinifAdi: 'elektrikOgretimOfisleri2',sinifId:'13',   x1: 1400,      x2: 10000,         y1: 692,       y2: 10000 });
     sinifDuvarlariKat2.push({ sinifAdi: '2.katHaritaEnAlt',        sinifId:'14',   x1: 0,      x2: 1374,         y1: 705,       y2: 10000 });
     sinifDuvarlariKat2.push({ sinifAdi: 'elektrikGaleri',          sinifId:'15',    x1: 1140,      x2: 1261,         y1: 597,       y2: 666 });
     sinifDuvarlariKat2.push({ sinifAdi: 'elektrikGaleriSagi',      sinifId:'16',    x1: 1285,      x2: 1372,         y1: 593,       y2: 666 });
     sinifDuvarlariKat2.push({ sinifAdi: 'genelJeolojiLab',         sinifId:'17',    x1: 582,      x2: 666,         y1: 0,       y2: 666 });
     sinifDuvarlariKat2.push({ sinifAdi: 'jeolojiMikroskob',        sinifId:'18',    x1: 437,      x2: 598,         y1: 0,       y2: 555 });
     sinifDuvarlariKat2.push({ sinifAdi: 'analitikJeoKimya',        sinifId:'19',    x1: 333,      x2: 411,         y1: 538,       y2: 10000 });
     sinifDuvarlariKat2.push({ sinifAdi: 'jeolojiOgretimUyeleri',   sinifId:'20',    x1: 0,      x2: 300,         y1: 489,       y2: 10000 });
     sinifDuvarlariKat2.push({ sinifAdi:'jeolojiOgretimUyeleriYani',sinifId:'21',    x1: 291,      x2: 342,         y1: 570,       y2: 10000 });
     sinifDuvarlariKat2.push({ sinifAdi: 'jeolojiGaleriBosluk',     inifId:'22',    x1: 441,      x2: 559,         y1: 602,       y2: 663 });
    // sinifDuvarlariKat2.push({ sinifAdi: 'xxxx',            sinifId:'1',    x1: 0,      x2: 0,         y1: 0,       y2: 0 });
    // sinifDuvarlariKat2.push({ sinifAdi: 'xxxx',            sinifId:'1',    x1: 0,      x2: 0,         y1: 0,       y2: 0 });
    // sinifDuvarlariKat2.push({ sinifAdi: 'xxxx',            sinifId:'1',    x1: 0,      x2: 0,         y1: 0,       y2: 0 });
    // sinifDuvarlariKat2.push({ sinifAdi: 'xxxx',            sinifId:'1',    x1: 0,      x2: 0,         y1: 0,       y2: 0 });
    sinifDuvarlariKat2.push({ son: 'son' });


    siniflar.push({sinif:''});
    siniflar.push({sinif:''});
    siniflar.push({sinif:sinifDuvarlariKat2});
    siniflar.push({sinif:sinifDuvarlariKat3});

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
            merdivenListeKat3.push({ merdivenAdi: 'BilgisayarGirisMerdiven', x1: 1396, y1: 366 });
            merdivenListeKat3.push({ merdivenAdi: 'bilgisayarYanMerdiven', x1: 1063, y1: 97 });
            merdivenListeKat3.push({ merdivenAdi: 'FgirisYanMerdiven', x1: 858, y1: 97 });
            // merdivenListeKat3.push({ merdivenAdi: 'jeoFizikMerdiven', x1: 641, y1: 97 });
            merdivenListeKat3.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 306, y1: 483 });
            merdivenListeKat3.push({ son: 'son' });
        //Kat 3 merdiven koordinatlar

        //Kat 2 merdiven koorinatlar
            merdivenListeKat2.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 312, y1: 494 });         
            merdivenListeKat2.push({ merdivenAdi: 'BGirisMerdiven', x1: 1394, y1: 390 });
            merdivenListeKat2.push({ merdivenAdi: 'ogretmenlerMerdiven', x1: 1472, y1:119 });
            merdivenListeKat2.push({ merdivenAdi: 'bilgisayarYanMerdiven', x1: 1061, y1:107 });
            merdivenListeKat2.push({ merdivenAdi: 'Fgiris', x1: 860, y1: 106 });            
            merdivenListeKat2.push({ son: 'son' });
        //Kat 2 merdiven koorinatlar

        merdivenlerListe.push({ kat: 0, merdivenListe: '' });   
        merdivenlerListe.push({ kat: 1, merdivenListe: '' });   
        merdivenlerListe.push({ kat: 2, merdivenListe: merdivenListeKat2 });   
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
            merdivenListeKat2.push({ merdivenAdi: 'asansor', x1: 860, y1: 107 });
            merdivenListeKat2.push({ merdivenAdi: 'jeoFizikGirisMerdiven', x1: 312, y1: 494 });
            merdivenListeKat2.push({ son: 'son' });
        //Kat 2 asansor koordinatlar

        merdivenlerListe.push({ kat: 0, merdivenListe: '' });   
        merdivenlerListe.push({ kat: 1, merdivenListe: '' });   
        merdivenlerListe.push({ kat: 2, merdivenListe: merdivenListeKat2 }); 
        merdivenlerListe.push({ kat: 3, merdivenListe: merdivenListeKat3 });   
        console.log(merdivenlerListe); 
    }
    
    function enYakinMerdiven(solHiza3, topHiza3,kat) {
        var enKucuk = { deger: 9999, index: 99 };
        // for (var i = 0; i < merdivenlerListe.length; i++) {
            for (var k = 0; k < merdivenlerListe[kat].merdivenListe.length; k++) {
                console.log(merdivenlerListe[kat].merdivenListe[k].x1 + "--" + merdivenlerListe[kat].merdivenListe[k].y1);
                var a = solHiza3 - merdivenlerListe[kat].merdivenListe[k].x1;
                var b = topHiza3 - merdivenlerListe[kat].merdivenListe[k].y1;
                var c = Math.sqrt(a * a + b * b);
                console.log("C= " + c);
                if (c < enKucuk.deger) {
                    enKucuk.deger = c;
                    enKucuk.index = k;
                }
                console.log("En Kucuk= " + enKucuk.deger + " index = " + enKucuk.index);
            }
        // }
        hedefX = merdivenlerListe[kat].merdivenListe[enKucuk.index].x1;
        hedefY = merdivenlerListe[kat].merdivenListe[enKucuk.index].y1;
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