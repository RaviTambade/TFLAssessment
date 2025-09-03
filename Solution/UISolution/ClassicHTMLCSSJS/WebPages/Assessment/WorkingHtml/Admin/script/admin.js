function getToken() {
  return localStorage.getItem("token");
}

function getRole() {
  return localStorage.getItem("role");
}

// Redirect unauthorized users
(function checkAuth() {
  if (!getToken() || getRole() !== "admin") {
    alert("Access denied.");
    window.location.href = "/WorkingHtml/login.html";
  }
})();

// Load content dynamically into #content
$(document).ready(function () {
  $("#showTestBtw").click(function (e) {
    e.preventDefault();
    $("#content").load("showTestBetweenDateJWT.html"); // Make sure this file is named correctly
  });

  $("#showAllTest").click(function (e) {
    e.preventDefault();
    $("#content").html("<h3>Coming soon: Create Test With Questions!</h3>");
  });

  $("#logoutBtn").click(function () {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/WorkingHtml/Home.html";
  });
});
