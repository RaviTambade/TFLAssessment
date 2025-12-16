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
  
  // 1️⃣ Load Concepts When Subject Selected
$(document).on("change", ".subjectRadio", function () {

    let subjectId = $(this).val();
    console.log("subject", subjectId);

    $.ajax({
        url: `http://localhost:5238/api/Concepts/${subjectId}`,
        method: "GET",
        success: function (concepts) {

            console.log("Concepts:", concepts);

            $("#conceptsBox")
                .show()
                .html("<h3>Select Concept</h3>");

            $.each(concepts, function (i, concept) {
                $("#conceptsBox").append(
                    `<label>
                        <input type="checkbox" class="conceptCheckbox" value="${concept.id}">
                        ${concept.title}
                    </label><br>`
                );
            });

            $("#questionsBox").hide();
            $("#previewSection").hide();
        }
    });
});


// 2️⃣ Load Questions When Concept Checkbox Selected
$(document).on("change", ".conceptCheckbox", function () {

    let conceptId = $(this).val();
    let subjectId = $(".subjectRadio:checked").val();   // get selected subject
    let smeId = $("#smeId").val() || 0;                 // optional if needed

    $.ajax({
        url: `http://localhost:5238/api/questionbank/questions/subjects/${subjectId}/concepts/${conceptId}`,
        method: "GET",
        success: function (questions) {

            console.log("subjectID:", subjectId, "conceptId:", conceptId);

            $("#questionsBox")
                .show()
                .html("<h3>Select Question</h3>");

            $.each(questions, function (i, q) {
                $("#questionsBox").append(
                    `<label>
                        <input type="checkbox" class="questionCheckbox" value="${q.id}" data-text="${q.text}">
                        ${q.text}
                    </label><br>`
                );
            });

            $("#questionsBox").append(`<button id="previewBtn">Preview</button>`);
        }
    });
});

});
