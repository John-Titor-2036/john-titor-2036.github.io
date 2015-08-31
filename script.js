alert("Hey Johnathan!");


function init(){
    var maidChan = window.open("", "width=200, height=400");
    doc = maidChan.document;
    var zip = $.get("http://ipinfo.io", function(response) {
                        console.log(response.postal);
                    }, "jsonp");
    alert(zip);
}
