
function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
    var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        zip = parseInt(response.postal);
        maidChan.alert(zip);
    }, "jsonp"); 
    $(document).ready(function() {
        $.simpleWeather({
        location: zip,
        woeid: '',
        unit: 'f',
        success: function(weather) {
            maidChan.alert(parseInt(weather.temp));
        },
        error: function(error) {
            maidChan.alert("WEATHER NOT FOUND!");
        }
        });
    });
}

