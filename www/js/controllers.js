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

.controller('dropDownCtrl', function($scope,Chats) 
{
  $scope.barcodeData=barcodeSonuc;

  //veriTabani(barcodeSonuc);
  if(barcodeSonuc==19874)
  {
    $scope.bulundugunYer='Bilgisayar Mühendisliği Giriş Katındasınız';
  }

    $scope.liste = Chats.all();


})

.controller('haritaCtrl', function($scope, $stateParams, Chats) 
{
    $scope.secilenYer = Chats.get($stateParams.haritaId);
})

.controller('hakkimizdaCtrl', function($scope) 
{
  
})



// .controller('ChatDetailCtrl', function($scope) 
// {
  
// })

// .controller('AccountCtrl', function($scope) 
// {
  
// })

;
