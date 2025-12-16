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

function loadSubjects() {
  let smeId = localStorage.getItem("userId");

  $.ajax({
    url: `http://localhost:5238/api/Assessment/subjectBySme/${smeId}`,
    method: "GET",
    headers: { "Authorization": "Bearer " + getToken() },
    success: function (subjects) {
     
      let html = "<h3>Your Subjects</h3><ul>";
      subjects.forEach(s => {
        html += `<li>${s.title}</li>`;
      });
      html += "</ul>";

      $("#content").append(html);
    },
    error: function (err) {
      console.error(err);
      alert("Failed to load subjects");
    }
  });
}
