

$(document).ready(function(){

    var insertquestionurl="http://localhost:5238/question";
    

    $("#insertButton").click(function(){
        var question = $("#question").val();
        var optionA = $("#A").val();
        var optionB = $("#B").val();
        var optionC = $("#C").val();
        var optionD = $("#D").val();
        var correctOption = $("#correctOption").val();
        var Question = {
                          "title": question,
                          "opt1": optionA,
                          "opt2": optionB,
                          "opt3": optionC,
                          "opt4": optionD,
                          "answerkey": correctOption
                      };
      

        console.log("Question: " + question);
        console.log("Option A: " + optionA);
        console.log("Option B: " + optionB);
        console.log("Option C: " + optionC);
        console.log("Option D: " + optionD);
        console.log("Correct Option: " + correctOption);

        $.ajax({
            url: insertquestionurl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(Question),

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