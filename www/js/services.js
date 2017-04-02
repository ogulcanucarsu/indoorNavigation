var barcodeSonuc;
angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var liste=[
      {s_id:1, s_name:'Bilgisayar Mühendisligi 303'},
      {s_id:2, s_name:'Elektronik Mühendisligi 301'},
      {s_id:3, s_name:'Bilgisayar Mühendisligi 305'},
      {s_id:4, s_name:'Bilgisayar Mühendisligi Billab'},
      {s_id:5, s_name:'Kimya Mühendisligi 508'},
      {s_id:6, s_name:'Kimya Mühendisligi 509'},
      {s_id:7, s_name:'Kimya Mühendisligi 510'},
      {s_id:8, s_name:'Endüstri Mühendisligi Lab 350'},
      {s_id:9, s_name:'Kimya Mühendisligi Billab 150'},
      {s_id:19874, s_name:'OGULCAN'}      
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

var solHiza=150;
var topHiza=230;

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
        img.src = 'img/buradasiniz2.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('deneme');

        img.onload = function() {
            div.appendChild(img);
        };

        solHiza=solHiza-5;
        document.getElementById("buradasinID").style["left"] = solHiza+"px";
    } 
function sagaGit()
    {
        var img = new Image();
        img.src = 'img/buradasiniz2.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('deneme');

        img.onload = function() {
            div.appendChild(img);
        };

        solHiza=solHiza+5;
        // topHiza=topHiza+1;
        document.getElementById("buradasinID").style["left"] = solHiza+"px";
        // document.getElementById("buradasinID").style["top"] = topHiza+"px";  
    }
function asagiGit()
    {
        var img = new Image();
        img.src = 'img/buradasiniz2.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('deneme');

        img.onload = function() {
            div.appendChild(img);
        };

        // solHiza=solHiza+1;
        topHiza=topHiza+5;
        // document.getElementById("buradasinID").style["left"] = solHiza+"px";
        document.getElementById("buradasinID").style["top"] = topHiza+"px";  
    }
function yukariGit()
    {
        var img = new Image();
        img.src = 'img/buradasiniz2.png';
        img.style["left"] = solHiza+"px";
        img.style["top"] = topHiza+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('deneme');

        img.onload = function() {
            div.appendChild(img);
        };

        // solHiza=solHiza+1;
        topHiza=topHiza-5;
        // document.getElementById("buradasinID").style["left"] = solHiza+"px";
        document.getElementById("buradasinID").style["top"] = topHiza+"px";  
    }

function denemeHK(solHiza2,topHiza2)
    {
        var hedefLeft=97;
        var hedefTop=92;

        var leftIsaret;
        if(hedefLeft>solHiza2) leftIsaret=1;
        else {leftIsaret=-1;}

        var topIsaret;
        if(hedefTop>topHiza2) topIsaret=1;
        else {topIsaret=-1;}
        
        
        var img = new Image();
        img.src = 'img/buradasiniz2.png';
        img.style["left"] = solHiza2+"px";
        img.style["top"] = topHiza2+ "px";    
        img.style["position"] = "absolute";  

        var div = document.getElementById('deneme2');

        img.onload = function() {
            div.appendChild(img);
        };

        for(var i=0;i<sinifListe.length;i++)
        {
            if(solHiza2>sinifListe[i].x1 && solHiza2<sinifListe[i].x2 && (topHiza2==sinifListe[i].y1 || topHiza2==sinifListe[i].y2 ))
            {
                solHiza2=solHiza2+1*leftIsaret;
                topHiza2=topHiza2+0;
                document.getElementById("buradasinID").style["left"] = solHiza2+"px";
                document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
                break;
            }
            else if(topHiza2>sinifListe[i].y1 && topHiza2<sinifListe[i].y2 && (solHiza2==sinifListe[i].x1 || solHiza2==sinifListe[i].x2))
            {
                solHiza2=solHiza2+0;
                topHiza2=topHiza2+1*topIsaret;
                document.getElementById("buradasinID").style["left"] = solHiza2+"px";
                document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
                break;
            }
            else if(sinifListe[i].son=='son')
            {
                if(hedefLeft!=solHiza2) solHiza2=solHiza2+1*leftIsaret;
                if(hedefTop!=topHiza2) topHiza2=topHiza2+1*topIsaret;
                document.getElementById("buradasinID").style["left"] = solHiza2+"px";
                document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
                break;
            } 
        }
        // if(solHiza2>290 && solHiza2<363 && (topHiza2>=310 || topHiza2<=390 ))
        // {
        //     solHiza2=solHiza2+1*leftIsaret;
        //     topHiza2=topHiza2+0;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // else if(topHiza2>310 && topHiza2<392 && (solHiza2<=365 || solHiza2>=290))
        // {
        //     solHiza2=solHiza2+0;
        //     topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // //
        // else if(solHiza2>288 && solHiza2<350 && (topHiza2==195 || topHiza2==282 ))
        // {
        //     solHiza2=solHiza2+1*leftIsaret;
        //     topHiza2=topHiza2+0;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // else if(topHiza2>195 && topHiza2<281 && (solHiza2==288 || solHiza2==350))
        // {
        //     solHiza2=solHiza2+0;
        //     topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // //
        // else if(solHiza2>260 && solHiza2<349 && (topHiza2==135 || topHiza2==205 ))
        // {
        //     solHiza2=solHiza2+1*leftIsaret;
        //     topHiza2=topHiza2+0;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // else if(topHiza2>135 && topHiza2<205 && (solHiza2==260 || solHiza2==349))
        // {
        //     solHiza2=solHiza2+0;
        //     topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // //
        // else if(solHiza2>105 && solHiza2<234 && (topHiza2==134 || topHiza2==207 ))
        // {
        //     solHiza2=solHiza2+1*leftIsaret;
        //     topHiza2=topHiza2+0;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // else if(topHiza2>134 && topHiza2<207 && (solHiza2==105 || solHiza2==234))
        // {
        //     solHiza2=solHiza2+0;
        //     topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // //
        // else
        // {
        //     if(hedefLeft!=solHiza2) solHiza2=solHiza2+1*leftIsaret;
        //     if(hedefTop!=topHiza2) topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        
        if(hedefTop==topHiza2 && hedefLeft==solHiza2) console.log("tamamlandı");
        else denemeHK(solHiza2,topHiza2);

    }



    var sinifListe=[];
    
    function ekle()
    {
        sinifListe.push({sinifAdi:'galeriBoslugu', x1:105,x2:234,y1:134,y2:207});
        sinifListe.push({sinifAdi:'obss', x1:288,x2:350,y1:195,y2:281});
        sinifListe.push({sinifAdi:'bayWC', x1:290,x2:363,y1:310,y2:392});
        sinifListe.push({son:'son'});        
        console.log(sinifListe);
    } 

     // else if(solHiza2>288 && solHiza2<350 && (topHiza2==195 || topHiza2==282 ))
        // {
        //     solHiza2=solHiza2+1*leftIsaret;
        //     topHiza2=topHiza2+0;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }
        // else if(topHiza2>195 && topHiza2<281 && (solHiza2==288 || solHiza2==350))
        // {
        //     solHiza2=solHiza2+0;
        //     topHiza2=topHiza2+1*topIsaret;
        //     document.getElementById("buradasinID").style["left"] = solHiza2+"px";
        //     document.getElementById("buradasinID").style["top"] = topHiza2+"px"; 
        // }