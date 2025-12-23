    function getToken() {
      return localStorage.getItem("token");
    }
    
    function getRole() {
      return localStorage.getItem("role");
    }
    
    // Redirect unauthorized users
    (function checkAuth() {
      if (!getToken() || getRole() !== "sme") {
        alert("Access denied.");
        window.location.href = "/WorkingHtml/login.html";
      }
    })();

   selectedQuestions = [];
  //  getSubjectsUrl = "http://localhost:5238/api/assessment/subjects";
   var userId = localStorage.getItem("userId")
   getSubjectsUrl = `http://localhost:5238/api/subject/GetSmeSubjects/${userId}`; // userId is smeId

  $(document).ready(function () {
    const currentDate = new Date();

    const editMode = new URLSearchParams(window.location.search).get("edit") === "true";
    const savedData = JSON.parse(sessionStorage.getItem("testReviewData"));

     // Convert to local datetime format: YYYY-MM-DDTHH:mm
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
      
    $("#createdDate").val(formattedDateTime);

    // Load subjects
    $.get(getSubjectsUrl, function (subjects) {
      $("#subjectSelect").html('<option value="">-- Select Subject --</option>' +
        subjects.map(s => `<option value="${s.id}">${s.title}</option>`).join(""));

      if (editMode && savedData) {
        $("#testName").val(savedData.name);
        $("#duration").val(savedData.duration);
        $("#createdDate").val(savedData.createdDate);
        $("#passingLevel").val(savedData.passingLevel);
        $("#subjectSelect").val(savedData.subjectId).trigger("change");

        $(document).on("smeloaded", function () {
          $("#smeSelect").val(savedData.smeId);
        });

        $(document).on("questionsloaded", function () {
          selectedQuestions = [];
          $("#questionsList .question-checkbox").each(function () {
            const id = Number($(this).val());
            const title = $(this).siblings("span").text().trim();
            if (savedData.questions.some(q => q.id === id)) {
              $(this).prop("checked", true);
              selectedQuestions.push({ id, title });
            }
          });
        });
      }
    });

    $("#subjectSelect").change(function () {
      const subjectId = $(this).val();
      selectedQuestions = [];
      if (subjectId) {
        loadQuestions(subjectId);
      } else {
        resetSME();
        resetQuestions();
      }
    });

    function resetSME() {
      $("#smeSelect").html(`<option value="">-- Please select a subject first --</option>`).prop("disabled", true);
    }

    function resetQuestions() {
      $("#questionsList").html(`<p class="no-questions">Please select a subject to view questions.</p>`);
    }

    $("#smeName").val(localStorage.getItem("userName"));

    function loadQuestions(subjectId) {
      $.get(`http://localhost:5238/api/Assessment/allquestionsbysubject/${subjectId}`, function (questions) {
        if (questions.length === 0) {
          $("#questionsList").html("<p class='no-questions'>No questions available for this subject.</p>");
          return;
        }

        $("#questionsList").html(
          questions.map(q =>
            `<div class="question-card">
              <input type="checkbox" class="question-checkbox" value="${q.questionBankId}" />
              <span>${q.title}</span>
            </div>`
          ).join("")
        );

        $(document).trigger("questionsloaded");

        $(".question-checkbox").on("change", function () {
          const id = Number($(this).val());
          const title = $(this).siblings("span").text().trim();

          if ($(this).is(":checked")) {
            if (!selectedQuestions.some(q => q.id === id)) {
              selectedQuestions.push({ id, title });
            }
          } else {
            selectedQuestions = selectedQuestions.filter(q => q.id !== id);
          }
        });
      });
    }

    $("#submitBtn").click(function () {
      const subjectId = $("#subjectSelect").val();
      const subjectTitle = $("#subjectSelect option:selected").text();
      const name = $("#testName").val();
      const duration = $("#duration").val();
      const smeId = parseInt(localStorage.getItem("userId"));
      const smeName = localStorage.getItem("userName");
      const createdDate = $("#createdDate").val();
      const passingLevel = $("#passingLevel").val();
     
      console.log(`Details ${smeId},  ${smeName}, ${createdDate}, ${passingLevel}` );
      if (!subjectId || !name || !duration || !createdDate || !smeId || selectedQuestions.length === 0) {
        alert("Please fill all fields and select at least one question.");
        return;
      }

      const reviewData = {
        subjectId,
        subjectTitle,
        name,
        duration,
        smeId,
        smeName,
        createdDate,
        passingLevel,
        questions: selectedQuestions
      };

      sessionStorage.setItem("testReviewData", JSON.stringify(reviewData));
      window.location.href = "reviewtest.html";
    });
  });
