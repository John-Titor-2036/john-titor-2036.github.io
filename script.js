
function init(){
    var maidChan = window.open("", "width=200, height=400");
    maidHtml = maidChan.html;
    doc = maidChan.document;
    var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        zip = response.postal;
        maidChan.alert(zip);
    }, "jsonp"); 
    if(zip == 60625){
        console.log("TRUE");
    }else {
        console.log(zip);
    }
    // Docs at http://simpleweatherjs.com
    $(document).ready(function() {
    $.simpleWeather({
        location: parseInt(zip),
        woeid: '',
        unit: 'f',
        success: function(weather) {
            alert(weather.temp + weather.units.temp);
            
        },
        error: function(error) {
            alert("ERROR");
        }
        });
    });

}

