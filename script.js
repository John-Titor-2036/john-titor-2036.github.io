alert("Hey Johnathan!");
$.get("http://ipinfo.io", function(response) {
    console.log(response.postal);
}, "jsonp");

function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
}
