// ================= AUTH =================
function getToken() {
  return localStorage.getItem("token");
}
function getRole() {
  return localStorage.getItem("role");
}
(function checkAuth() {
  if (!getToken() || getRole() !== "sme") {
    alert("Access denied.");
    window.location.href = "/WorkingHtml/login.html";
  }
})();

// ================= STATE =================
let selectedConcepts = new Set();
let selectedQuestions = [];
let selectedDifficulty = null;

// ================= INIT =================
$(document).ready(function () {
const params = new URLSearchParams(window.location.search);
const isEditMode = params.get("edit") === "true";

  // Set created date
const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  $("#createdDate").val(local);

  const userId = localStorage.getItem("userId");
  const getSubjectsUrl = `http://localhost:5238/api/assessment/subjects`;

  // ================= LOAD SUBJECTS =================
  $.get(getSubjectsUrl, function (subjects) {
    $("#subjectSelect").html(
      '<option value="">-- Select Subject --</option>' +
      subjects.map(s => `<option value="${s.id}">${s.title}</option>`).join("")
    );
      if (isEditMode) {
    restoreFormData();
  }
  });

  // ================= SUBJECT CHANGE =================
  $("#subjectSelect").on("change", function () {
    const subjectId = $(this).val();

    $("#conceptContainer").empty();
    $("#questionsList").html(`<p class="no-questions">Select concepts and difficulty.</p>`);
    selectedConcepts.clear();
    selectedDifficulty = null;
    $("input[name='difficulty']").prop("checked", false);
    updateLoadButtonState();

    if (!subjectId) return;

    $.get(`http://localhost:5238/api/Concepts/${subjectId}`, function (concepts) {
      if (!concepts.length) {
        $("#conceptContainer").html("<p>No concepts available</p>");
        return;
      }

      concepts.forEach(c => {
        const card = $(`<div class="concept-card" data-id="${c.id}">${c.title}</div>`);

        card.on("click", function () {
          const id = Number($(this).data("id"));

          if (selectedConcepts.has(id)) {
            selectedConcepts.delete(id);
            $(this).removeClass("selected");
          } else {
            selectedConcepts.add(id);
            $(this).addClass("selected");
          }

          updateLoadButtonState();
        });

        $("#conceptContainer").append(card);
      });
    });
  });

  // ================= DIFFICULTY CHANGE =================
  $("input[name='difficulty']").on("change", function () {
    selectedDifficulty = $(this).val();
    updateLoadButtonState();
  });

  // ================= LOAD QUESTIONS =================
  $("#loadQuestionsBtn").on("click", function () {
    const subjectId = $("#subjectSelect").val();
    $("#questionsList").empty();

    selectedConcepts.forEach(conceptId => {
      // const url = `http://localhost:5238/api/Questions/conceptId/${conceptId}/subjectId/${subjectId}/difficultyLevel/${selectedDifficulty}`;
 const url = `http://localhost:5238/api/questionbank/conceptId/${conceptId}/subjectId/${subjectId}/difficultyLevel/${selectedDifficulty}`;
      $.get(url, function (questions) {
        // renderQuestions(questions);
          renderQuestions(questions, conceptId);

        updateViewButtonState();
      });
    });
  });

  // ================= SUBMIT =================
  $("#submitBtn").on("click", function () {
    if (selectedQuestions.length === 0) {
      alert("Please select at least one question.");
      return;
    }

    const reviewData = {
      name: $("#testName").val(),
      duration: $("#duration").val(),
      subjectId: $("#subjectSelect").val(),
      subjectTitle: $("#subjectSelect option:selected").text(),
concepts: Array.from(selectedConcepts),
      smeId: Number(localStorage.getItem("userId")),
      smeName: localStorage.getItem("userName"),
      createdDate: $("#createdDate").val(),
      passingLevel: $("#passingLevel").val(),
      difficulty: selectedDifficulty,
      questions: selectedQuestions
    };
console.log("conceptconcept",reviewData.concepts);
    sessionStorage.setItem("testReviewData", JSON.stringify(reviewData));
    window.location.href = "reviewtest.html";
  });

function updateLoadButtonState() {
  $("#loadQuestionsBtn").prop(
    "disabled",
    !($("#subjectSelect").val() && selectedConcepts.size && selectedDifficulty)
  );
}

function updateViewButtonState() {
  $("#viewSelectedBtn").prop(
    "disabled",
    !($("#subjectSelect").val() && selectedConcepts.size && selectedDifficulty && selectedQuestions)
  );
}
function toggleQuestion(id, title, checkbox) {
    if (checkbox.checked) {
        selectedQuestions.push({ id, title });
    } else {
        selectedQuestions = selectedQuestions.filter(q => q.id !== id);
    }

    $("#viewSelectedBtn").toggle(selectedQuestions.length > 0);
}

function renderQuestions(questions,conceptId) {
  questions.forEach(question => {

    // Prevent duplicate DOM cards
    if ($(`#q-${question.id}`).length) return;

    // Safe check (question is defined)
    const isChecked = selectedQuestions.some(x => x.id === question.id);

    const card = $(`
      <div class="question-card" id="q-${question.id}">
        <input type="checkbox" ${isChecked ? "checked" : ""}>
        <span>${question.title}</span>
      </div>
    `);

    card.find("input").on("change", function () {
      if (this.checked) {
        if (!selectedQuestions.some(x => x.id === question.id)) {
          selectedQuestions.push({ id: question.id, 
            title: question.title,
           conceptTitle: question.conceptTitle ?? "",
            difficulty: selectedDifficulty });
             localStorage.setItem("selectedQuestions",JSON.stringify(selectedQuestions));
        }
      } else {
        selectedQuestions = selectedQuestions.filter(x => x.id !== question.id);
       localStorage.setItem("selectedQuestions",JSON.stringify(selectedQuestions));

      }

      $("#viewSelectedBtn").toggle(selectedQuestions.length > 0);
    });

    $("#questionsList").append(card);
  });
}


$("#viewSelectedBtn").click(function () {
    let html = "";
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        console.log("selectedQuestions",selectedQuestions.length);
                console.log("selectedQuestions",selectedQuestions);



    selectedQuestions.forEach(q => {
          console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

          html += `
          <div class="selected-item">
            <input type="checkbox"
                   checked
                   data-id="${q.id}">
            ${q.title}
          </div>
        `;
    });

    $("#selectedQuestionsList").html(html);
    $("#selectedQuestionsModal").show();
});
function removeFromSelection(id, checkbox) {
    if (!checkbox.checked) {
        selectedQuestions = selectedQuestions.filter(q => q.id !== id);
    }

    if (selectedQuestions.length === 0) {
        $("#selectedQuestionsModal").hide();
        $("#viewSelectedBtn").hide();
    }
}
$("#selectedQuestionsList").on("change", "input[type='checkbox']", function () {
    const id = Number($(this).data("id"));

    // 1️⃣ Remove from selectedQuestions array
    selectedQuestions = selectedQuestions.filter(q => q.id !== id);

    // 2️⃣ Uncheck in main question list
    $(`#q-${id} input[type='checkbox']`).prop("checked", false);

    // 3️⃣ Re-render selected list
    if (selectedQuestions.length === 0) {
        $("#selectedQuestionsModal").hide();
        $("#viewSelectedBtn").hide();
    } else {
        $("#viewSelectedBtn").show();
        $("#viewSelectedBtn").click(); // refresh modal
    }
});
function restoreFormData() {
  const savedData = JSON.parse(sessionStorage.getItem("testReviewData"));
  if (!savedData) return;
console.log(savedData,"savedData");
  // Basic fields
  $("#testName").val(savedData.name);
  $("#duration").val(savedData.duration);
  $("#createdDate").val(savedData.createdDate);
  $("#passingLevel").val(savedData.passingLevel);
$("conceptContainer").val(savedData.concept);
  // Subject
  $("#subjectSelect").val(savedData.subjectId).trigger("change");

  //concepts
  $("#conceptContainer").val(savedData.concept).trigger("change");


  // Difficulty
  selectedDifficulty = savedData.difficulty;
  $(`input[name="difficulty"][value="${selectedDifficulty}"]`)
    .prop("checked", true);

  // Restore selected questions
  selectedQuestions = savedData.questions || [];

  // Enable buttons
  updateLoadButtonState();
  updateViewButtonState();
}



});
