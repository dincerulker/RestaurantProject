/* Dummy Image
*****************************************************************************/
var emptyImage = "data:image/png;base64,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";

/* Api Sorgu
*****************************************************************************/
function apiSorgu() {
    $.ajax({
        url: "https://smarty.kerzz.com:4004/api/mock/getFeed",
        type: "POST",
        contentType: "application/json;",
        headers: {
            "apiKey": "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2",
        },
        data: `{
            "skip": ${skip},
            "limit": ${limit},
            "latitude": 0,
            "longitude": 0
        }` ,
        success: function (result) {
            console.log(result);
            $.each(result.response, function (key, value) {

                var minOrder = value.storeInfo.minOrderPrice; // Min-order info
                var openTime = value.storeInfo.workingHours[0].open; // opening time
                var closeTime = value.storeInfo.workingHours[0].close; // closing time

                /* Mesafe hesaplama
                *****************************************************************************/
                var ltd = value.storeInfo.geoLocation.latitude;
                var lon = value.storeInfo.geoLocation.longitude;
                function mesafeHesapla(lat1, lon1, lat2, lon2) {

                    var R = 6371;
                    var dLat = deg2rad(lat2 - lat1);
                    var dLon = deg2rad(lon2 - lon1);
                    var a =
                        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var d = R * c; // Km cinsinden mesafe
                    return d;

                }
                function deg2rad(deg) {

                    return deg * (Math.PI / 180) // dereceyi rad'a dönüştürme
                    
                }

                /* Anlık konuma göre mesafe hesaplama
                *****************************************************************************/
                for (let i = 0; i < result.response.length; i++) {

                    let distance = mesafeHesapla(parseInt(latBrowser),
                        parseInt(longBrowser), result.response[i].storeInfo.geoLocation.latitude,
                        result.response[i].storeInfo.geoLocation.longitude);
                    jsonDistance = JSON.parse(distance.toFixed(0));

                }

                if(value.storeInfo.workingHours[0].closed == false){
                    var openClosed = "İşletme Açık : ";
                }else {
                    var openClosed = "İşletme Kapalı:";
                }

                /* Image olmayan restaurantlar için dummy image ekleme
                *****************************************************************************/
                if (value.images.length > 0) {
                    var image = value.images[0].base64;
                } else {
                    var image = emptyImage;
                }
                if(value.text == ""){
                    value.text = "Restaurant açıklaması eklenecek.";
                }

                if(jsonDistance > 1000){
                    // Geo location bilgileri 0 olan restaurantlar için yapılmıştır.
                    jsonDistance = "1000+"
                }
                $(".container2").append('<div class="d-flex flex-wrap align-items-center justify-content-between mb-4 border-bottom col-sm-1">');
                $(".container2").append('<img class="dropdown-link img-style" src="' + image + '" />');
                $(".container2").append('<div class="card-title fw-bold brand-text-style px-2 mt-2">' + value.title + '</div>');
                $(".container2").append('<div class="card-title text-style p-2 text-margin">' + value.text + '</div>');
                $(".container2").append('<div class="card-title text-dark float-element"><img src="./images/shopping.png" /> <span class="basket-title"> Min. Sipariş Tutarı: ₺ ' + minOrder + '</span> </div>');
                $(".container2").append('<div class="dis-flex"><div class="card-title text-dark p-2 distance-text me-3">' + jsonDistance + ' km mesafede' +'</div><div class="card-title text-green p-2 distance-text">' + openClosed + '<span class=" text-gray ">'+ openTime +''+ ' / ' +'</span><span class=" text-gray ">' + closeTime + '</span></div></div>');
              
                // console.log(ltd);
                // console.log(lon);
                // console.log(latBrowser);
                // console.log(longBrowser);

            });

        },
        error: function (error) {
            console.log(error);
        }
    });
}

/* Infinite-Scroll
*****************************************************************************/
var limit = 10;
var skip = 60; 
apiSorgu();

$(window).scroll(function () {
    if ($(document).height() - this.innerHeight == $(this).scrollTop()) {
        limit += 5;
        skip += 5;
        apiSorgu();
    }
});

/* Geo location Konum Bilgileri
*****************************************************************************/

let latBrowser, longBrowser = "";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
} else {
    alert("Tarayıcı konum bilgisi sağlamıyor !")
}

function onSuccess(position) {
    latBrowser = position.coords.latitude;
    longBrowser = position.coords.longitude;
}

function onError(error) {
    if (error.code == 1) {
        alert("Konum erişim izni reddedildi !");
    } else if (error.code == 2) {
        alert("Konum bilgisi alınamadı !")
    } else {
        alert("Bir hata oluştu")
    }
}


