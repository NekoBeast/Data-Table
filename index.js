let userData = [];

const submitForm = () => {
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    gender: document.getElementById("gender").value,
  };

  userData.push(formData);
  displayTable();
};

const displayTable = () => {
  const tableBody = document.getElementById("table");
  tableBody.innerHTML = "";

  userData.forEach((user) => {
    const row = document.createElement("tr");
    for (const key in user) {
      const cell = document.createElement("td");
      cell.textContent = user[key];
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  });
};
