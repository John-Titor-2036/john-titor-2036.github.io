
function init(){
    var maidChan = window.open("", "width=200, height=400");
    maidHtml = maidChan.html;
    doc = maidChan.document;
    //var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        var zip = parseInt(response.postal);
        alert(zip);
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
function minimize() 
{
window.innerWidth = 100;
window.innerHeight = 100;
window.screenX = screen.width;
window.screenY = screen.height;
alwaysLowered = true;
}

function Maximize() 
{
window.innerWidth = screen.width;
window.innerHeight = screen.height;
window.screenX = 0;
window.screenY = 0;
alwaysLowered = false;
}
