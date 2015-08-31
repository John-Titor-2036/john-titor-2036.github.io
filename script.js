//document.getElementById("");
$.get("http://ipinfo.io", function(response) {
    console.log(response.ip, response.country);
}, "jsonp");
