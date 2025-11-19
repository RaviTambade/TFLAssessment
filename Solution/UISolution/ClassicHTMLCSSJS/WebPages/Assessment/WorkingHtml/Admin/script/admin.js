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
    window.location.href = "loginJWT.html";
  }
})();

 $("#Profile").click(function (e) {
   $("#content").load("profile.html");
 });


 $("#changeRole").click(function (e) {
   $("#content").load("changeUserRole.html");
 });


  $("#updateSme").click(function (e) {
    $("#content").load("smeSubject.html");
  });
  $("#addNewRole").click(function (e) {
    $("#content").load("addNewRole.html");
  });

  $("#rolesDash").click(function (e) {
    $("#content").load("rolesDashboard.html");
  });

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
    window.location.href = "/Home.html";
  });
});

// Delegated event listener for role checkboxes inside dynamic content
$(document).on("change", ".roleCheck", function () {

    const outputDiv = document.getElementById("output");

    const selectedRoleIds = $(".roleCheck:checked")
        .map(function() { return $(this).data("id"); })
        .get();

    if (selectedRoleIds.length === 0) {
        outputDiv.innerHTML = "";
        return;
    }

    outputDiv.innerHTML = "<p>Loading...</p>";

    const queryString = selectedRoleIds.map(id => `roleIds=${id}`).join("&");

    fetch(`http://localhost:5238/api/Role/users?${queryString}`)
        .then(r => r.json())
        .then(result => {
            outputDiv.innerHTML = "";

            if (!result || result.length === 0) {
                outputDiv.innerHTML = "<p>No users found.</p>";
                return;
            }

            let html = "<ul>";
            result.forEach(u => {
                html += `<li>${u.firstname} ${u.lastname}</li>`;
            });
            html += "</ul>";

            outputDiv.innerHTML = html;
        })
        .catch(err => {
            console.error(err);
            outputDiv.innerHTML = "<p>Error loading users.</p>";
        });
});

