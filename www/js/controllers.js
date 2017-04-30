angular.module('starter.controllers', [])

.controller('anaSayfaCtrl', function($scope, $cordovaBarcodeScanner,$state) 
{
    
    var basarili=true;
    $scope.barcode=function()
    {
        document.addEventListener("deviceready", function () 
        {

            $cordovaBarcodeScanner
              .scan()
              .then(function(barcodeData) {

                if(basarili)
                {
                    barcodeSonuc=barcodeData.text;      
                    $state.go('tab.dropDown');                                  
                    // document.location.href= "#/tab/dropDown";
                }
                else
                {

                }                 
            }, function(error) {
            // An error occurred
            });

        }, false);
    }
    $scope.deneme=function()
    {
        $state.go('tab.dropDown');
        // document.location.href= "#/tab/dropDown";
    }
})

.controller('dropDownCtrl', function($scope,$stateParams,Chats) 
{
//   $scope.barcodeData=barcodeSonuc;

  //veriTabani(barcodeSonuc);
//   if(barcodeSonuc==19874)
//   {
//     $scope.bulundugunYer='Bilgisayar Mühendisliği Giriş Katındasınız';
//   }
    // Chats.push();
    kendiKonumuKoordinat(barcodeSonuc);
    $scope.liste = Chats.all();
    $scope.bulundugunYer=barcodeSonuc;
   //AÇ $scope.bulundugunYer=Chats.get(barcodeSonuc).s_name;
    
})

.controller('haritaCtrl', function($scope, $stateParams, Chats,$ionicScrollDelegate,$state,$cordovaBarcodeScanner) 
{
    baslangicBelirle();
    ///PUSULA
    var pusulaDegeri=0;
    var ilkDeger=0;
    var ikinciDeger=0;
    // var doksanDegeri=90;
    function onSuccess(heading) {

        pusulaDegeri=heading.magneticHeading;
        pusulaDegeri=pusulaDegeri.toFixed(0);
        pusulaDegeri=parseFloat(pusulaDegeri);

        console.log(pusulaDegeri);

        pusulaListe.push(pusulaDegeri); 
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: 500
    }; 

    navigator.compass.watchHeading(onSuccess, onError, options);

    ///PUSULA
    

    $scope.secilenYer = Chats.get($stateParams.haritaId);

     sinifKoordinat($scope.secilenYer.s_id);
     hedefFunc(kendiKonumuX,kendiKonumuY);
     
    $scope.harita='img/rota2.png';
    $scope.buradasiniz='img/buradasinizKonum.png';

    // document.getElementById("buradasinizKonum").style["left"] = 371+"px";
    // document.getElementById("buradasinizKonum").style["top"] = 374+"px";  
    
    setTimeout(function()
            {
                $ionicScrollDelegate.$getByHandle('scroller').scrollTo(kendiKonumuX-(iecompattest().clientWidth)/2,0,true);                
            },10);

    //ADIM SAYAR
    var successHandler = function (pedometerData) {
        ilkDeger=ikinciDeger;
        ikinciDeger=pedometerData.numberOfSteps;
        var fark=(ikinciDeger-ilkDeger);

        hareketEt(fark);

        $scope.$apply(function () 
            {
                $scope.adim="Adim: "+ pedometerData.numberOfSteps;
                $scope.fark="Fark: "+ fark;
            })
         
    };
    
    var onError = function(error){
            console.log("Error in tracking pedometer data: ", error);
        };

    pedometer.startPedometerUpdates(successHandler, onError);

    ///ADIM SAYAR

    $scope.barcode=function()
    {
            $cordovaBarcodeScanner
              .scan()
              .then(function(barcodeData) {
                  baslangicBelirle();
                    barcodeSonuc=barcodeData.text;    
                    
                    var img = new Image();
                    img.src = 'img/yeniRota.png';
                    img.style["left"] = 0+"px";
                    img.style["top"] = 0+ "px";    
                    img.style["position"] = "absolute";   
                    var div = document.getElementById('harita');
                    img.onload = function() {
                        div.appendChild(img);
                    };

                     setTimeout(function()
                    {
                        kendiKonumuKoordinat(barcodeSonuc);                        
                            // sinifKoordinat('300');                    
                            hedefFunc(kendiKonumuX,kendiKonumuY);          
                    },10);
                    
                    setTimeout(function()
                    {
                        $ionicScrollDelegate.$getByHandle('scroller').scrollTo(kendiKonumuX-(iecompattest().clientWidth)/2,0,true);                
                    },20);

            }, function(error) {
                    console.log("error");
            });
    }
    
})

.controller('hakkimizdaCtrl', function($scope) 
{
    
    
});
