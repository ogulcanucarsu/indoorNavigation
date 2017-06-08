var Ekat3Koordinatlar=[];
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'1',x:854,y:95}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'3',x:1292,y:189}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'5',x:1314,y:394}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'7',x:854,y:95}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'9',x:0,y:0}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'11',x:0,y:0}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'13',x:0,y:0}); //
Ekat3Koordinatlar.push({}); //bos
Ekat3Koordinatlar.push({name:'15',x:429,y:150}); //

var Ekat2Koordinatlar=[];
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'1',x:854,y:107}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'3',x:1284,y:201}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'5',x:1400,y:403}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'7',x:1282,y:614}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'9',x:852,y:698}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'11',x:576,y:649}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'13',x:0,y:0}); //
Ekat2Koordinatlar.push({}); //bos
Ekat2Koordinatlar.push({name:'15',x:429,y:150}); //


var Ebolgeler=[];
Ebolgeler.push({kat:'0',x:0,y:0});
Ebolgeler.push({kat:'1',x:0,y:0});
Ebolgeler.push({kat:'2',x:853,y1:150,y2:404,y3:654,gitKoordinat:Ekat2Koordinatlar});
Ebolgeler.push({kat:'3',x:853,y1:142,y2:396,y3:1000,gitKoordinat:Ekat3Koordinatlar});

function EbolgeKontrol(bolgeX,bolgeY,kat)
{
    if(bolgeX<Ebolgeler[kat].x && bolgeY<Ebolgeler[kat].y1)                                       { return 0;}
    else if(bolgeX<Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y1 && bolgeY<Ebolgeler[kat].y2)      { return 14;}
    else if(bolgeX<Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y2 && bolgeY<Ebolgeler[kat].y3)      { return 12;}
    else if(bolgeX<Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y3)                                  { return 10;}
    

    else if(bolgeX>Ebolgeler[kat].x && bolgeY<Ebolgeler[kat].y1)                                  { return 2;}
    else if(bolgeX>Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y1 && bolgeY<Ebolgeler[kat].y2)      { return 4;}
    else if(bolgeX>Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y2 && bolgeY<Ebolgeler[kat].y3)      { return 6;}    
    else if(bolgeX>Ebolgeler[kat].x && bolgeY>Ebolgeler[kat].y3)                                  { return 8;}
}
//var gitBolgeler=[];
function EgidilecekBolgeler(kendiBolgesi,hedefBolgesi,kat,hedefX,katFarkli)
{
    gitBolgeler=[];
    console.log("E "+kendiBolgesi,hedefBolgesi);    
    var isaret=-1;
    var fark=hedefBolgesi-kendiBolgesi;
    if(fark>0) isaret=1;
   if(katFarkli=="true" || kat=='3') 
        {
            if(fark>6) 
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
            if(katIndex==-1) katIndex=15;
            else if(katIndex==17) katIndex=1;          
            if(kendiBolgesi==-2) kendiBolgesi=14;
            else if(kendiBolgesi==16) kendiBolgesi=0;  

            if(Ebolgeler[kat].gitKoordinat[katIndex].x==1400 && Ebolgeler[kat].gitKoordinat[katIndex].y==403)
                {
                    if(hedefX<1378)
                    {
                        Ebolgeler[kat].gitKoordinat[katIndex].x=1307;
                        Ebolgeler[kat].gitKoordinat[katIndex].y=404;
                    }
                }

                       
            gitBolgeler.push({x:Ebolgeler[kat].gitKoordinat[katIndex].x,y:Ebolgeler[kat].gitKoordinat[katIndex].y});
        }
    }
    console.log(gitBolgeler);
}
