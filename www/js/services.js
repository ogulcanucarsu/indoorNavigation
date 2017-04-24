var barcodeSonuc;
angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var liste=[
      {s_id:300, s_kat:3, s_name:'DENEME'},
      {s_id:301, s_kat:3, s_name:'BM 301'},
      {s_id:303, s_kat:3, s_name:'BM 303'},
      {s_id:305, s_kat:3, s_name:'BM 305'},
      {s_id:306, s_kat:3, s_name:'BM Amfi A'},
      {s_id:307, s_kat:3, s_name:'BM Amfi B'},  
      {s_id:308, s_kat:3, s_name:'BM Elektronik Lab.'},  
      {s_id:309, s_kat:3, s_name:'BM Kablosuz İletisim Lab.'},  
      {s_id:310, s_kat:3, s_name:'BM Görüntü İşleme Lab.'},  
      {s_id:311, s_kat:3, s_name:'BM Bilgisayar Lab.'},  
      {s_id:312, s_kat:3, s_name:'BM Dekanlık Lab.'},  
      {s_id:313, s_kat:3, s_name:'BM Gömülü Sistem Lab.'},  
      {s_id:314, s_kat:3, s_name:'BM Öğretim Üyeleri Ofis'},  
      {s_id:315, s_kat:3, s_name:'BM Bölüm Başlanlığı'}  
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
var baslangicNoktasi=90;
function baslangicBelirle()
{
    baslangicNoktasi=pusulaListe.slice(Math.max(pusulaListe.length - 1, 0));
    console.log("baslangic noktasi: "+baslangicNoktasi+" alindi");
    // baslangicNoktasi=yeniDeger;
}

function hareketEt(adim)
{
      adimPusulaListe=pusulaListe.slice(Math.max(pusulaListe.length - adim, 0));

      
        for(var i=0;i<adim;i++)
        {
            pusulaDegeri=adimPusulaListe[i];
            var fark=baslangicNoktasi-90;
            if(pusulaDegeri>=(22.5+fark)%360 && pusulaDegeri<=(67.5+fark)%360)          
            {
                solaGit();
                yukariGit();
            }
            else if(pusulaDegeri>=(67.5+fark)%360 && pusulaDegeri<=(112.5+fark)%360)
            {
                yukariGit();
            }
            else if(pusulaDegeri>=(112.5+fark)%360 && pusulaDegeri<=(157.5+fark)%360)
            {
                sagaGit();
                yukariGit();
            }
            else if(pusulaDegeri>=(157.5+fark)%360 && pusulaDegeri<=(202.5+fark)%360)
            {
                sagaGit();
            }
            else if(pusulaDegeri>=(202.5+fark)%360 && pusulaDegeri<=(247.5+fark)%360)
            {
                sagaGit();
                asagiGit();
            }
            else if(pusulaDegeri>=(247.5+fark)%360 && pusulaDegeri<=(292.5+fark)%360)
            {
                asagiGit();
            }
            else if(pusulaDegeri>=(292.5+fark)%360 && pusulaDegeri<=(337.5+fark)%360)
            {
                solaGit();
                asagiGit();
            }
            else if(pusulaDegeri>=(337.5+fark)%360 && pusulaDegeri<=(360+fark)%360)
            {
                solaGit();
            }
            else if(pusulaDegeri>=(0+fark)%360 && pusulaDegeri<=(22.5+fark)%360)
            {
                solaGit();
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
        var caprazGit=false;
        var caprazIkinciDefa=3;
function denemeHK(solHiza2,topHiza2)
    {
        
        var yeniHedefLeft;
        var yeniHedefTop;
        var yeniHedefLeft2; //top cakisirsa
        var yeniHedefTop2;
        var yeniHedefBool=false;
        var yeniHedefBool2=false;

        function yeniHedefFunc(hedefLeft,hedefTop)
        {
                var leftIsaret;
                if(hedefLeft>=solHiza2) leftIsaret=1;
                else {leftIsaret=-1;}

                var topIsaret;
                if(hedefTop>=topHiza2) topIsaret=1;
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
                var leftArtirBool=false;
                var topArtirBool=false;
                // console.log("Top Kalan: "+(topKalan)+" Left Kalan: "+(leftKalan));
                if(topKalan>leftKalan)
                {
                    // topArtir=2;
                    topArtirBool=true;
                    // console.log("topBuyuk");
                }
                else if(topKalan<leftKalan)
                {
                    // leftArtir=2;
                    leftArtirBool=true;
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
                for(var i=0;i<sinifListe.length;i++)
                {    
                    // if((solHiza2==sinifListe[i].x1 || solHiza2==sinifListe[i].x2) && (topHiza2==sinifListe[i].y1 || topHiza2==sinifListe[i].y2))
                    // {
                    //     solHiza2=solHiza2+1*leftIsaret*(-1);
                    //     topHiza2=topHiza2+1*topIsaret*(-1);
                    //     document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                    //     document.getElementById("buradasinizRota").style["top"] = topHiza2+"px";  
                    //     caprazIkinciDefa=2;
                    //     yeniHedefFunc(hedefLeft-5,hedefTop);                      
                    //     break;
                    // }
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
                        
                        if(solHiza2==yeniHedefLeft && topHiza2==yeniHedefTop)
                        {
                            yeniHedefBool=false;
                            alert("hedeftamamlandı");                            
                        }
                        
                        
                        document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                        document.getElementById("buradasinizRota").style["top"] = topHiza2+"px"; 
                        if(yeniHedefBool)
                        {
                             console.log("yeni hedef 1 calisti");                            
                            yeniHedefFunc(yeniHedefLeft,yeniHedefTop);
                        }
                        caprazGit=true;
                        break;
                    }
                    else if(topHiza2>sinifListe[i].y1 && topHiza2<sinifListe[i].y2 && (solHiza2==sinifListe[i].x1 || solHiza2==sinifListe[i].x2))
                    {
                        solHiza2=solHiza2+0;
                        topHiza2=topHiza2+1*topIsaret;

                         if(topHiza2==hedefTop && Math.abs((sinifListe[i].y1-topHiza2))<Math.abs((sinifListe[i].y2-topHiza2)))
                         {
                             yeniHedefTop2=sinifListe[i].y1; 
                             //yukarı yakin y1
                            if(Math.abs((sinifListe[i].x1-solHiza2))>Math.abs((sinifListe[i].x2-solHiza2)))
                            {
                                yeniHedefLeft2=sinifListe[i].x1;                 
                            }
                            else
                            {
                                yeniHedefLeft2=sinifListe[i].x2; 
                            }
                            yeniHedefBool2=true;
                         }
                         else if(topHiza2==hedefTop && Math.abs((sinifListe[i].y1-topHiza2))>Math.abs((sinifListe[i].y2-topHiza2)))
                         {
                             yeniHedefTop2=sinifListe[i].y2; 
                             //asagi Yakın y2
                             if(Math.abs((sinifListe[i].x1-solHiza2))>Math.abs((sinifListe[i].x2-solHiza2)))
                             {
                                 yeniHedefLeft2=sinifListe[i].x1;                 
                             }
                             else
                             {
                                 yeniHedefLeft2=sinifListe[i].x2; 
                             }
                             yeniHedefBool2=true;                    
                         }
                         
                        if(solHiza2==yeniHedefLeft2 && topHiza2==yeniHedefTop2)
                        {
                            yeniHedefBool2=false;
                            alert("hedeftamamlandı");
                        }

                        document.getElementById("buradasinizRota").style["left"] = solHiza2+"px";
                        document.getElementById("buradasinizRota").style["top"] = topHiza2+"px";
                        if(yeniHedefBool2)
                         {
                             console.log("yeni hedef 2 calisti");
                             yeniHedefFunc(yeniHedefLeft2,yeniHedefTop2);
                         }
                        caprazGit=true; 
                        break;  
                    }
                    else if(sinifListe[i].son=='son')
                    {
                        if(caprazGit)
                        {
                            topArtir=1;
                            leftArtir=1;
                            caprazGit=false;
                        }
                        else if(topArtirBool)
                        {
                            topArtir=1;
                            leftArtir=0;
                        }
                        else if(leftArtirBool) 
                        {
                            topArtir=0;
                            leftArtir=1;
                        }
                        if(hedefLeft!=solHiza2) 
                        {
                            solHiza2=solHiza2+leftArtir*leftIsaret;
                        }
                        if(hedefTop!=topHiza2) 
                        {
                            topHiza2=topHiza2+topArtir*topIsaret;
                        }
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
        sinifListe.push({sinifAdi:'elektronikLab', x1:254,x2:350,y1:134,y2:282});
        // sinifListe.push({sinifAdi:'obss', x1:280,x2:350,y1:194,y2:282});
        sinifListe.push({sinifAdi:'amfiAB', x1:254,x2:350,y1:0,y2:128});
        sinifListe.push({sinifAdi:'bayWC', x1:285,x2:364,y1:308,y2:1000});
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
    if(sinif=='300') //BM301
    {
        hedefLeft=130;
        hedefTop=104;
    }
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
        hedefLeft=244;
        hedefTop=118;
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
        hedefLeft=372;
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
var merdivenlerListe=[];
    
    function merdivenEkle()
    {
        var merdivenListe=[];
        merdivenListe.push({merdivenAdi:'ogretmenlerMerdiven', x1:456,y1:111});
        merdivenListe.push({merdivenAdi:'BgirisMerdiven', x1:367,y1:399});
        merdivenListe.push({merdivenAdi:'FgirisYanMerdiven', x1:24,y1:91});
        merdivenListe.push({son:'son'});

        merdivenlerListe.push({kat:'3',merdivenListe:merdivenListe});
        console.log(merdivenListe);
        
    } 
function merdivenGit(solHiza3,topHiza3)
{
    var enKucuk={deger:9999,index:99};
    for(var i=0;i<merdivenlerListe.length;i++)
    {
        for(var k=0;k<merdivenlerListe[i].merdivenListe.length;k++)
        {
            console.log(merdivenlerListe[i].merdivenListe[k].x1+"--"+merdivenlerListe[i].merdivenListe[k].y1);
            var a=solHiza3-merdivenlerListe[i].merdivenListe[k].x1;
            var b=topHiza3-merdivenlerListe[i].merdivenListe[k].y1;
            var c = Math.sqrt( a*a + b*b );
            console.log("C= "+c);            
            if(c<enKucuk.deger)
            {
                enKucuk.deger=c;
                enKucuk.index=k;
            }
            console.log("En Kucuk= "+enKucuk.deger+" index = "+enKucuk.index);
        }
    }
    hedefLeft=merdivenlerListe[0].merdivenListe[enKucuk.index].x1;
    hedefTop=merdivenlerListe[0].merdivenListe[enKucuk.index].y1;
    denemeHK(solHiza3,topHiza3);
}
