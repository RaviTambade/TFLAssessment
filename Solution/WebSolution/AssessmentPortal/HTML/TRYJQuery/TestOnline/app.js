 
//global variable 
var current = 0;

var subjects = [];
var questions = [];
var time={};

var intervalId ;
var remainingTime=60;
var score;

var testId=1;
var candidateId = 3;



//rest api urls

var testsapi= "http://localhost:5238/tests/";
var starttimeurl = "http://localhost:5238/test/setstarttime";
var candidateanswersurl = "http://localhost:5238/answersheet/candidates/";
var endtimeurl = "http://localhost:5238/test/setendtime";
var resulturl = "http://localhost:5238/result/candidates/";


$(document).ready(function () { 

  //Test start and submit handlers
  $("#btnStart").click(()=>{
      activateNavigation(false);
      let currentIndex=0;
      startTime=getCurrentDateTime();
      let questionsAPI = testsapi + testId;
      $.get(questionsAPI, function (data, status) {
        questions = (data);
        questions.map((question) => { question["answer"] = "No" });
        showQuestion(currentIndex);  
      });
      
        //let url = "http://localhost:5238/test/setstarttime";
        var testStartTime={"CandidateId":candidateId,"TestId":testId,"Time":startTime};
        $.ajax({     
              url: starttimeurl,
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify(testStartTime),
    
              success: function (response) {
                console.log("inside post "+response);
                console.log(""+response);
              },
              error: function (xhr, status, error) {
                console.error(xhr.responseText);
                console.log("inside post "+error);
              }
      });
        activateNavigation(false);
        testTimeLimit();
    })
  
  $("#btnSubmit").click( ()=> {
    clearInterval(intervalId);
    $("#btnStart").prop("disabled", true);
    $("#btnSubmit").prop("disabled", true);
    activateNavigation(true);
    var finalCandidateAnswers = [];
  
    questions.map((question) => {
      let questionId = question.id;
      let answer = question.answer;
      
      finalCandidateAnswers.push({ "Answer": answer, "TestQuestionId": questionId });
    })
    var endTime=getCurrentDateTime();

    
    let evaluateUrl = candidateanswersurl+candidateId+"/tests/"+testId;
    $.ajax({
            url: evaluateUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(finalCandidateAnswers),
  
            success: function (response) {
              // Show result
              console.log(response);
            },
            error: function (xhr, status, error) {
              console.error(xhr.responseText);
            }
    });
    
    var testEndTime ={"CandidateId":candidateId,"TestId":testId,"Time":endTime}
  
    $.ajax({
            url: endtimeurl,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(testEndTime),
  
            success: function (response) {
              // Show result
              console.log(response);
            },
            error: function (xhr, status, error) {
              console.error(xhr.responseText);
            }
    });   
  }); 
  
  //Show Result
  $("#btnResult").click(()=>{
    
    //result/candidates/{candidateId}/test/{testId}/
    let url = resulturl+candidateId+"/test/"+testId;
    $.get(url, function (data, status) {
      score = (data);
      $("#lblresult").text("Your Score is:"+score);
    });
  })
        

 //refersh progress bar on answer  selection
  $("input[type='radio']").click(()=> {
    var selectedOption = $("input[name='answer']:checked").attr("id");
    if (selectedOption) {
      questions[current].answer = selectedOption;
    }
    loadProgressBar();
  });

  //Navigation handlers
  
  $("#btnFirst").click(()=> {
    current = 0;
    resetCheckedRadio();
    showQuestion(current);
    let selectedAnswer = questions[current].answer;
    if (selectedAnswer !== "NO") {
      let radiobutton = "#" + selectedAnswer;
      $(radiobutton).prop("checked", true);
    }
    else {
      $("[name='answer']").prop("checked", false);
    }
    
    $("#btnPrevious").prop("disabled", true);
    $("#btnNext").prop("disabled", false);
    $("#btnSubmit").prop("disabled", true);
  
  });
  
  $("#btnPrevious").click( ()=> {
    current--;
  
    if (current == 0) {
      $("#btnPrevious").prop("disabled", true);
      $("#btnNext").prop("disabled", false);
      $("#btnSubmit").prop("disabled", true);
    }
    else if (current == questions.length-1 || current > 0) {
      $("#btnNext").prop("disabled", false);
    }
    resetCheckedRadio();
    showQuestion(current);
    // setRadio(current);
    let selectedAnswer = questions[current].answer;
    if (selectedAnswer !== "NO") {
  
      let radiobutton = "#" + selectedAnswer;
      $(radiobutton).prop("checked", true);
    }
    else {
      $("[name='answer']").prop("checked", false);
    }
  });
  
  $("#btnNext").click( ()=> {
    current++;
    $("#btnPrevious").prop("disabled", false);
    if (current == questions.length - 1) {
      $("#btnNext").prop("disabled", true);
      $("#btnSubmit").prop("disabled", false);
    }
    resetCheckedRadio();
    showQuestion(current);
    // setRadio(current);
    let selectedAnswer = questions[current].answer;
    if (selectedAnswer !== "NO") {
  
      let radiobutton = "#" + selectedAnswer;
      $(radiobutton).prop("checked", true);
    }
    else {
      $("[name='answer']").prop("checked", false);
    }
  });
  
  $("#btnLast").click( ()=> {
    current = questions.length - 1;
    resetCheckedRadio();
    showQuestion(current);
    //setRadio(current);
    let selectedAnswer = questions[current].answer;
    if (selectedAnswer !== "NO") {
  
      let radiobutton = "#" + selectedAnswer;
      $(radiobutton).prop("checked", true);
    }  
    else if(remainingTime>=0){
      $("#btnNext").prop("disabled", true);
      $("#btnPrevious").prop("disabled", false);
    }
    else {
      $("[name='answer']").prop("checked", false);
    }
  });                                                    
}) 