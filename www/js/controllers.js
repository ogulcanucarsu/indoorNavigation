angular.module('starter.controllers', [])

.controller('anaSayfaCtrl', function($scope, $cordovaBarcodeScanner) 
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
                    document.location.href= "#/tab/dropDown";
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
        document.location.href= "#/tab/dropDown";
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
    $scope.liste = Chats.all();




   //AÇ $scope.bulundugunYer=Chats.get(barcodeSonuc).s_name;
    
})

.controller('haritaCtrl', function($scope, $stateParams, Chats) 
{
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
    

    $scope.secilenYer = Chats.get($stateParams.haritaId);
    $scope.harita='img/katPlaniGuncel2.png';
    $scope.buradasiniz='img/buradasiniz2.png';

    
    document.getElementById("buradasinID").style["left"] = solHiza+"px";
    document.getElementById("buradasinID").style["top"] = topHiza+"px";  
    

    

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
    
})

.controller('hakkimizdaCtrl', function($scope) 
{
    
    
});
