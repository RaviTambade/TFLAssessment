var subjects;
var questionsList;

var subjectsApi = "http://localhost:5238/api/assessment/subjects";
var conceptApi = "http://localhost:5238/api/assessment/concepts";
var questionApiBase = "http://localhost:5238/api/questionbank/questions";

$(document).ready(function () {

    /* ---------------------------
       LOAD SUBJECTS ON PAGE LOAD
    ---------------------------- */
    $.ajax({
        url: subjectsApi,
        type: 'GET',
        success: function (data) {

            console.log("Subjects API:", data); // DEBUG

            subjects = data;

            var lstSubject = $('#ddlSubjects')
                .empty()
                .append('<option value="">Select subject</option>');

            data.forEach(s => {
                lstSubject.append(
                    $('<option></option>')
                        .val(s.id || s.subjectId)   // SAFE FIELD MATCH
                        .text(s.title || s.name)
                );
            });
        },
        error: function (xhr) {
            console.error("Subjects Error:", xhr.responseText);
        }
    });


    /* ---------------------------
       WHEN SUBJECT CHANGES
       LOAD CONCEPTS
    ---------------------------- */
    $("#ddlSubjects").change(function () {

        $('#questions').empty();
        $('#ddlCriteria').empty().append('<option value="">Select concept</option>');
        $('#errorMessage').empty();

        var subjectId = $(this).val();

        console.log("Selected Subject:", subjectId); // DEBUG

        if (!subjectId) return;

        $.ajax({
            url: `${conceptApi}/subjects/${subjectId}`,
            type: 'GET',
            success: function (data) {

                console.log("Concept API:", data); // DEBUG

                var lstConcept = $('#ddlCriteria');

                data.forEach(c => {
                    lstConcept.append(
                        $('<option></option>')
                            .val(c.id || c.conceptId) // FIXED
                            .text(c.title || c.name)
                    );
                });
            },
            error: function (xhr) {
                console.error("Concept Error:", xhr.responseText);
            }
        });
    });


    /* ---------------------------
       WHEN CONCEPT CHANGES
       LOAD QUESTIONS
    ---------------------------- */
    $("#ddlCriteria").change(function () {

        $('#questions').empty();
        $('#errorMessage').empty();

        var subjectId = $("#ddlSubjects").val();
        var conceptId = $(this).val();

        console.log("Selected:", subjectId, conceptId); // DEBUG

        if (!subjectId || !conceptId) {
            $('#errorMessage').text("Please select subject and concept.");
            return;
        }

        var apiUrl =
            `${questionApiBase}/subjects/${subjectId}/concepts/${conceptId}`;

        console.log("Calling:", apiUrl);

        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function (data) {

                console.log("Questions API:", data);

                questionsList = data;

                if (!data || data.length === 0) {
                    $('#errorMessage').text("No questions found.");
                    return;
                }

                data.forEach(q => {
                    $('#questions').append(`
                        <div class='question-card'>
                            <strong>ID:</strong> ${q.id}<br/>
                            <strong>Question:</strong> ${q.question || q.title}<br/>
                            <strong>Subject:</strong> ${q.subject || ""}
                        </div>
                    `);
                });
            },
            error: function (xhr) {
                console.error("Question Error:", xhr.responseText);
                $('#errorMessage').text("No questions found for selected concept.");
            }
        });

    });

});