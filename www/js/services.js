var barcodeSonuc;
angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var liste=[
      {s_id:301, s_name:'BM 301'},
      {s_id:303, s_name:'BM 303'},
      {s_id:305, s_name:'BM 305'},
      {s_id:306, s_name:'BM Amfi A'},
      {s_id:307, s_name:'BM Amfi B'},  
      {s_id:308, s_name:'BM Elektronik Lab.'},  
      {s_id:309, s_name:'BM Kablosuz İletisim Lab.'},  
      {s_id:310, s_name:'BM Görüntü İşleme Lab.'},  
      {s_id:311, s_name:'BM Bilgisayar Lab.'},  
      {s_id:312, s_name:'BM Dekanlık Lab.'},  
      {s_id:313, s_name:'BM Gömülü Sistem Lab.'},  
      {s_id:314, s_name:'BM Öğretim Üyeleri Ofis'},  
      {s_id:315, s_name:'BM Bölüm Başlanlığı'}  
  ];

  return {
    all: function() {
      return liste;
    },
    get: function(chatId) {
      for (var i = 0; i < liste.length; i++) {
        if (liste[i].s_id === parseInt(chatId)) {
          return liste[i];
        }
      }
      return null;
    }
    // push: function()
    // {
    //     for(var i=0;i<3;i++)
    //     {
    //       liste.push({s_id:9, s_name:'Eklendi'});
    //     }
    // }
  };
});

var pusulaListe =[];
var adimPusulaListe=[];

var solHiza=371;
var topHiza=374;

function hareketEt(adim)
{
      adimPusulaListe=pusulaListe.slice(Math.max(pusulaListe.length - adim, 0));

        for(var i=0;i<adim;i++)
        {
            pusulaDegeri=adimPusulaListe[i];
            if(pusulaDegeri>=22.5 && pusulaDegeri<=67.5)          
            {
                solaGit();
                yukariGit();
            }
            else if(pusulaDegeri>=67.5 && pusulaDegeri<=112.5)
            {
                yukariGit();
            }
            else if(pusulaDegeri>=112.5 && pusulaDegeri<=157.5)
            {
                sagaGit();
                yukariGit();
            }
            else if(pusulaDegeri>=157.5 && pusulaDegeri<=202.5)
            {
                sagaGit();
            }
            else if(pusulaDegeri>=202.5 && pusulaDegeri<=247.5)
            {
                sagaGit();
                asagiGit();
            }
            else if(pusulaDegeri>=247.5 && pusulaDegeri<=292.5)
            {
                asagiGit();
            }
            else if(pusulaDegeri>=292.5 && pusulaDegeri<=337.5)
            {
                solaGit();
                asagiGit();
            }
            else if(pusulaDegeri>=337.5 && pusulaDegeri<=360)
            {
                solaGit();
            }
            else if(pusulaDegeri>=0 && pusulaDegeri<=22.5)
            {
                solaGitf();
            }
        }
}
function solaGit()
    {
        var img = new Image();
        img.src = 'img/buradasinizKonum.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('harita');

        img.onload = function() {
            div.appendChild(img);
        };

        solHiza=solHiza-5;
        document.getElementById("buradasinizKonum").style["left"] = solHiza+"px";
    } 
function sagaGit()
    {
        var img = new Image();
        img.src = 'img/buradasinizKonum.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('harita');

        img.onload = function() {
            div.appendChild(img);
        };

        solHiza=solHiza+5;
        // topHiza=topHiza+1;
        document.getElementById("buradasinizKonum").style["left"] = solHiza+"px";
        // document.getElementById("buradasinID").style["top"] = topHiza+"px";  
    }
function asagiGit()
    {
        var img = new Image();
        img.src = 'img/buradasinizKonum.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('harita');

        img.onload = function() {
            div.appendChild(img);
        };

        // solHiza=solHiza+1;
        topHiza=topHiza+5;
        // document.getElementById("buradasinID").style["left"] = solHiza+"px";
        document.getElementById("buradasinizKonum").style["top"] = topHiza+"px";  
    }
function yukariGit()
    {
        var img = new Image();
        img.src = 'img/buradasinizKonum.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('harita');

        img.onload = function() {
            div.appendChild(img);
        };

        // solHiza=solHiza+1;
        topHiza=topHiza-5;
        // document.getElementById("buradasinID").style["left"] = solHiza+"px";
        document.getElementById("buradasinizKonum").style["top"] = topHiza+"px";  
    }

        var hedefLeft;
        var hedefTop;
function denemeHK(solHiza2,topHiza2)
    {
        
        var yeniHedefLeft;
        var yeniHedefTop;
        var yeniHedefBool=false;

        function yeniHedefFunc(hedefLeft,hedefTop)
        {
                var leftIsaret;
                if(hedefLeft>solHiza2) leftIsaret=1;
                else {leftIsaret=-1;}

                var topIsaret;
                if(hedefTop>topHiza2) topIsaret=1;
                else {topIsaret=-1;}
                
                
                var img = new Image();
                img.src = 'img/buradasinizRota.png';
                img.style["left"] = solHiza2+"px";
                img.style["top"] = topHiza2+ "px";    
                img.style["position"] = "absolute";  

                var div = document.getElementById('harita');

                img.onload = function() {
                    div.appendChild(img);
                };
                
                var leftKalan=Math.abs(hedefLeft-solHiza2);
                var topKalan=Math.abs(hedefTop-topHiza2);
                var leftArtir=1;
                var topArtir=1;
                console.log("Top Kalan: "+(topKalan)+" Left Kalan: "+(leftKalan));
                if(topKalan>leftKalan+3)
                {
                    topArtir=2;
                    console.log("topBuyuk");
                }
                if(leftKalan>topKalan+3)
                {
                    leftArtir=2;
                    console.log("leftBuyuk");            
                }

                for(var i=0;i<sinifListe.length;i++)
                {
                    if(solHiza2>sinifListe[i].x1 && solHiza2<sinifListe[i].x2 && (topHiza2==sinifListe[i].y1 || topHiza2==sinifListe[i].y2 ))
                    {
                        solHiza2=solHiza2+1*leftIsaret;
                        topHiza2=topHiza2+0;

                        if(solHiza2==hedefLeft && Math.abs((sinifListe[i].x1-solHiza2))<Math.abs((sinifListe[i].x2-solHiza2)))
                        {
                            yeniHedefLeft=sinifListe[i].x1; 
                            //sola Yakın X1
                            if(Math.abs((sinifListe[i].y1-topHiza2))>Math.abs((sinifListe[i].y2-topHiza2)))
                            {
                                yeniHedefTop=sinifListe[i].y1;                 
                            }
                            else
                            {
                                yeniHedefTop=sinifListe[i].y2; 
                            }
                            yeniHedefBool=true;
                        }
                        else if(solHiza2==hedefLeft && Math.abs((sinifListe[i].x1-solHiza2))>Math.abs((sinifListe[i].x2-solHiza2)))
                        {
                            yeniHedefLeft=sinifListe[i].x2; 
                            //sola Yakın X1
                            if(Math.abs((sinifListe[i].y1-topHiza2))>Math.abs((sinifListe[i].y2-topHiza2)))
                            {
                                yeniHedefTop=sinifListe[i].y1;                 
                            }
                            else
                            {
                                yeniHedefTop=sinifListe[i].y2; 
                            }
                            yeniHedefBool=true;                    
                        }
                        if(yeniHedefBool)
                        {
                            yeniHedefFunc(yeniHedefLeft,yeniHedefTop);
                        }
                        if(solHiza2==yeniHedefLeft && topHiza2==yeniHedefTop)
                        {
                            yeniHedefBool=false;
                        }
                        
                        
                        document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                        document.getElementById("buradasinizRota").style["top"] = topHiza2+"px"; 
                        break;
                    }
                    else if(topHiza2>sinifListe[i].y1 && topHiza2<sinifListe[i].y2 && (solHiza2==sinifListe[i].x1 || solHiza2==sinifListe[i].x2))
                    {
                        // if(topHiza2==hedefTop && Math.abs((topHiza2-sinifListe[i].y1))>Math.abs((topHiza2-sinifListe[i].y2)))
                        // {
                        //     topIsaret=1;
                        // }
                        // if(topHiza2==hedefTop && Math.abs((topHiza2-sinifListe[i].y1))<Math.abs((topHiza2-sinifListe[i].y2)))
                        // {
                        //     topIsaret=-1;                    
                        // }
                        solHiza2=solHiza2+0;
                        topHiza2=topHiza2+1*topIsaret;
                        document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                        document.getElementById("buradasinizRota").style["top"] = topHiza2+"px"; 
                        break;  
                    }
                    else if(sinifListe[i].son=='son')
                    {
                        if(hedefLeft!=solHiza2) solHiza2=solHiza2+leftArtir*leftIsaret;
                        if(hedefTop!=topHiza2) topHiza2=topHiza2+topArtir*topIsaret;
                        document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                        document.getElementById("buradasinizRota").style["top"] = topHiza2+"px"; 
                        break;
                    } 
                }

        }

    yeniHedefFunc(hedefLeft,hedefTop);

    if(hedefTop==topHiza2 && hedefLeft==solHiza2) console.log("tamamlandı");
    else denemeHK(solHiza2,topHiza2);

}



    var sinifListe=[];
    
    function ekle()
    {
        sinifListe=[];
        sinifListe.push({sinifAdi:'301_303_305', x1:28,x2:270,y1:0,y2:92});
        sinifListe.push({sinifAdi:'ofis', x1:376,x2:674,y1:0,y2:104});
        sinifListe.push({sinifAdi:'ofis2', x1:376,x2:1000,y1:114,y2:1000});
        sinifListe.push({sinifAdi:'bolumBaskanligi', x1:686,x2:740,y1:0,y2:162});
        sinifListe.push({sinifAdi:'galeriBoslugu', x1:100,x2:234,y1:130,y2:208});
        sinifListe.push({sinifAdi:'elektronikLab', x1:254,x2:350,y1:134,y2:206});
        sinifListe.push({sinifAdi:'obss', x1:280,x2:350,y1:194,y2:282});
        sinifListe.push({sinifAdi:'amfiAB', x1:254,x2:350,y1:0,y2:128});
        sinifListe.push({sinifAdi:'bayWC', x1:290,x2:364,y1:308,y2:1000});
        sinifListe.push({sinifAdi:'goruntuIslemeKablosuzIletisi', x1:0,x2:80,y1:104,y2:1000});
        sinifListe.push({sinifAdi:'bilgisayarDekanlikLab', x1:0,x2:236,y1:254,y2:1000});
        sinifListe.push({sinifAdi:'WConu', x1:0,x2:274,y1:314,y2:1000});
        sinifListe.push({son:'son'});        
        console.log(sinifListe);
    } 

// {s_id:301, s_name:'BM 301'},
//       {s_id:303, s_name:'BM 303'},
//       {s_id:305, s_name:'BM 305'},
//       {s_id:306, s_name:'BM Amfi A'},
//       {s_id:307, s_name:'BM Amfi B'},  
//       {s_id:308, s_name:'BM Elektronik Lab.'},  
//       {s_id:309, s_name:'BM Kablosuz İletisim Lab.'},  
//       {s_id:310, s_name:'BM Görüntü İşleme Lab.'},  
//       {s_id:311, s_name:'BM Bilgisayar Lab.'},  
//       {s_id:312, s_name:'BM Dekanlık Lab.'},  
//       {s_id:313, s_name:'BM Gömülü Sistem Lab.'},  
//       {s_id:314, s_name:'BM Öğretim Üyeleri Ofis'},  
//       {s_id:315, s_name:'BM Bölüm Başlanlığı'}  

function sinifKoordinat(sinif)
{
    if(sinif=='301') //BM301
    {
        hedefLeft=202;
        hedefTop=102;
    }
    else if(sinif=='303') //BM303
    {
        hedefLeft=176;
        hedefTop=100;
    }
    else if(sinif=='305') //BM305
    {
        hedefLeft=100;
        hedefTop=104;
    }
    else if(sinif=='306') //BMamfiA
    {
        hedefLeft=358;
        hedefTop=116;
    }
    else if(sinif=='307') //BMamfiB
    {
        hedefLeft=254;
        hedefTop=116;
    }
    else if(sinif=='308') //BMelektronikLab
    {
        hedefLeft=294;
        hedefTop=132;
    }
    else if(sinif=='309') //BMkablosuzLab
    {
        hedefLeft=86;
        hedefTop=128;
    }
    else if(sinif=='310') //BMgoruntuLab
    {
        hedefLeft=86;
        hedefTop=216;
    }
    else if(sinif=='311') //BMbilgisayarLab
    {
        hedefLeft=86;
        hedefTop=250;
    }
    else if(sinif=='312') //BMdekanlikLab
    {
        hedefLeft=164;
        hedefTop=250;
    }
    else if(sinif=='313') //BMgomuluSistemLab
    {
        hedefLeft=376;
        hedefTop=272;
    }
    else if(sinif=='314') //BMofis
    {
        hedefLeft=560;
        hedefTop=110;
    }
    else if(sinif=='315') //BMbolumBaskanligi
    {
        hedefLeft=678;
        hedefTop=108;
    }
}

// var liste=[
//       {s_id:'BM301', s_name:'BM 301'},
//       {s_id:'BM303', s_name:'BM 303'},
//       {s_id:'BM305', s_name:'BM 305'},
//       {s_id:'BMamfiA', s_name:'BM Amfi A'},
//       {s_id:'BMamfiB', s_name:'BM Amfi B'},  
//       {s_id:'BMelektronikLab', s_name:'BM Elektronik Lab.'},  
//       {s_id:'BMkablosuzLab', s_name:'BM Kablosuz İletisim Lab.'},  
//       {s_id:'BMgoruntuLab', s_name:'BM Görüntü İşleme Lab.'},  
//       {s_id:'BMbilgisayarLab', s_name:'BM Bilgisayar Lab.'},  
//       {s_id:'BMdekanlikLab', s_name:'BM Dekanlık Lab.'},  
//       {s_id:'BMgomuluSistemLab', s_name:'BM Gömülü Sistem Lab.'},  
//       {s_id:'BMofis', s_name:'BM Öğretim Üyeleri Ofis'},  
//       {s_id:'BMbolumBaskanligi', s_name:'BM Bölüm Başlanlığı'}  
//   ];