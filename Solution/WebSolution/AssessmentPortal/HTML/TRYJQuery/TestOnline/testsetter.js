

var remoteWeb = "http://localhost:5238"
var questionsurl = remoteWeb + "/questions/"
var subjectsurl = remoteWeb + "/subjects";
var questions;
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
            console.log("inside ajax call block");
            subjects = response;
            console.log(subjects);
            var lstSubject = $("#ddlSubjects")
            for (var i = 0; i < subjects.length; i++) {
                lstSubject.append($('<option></option>').val(subjects[i].title).html(subjects[i].title));
            }
         
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
    console.log("out of ajax call block");
    $("#btnShowAllQuestions").click(() => {
        $('#container').empty();
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
    })


    $("#ddlSubjects").change(function () {
        $('#container').empty();
        var subject = $("#ddlSubjects").val();
        var url = remoteWeb + "/" + subject + "/questions"
        console.log(url);
        $.get(url, function (data, status) {
            questionsList = (data);
            console.log(data);

            questionsList.map((question) => {
                console.log(question.questionTitle);
                $('#questions').append(
                    $(document.createElement('input')).prop({
                        id: question.id,
                        value: question.questionTitle,
                        type: 'checkbox'
                    })
                ).append(
                    $(document.createElement('h6')).prop({
                        for: question.id
                    }).html(question.id + " " + question.questionTitle + " " + question.subjectTitle)
                ).append(document.createElement('br'));

            })

        });

    });


    $('#submit').click(function () {
        questions.map((question) => {
            $('#container').append(
                $(document.createElement('input')).prop({
                    id: question.id,
                    value: question.title,
                    type: 'checkbox'
                })
            ).append(
                $(document.createElement('label')).prop({
                    for: question.id
                }).html(question.title)
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