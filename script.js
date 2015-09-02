
function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
    var zip = 0;
    $.get("http://ipinfo.io", function(response) {
        alert(parseInt(response.postal));
    }, "jsonp");
    //maidChan.alert(zip);
}
