var subjects;
var questionsList;
var subjectsApi = "http://localhost:5238/api/assessment/subjects";
var criteriaApi = "http://localhost:5238/api/assessment/concepts";

$(document).ready(function () {

  // ===============================
  // LOAD SUBJECTS WHEN PAGE LOADS
  // ===============================
  $.ajax({
    url: subjectsApi,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {

      subjects = data;

      // Clear and add default option
      var lstSubject = $('#ddlSubjects')
        .empty()
        .append('<option value="" disabled selected>Select subject</option>');

      // Populate subjects dropdown
      for (var i = 0; i < subjects.length; i++) {
        lstSubject.append(
          $('<option></option>')
            .val(subjects[i].id)
            .html(subjects[i].title)
        );
      }
    },
    error: function (xhr) {
      console.error(xhr.responseText);
    }
  });

  // ==================================
  // WHEN SUBJECT IS CHANGED
  // ==================================
  $("#ddlSubjects").change(function () {

    $('#questions').empty();
    $('#errorMessage').empty();

    var subjectId = $("#ddlSubjects").val();

    if (!subjectId) return;   // Stop if no subject selected

    console.log("Selected Subject ID:", subjectId);

    // Reset criteria dropdown properly
    var lstCriteria = $('#ddlCriteria')
      .empty()
      .append('<option value="" disabled selected>Select criteria</option>');

    // ----------------------------------
    // Load Questions by Subject
    // ----------------------------------
    var questionsApi =
      "http://localhost:5238/api/questionbank/questions/subjects/" + subjectId;

    $.get(questionsApi, function (data) {

      questionsList = data;

      if (questionsList.length === 0) {
        $('#errorMessage').text("No questions found for selected subject.");
        return;
      }

      questionsList.forEach(function (question) {
        $('#questions').append(
          `<div class='question-card'>
              <strong>ID:</strong> ${question.questionId}<br/>
              <strong>Question:</strong> ${question.question}<br/>
              <strong>Subject:</strong> ${question.subject}
           </div>`

          );
          console.log("question", question.questionId)
      });

    }).fail(function () {
      $('#errorMessage').text("No questions found for selected subject.");
    });

    // ----------------------------------
    // Load Criteria by Subject
    // ----------------------------------
    var apiCriteriasBySubject =
      criteriaApi + "/subjects/" + subjectId;

    $.ajax({
      url: apiCriteriasBySubject,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {

        console.log("Criteria for Subject ID " + subjectId + ":", data);

        if (data.length === 0) return;

        for (var i = 0; i < data.length; i++) {
          lstCriteria.append(
            $('<option></option>')
              .val(data[i].id)
              .html(data[i].title)

            );
            console.log("criteria", data[i].id)
        }

        // Ensure nothing is auto-selected
        $('#ddlCriteria').prop('selectedIndex', 0);
      }
    });
  });

  // ==================================
  // WHEN CRITERIA IS CHANGED
  // ==================================
  $("#ddlCriteria").change(function () {

    $('#questions').empty();
    $('#errorMessage').empty();

    var subjectId = $("#ddlSubjects").val();
    var criteriaId = $("#ddlCriteria").val();

    // Stop if no valid criteria selected
    if (!criteriaId || !subjectId) return;

    console.log("Selected Subject ID:", subjectId, "Selected Criteria ID:", criteriaId);

    var apiQuestionBySubjectCriteria =
      "http://localhost:5238/api/questionbank/questions/subjects/" +
      subjectId +
      "/concepts/" +
      criteriaId;

    $.get(apiQuestionBySubjectCriteria, function (data) {

      questionsList = data;

      if (questionsList.length === 0) {
        $('#errorMessage').text("No questions found for selected criteria.");
        return;
      }

      questionsList.forEach(function (question) {
        $('#questions').append(
          `<div class='question-card'>
              <strong>ID:</strong> ${question.id}<br/>
              <strong>Question:</strong> ${question.question}<br/>
              <strong>Subject:</strong> ${question.subject}
           </div>`
        );
      });

    }).fail(function () {
      $('#errorMessage').text("No questions found for selected criteria.");
    });

  });

});