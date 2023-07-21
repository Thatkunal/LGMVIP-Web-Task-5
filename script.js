function addStudentResult() {
    var rollNo = document.getElementById("rollNo").value;
    var studentName = document.getElementById("studentName").value;
    var mathMarks = parseFloat(document.getElementById("mathMarks").value);
    var scienceMarks = parseFloat(document.getElementById("scienceMarks").value);
    var englishMarks = parseFloat(document.getElementById("englishMarks").value);

    if (isNaN(mathMarks) || isNaN(scienceMarks) || isNaN(englishMarks)) {
      alert("Please enter valid marks for all subjects.");
      return;
    }

    var totalMarks = mathMarks + scienceMarks + englishMarks;
    var averageMarks = totalMarks / 3;

    var tableBody = document.getElementById("resultTableBody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${rollNo}</td>
      <td>${studentName}</td>
      <td>${mathMarks}</td>
      <td>${scienceMarks}</td>
      <td>${englishMarks}</td>
      <td>${totalMarks}</td>
      <td>${averageMarks.toFixed(2)}</td>
    `;
    tableBody.appendChild(newRow);

    // Clear input fields after adding result
    document.getElementById("rollNo").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("mathMarks").value = "";
    document.getElementById("scienceMarks").value = "";
    document.getElementById("englishMarks").value = "";
  }