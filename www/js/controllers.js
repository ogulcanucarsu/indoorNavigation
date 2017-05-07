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
    hedefX=$scope.secilenYer.s_x;
    hedefY=$scope.secilenYer.s_y;
    sonHedefX=$scope.secilenYer.s_x;
    sonHedefY=$scope.secilenYer.s_y;
    gitBolgeIndex=0;
    gidilecekBolgeler(bolgeKontrol(konumX,konumY,$scope.secilenYer.s_kat),bolgeKontrol(hedefX,hedefY,$scope.secilenYer.s_kat),$scope.secilenYer.s_kat);    
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

    $scope.sonuc='';
    document.addEventListener("deviceready", function () {
        var pusulaDegeri = 0;
        
        function onSuccess(heading) {
            pusulaDegeri = heading.magneticHeading;
            pusulaDegeri = pusulaDegeri.toFixed(2);
            pusulaDegeri = parseFloat(pusulaDegeri);
            
            pusulaHareketi(pusulaDegeri);
            console.log(pusulaDegeri);
        };
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        };
        var options = {
            frequency: 100
        };
        navigator.compass.watchHeading(onSuccess, onError, options);

    },false);

    function pusulaHareketi(pusulaDegeri)
    {
        var fark = 200;
        if (pusulaDegeri >= (11.25 + fark) % 360 && pusulaDegeri <= (33.75 + fark) % 360) {       //211 233
            // solaGit();
            // yukariGit();
            $scope.$apply(function () 
            {
                $scope.sonuc="sol sol yukarı";                
            })
        }
        else if (pusulaDegeri >= (33.75 + fark) % 360 && pusulaDegeri <= (56.25 + fark) % 360) { //233 256
            // yukariGit();
            $scope.$apply(function () 
            {            
                $scope.sonuc="sol sol yukarı yukarı";
            })
        }
        else if (pusulaDegeri >= (56.25 + fark) % 360 && pusulaDegeri <= (78.75 + fark) % 360) { //256 278
            // sagaGit();
            // yukariGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol yukarı yukarı";
            })            
        }
        else if (pusulaDegeri >= (78.75 + fark) % 360 && pusulaDegeri <= (101.25 + fark) % 360) { //278 301
            // sagaGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="yukarı yukarı";    
            })        
        }
        else if (pusulaDegeri >= (101.25 + fark) % 360 && pusulaDegeri <= (123.75 + fark) % 360) { //301 323
            // sagaGit();
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ yukarı yukarı"; 
            })
        }
        else if (pusulaDegeri >= (123.75 + fark) % 360 && pusulaDegeri <= (146.25 + fark) % 360) { //323 346
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ sağ yukarı yukarı";
            })
        }
        else if (pusulaDegeri >= (146.25 + fark) % 360 && pusulaDegeri <= (159.99 + fark) % 360) { //346 368
            // solaGit();
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ sağ yukarı";
            })
        }
        else if (pusulaDegeri >= (160.01 + fark) % 360 && pusulaDegeri <= (168.75 + fark) % 360) { //346 368
            // solaGit();
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ sağ yukarı";
            })
        }
        else if (pusulaDegeri >= (168.75 + fark) % 360 && pusulaDegeri <= (191.25 + fark) % 360) { //368 391
            // solaGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ sağ";
            })
        }
        else if (pusulaDegeri >= (191.25 + fark) % 360 && pusulaDegeri <= (213.75 + fark) % 360) { //391 413
            // solaGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sağ sağ aşağı";  
            })         
        }
        else if (pusulaDegeri >= (213.75 + fark) % 360 && pusulaDegeri <= (236.25 + fark) % 360) { //413 - 436
            // solaGit();
            // yukariGit();
            $scope.$apply(function () 
            {
                $scope.sonuc="sağ sağ aşağı aşağı";                
            })
        }
        else if (pusulaDegeri >= (236.25 + fark) % 360 && pusulaDegeri <= (258.75 + fark) % 360) { //267 - 312
            // yukariGit();
            $scope.$apply(function () 
            {            
                $scope.sonuc="sağ aşağı aşağı";
            })
        }
        else if (pusulaDegeri >= (258.75 + fark) % 360 && pusulaDegeri <= (281.25 + fark) % 360) { //312 - 357
            // sagaGit();
            // yukariGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="aşağı aşağı";
            })            
        }
        else if (pusulaDegeri >= (281.25 + fark) % 360 && pusulaDegeri <= (303.75 + fark) % 360) { //0.5 - 42.5 
            // sagaGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol aşağı aşağı";    
            })        
        }
        else if (pusulaDegeri >= (303.75 + fark) % 360 && pusulaDegeri <= (326.25 + fark) % 360) { //42.5 - 87
            // sagaGit();
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol sol aşağı aşağı"; 
            })
        }
        else if (pusulaDegeri >= (326.25 + fark) % 360 && pusulaDegeri <= (348.75 + fark) % 360) { //87 - 132
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol sol aşağı";
            })
        }
        else if (pusulaDegeri >= (348.75 + fark) % 360 && pusulaDegeri <= (371.25 + fark) % 360) { //132 - 177
            // solaGit();
            // asagiGit();
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol sol";
            })
        }
    }
});
