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

    // Set email if available
    const userEmail = localStorage.getItem("userEmail"); 
    if (userEmail) {
      $("#userEmail").text(userEmail);
    }

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
        localStorage.clear();  
        sessionStorage.clear(); 
        window.location.href = "/WorkingHtml/Home.html";
      });