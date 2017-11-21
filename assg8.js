$(document).ready(function() {
    $("#go").click(function() {
        var data_file = "data.json";
        var http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function() {
            if (http_request.readyState == 4 && http_request.status == 200) {
                try {
                    console.log(1);
                    var data = JSON.parse(http_request.responseText);
                    console.log(data);
                } catch (err) {
                    console.log(err.message + " in " + http_request.responseText);
                }
                callbackResult(data);
            }
        };
        http_request.open("GET", data_file, true);
        http_request.send();
    });
});

function callbackResult(data) {
    var html = "";
    for (var i in data) {
        html += "<h4>" + data[i].content + "<p id='author'>" + data[i].author + "</p></h4>";
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
      
    }
    document.getElementById("quotes").innerHTML = html;
    var list = document.getElementsByTagName("h4");

    for(var i=0;i<list.length;i++){
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        list[i].style.backgroundColor="rgb(" + colorR + "," + colorG + "," + colorB + ")";
    }

}