
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const acceptedTerms = document.getElementById('acceptTerms').checked;

      const tableBody = document.querySelector('#userTable tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${acceptedTerms ? 'Yes' : 'No'}</td>
      `;
      tableBody.appendChild(newRow);
      document.getElementById('registrationForm').reset();
    });

