angular.module('starter.controllers', [])

.controller('anaSayfaCtrl', function ($scope, $cordovaBarcodeScanner, $state) {
    var basarili = true;
    $scope.barcode = function () {
        document.addEventListener("deviceready", function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    if (basarili) {
                        barcodeSonuc = barcodeData.text;
                        $state.go('tab.dropDown');
                    }
                    else {
                    }
                }, function (error) {
                    // An error occurred
                });
        }, false);
    }
    $scope.deneme = function () {
        barcodeSonuc = 1;
        $state.go('tab.dropDown');
    }
})
.controller('dropDownCtrl', function ($scope, $stateParams, Chats) {
    kendiKonumuKoordinat(barcodeSonuc);
    $scope.liste = Chats.all();
    $scope.bulundugunYer = barcodeSonuc;
})
.controller('haritaCtrl', function ($scope, $stateParams, Chats, $ionicScrollDelegate, $state, $cordovaBarcodeScanner) {
    tarayici(); //Telefona atarken kapat
    $scope.ekranHeight = iecompattest().clientHeight - 80;

    $scope.secilenYer = Chats.get($stateParams.haritaId);
    sinifKoordinat($scope.secilenYer.s_id);
    hedefFunc(konumX, konumY);
    $scope.harita = 'img/rota2.png';
    $scope.buradasiniz = 'img/buradasinizKonum.png';

    setTimeout(function () {
        $ionicScrollDelegate.$getByHandle('scroller').scrollTo(konumX - (iecompattest().clientWidth) / 2, 0, true);
    }, 10);
    
    document.addEventListener("deviceready", function () {
        ///PUSULA
        var pusulaDegeri = 0;
        var ilkDeger = 0;
        var ikinciDeger = 0;
        // var doksanDegeri=90;
        function onSuccess(heading) {
            pusulaDegeri = heading.magneticHeading;
            pusulaDegeri = pusulaDegeri.toFixed(0);
            pusulaDegeri = parseFloat(pusulaDegeri);
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
        //ADIM SAYAR
        var successHandler = function (pedometerData) {
            ilkDeger = ikinciDeger;
            ikinciDeger = pedometerData.numberOfSteps;
            var fark = (ikinciDeger - ilkDeger);
            hareketEt(fark);
            $scope.$apply(function () {
                $scope.adim = "Adim: " + pedometerData.numberOfSteps;
                $scope.fark = "Fark: " + fark;
            })
        };
        var onError = function (error) {
            console.log("Error in tracking pedometer data: ", error);
        };
        pedometer.startPedometerUpdates(successHandler, onError);
        ///ADIM SAYAR
    }, false);
    
    $scope.barcode = function () {
        $cordovaBarcodeScanner
            .scan()
            .then(function (barcodeData) {
                barcodeSonuc = barcodeData.text;
                var img = new Image();
                img.src = 'img/harita31.png';
                img.style["left"] = 0 + "px";
                img.style["top"] = 0 + "px";
                img.style["position"] = "absolute";
                var div = document.getElementById('harita');
                img.onload = function () {
                    div.appendChild(img);
                };
                setTimeout(function () {
                    kendiKonumuKoordinat(barcodeSonuc);
                    // sinifKoordinat('300');                    
                    hedefFunc(konumX, konumY);
                }, 10);
                setTimeout(function () {
                    $ionicScrollDelegate.$getByHandle('scroller').scrollTo(konumX - (iecompattest().clientWidth) / 2, 0, true);
                }, 20);
            }, function (error) {
                console.log("error");
            });
    }
})
.controller('hakkimizdaCtrl', function ($scope) {
});
