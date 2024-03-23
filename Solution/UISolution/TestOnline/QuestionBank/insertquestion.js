var api = "http://localhost:5238"
var subjectsApi = api + "/subjects";
var criteriaApi = api + "/criterias";
var subjects = [];
var criterias = [];
var question = [];
$(document).ready(function () {

  var insertquestionurl = "http://localhost:5238/question";

  $.ajax({
    url: subjectsApi,
    type: 'GET',
    contentType: 'application/json',

    success: function (response) {
      subjects = response;
      console.log(subjects);
      var lstSubject = $("#ddlSubjects")
      for (var i = 0; i < subjects.length; i++) {
        lstSubject.append($('<option></option>').val(subjects[i].id).html(subjects[i].title));
        
      }
      var apiCriteriasBySubject = criteriaApi + "/subjects/" + subjects[0].id;
      console.log(apiCriteriasBySubject);

      $.ajax({
        url: apiCriteriasBySubject,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
          criterias = data;
          console.log(criterias);

          var lstCriteria = $("#ddlCriterias")
          for (var i = 0; i < criterias.length; i++) {
            lstCriteria.append($('<option></option>').val(criterias[i].id).html(criterias[i].title));
          }
        },
        error: function (xhr, status, error) {
          console.error(xhr.responseText);
        }
      });

    },
    error: function (xhr, status, error) {
      console.error(xhr.responseText);
    }
  });

  $("#ddlSubjects").change(function () {
    $('#ddlCriterias').empty();

    var subjectId = $("#ddlSubjects").val();
    question["subjectId"]=subjectId;
    console.log(question);

    var apiCriteriasBySubject = criteriaApi + "/subjects/" + subjectId;
    $.ajax({
      url: apiCriteriasBySubject,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        criterias = data;
        var lstCriteria = $("#ddlCriterias")
        for (var i = 0; i < criterias.length; i++) {
          lstCriteria.append($('<option></option>').val(criterias[i].id).html(criterias[i].title));
        }
        var criteriaId = $("#ddlCriterias").val();
        question["criteriaId"]=criteriaId;
        console.log(question);
      },
      error: function (xhr, status, error) {
        console.error(xhr.responseText);
      }

    });
    var title = $("#question").val();
    var optionA = $("#A").val();
    var optionB = $("#B").val();
    var optionC = $("#C").val();
    var optionD = $("#D").val();
    var correctOption = $("#correctOption").val();
    myArray.push({ key: "key1", value: "value1" });
    question.push({key: "subjectId", value: subjectId},
                  {key: "criteriaId", value: criteriaId},
                  {key: "title", value: title},
                  {key: "optionA", value: optionA},
                  {key: "optionB", value: optionB},
                  {key: "optionB", value: optionB}, );
    console.log(question);
  });



  $("#insertButton").click(function () {
    var skillId = $("#skillId").val();
    var question = $("#question").val();
    var optionA = $("#A").val();
    var optionB = $("#B").val();
    var optionC = $("#C").val();
    var optionD = $("#D").val();
    var correctOption = $("#correctOption").val();
    var evaluationCriteriaId = $("#evaluationCriteriaId").val();

    var newQuestion = {
      "subjectId": skillId,
      "title": question,
      "a": optionA,
      "b": optionB,
      "c": optionC,
      "d": optionD,
      "answerKey": correctOption,
      "evaluationCriteriaId": evaluationCriteriaId
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