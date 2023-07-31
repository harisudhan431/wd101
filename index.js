
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      addUser();
    });

    function addUser() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const acceptedTerms = document.getElementById('acceptedTerms').checked;

      const user = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        acceptedTerms: acceptedTerms,
      };

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      displayUsers();
    }

    function displayUsers() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const tableBody = document.querySelector('#userTable tbody');
      tableBody.innerHTML = '';

      users.forEach(function(user) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.dob}</td>
          <td>${user.acceptedTerms ? 'Yes' : 'No'}</td>
        `;
        tableBody.appendChild(newRow);
      });
    }

    displayUsers();
