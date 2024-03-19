var subject="COREJAVA";
var questionId=10;
var criteriaurl  = remoteWeb +"/questions/subjects/"+subject+"/questions/"+questionId;
var question;
$(document).ready(function () {

    $.ajax({
        url: subjectsurl,
        type: 'GET',
        contentType: 'application/json',

        success: function (response) {
            question = response;
            var lstSubject = $("#ddlSubjects")
            
         
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
    
});