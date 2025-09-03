
    // const token1 = window.token || localStorage.getItem("token");
    // const role1 = window.role || localStorage.getItem("role");

    // if (!token1 || role1 !== "admin") {
    //   alert("Access denied.");
    //   window.location.href = "WorkingHtml/login.html";
    // }

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

    function fetchTests() {
      const fromDate = $("#fromDate").val();
      const toDate = $("#toDate").val();
      // const apiBase = "http://localhost:5151/api/Assessment/getalltest";
      const apiBase = "http://localhost:5238/api/Assessment/getalltest";

      if (!fromDate || !toDate) {
        $("#error").text("Please select both dates.");
        return;
      }

      $("#loading").show();
      $("#error").text("");
      $("#testBody").empty();
      $("#testTable").hide();

      const apiUrl = `${apiBase}/from/${fromDate}/to/${toDate}`;

      $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: "json",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        success: function (data) {
          $("#loading").hide();
          if (data.length === 0) {
            $("#error").text("No tests found in the selected date range.");
            return;
          }
          console.log("Fetched tests:", data);

          data.forEach(test => {
            const row = `<tr>
              <td>${test.name}</td>
              <td>${new Date(test.scheduledDate).toLocaleString()}</td>
              <td>${test.status}</td>
              
              <td>
                <button onclick="updateTest(${test.id})" style="margin-right:5px; background:orange;">Update Status</button>
              </td>
            </tr>`;
            $("#testBody").append(row);
          });

          $("#testTable").show();
        },
        error: function (xhr, status, error) {
          $("#loading").hide();
          $("#error").text("Failed to load tests: " + error);
        }
      });
    }

    function sortTable(colIndex) {
      const table = document.getElementById("testTable");
      const rows = Array.from(table.rows).slice(1);
      const isDateColumn = colIndex === 1;

      rows.sort((a, b) => {
        const valA = a.cells[colIndex].textContent.trim();
        const valB = b.cells[colIndex].textContent.trim();

        return isDateColumn
          ? new Date(valA) - new Date(valB)
          : valA.localeCompare(valB);
      });

      const tbody = table.tBodies[0];
      rows.forEach(row => tbody.appendChild(row));
    }
  
    function updateTest(id) {
      // Navigate to update page or open modal with that test ID
      window.location.href = `updatetest.html?id=${id}`;  
    }
