
var remoteWeb = "http://localhost:5238"
var testUrl = remoteWeb + "/tests";
tests=[];

// http://localhost:5238/tests

$(document).ready(function(){

    $.ajax({
        url: testUrl,
        type: 'GET',
        contentType: 'application/json',

        success: function (response) {
            console.log("inside ajax call block");
            tests = response;
            console.log(tests);
            var tblTest = $("#tblTest")
            for (var i = 0; i < tests.length; i++) {
                tblTest.append("<tr><td>"+tests[i].id+"</td><td>"+tests[i].scheduledOn +"</td><td>"+tests[i].skillTitle+"</td><td>"+tests[i].firstName+" "+tests[i].lastName+"</td></tr>");
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
})