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
   getSubjectsUrl = "http://localhost:5238/api/assessment/subjects";

  $(document).ready(function () {
    const editMode = new URLSearchParams(window.location.search).get("edit") === "true";
    const savedData = JSON.parse(sessionStorage.getItem("testReviewData"));

    // Load subjects
    $.get(getSubjectsUrl, function (subjects) {
      $("#subjectSelect").html('<option value="">-- Select Subject --</option>' +
        subjects.map(s => `<option value="${s.id}">${s.title}</option>`).join(""));

      if (editMode && savedData) {
        $("#testName").val(savedData.name);
        $("#duration").val(savedData.duration);
        $("#scheduledDate").val(savedData.scheduledDate);
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
        loadSMEs(subjectId);
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

    function loadSMEs(subjectId) {
      $.get(`http://localhost:5238/api/Assessment/getsme/${subjectId}`, function (smes) {
        if (smes.length === 0) {
          $("#smeSelect").html(`<option value="">No SMEs available</option>`).prop("disabled", true);
          return;
        }
        $("#smeSelect").html(`<option value="">-- Select SME --</option>` +
          smes.map(sme => `<option value="${sme.id}">${sme.firstName} ${sme.lastName}</option>`).join("")
        ).prop("disabled", false);

        $(document).trigger("smeloaded");
      });
    }

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
      const smeId = $("#smeSelect").val();
      const smeName = $("#smeSelect option:selected").text();
      const scheduledDate = $("#scheduledDate").val();
      const passingLevel = $("#passingLevel").val();

      if (!subjectId || !name || !duration || !scheduledDate || !smeId || selectedQuestions.length === 0) {
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
        scheduledDate,
        passingLevel,
        questions: selectedQuestions
      };

      sessionStorage.setItem("testReviewData", JSON.stringify(reviewData));
      window.location.href = "reviewtest.html";
    });
  });
