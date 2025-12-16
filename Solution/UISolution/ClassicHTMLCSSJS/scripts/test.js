var remoteWeb = "http://localhost:5238"
var testUrl = remoteWeb + "/tests";
var tests=[];
var testId;
var scheduledOn;


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
                tblTest.append("<tr><td>"+tests[i].id+"</td><td>"+tests[i].scheduledDate +"</td><td>"+tests[i].subject+"</td><td>"+tests[i].firstName+" "+tests[i].lastName+"</td><td><button onClick=>Details</button></td></tr>" );
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });

    $("#btnTime").click(function(){
        var time=$("#scheduledon").val();
        console.log(time);
        testId=1;
        scheduledOn=time;
        var testScheduledTimesettingUrl= remoteWeb+"/test/"+testId+"/scheduledon/"+scheduledOn;
        
        $.ajax({
        url: testScheduledTimesettingUrl,
        type: 'PUT',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
  })
})

