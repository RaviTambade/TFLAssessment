



var showQuestion = (index)=> {
    let currentQuestion = questions[index];
    let Title = questions[index].title;
    let option1 = questions[index].a;
    let option2 = questions[index].b;
    let option3 = questions[index].c;
    let option4 = questions[index].d;
  
    //Bind question details to HTML controls 
    $("#pTitle").text(Title);
    $("#lblOptionA").text(option1);
    $("#lblOptionB").text(option2);
    $("#lblOptionC").text(option3);
    $("#lblOptionD").text(option4);
}


var loadProgressBar=()=> {

    var totalQuestions = questions.length;
    var ans = questions.filter(ans => ans.answer != "No").length;
    var percentage = (ans * 100) / (totalQuestions);
  
    let progressBar = $("#progress1");
    let progressBarWidth = percentage + "%";
    progressBar.width(progressBarWidth)
    progressBar.text(percentage + "%");
}
  
var resetCheckedRadio=()=> {
    var selectedOption = $("input[name='answer']:checked").attr("id");
    if (selectedOption) {
      $("#" + selectedOption).prop("checked", false);
    }
}
  
var getCurrentDateTime=()=>{
                      let d = new Date();
                      time.month=(d.getMonth() + 1).toString().padStart(2, '0');
                      time.year=d.getFullYear();
                      time.day=d.getDate();
                      time.hour=d.getHours();
                      time.minutes=d.getMinutes();
                      time.seconds=d.getSeconds();

                      return time;
};
  
var activateNavigation=(status)=>{
    $("#btnNext").prop("disabled", status);
    $("#btnPrevious").prop("disabled", status);
    $("#btnFirst").prop("disabled", status);
    $("#btnLast").prop("disabled", status);    
}
  
 
  
var  testTimeLimit=()=>{  
     intervalId = setInterval(()=> {
                                          $("#stopWatch").html(remainingTime);
                                          if (remainingTime === 0){
                                            activateNavigation(true);
                                            $("#btnStart").prop("disabled", true);
                                            clearInterval(intervalId);
                                          }
                                          else{
                                             $("#btnSubmit").prop("disabled", false);
                                          } 
                                          remainingTime --;         
                                        }  ,
                                        1000);
}
