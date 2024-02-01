//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var token = 3;

function addRecord() {
  var table = document.getElementById("myTable");
  var trbody = document.getElementsByTagName("tbody")[0];
  token = token + 1;
  var budget =
    String(token) +
    String(token + 1) +
    String(token + 2) +
    String(token + 3) +
    String(token + 4);
  var trNode = document.createElement("tr");
  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML =
    '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="down.png" width="25px" onclick="onClickDropDownButton(this)" />';

  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = "Student " + token;
  var tdTeacher = document.createElement("td");
  tdTeacher.innerHTML = "Teacher " + token;
  var tdAward = document.createElement("td");
  tdAward.innerHTML = "Approved " + token;
  var tdSemester = document.createElement("td");
  tdSemester.innerHTML = "fall";
  var tdType = document.createElement("td");
  tdType.innerHTML = "TA";
  var tdBudget = document.createElement("td");
  tdBudget.innerHTML = budget;
  var tdPercentage = document.createElement("td");
  tdPercentage.innerHTML = "100%";
  var tdDelete = document.createElement("td");
  tdDelete.innerHTML = '<button id="DeleteRow">Delete</button>';
  var tdEdit = document.createElement("td");
  tdEdit.innerHTML = '<button id="EditRow">Delete</button>';
  var trDropTable = document.createElement("tr");
  trDropTable.className = "dropDownTextArea";
  trDropTable.innerHTML =
    '<td colspan="8">  Advisor:<br /><br />  Award Details<br />  Summer 1-2014(TA)<br />  Budget Number: <br />  Tuition Number: <br />  Comments:<br /><br /><br />  Award Status:<br /><br /><br /></td>';

  trNode.appendChild(tdCheckBoxNode);
  trNode.appendChild(tdStudentNode);
  trNode.appendChild(tdTeacher);
  trNode.appendChild(tdAward);
  trNode.appendChild(tdSemester);
  trNode.appendChild(tdType);
  trNode.appendChild(tdBudget);
  trNode.appendChild(tdPercentage);
  // trNode.appendChild(tdDelete);
  // trNode.appendChild(tdEdit);
  // trNode.appendChild(newDropTable);

  trbody.appendChild(trNode);
  trbody.appendChild(trDropTable);

  console.log(trDropTable);
}

function onClickCheckBox(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;
  // var table = document.getElementsByTagName("thead")[0];
  var headTable = document.getElementById("headTable");
  headTable.innerHTML =
    "<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th></tr>";
  var submitButton = document.getElementById("submitButton");

  if (checkBox.checked == true) {
    headTable.innerHTML =
      "<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th><th>DELETE</th><th>EDIT</th></tr>";

    selectedRow.style.backgroundColor = "yellow";
    // var deleteButtonHeading = document.createElement("th");
    // deleteButtonHeading.innerHTML = 'DELETE';
    // var editButtonHeading = document.createElement("th");
    // editButtonHeading.innerHTML = 'EDIT';
    // table.appendChild(deleteButtonHeading);
    // table.appendChild(editButtonHeading);
    var deleteButton = document.createElement("td");
    deleteButton.innerHTML =
      '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>';
    var editButton = document.createElement("td");
    editButton.innerHTML =
      '<button id="edited" type="button" onclick="editRow(this)">Edit</button>';
    selectedRow.appendChild(deleteButton);
    selectedRow.appendChild(editButton);
    // trbody.appendChild(trNode);
    // var nextRow = document.createElement("tr");
    submitButton.style.backgroundColor = "orange";
  } else {
    headTable.innerHTML =
      "<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th></tr>";

    selectedRow.style.backgroundColor = "#fff";
    selectedRow.deleteCell(8);
    selectedRow.deleteCell(8);
    submitButton.style.backgroundColor = "white";
  }
  console.log(checkBox);
}

function onDeleteRow(deletedRef) {
  var selectedRow = deletedRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  console.log(selectedRow.rowIndex);
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert(index + " has been deleted");
}

function editRow(deletedRef) {
  // const createTextareaButton = document.getElementById('createTextareaButton');
  const textareaContainer = document.getElementById("container");

  var selectedRow = deletedRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  console.log(selectedRow.rowIndex);
  // const textarea = document.createElement('textarea');
  // const submit_btn = document.createElement('button');
  // submit_btn.textContent('OK!');

  // textarea.rows = 5;
  // textarea.cols = 40;

  // textarea.placeholder = 'Enter your text here...';
  alert(index + " has been edited");

  // textareaContainer.appendChild(textarea);
  // textareaContainer.appendChild(submit_btn);
}

function onClickDropDownButton(detailsImg) {
  var selectedRow = detailsImg.parentElement.parentElement;

  console.log(selectedRow);
  var nextRow = selectedRow.nextElementSibling;
  if (nextRow.style.display === "none" || nextRow.style.display === "") {
    nextRow.style.display = "table-row";
  } else {
    nextRow.style.display = "none";
  }
}

function onEditText(studentId) {
  //   const editDialog = document.createElement('dialog');
  //   editDialog.id = 'editDialog';
  //   const editForm = document.createElement('form');
  //   editForm.id = 'editForm';
  //   const heading = document.createElement('h2');
  //   heading.textContent = 'Edit details of Student ';
  //   const studentIdSpan = document.createElement('span');
  //   studentIdSpan.id = 'studentId';
  //   heading.appendChild(studentIdSpan);
  //   const nameLabel = document.createElement('label');
  //   nameLabel.textContent = 'Student Name:';
  //   nameLabel.htmlFor = 'studentName';
  //   const nameInput = document.createElement('input');
  //   nameInput.type = 'text';
  //   nameInput.id = 'studentName';
  //   const updateButton = document.createElement('button');
  //   updateButton.type = 'button';
  //   updateButton.textContent = 'Update';
  //   updateButton.onclick = updateStudent;
  //   const cancelButton = document.createElement('button');
  //   cancelButton.type = 'button';
  //   cancelButton.textContent = 'Cancel';
  //   // cancelButton.onclick = closeEditDialog;
  //   editForm.appendChild(heading);
  //   editForm.appendChild(nameLabel);
  //   editForm.appendChild(nameInput);
  //   editForm.appendChild(updateButton);
  //   editForm.appendChild(cancelButton);
  //   editDialog.appendChild(editForm);
  //   document.body.appendChild(editDialog);
  //   const studentName = document.querySelector(`tr:nth-child(${studentId}) td:nth-child(2)`).textContent;
  //   document.getElementById('studentId').textContent = studentId;
  //   document.getElementById('studentName').textContent = studentName;
  //   document.getElementById('editPopup').style.display = 'block';
  // }
  // // Function to close the edit pop-up
  // function closePopup() {
  //   document.getElementById('editPopup').style.display = 'none';
  // }
  // // Function to handle student data update
  // function updateStudent() {
  //   // You can add your update logic here
  //   alert('Student data updated successfully');
  //   closePopup();
}
