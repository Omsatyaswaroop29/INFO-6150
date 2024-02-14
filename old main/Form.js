document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");
  const titleInputs = document.querySelectorAll('input[name="title"]');
  const nameFirstInput = document.getElementById("firstName");
  const nameLastInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phoneNumber");
  const zipInput = document.getElementById("zipCode");
  const addressInput = document.getElementById("address");

  const firstNameRegex = /^[a-zA-Z ]{3,50}$/;
  const secondNameRegex = /^[a-zA-Z ]{3,50}$/;
  const emailRegex = /^[^\s@]+@northeastern\.edu$/;
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const zipRegex = /^\d{5}$/;
  const addressRegex = /^[a-zA-Z0-9 ]*$/;

  const validateTitle = () => [...titleInputs].some((input) => input.checked);
  const validateFirstName = () => firstNameRegex.test(nameFirstInput.value);
  const validateLastName = () => secondNameRegex.test(nameLastInput.value);
  const validateEmail = () => emailRegex.test(emailInput.value);
  const validatePhone = () => phoneRegex.test(phoneInput.value);
  const validateZip = () => zipRegex.test(zipInput.value);
  const validateAddress = () => addressRegex.test(addressInput.value);

  nameFirstInput.addEventListener("input", () => {
    document.getElementById("error_firstName").style.display =
      validateFirstName() ? "none" : "block";
    allValidations();
  });

  nameLastInput.addEventListener("input", () => {
    document.getElementById("error_lastName").style.display = validateLastName()
      ? "none"
      : "block";
    allValidations();
  });

  emailInput.addEventListener("input", () => {
    document.getElementById("error_email").style.display = validateEmail()
      ? "none"
      : "block";
    allValidations();
  });

  phoneInput.addEventListener("input", () => {
    document.getElementById("error_phoneNumber").style.display = validatePhone()
      ? "none"
      : "block";
    allValidations();
  });

  zipInput.addEventListener("input", () => {
    document.getElementById("error_zipCode").style.display = validateZip()
      ? "none"
      : "block";
    allValidations();
  });

  addressInput.addEventListener("input", () => {
    document.getElementById("error_address").style.display = validateAddress()
      ? "none"
      : "block";
    allValidations();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhone() &&
      validateZip() &&
      validateTitle() &&
      validateAddress()
    ) {
      displayFormData();
    }
  });

  function displayFormData() {
    let table = document.getElementById("dataTable");
    if (!table) {
      table = document.createElement("table");
      table.id = "dataTable";
      document.body.appendChild(table);
      table.setAttribute("border", "1");

      const headerRow = table.insertRow(0);
      headerRow.insertCell(0).textContent = "Title";
      headerRow.insertCell(1).textContent = "First Name";
      headerRow.insertCell(2).textContent = "Second Name";
      headerRow.insertCell(3).textContent = "Email";
      headerRow.insertCell(4).textContent = "Phone Number";
      headerRow.insertCell(5).textContent = "Zip Code";
      headerRow.insertCell(6).textContent = "Street Address";
      headerRow.insertCell(7).textContent = "Comments";
      headerRow.insertCell(8).textContent = "How Did You Hear";
      headerRow.insertCell(9).textContent = "Item";
    }

    var checkboxes = document.querySelectorAll('input[name="source"]:checked');
    var selectedValues = [];
    checkboxes.forEach(function (checkbox) {
      selectedValues.push(checkbox.value);
    });

    const newRow = table.insertRow(-1);
    newRow.insertCell(0).textContent = [...titleInputs].find(
      (input) => input.checked
    ).value;
    newRow.insertCell(1).textContent = nameFirstInput.value;
    newRow.insertCell(2).textContent = nameLastInput.value;
    newRow.insertCell(3).textContent = emailInput.value;
    newRow.insertCell(4).textContent = phoneInput.value;
    newRow.insertCell(5).textContent = zipInput.value;
    newRow.insertCell(6).textContent = addressInput.value || "";
    newRow.insertCell(7).textContent =
      document.getElementById("comments").value || "";
    newRow.insertCell(8).textContent = selectedValues || "";
    newRow.insertCell(9).textContent =
      document.getElementById("selectBox").value || "Latte";

    var form = document.getElementById("my-form");
    form.reset();
  }

  function allValidations() {
    const allValid =
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhone() &&
      validateZip() &&
      validateTitle() &&
      validateAddress() &&
      validateDynamicTextField();
    document.getElementById("submitBtn").disabled = !allValid;
  }
});

function itemDrop() {
  const selectBox = document.getElementById("selectBox");
  const checkboxDiv = document.getElementById("dynamicCheckboxDiv");
  checkboxDiv.style.display = selectBox.value ? "block" : "none";
  document.getElementById("dynamicCheckbox").checked = false;
  tipCheckBox();
}

function tipCheckBox() {
  const checkbox = document.getElementById("dynamicCheckbox");
  const textFieldDiv = document.getElementById("dynamicTextFieldDiv");
  textFieldDiv.style.display = checkbox.checked ? "block" : "none";
  document.getElementById("dynamicTextField").value = "";
  allValidations();
}

function validateDynamicTextField() {
  const textField = document.getElementById("dynamicTextField");
  const isValid =
    !textField.parentElement.style.display || textField.value.trim() !== "";
  document.getElementById("error_dynamicTextField").style.display = isValid
    ? "none"
    : "block";
  return isValid;
}
