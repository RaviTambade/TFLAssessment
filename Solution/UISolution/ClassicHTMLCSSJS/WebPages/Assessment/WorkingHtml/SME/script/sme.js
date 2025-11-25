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

    // Set email if available
    const userEmail = localStorage.getItem("userEmail"); 
    if (userEmail) {
      $("#userEmail").text(userEmail);
    }

     $("#Profile").click(function (e) {
       $("#content").load("profile.html");
     });

    // Load content dynamically into #content
    $(document).ready(function () {
      $("#createTestLink").click(function (e) {
        e.preventDefault();
        $("#content").load("createTestJWT.html"); //Make sure this file is named correctly and in the same directory
      });

      $("#checkQuestionAsPerCriteria").click(function (e) {
        e.preventDefault();
        $("#content").load("subjectcriteriaquestionsJWT.html"); 
      });
    });

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