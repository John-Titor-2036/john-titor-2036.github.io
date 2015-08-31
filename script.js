alert("Hey Johnathan!");


function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
    var zip = 00000
    $.get("http://ipinfo.io", function(response) {
        zip = (response.postal);
    }, "jsonp");
    maidChan.alert(zip);
}
