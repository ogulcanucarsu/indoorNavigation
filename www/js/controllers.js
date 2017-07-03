angular.module('starter.controllers', [])

.controller('anaSayfaCtrl', function ($scope, $cordovaBarcodeScanner, $state,Chats,$ionicPopup) {
    $scope.engelli=false;
    $scope.engelliDegistir=function()
    {
        $scope.engelli=!$scope.engelli;
    }
    $scope.barcode = function (engelliModel) {
        engelliBool=engelliModel;
        document.addEventListener("deviceready", function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    if (Chats.sorgu(barcodeData.text)) {
                        barcodeSonuc = barcodeData.text;
                        $state.go('tab.bolumler');
                    }
                    else {
                        var alertPopup = $ionicPopup.alert({
                        title: 'Uyarı !',
                        template: 'QR Kod Hatalı',
                        okText:'Tamam'
                        });
                    }
                }, function (error) {
                    // An error occurred
                });
        }, false);
    }

    $scope.deneme = function (engelliModel) {
        engelliBool=engelliModel;
        barcodeSonuc = 503;
        $state.go('tab.bolumler');
    }

    $scope.yardim = function () {
        $state.go('tab.yardim');
    }

})
.controller('bolumlerCtrl',function($scope,Bolumler, $stateParams,Chats){
    var _barcodeSonuc=barcodeSonuc.toString();
    var katKod=_barcodeSonuc.charAt(0);

    $scope.bolumHedeflerListe = Bolumler.all();
    $scope.bulundugunYerBolum =Bolumler.get(katKod);
    $scope.bulundugunYerBolum =$scope.bulundugunYerBolum.s_name;  
    
    $scope.git="dropDown";
    $scope.listeDegistir=function()
    {
        $scope.bolumHedeflerListe=Chats.all();
        $scope.git="harita";
    } 

})
.controller('dropDownCtrl', function ($scope, $stateParams, Chats) {
    $scope.liste = Chats.allBolum($stateParams.bolumId);
    $scope.bulundugunYer =Chats.get(barcodeSonuc);
    $scope.bulundugunYer =$scope.bulundugunYer.s_name;    
})
.controller('haritaCtrl', function ($scope, $stateParams, Chats, $ionicScrollDelegate, $state, $cordovaBarcodeScanner,$ionicPopup) {
    var katFarkli=false;
     barcodeSonuc = 503; //Telefona atarken kapat sil
    $scope.kendiKonumu = Chats.get(barcodeSonuc);    
    konumX=$scope.kendiKonumu.s_x;
    konumY=$scope.kendiKonumu.s_y;

    $scope.ekranHeight = iecompattest().clientHeight - 80;

    $scope.secilenYer = Chats.get($stateParams.haritaId);
    hedefX=$scope.secilenYer.s_x;
    hedefY=$scope.secilenYer.s_y;
    sonHedefX=$scope.secilenYer.s_x;
    sonHedefY=$scope.secilenYer.s_y;
    gitBolgeIndex=0;
    if(engelliBool) 
    {   
        if($scope.secilenYer.s_kat!=$scope.kendiKonumu.s_kat)
        {
            if($scope.kendiKonumu.s_kat>$scope.secilenYer.s_kat)
            {
                var alertPopup = $ionicPopup.alert({
                        title: 'Bilgilendirme !',
                        template: 'Seçmiş olduğunuz konum 1 alt katta bulunmaktadır. Uygulama sizi en yakın merdivene götürmektedir. Merdiven kullandıktan sonra ekranın sağ üstünden tekrar QR kod taratmanız gerekmektedir.',
                        okText:'Tamam'
                    });
            }  
            else
            {
                var alertPopup = $ionicPopup.alert({
                        title: 'Bilgilendirme !',
                        template: 'Seçmiş olduğunuz konum 1 üst katta bulunmaktadır. Uygulama sizi en yakın merdivene götürmektedir. Merdiven kullandıktan sonra ekranın sağ üstünden tekrar QR kod taratmanız gerekmektedir.',
                        okText:'Tamam'
                    });
            }
            katFarkli=true;
            EaltKataInıs();   
            enYakinMerdiven(hedefX,hedefY,$scope.kendiKonumu.s_kat);
        }
        
        EgidilecekBolgeler(EbolgeKontrol(konumX,konumY,$scope.kendiKonumu.s_kat),EbolgeKontrol(hedefX,hedefY,$scope.kendiKonumu.s_kat),$scope.kendiKonumu.s_kat,hedefX,hedefY,katFarkli);
    } 
    else 
    {       
        if($scope.secilenYer.s_kat!=$scope.kendiKonumu.s_kat)
        {
            if($scope.kendiKonumu.s_kat>$scope.secilenYer.s_kat)
            {
                var alertPopup = $ionicPopup.alert({
                        title: 'Bilgilendirme !',
                        template: 'Seçmiş olduğunuz konum 1 alt katta bulunmaktadır. Uygulama sizi en yakın merdivene götürmektedir. Merdiven kullandıktan sonra ekranın sağ üstünden tekrar QR kod taratmanız gerekmektedir.',
                        okText:'Tamam'
                    });
            }  
            else
            {
                var alertPopup = $ionicPopup.alert({
                        title: 'Bilgilendirme !',
                        template: 'Seçmiş olduğunuz konum 1 üst katta bulunmaktadır. Uygulama sizi en yakın merdivene götürmektedir. Merdiven kullandıktan sonra ekranın sağ üstünden tekrar QR kod taratmanız gerekmektedir.',
                        okText:'Tamam'
                    });
            }
            katFarkli=true;
            altKataInıs(); 
            enYakinMerdiven(hedefX,hedefY,$scope.kendiKonumu.s_kat);
        }
        
        gidilecekBolgeler(bolgeKontrol(konumX,konumY,$scope.kendiKonumu.s_kat),bolgeKontrol(hedefX,hedefY,$scope.kendiKonumu.s_kat),$scope.kendiKonumu.s_kat,hedefX,hedefY,katFarkli); 
    }
    
    setTimeout(function(){
    hedefFunc(konumX, konumY,$scope.kendiKonumu.s_kat);
    },10);

    if($scope.kendiKonumu.s_kat==3)
    {
        $scope.harita = 'img/harita31.png';
    }
    else
    {
        $scope.harita = 'img/harita2.png';
    }
    
    $scope.buradasiniz = 'img/buradasinizKonum.png';

    setTimeout(function () {
        $ionicScrollDelegate.$getByHandle('scroller').scrollTo(konumX - (iecompattest().clientWidth) / 2, konumY - (iecompattest().clientHeight) / 2, true);
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
                    if (Chats.sorgu(barcodeData.text)) {
                        barcodeSonuc = barcodeData.text;
                        katFarkli=false;
                        // barcodeSonuc = 116; //Telefona atarken kapat sil
                        $scope.kendiKonumu = Chats.get(barcodeSonuc);    
                        konumX=$scope.kendiKonumu.s_x;
                        konumY=$scope.kendiKonumu.s_y;

                        var img = new Image();
                        if($scope.kendiKonumu.s_kat==3)
                        {
                            img.src = 'img/harita31.png';
                        }
                        else
                        {
                            img.src = 'img/harita2.png';
                        }

                        img.style["left"] = 0 + "px";
                        img.style["top"] = 0 + "px";
                        img.style["position"] = "absolute";
                        var div = document.getElementById('harita');
                        img.onload = function () {
                            div.appendChild(img);
                        };
                        
                        gitBolgeIndex=0;
                        if(engelliBool) 
                        {   
                            if($scope.secilenYer.s_kat!=$scope.kendiKonumu.s_kat)
                            {
                                katFarkli=true;
                                EaltKataInıs();   
                                enYakinMerdiven(hedefX,hedefY,$scope.kendiKonumu.s_kat);
                            }
                            else
                            EgidilecekBolgeler(EbolgeKontrol(konumX,konumY,$scope.kendiKonumu.s_kat),EbolgeKontrol(hedefX,hedefY,$scope.kendiKonumu.s_kat),$scope.kendiKonumu.s_kat,hedefX,hedefY,katFarkli);
                        } 
                        else 
                        {       
                            if($scope.secilenYer.s_kat!=$scope.kendiKonumu.s_kat)
                            {
                                katFarkli=true;
                                altKataInıs(); 
                                enYakinMerdiven(hedefX,hedefY,$scope.kendiKonumu.s_kat);
                            }
                            else
                            gidilecekBolgeler(bolgeKontrol(konumX,konumY,$scope.kendiKonumu.s_kat),bolgeKontrol(hedefX,hedefY,$scope.kendiKonumu.s_kat),$scope.kendiKonumu.s_kat,hedefX,hedefY,katFarkli); 
                        }
                        
                        setTimeout(function(){
                        hedefFunc(konumX, konumY,$scope.kendiKonumu.s_kat);
                    },10);

                        setTimeout(function () {
                        $ionicScrollDelegate.$getByHandle('scroller').scrollTo(konumX - (iecompattest().clientWidth) / 2, konumY - (iecompattest().clientHeight) / 2, true);
                    }, 10);

                    }
                    else {
                        var alertPopup = $ionicPopup.alert({
                        title: 'Uyarı !',
                        template: 'QR Kod Hatalı',
                        okText:'Tamam'
                        });
                    }
                }, function (error) {
                    // An error occurred
                });
    }
})
.controller('yardimCtrl',function($scope){
    $scope.groups = [];

    $scope.groups.push ( {name: "Bu uygulama nerede kullanılır?", items: []}); 
    $scope.groups[0].items.push("Uygulama yalnızca Kocaeli Üniversitesi Mühendislik Fakültesinde kullanılabilmektedir.");

    $scope.groups.push ( {name: "Uygulama nasıl kullanılır?", items: []}); 
    $scope.groups[1].items.push("1-) Yakınızdaki QR kodu okutmak için, 'QR Kod Okut' butonuna basınız.");
    $scope.groups[1].items.push("2-) Butona bastıktan sonra açılan kamera ile QR kodu okutunuz.");
    $scope.groups[1].items.push("3-) QR kodu okuttuktan sonra nerede olduğunuz tespit edilecek, karşınıza çıkacak listeden gitmek istediğiniz yeri seçiniz.");
    $scope.groups[1].items.push("4-) Gitmek istediğiniz yeri seçtikten sonra karşınıza çıkan haritadaki rotayı takip ediniz.");

    $scope.groups.push ( {name: "QR kodlar nerede bulunur?", items: []}); 
    $scope.groups[2].items.push("QR kodlar fakülte girişlerinde, bölüm girişlerinde ve sınıfların kapı yanlarında bulunmaktadır.");
    
    $scope.groups.push ( {name: "Engelli kullanıcılar tarafından nasıl kullanılır?", items: []}); 
    $scope.groups[3].items.push("Ana menüde ekranın sağ üst köşesinde bulunan simgeye tıkladıktan sonra engelli kullanıcı modu aktif olmaktadır.");
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

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

    // function pusulaHareketi(pusulaDegeri)
    // {
    //     var fark = 200;
    //     if (pusulaDegeri >= (11.25 + fark) % 360 && pusulaDegeri <= (33.75 + fark) % 360) {       //211 233
    //         // solaGit();
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {
    //             $scope.sonuc="sol sol yukarı";                
    //         })
    //     }
    //     else if (pusulaDegeri >= (33.75 + fark) % 360 && pusulaDegeri <= (56.25 + fark) % 360) { //233 256
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {            
    //             $scope.sonuc="sol sol yukarı yukarı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (56.25 + fark) % 360 && pusulaDegeri <= (78.75 + fark) % 360) { //256 278
    //         // sagaGit();
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sol yukarı yukarı";
    //         })            
    //     }
    //     else if (pusulaDegeri >= (78.75 + fark) % 360 && pusulaDegeri <= (101.25 + fark) % 360) { //278 301
    //         // sagaGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="yukarı yukarı";    
    //         })        
    //     }
    //     else if (pusulaDegeri >= (101.25 + fark) % 360 && pusulaDegeri <= (123.75 + fark) % 360) { //301 323
    //         // sagaGit();
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ yukarı yukarı"; 
    //         })
    //     }
    //     else if (pusulaDegeri >= (123.75 + fark) % 360 && pusulaDegeri <= (146.25 + fark) % 360) { //323 346
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ sağ yukarı yukarı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (146.25 + fark) % 360 && pusulaDegeri <= (159.99 + fark) % 360) { //346 368
    //         // solaGit();
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ sağ yukarı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (160.01 + fark) % 360 && pusulaDegeri <= (168.75 + fark) % 360) { //346 368
    //         // solaGit();
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ sağ yukarı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (168.75 + fark) % 360 && pusulaDegeri <= (191.25 + fark) % 360) { //368 391
    //         // solaGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ sağ";
    //         })
    //     }
    //     else if (pusulaDegeri >= (191.25 + fark) % 360 && pusulaDegeri <= (213.75 + fark) % 360) { //391 413
    //         // solaGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sağ sağ aşağı";  
    //         })         
    //     }
    //     else if (pusulaDegeri >= (213.75 + fark) % 360 && pusulaDegeri <= (236.25 + fark) % 360) { //413 - 436
    //         // solaGit();
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {
    //             $scope.sonuc="sağ sağ aşağı aşağı";                
    //         })
    //     }
    //     else if (pusulaDegeri >= (236.25 + fark) % 360 && pusulaDegeri <= (258.75 + fark) % 360) { //267 - 312
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {            
    //             $scope.sonuc="sağ aşağı aşağı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (258.75 + fark) % 360 && pusulaDegeri <= (281.25 + fark) % 360) { //312 - 357
    //         // sagaGit();
    //         // yukariGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="aşağı aşağı";
    //         })            
    //     }
    //     else if (pusulaDegeri >= (281.25 + fark) % 360 && pusulaDegeri <= (303.75 + fark) % 360) { //0.5 - 42.5 
    //         // sagaGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sol aşağı aşağı";    
    //         })        
    //     }
    //     else if (pusulaDegeri >= (303.75 + fark) % 360 && pusulaDegeri <= (326.25 + fark) % 360) { //42.5 - 87
    //         // sagaGit();
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sol sol aşağı aşağı"; 
    //         })
    //     }
    //     else if (pusulaDegeri >= (326.25 + fark) % 360 && pusulaDegeri <= (348.75 + fark) % 360) { //87 - 132
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sol sol aşağı";
    //         })
    //     }
    //     else if (pusulaDegeri >= (348.75 + fark) % 360 && pusulaDegeri <= (371.25 + fark) % 360) { //132 - 177
    //         // solaGit();
    //         // asagiGit();
    //         $scope.$apply(function () 
    //         {            
    //         $scope.sonuc="sol sol";
    //         })
    //     }
    // }

    function pusulaHareketi(pusulaDegeri)
    {
       var fark = 210;
        if (pusulaDegeri >= (22.5 + fark) % 360 && pusulaDegeri <= (67.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol yukarı";
            })
        }
        else if (pusulaDegeri >= (67.5 + fark) % 360 && pusulaDegeri <= (112.5 + fark) % 360) {//280 320
            $scope.$apply(function () 
            {            
            $scope.sonuc="yukarı";
            })
        }
        else if (pusulaDegeri >= (112.5 + fark) % 360 && pusulaDegeri <= (149.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="saga yukarı";
            })
        }
        else if (pusulaDegeri >= (150.5 + fark) % 360 && pusulaDegeri <= (157.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="saga yukarı";
            })
        }
        else if (pusulaDegeri >= (157.5 + fark) % 360 && pusulaDegeri <= (202.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="saga";
            })
        }
        else if (pusulaDegeri >= (202.5 + fark) % 360 && pusulaDegeri <= (247.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="saga aşağı";
            })
        }
        else if (pusulaDegeri >= (247.5 + fark) % 360 && pusulaDegeri <= (292.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="aşağı";
            })
        }
        else if (pusulaDegeri >= (292.5 + fark) % 360 && pusulaDegeri <= (337.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol aşağı";
            })
        }
        else if (pusulaDegeri >= (337.5 + fark) % 360 && pusulaDegeri <= (360 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol";
            })
        }
        else if (pusulaDegeri >= (0 + fark) % 360 && pusulaDegeri <= (22.5 + fark) % 360) {
            $scope.$apply(function () 
            {            
            $scope.sonuc="sol";
            })
        }
    }

});
