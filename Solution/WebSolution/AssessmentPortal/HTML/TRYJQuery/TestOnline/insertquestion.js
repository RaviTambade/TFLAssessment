

$(document).ready(function(){

    var insertquestionurl="http://localhost:5238/question";
    

    $("#insertButton").click(function(){
        var skillId = $("#skillId").val();
        var question = $("#question").val();
        var optionA = $("#A").val();
        var optionB = $("#B").val();
        var optionC = $("#C").val();
        var optionD = $("#D").val();
        var correctOption = $("#correctOption").val();
        var evaluationCriteriaId = $("#evaluationCriteriaId").val();

        var newQuestion = {
                          "skillId":skillId,
                          "title": question,
                          "a": optionA,
                          "b": optionB,
                          "c": optionC,
                          "d": optionD,
                          "answerKey": correctOption,
                          "evaCriId":evaluationCriteriaId
                      };
      
        console.log("skillid: " + skillId);
        console.log("Question: " + question);
        console.log("Option A: " + optionA);
        console.log("Option B: " + optionB);
        console.log("Option C: " + optionC);
        console.log("Option D: " + optionD);
        console.log("Correct Option: " + correctOption);
        console.log("evaluationCriteriaId: " + evaluationCriteriaId);

        $.ajax({
            url: insertquestionurl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newQuestion),

            success: function (response) {
              // Show result
              console.log(response);
            },
            error: function (xhr, status, error) {
              console.error(xhr.responseText);
            }
    });  
    });
});