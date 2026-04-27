var subject="COREJAVA";
var questionId=10;
var remoteWeb = "http://localhost:5238";
var criteriaurl  = remoteWeb +"/subject/"+subject+"/question/"+questionId;
var question;
$(document).ready(function () {

    $.ajax({
        url: criteriaurl,
        type: 'GET',
        contentType: 'application/json',

        success: function (response) {
            criteria = response;
            console.log(criteria);
            var lstCriteria = $("#ddlCriteria");
            for (var i = 0; i < criteria.length; i++) {
                lstCriteria.append($('<option></option>').val(criteria[i].id).html(criteria[i].title));
            }
            
         
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
    
});