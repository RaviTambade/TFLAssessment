
    const testData = JSON.parse(sessionStorage.getItem("testReviewData"));
    if (!testData) {
      alert("No data to review.");
      window.location.href = "createTestJWT.html";
    }

    $("#revName").text(testData.name);
    $("#revDuration").text(testData.duration);
    $("#revSubject").text(testData.subjectTitle);
    $("#revSME").text(testData.smeName);
    $("#revDate").text(testData.scheduledDate);
    $("#revLevel").text(testData.passingLevel);
    $("#revQuestions").html(testData.questions.map(q => `<li>${q.title}</li>`).join(""));

    $("#confirmBtn").click(function () {
      const payload = {
        subjectId: parseInt(testData.subjectId),
        name: testData.name,
        duration: testData.duration,
        smeId: parseInt(testData.smeId),
        // scheduledDate: new Date(testData.scheduledDate).toISOString(),
        scheduledDate: testData.scheduledDate,
        passingLevel: parseInt(testData.passingLevel),
        questionIds: testData.questions.map(q => q.id),
        creationDate: new Date().toISOString(),
        modificationDate: new Date().toISOString()
      };

      const token = localStorage.getItem("token");

      $.ajax({
        url: "http://localhost:5238/api/Assessment/addtest",
        type: "POST",
        contentType: "application/json",
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: JSON.stringify(payload),
        success: function (res) {
          sessionStorage.removeItem("testReviewData");
          window.location.href = "sme.html?msg=Test Created Successfully";
        },
        error: function (xhr) {
          console.error("Error:", xhr.responseText);
          alert("Test creation failed.");
        }
      });
    });

    $("#backBtn").click(function () {
        window.location.href = "createTestJWT.html?edit=true";
    });
