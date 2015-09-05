
function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
    var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        zip = parseInt(response.postal);
        maidChan.alert(zip);
    }, "jsonp"); 
    getWeather(zip);
}

function getWeather(zip){
    $(document).ready(function() {
        $.simpleWeather({
        location: zip,
        woeid: '',
        unit: 'f',
        success: function(weather) {
            alert(parseInt(weather.temp));
        error: function(error) {
            alert("WEATHER NOT FOUND!");
        }
    });
});
}
