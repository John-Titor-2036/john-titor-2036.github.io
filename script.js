alert("Hey Johnathan!");
$.get("http://ipinfo.io", function(response) {
    console.log(response.postal);
}, "jsonp");
