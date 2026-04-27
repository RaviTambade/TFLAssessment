const urlParams = new URLSearchParams(window.location.search);
const testId = urlParams.get("id");
const testDuration = urlParams.get("duration");

$(document).ready(function () {
  $("#changeStatus").click(function () {
    const selectedStatus = $("#statusDropdown").val();

    if (!testId) {
      alert("Test ID not found in URL.");
      return;
    }
    if (!testDuration) {
      alert("Test Duration not found in URL.");
      return;
    }
    console.log(testDuration);

    $.ajax({
      url: `http://localhost:5238/api/Assessment/updateteststatus/${testId}`,
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify({ status: selectedStatus }),
      success: function (response) {
        alert("Status updated to '" + selectedStatus + "' successfully.");
        console.log(response);
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("Failed to update status.");
      }
    });
  });




  $("#getStudents").click(function () {
    $.ajax({
      url: `http://localhost:5238/api/Assessment/employees`,
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        let html = `
                <table border="1" cellpadding="10" cellspacing="0" style="background:#fff; border-collapse: collapse;">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
              `;

        response.forEach(function (emp) {
          const fullName = emp.firstName + ' ' + emp.lastName;
          html += `
                  <tr>
                    <td><input type="checkbox" class="emp-checkbox" value="${emp.userId}"></td>
                    <td>${fullName}</td>
                    <td>${emp.email}</td>
                    <td>${emp.contact}</td>
                  </tr>
                `;
        });

        html += `</tbody></table>`;

        $("#employeeList").html(html); // Show the table
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("Failed to update status.");
      }
    });
  });

  function calculateEndDate(startDateTime, duration) {
    const [hours, minutes] = duration.split(":").map(Number);
    const date = new Date(startDateTime);
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
    // return date.toISOString().slice(0, 16);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hoursStr = String(date.getHours()).padStart(2, "0");
    const minutesStr = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hoursStr}:${minutesStr}`;
  }



  $("#scheduledStart").on("change", function () {
    const start = $(this).val();

    if (!start || !testDuration) return;

    console.log(start);
    console.log(testDuration);
    const end = calculateEndDate(start, testDuration);

    // ✅ SHOW it in UI
    $("#scheduledEnd").val(end);
  });



  $("#addStudent").click(function () {
    const selectedIds = [];
    $(".emp-checkbox:checked").each(function () {
      selectedIds.push(parseInt($(this).val()));
    });

    if (!testId) {
      alert("Test ID not found in URL.");
      return;
    }

    if (selectedIds.length === 0) {
      alert("Please select at least one employee.");
      return;
    }

    const scheduledStart = $("#scheduledStart").val();
    const scheduledEnd = $("#scheduledEnd").val();



    const remarks = $("#remarks").val();

    if (!scheduledStart) {
      alert("Please enter scheduled start.");
      return;
    }



    const requestBody = {
      testId: parseInt(testId),
      candidateIds: selectedIds,
      scheduledStart: scheduledStart,
      scheduledEnd: scheduledEnd,
      createdBy: localStorage.getItem("userId"),
      status: $("#statusDropdown").val(), // Get from dropdown
      rescheduledOn: null,

    };

    console.log("Candidate IDs:", selectedIds.join(", "));

    $.ajax({
      url: "http://localhost:5238/api/Assessment/addemployees",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
      success: function (res) {
        alert(res.message || "Employees assigned to test successfully.");
        window.location.href = "admin.html";
      },
      error: function (xhr, status, err) {
        console.error("Error:", xhr.responseText);
        alert("Failed to assign employees.");
      }
    });
  });

});
