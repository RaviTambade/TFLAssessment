
    var subjects;
    var questionsList;
    var subjectsApi = "http://localhost:5238/api/assessment/subjects";
    var criteriaApi = "http://localhost:5238/api/assessment/concepts";

    $(document).ready(function () {
      $.ajax({
        url: subjectsApi,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
          subjects = data;
        //   var lstSubject = $("#ddlSubjects");
            var lstSubject = $('#ddlSubjects').empty().append('<option value="" disabled selected>Select subject</option>');
          for (var i = 0; i < subjects.length; i++) {
            lstSubject.append($('<option></option>').val(subjects[i].id).html(subjects[i].title));
          }

          var apiCriteriasBySubject = criteriaApi + "/subjects/" + subjects[0].id;
          $.ajax({
            url: apiCriteriasBySubject,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
              criterias = data;
            //   var lstCriteria = $("#ddlCriteria");
            var lstCriteria =  $('#ddlCriteria').empty().append('<option value="" disabled selected>Select criteria</option>');

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
        $('#questions').empty();
        $('#ddlCriteria').empty();
        $('#errorMessage').empty();

        var subjectId = $("#ddlSubjects").val();
        var questionsApi = "http://localhost:5238/api/questionbank/questions/subjects/" + subjectId;

        $.get(questionsApi, function (data) {
          questionsList = data;
          questionsList.map((question) => {
            $('#questions').append(
              `<div class='question-card'>
                  <strong>ID:</strong> ${question.questionId}<br/>
                  <strong>Question:</strong> ${question.question}<br/>
                  <strong>Subject:</strong> ${question.subject}
               </div>`
            );
          });

          var apiCriteriasBySubject = criteriaApi + "/subjects/" + subjectId;
          $.ajax({
            url: apiCriteriasBySubject,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
              var lstCriteria = $("#ddlCriteria");
              for (var i = 0; i < data.length; i++) {
                lstCriteria.append($('<option></option>').val(data[i].id).html(data[i].title));
              }
            }
          });
        }).fail(function (xhr) {
          $('#errorMessage').text("No questions found for selected subject.");
        });
      });

      $("#ddlCriteria").change(function () {
        $('#questions').empty();
        $('#errorMessage').empty();

        var subjectId = $("#ddlSubjects").val();
        var criteriaId = $("#ddlCriteria").val();
        var apiQuestionBySubjectCriteria = "http://localhost:5238/api/questionbank/questions/subjects/" + subjectId + "/concepts/" + criteriaId;

        $.get(apiQuestionBySubjectCriteria, function (data) {
          questionsList = data;
          questionsList.map((question) => {
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