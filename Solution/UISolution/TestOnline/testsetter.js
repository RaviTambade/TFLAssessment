
var remoteWeb = "http://localhost:5238"
var questionsurl = remoteWeb + "/questions/"
var subjectsurl = remoteWeb + "/subjects";
var criteriaurl = remoteWeb+"/criteria";
var questionsList;
var subjects;

$(document).ready(function () {

    //use ajax call for accessing all questions from questionbanks
    //bind them to questions
    $.ajax({
        url: subjectsurl,
        type: 'GET',
        contentType: 'application/json',

        success: function (response) {
            subjects = response;
            console.log(subjects);
            var lstSubject = $("#ddlSubjects")
            for (var i = 0; i < subjects.length; i++) {
                lstSubject.append($('<option></option>').val(subjects[i].id).html(subjects[i].title));
            }       
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });

    $.ajax({
        url: criteriaurl,
        type: 'GET',
        contentType: 'application/json',

        success: function (response) {
            criteria = response;
            console.log(criteria);
            var testcriteria = $("#ddlTestCritiria")
            for (var i = 0; i < criteria.length; i++) {
                testcriteria.append($('<option></option>').val(criteria[i].id).html(criteria[i].title));
            }
         
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
   
    $("#btnShowAllQuestions").click(() => {
        $('#questions').empty();
        let url = questionsurl;
        console.log(url);
        $.get(url, function (data, status) {
            questionsList = (data);

            questionsList.map((question) => {
                $('#questions').append(
                    $(document.createElement('input')).prop({
                        id: question.id,
                        value: question.title,
                        type: 'checkbox'
                    })
                ).append(
                    $(document.createElement('h6')).prop({
                        for: question.id
                    }).html(question.id + " " + question.title)
                ).append(document.createElement('br'));
            })

        });
    });


    $("#ddlSubjects").change(function () {
        $('#questions').empty();
        var subjectId = $("#ddlSubjects").val();
        console.log(subjectId);
        var url = remoteWeb+"/questions/subjects/"+subjectId;
        console.log(url);
        $.get(url, function (data, status) {
            questionsList = (data);
            console.log(data);

            questionsList.map((question) => {
                console.log(question.question);
                $('#questions').append(
                    $(document.createElement('input')).prop({
                        id: question.questionId,
                        value: question.question,
                        type: 'checkbox'
                    })
                ).append(
                    $(document.createElement('h6')).prop({
                        for: question.questionId
                    }).html(question.questionId + " " + question.question + " " + question.subject)
                ).append(document.createElement('br'));

            })

        });

    });

    $("#ddlTestCritiria").change(function () {
        $('#questions').empty();
        var subjectId = $("#ddlSubjects").val();
        var criteriaId = $("#ddlTestCritiria").val();
        console.log(subjectId);
        console.log(criteriaId);
        var url = remoteWeb + "/questions/subjects/" + subjectId + "/criterias/"+criteriaId
        console.log(url);
        $.get(url, function (data, status) {
            questionsList = (data);
            console.log(data);

            questionsList.map((question) => {
                console.log(question.question);
                $('#questions').append(
                    $(document.createElement('input')).prop({
                        id: question.id,
                        value: question.question,
                        type: 'checkbox'
                    })
                ).append(
                    $(document.createElement('h6')).prop({
                        for: question.id
                    }).html(question.id + " " + question.question + " " + question.subject)
                ).append(document.createElement('br'));

            })

        });

    });


    $('#submit').click(function () {
        questionsList.map((question) => {
            $('#container').append(
                $(document.createElement('input')).prop({
                    id: question.id,
                    value: question.question,
                    type: 'checkbox'
                })
            ).append(
                $(document.createElement('label')).prop({
                    for: question.id
                }).html(question.question)
            ).append(document.createElement('br'));
        })
    })

    $("#showresult").click(function () {
        $('input[type=checkbox]:checked').each(function () {
            var status = (this.checked ? $(this).val() : "");
            var id = $(this).attr("id");
            $('#output').append("<h3>" + id + " : " + status + "</h3>");
        });
    });
});