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

  $("#getQuestions").click(function (e) {
    $("#content").load("getQuestions.html");
  });

  $("#getCriteriaQuestion").click(function (e) {
    $("#content").load("getCriteriaQuestion.html");
  });

  $("#UserAnalytics").click(function (e) {
    $("#content").load("UserAnalytics.html");
  });


// Load content dynamically into #content
$(document).ready(function () {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    $("#userEmail").text(userEmail);
  }


  $("#showTestBtw").click(function (e) {
    e.preventDefault();
    $("#content").load("showTestBetweenDateJWT.html"); // Make sure this file is named correctly
  });

  $("#showAllTest").click(function (e) {
    e.preventDefault();
    $("#content").load("TestByStatus.html");
  });

    $("#rolesDash").click(function (e) {
    $("#content").load("rolesDashboard.html");
    });

  $("#logoutBtn").click(function () {
        let userId = localStorage.getItem("userId");
        if (!userId) {
        // alert("User ID missing.");
        return;
    }
    $.ajax({
        url: `http://localhost:5238/api/usersession/logout/${userId}`,
        method: "POST",
        success: function (res) {
            console.log("Logout success:", res);

            // Clear browser storage
            localStorage.clear();
            sessionStorage.clear();

            // Redirect
            window.location.href = "/Home.html";
        },
        error: function (err) {
            console.error("Logout error:", err);
            alert("Something went wrong while logging out.");
        }
    });



});
});


// Delegated event listener for role checkboxes inside dynamic content
// $(document).on("change", ".roleCheck", function () {

//     const outputDiv = document.getElementById("output");

//     const selectedRoleIds = $(".roleCheck:checked")
//         .map(function() { return $(this).data("id"); })
//         .get();

//     if (selectedRoleIds.length === 0) {
//         outputDiv.innerHTML = "";
//         return;
//     }

//     outputDiv.innerHTML = "<p>Loading...</p>";

//     const queryString = selectedRoleIds.map(id => `roleIds=${id}`).join("&");

//     fetch(`http://localhost:5238/api/Role/users?${queryString}`)
//         .then(r => r.json())
//         .then(result => {
//             outputDiv.innerHTML = "";

//             if (!result || result.length === 0) {
//                 outputDiv.innerHTML = "<p>No users found.</p>";
//                 return;
//             }

//             let html = "<ul>";
//             result.forEach(u => {
//                 html += `<li>${u.firstname} ${u.lastname}</li>`;
//             });
//             html += "</ul>";

//             outputDiv.innerHTML = html;
//         })
//         .catch(err => {
//             console.error(err);
//             outputDiv.innerHTML = "<p>Error loading users.</p>";
//         });
// });

