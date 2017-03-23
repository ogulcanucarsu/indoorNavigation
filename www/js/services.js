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
