    const urlParams = new URLSearchParams(window.location.search);
    const testId = urlParams.get("id");

    $(document).ready(function () {
      $("#changeStatus").click(function () {
        const selectedStatus = $("#statusDropdown").val();

        if (!testId) {
          alert("Test ID not found in URL.");
          return;
        }

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
                    <td><input type="checkbox" class="emp-checkbox" value="${emp.id}"></td>
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
      
          if (!scheduledStart || !scheduledEnd) {
            alert("Please enter scheduled start and end time.");
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
            // remarks: remarks || "No remark"
          };
      
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
