
var availableDotnetQuestions=[
    {"title": "Which link is requried to download .net core?", "id":12},
    {"title": "What is CLR", "id":13},
    {"title": "What is C# Compiler?", "id":14},
    {"title": "What is definition of CTS?", "id":15},
    {"title": "Who is author or C#?", "id":16},
    {"title": "Which link is requried to download .net core?", "id":17}
];


var availableJavaQuestions=[
    {"title": "What is JVM?", "id":34},
    {"title": "What is JavaC Compiler?", "id":35},
    {"title": "What is Maven?", "id":36},
    {"title": "What is Spring Boot?", "id":37},
    {"title": "What is definition of Tomcat?", "id":38},
];

var questions;

function getelementfromdropdown() {
    var value = $("#ddlCategory").val();
    if (value == "csharp") {
        questions=availableDotnetQuestions;
    } else {
        questions=availableJavaQuestions;
    }
}

$(document).ready(function () { 

    //use ajax call for accessing all questions from questionbanks
    //bind them to questions
    


    $("#ddlCategory").change(function () {
        $('#container').empty();
       // $('#output').empty();

        getelementfromdropdown();

        questions.map((question)=>{
            $('#container').append(
                $(document.createElement('input')).prop({
                    id:question.id,
                    name: 'interest',
                    value: question.title,
                    type: 'checkbox'
                })
            ).append(
                $(document.createElement('label')).prop({
                    for: question.id
                }).html(question.title)
                ).append(document.createElement('br'));
            })
        });
    

    $('#submit').click(function() {
        questions.map((question)=>{
            $('#container').append(
                $(document.createElement('input')).prop({
                    id:question.id,
                    name: 'interest',
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
        
    $("#showresult").click(function(){
        $('input[type=checkbox]:checked').each(function () 
        { 
            var status = (this.checked ? $(this).val() : ""); 
            var id = $(this).attr("id"); 
            $('#output').append("<h3>" + id + " : " +status+ "</h3>"); });
    });
});