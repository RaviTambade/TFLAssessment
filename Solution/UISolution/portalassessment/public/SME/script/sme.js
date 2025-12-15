var subjectId;
var conceptId;

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
    window.location.href = "/loginJWT.html";
  }
})();

$(document).ready(function () {

  // Show username
  const userName = localStorage.getItem("userName");
  if (userName) {
    $("#userName").text(userName);
  }

  // Show email
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    $("#userEmail").text(userEmail);
  }

  $(document).ready(function () {
    $("#emailTrigger").on("click", function (e) {
      e.stopPropagation();
      $("#dropdownMenu").toggleClass("hidden");
    });

    $(document).on("click", function () {
      $("#dropdownMenu").addClass("hidden");
    });
    $("#profile").on("click", function (e) {
      $("#content").load("profile.html");
    });
    $("#settings").on("click", function () {
      window.location.href = "/settings";
    });
    $("#logoutBtn").on("click", function () {
      // logout logic
      alert("Logging out");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/Home.html";
      // maybe redirect
    });
  });

  // Load SME subjects

  loadSubjects();

  // Sidebar clicks
  $("#createTestLink").click(function (e) {
    e.preventDefault();
    $("#content").load("createTestJWT.html");
  });

  $("#checkQuestionAsPerCriteria").click(function (e) {
    e.preventDefault();
    $("#content").load("subjectcriteriaquestionsJWT.html");
  });

  $("#Profile").click(function (e) {
    e.preventDefault();
    $("#content").load("profile.html");
  });

  // Logout
  $("#logoutBtn").click(function () {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID missing.");
      return;
    }
    $.ajax({
      url: `http://localhost:5238/api/usersession/logout/${userId}`,
      method: "POST",
      success: function (res) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/Home.html";
      },
      error: function (err) {
        alert("Logout failed");
      }
    });
  });

});


// Load SME subjects
function loadSubjects() {
  let smeId = localStorage.getItem("userId");

  $.ajax({
    url: `http://localhost:5238/api/Assessment/subjectBySme/${smeId}`,
    method: "GET",
    headers: { "Authorization": "Bearer " + getToken() },
    success: function (subjects) {

      let subjectList = subjects.map(s => s.title).join(", ") + ".";

      let html = `Subject Experties In: ${subjectList}`;

      // $("#content").append(html);
      $("#subjectContainer").html(html);

    },
    error: function (err) {
      console.error(err);
      alert("Failed to load subjects");
    }
  });
}
loadSubjects();

//select subject for creating test

$("#loadSubjectsBtn").click(function () {
  let smeId = localStorage.getItem("userId");
  console.log("SME ID:", smeId);

  $.ajax({
    url: `http://localhost:5238/api/subject/GetSmeSubjects/${smeId}`,
    method: "GET",
    success: function (subjects) {
      console.log("Subjects:", subjects);

      let html = `<h3>Select Subject</h3>`;

      subjects.forEach(sub => {
        html += `
                <div>
                    <input type="radio" name="subject" class="subjectRadio" value="${sub.id}">
                    <label>${sub.title}</label> 
                </div>
            `;
      });

      $("#subjectsBox").html(html).show();
    },
    error: function (err) {
      console.error(err);
    }
  });

});


// 2️⃣ Load Concepts When Subject Selected
$(document).on("change", ".subjectRadio", function () {

  // // Disable all subject radio buttons after one is selected
  // $(".subjectRadio").prop("disabled", true);

  // Lock other radios once one is selected but button remains enabled
  $(".subjectRadio").not(this).prop("disabled", true);

  subjectId = $(this).val();
  $.ajax({
    url: `http://localhost:5238/api/Concepts/${subjectId}`,
    method: "GET",
    success: function (concepts) {

      console.log("Concepts:", concepts);
      $("#conceptsBox").show().html("<h3>Select Concept</h3>");
      $.each(concepts, function (i, concept) {
        $("#conceptsBox").append(
          `<label><input type="checkbox" class="conceptCheckbox" value="${concept.id}"> ${concept.title}</label><br>`
        );
        console.log("concept.conceptId", concept.id);
      });
      $("#questionsBox").hide();
      $("#previewSection").hide();
    }
  });
});


// 3️⃣ Load Questions When Concept Checkbox Selected
$(document).on("change", ".conceptCheckbox", function () {
  conceptId = $(this).val();
  console.log("conceptCheckbox", subjectId);
  $.ajax({
    url: `http://localhost:5238/api/questionbank/questions/subjects/options/${subjectId}/concepts/${conceptId}`,
    method: "GET",
    success: function (questions) {
      console.log("subjectID", subjectId, "conceptID", conceptId);
      $("#questionsBox").show().html("<h3>Select Question</h3>");

      $.each(questions, function (i, q) {
        $("#questionsBox").append(
          `<label><input type="checkbox" class="questionCheckbox" value="${q.questionId}" data-question="${q.question}"> 
          ${q.question}
          </label><br>
          <hr>`
          // <div id="optionsBox"
          //     <label><input type="radio" name="q${q.questionId}" value="${q.a}"> ${q.a}</label>
          //     <label><input type="radio" name="q${q.questionId}" value="${q.b}"> ${q.b}</label>
          //     <label><input type="radio" name="q${q.questionId}" value="${q.c}"> ${q.c}</label>
          //     <label><input type="radio" name="q${q.questionId}" value="${q.d}"> ${q.d}</label>
          // </div>
        );
      });
      $("#questionsBox").append(`<button id="previewBtn">Preview</button>`);
    }
  });
});


// 4️⃣ Preview Selected Question
$(document).on("click", "#previewBtn", function () {
  var selected = [];

  $(".questionCheckbox:checked").each(function () {
    selected.push($(this).data("question"));
  });

  if (selected.length === 0) {
    alert("Please select a question");
    return;
  }

  $("#preview-box").html(selected.join("<br>"));
  $("#previewSection").show();
});

// 5️⃣ Submit Test                
$(document).on("click", "#submitPreviewBtn", function () {

  let submittedQuestions = [];

  // Get all checkboxes that were selected originally
  $(".questionCheckbox:checked").each(function () {
    submittedQuestions.push({
      id: $(this).val(),                 // question ID
      question: $(this).data("question") // question text
    });
  });

  console.log("Submitted Questions:", submittedQuestions);

  alert("Questions submitted successfully!");
});


