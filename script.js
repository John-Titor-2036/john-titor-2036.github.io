
function init(){
    var maidChan = window.open("", "width=200, height=400");
    maidHtml = maidChan.html;
    doc = maidChan.document;
    var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        zip = parseInt(response.postal);
        maidChan.alert(zip);
    }, "jsonp"); 
    // Docs at http://simpleweatherjs.com
    $(document).ready(function() {
    $.simpleWeather({
        location: 60625,
        woeid: '',
        unit: 'f',
        success: function(weather) {
            alert(parseInt(weather.temp) + weather.units.temp);
            
        },
        error: function(error) {
            alert("ERROR");
        }
        });
    });

}

