
document.addEventListener("DOMContentLoaded", function () {
  // Load previous entries from local storage
  const savedEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
  displayEntries(savedEntries);
});

function addEntry() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTerms = document.getElementById("acceptedTerms").checked;

  if (!isValidEmail(email)) {
    alert("Invalid email address.");
    return;
  }

  const dobDate = new Date(dob);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dobDate.getFullYear();
  if (age < 18 || age > 55) {
    alert("Age must be between 18 and 55 years.");
    return;
  }

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTerms,
  };

  // Save the new entry to local storage
  const savedEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
  savedEntries.push(entry);
  localStorage.setItem("userEntries", JSON.stringify(savedEntries));

  // Display the new entry in the table
  displayEntries(savedEntries);
}

function displayEntries(entries) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  entries.forEach(function (entry) {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.email}</td>
      <td>${entry.password}</td>
      <td>${entry.dob}</td>
      <td>${entry.acceptedTerms ? "Yes" : "No"}</td>
    `;
  });
}

function isValidEmail(email) {
  // Implement email validation logic here (regular expression, etc.)
  return true; // Return true for simplicity in this example
}
