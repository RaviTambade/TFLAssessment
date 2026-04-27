var subjectsApi = "http://localhost:5151/api/assessment/subjects";
var criteriaApi = "http://localhost:5151/api/assessment/criterias";
var subjects = [];
var criterias = [];
var subjectId;
var criteriaId;

$(document).ready(function () {
  var insertquestionurl = "http://localhost:5172/api/questionbank/question";

  // Load subjects
  $.ajax({
    url: subjectsApi,
    type: 'GET',
    contentType: 'application/json',
    success: function (response) {
      subjects = response;
      var lstSubject = $("#ddlSubjects");
      lstSubject.append(`<option disabled selected>Choose Subject</option>`);
      subjects.forEach(subject => {
        lstSubject.append($('<option></option>').val(subject.id).html(subject.title));
      });

      // Load criteria for first subject
      loadCriteria(subjects[0].id);
    },
    error: function (xhr) {
      console.error(xhr.responseText);
    }
  });

  // Subject change handler
  $("#ddlSubjects").change(function () {
    subjectId = $(this).val();
    loadCriteria(subjectId);
  });

  function loadCriteria(subjectId) {
    $("#ddlCriterias").empty().append(`<option disabled selected>Choose Criteria</option>`);

    var apiCriteriasBySubject = `${criteriaApi}/subjects/${subjectId}`;
    $.ajax({
      url: apiCriteriasBySubject,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        criterias = data;
        var lstCriteria = $("#ddlCriterias");
        criterias.forEach(criteria => {
          lstCriteria.append($('<option></option>').val(criteria.id).html(criteria.title));
        });
      },
      error: function (xhr) {
        console.error(xhr.responseText);
      }
    });
  }

  // Insert Question
  $("#insertButton").click(function () {
    subjectId = $("#ddlSubjects").val();
    criteriaId = $("#ddlCriterias").val();

    var newQuestion = {
      subjectId: subjectId,
      title: $("#question").val(),
      a: $("#A").val(),
      b: $("#B").val(),
      c: $("#C").val(),
      d: $("#D").val(),
      answerKey: $("#correctOption").val(),
      evaluationCriteriaId: criteriaId
    };

    $.ajax({
      url: insertquestionurl,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newQuestion),
      success: function (response) {
        alert("Question inserted successfully!");

        // Clear all fields
        $("#ddlSubjects").prop('selectedIndex', 0);
        $("#ddlCriterias").empty().append(`<option disabled selected>Choose Criteria</option>`);
        $("#question").val('');
        $("#A").val('');
        $("#B").val('');
        $("#C").val('');
        $("#D").val('');
        $("#correctOption").val('');

        // Reload criteria for selected subject
        var currentSubject = $("#ddlSubjects").val();
        if (currentSubject) {
          loadCriteria(currentSubject);
        }
      },
      error: function (xhr) {
        console.error(xhr.responseText);
      }
    });
  });
});
