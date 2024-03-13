//getting input elements

const itemNo = document.getElementById("item-no");
const name_n = document.getElementById("name-n");
const famName = document.getElementById("fname");
const dob = document.getElementById("dob");

//getting form

const form = document.querySelector(".form");
const table = document.querySelector("table");

//getting buttons

const addTableBtn = document.getElementById("add-table");
const addDataBtn = document.getElementById("add-Data");
const cancelBtn = document.getElementById("cancel-form");
const updateBtn = document.getElementById("update-data");

//getting errormsg elements

const error1 = document.getElementById("err-msg-item");
const error2 = document.getElementById("err-msg-nme");
const error3 = document.getElementById("err-msg-fnme");
const error4 = document.getElementById("err-msg-dob");

//table-body

const tblBody = document.getElementById("tbl-bdy");
let selectedRow;

//pop up form

function myForm() {
  // form.classList.remove("form");
  form.style.display = "block";
  table.classList.add("hidetable");
  table.style.display = "none";
}

//closing function of popUp form
function closeForm() {
  // form.classList.add("form");
  form.style.display = "none";
  table.classList.remove("hidetable");
  table.style.display = "block";

  error1.innerHTML = "";
  error2.innerHTML = "";
  error3.innerHTML = "";
  error4.innerHTML = "";

  itemNo.value = "";
  name_n.value = "";
  famName.value = "";
  dob.value = "";
}

function addData() {
  //getting input values
  const itemNoVal = itemNo.value;
  const name_nVal = name_n.value;
  const famNameVal = famName.value;
  const dobVal = dob.value;

  //error validation

  //error message 1

  if (itemNoVal === "") {
    error1.innerHTML = `Please Enter the Item No`;
  } else {
    error1.innerHTML = "";
  }

  //error message 2

  if (name_nVal === "") {
    error2.innerHTML = `Please Enter Your name`;
  } else {
    error2.innerHTML = "";
  }

  //error message 3

  if (famNameVal === "") {
    error3.innerHTML = `Please Enter your FamilyName`;
  } else {
    error2.innerHTML = "";
  }

  //error message 4

  if (dobVal === "") {
    error4.innerHTML = `Please Enter your DOB`;
  } else {
    error4.innerHTML = "";
  }

  //creating table row

  if (
    itemNoVal !== "" &&
    name_nVal !== "" &&
    famNameVal !== "" &&
    dobVal !== ""
  ) {
    const tr = document.createElement("tr");
    tr.classList.add("data-row");

    //creating item no

    const itemTd = document.createElement("td");
    itemTd.textContent = itemNoVal;
    tr.appendChild(itemTd);

    //creating name

    const nameTd = document.createElement("td");
    nameTd.classList.add("name-td");
    nameTd.textContent = name_nVal;
    tr.appendChild(nameTd);

    //creating familyName

    const fnameTd = document.createElement("td");
    fnameTd.textContent = famNameVal;
    tr.appendChild(fnameTd);

    //creating dob

    const dobTd = document.createElement("td");
    dobTd.textContent = dobVal;
    tr.appendChild(dobTd);

    //creating Buttons edit and delete

    const actions = document.createElement("td");
    const buttons = `<button onclick = "onEdit(this)">Edit</button><button onclick = "onDelete(this)">Delete</button>`;
    actions.innerHTML = buttons;
    tr.appendChild(actions);
    tblBody.prepend(tr);
    console.log(tblBody);

    itemNo.value = "";
    name_n.value = "";
    famName.value = "";
    dob.value = "";

    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";

    // form.classList.add("form");
    form.style.display = "none";
    table.classList.remove("hidetable");
    table.style.display = "block";
  }
}
//Edit Function

function onEdit(td) {
  // form.classList.remove("form");

  form.style.display = "block";
  addDataBtn.style.display = "none";
  updateBtn.classList.remove("upd-Btn");
  cancelBtn.style.display = "none";
  table.style.display = "none";

  selectedRow = td.closest("tr");
  console.log(selectedRow);

  itemNo.value = selectedRow.cells[0].innerHTML;
  name_n.value = selectedRow.cells[1].innerHTML;
  famName.value = selectedRow.cells[2].innerHTML;
  dob.value = selectedRow.cells[3].innerHTML;

  //Update Function
  updateBtn.addEventListener("click", function () {
    //error message 1

    if (itemNo.value === "") {
      error1.innerHTML = `Please Enter the Item No`;
    } else {
      error1.innerHTML = "";
    }

    //error message 2

    if (name_n.value === "") {
      error2.innerHTML = `Please Enter the name`;
    } else {
      error2.innerHTML = "";
    }

    //error3

    if (famName.value === "") {
      error3.innerHTML = `Please Enter the FamilyName`;
    } else {
      error3.innerHTML = "";
    }

    //error4

    if (dob.value === "") {
      error4.innerHTML = `Please Enter the DOB`;
    } else {
      error4.innerHTML = ``;
    }
    // if no error occurs

    if (
      itemNo.value !== "" &&
      name_n.value !== "" &&
      famName.value !== "" &&
      dob.value !== ""
    ) {
      selectedRow.cells[0].innerHTML = itemNo.value;
      selectedRow.cells[1].innerHTML = name_n.value;
      selectedRow.cells[2].innerHTML = famName.value;
      selectedRow.cells[3].innerHTML = dob.value;
    }
    // form.classList.add("form");

    form.style.display = "none";
    updateBtn.classList.add("upd-Btn");
    addDataBtn.style.display = "block";
    cancelBtn.style.display = "block";
    table.style.display = "block";

    itemNo.value = "";
    name_n.value = "";
    famName.value = "";
    dob.value = "";

    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
  });
}
//Delete Function

function onDelete(td) {
  td.closest("tr").remove();
}

// Search By Name function

function searchByName(val) {
  let nmeVal;

  const dataRow = document.querySelectorAll(".data-row");

  dataRow.forEach((row) => {
    nmeVal = row.querySelector(".name-td").textContent.toLowerCase().trim();

    if (!nmeVal.includes(val)) {
      row.classList.add("srch-hide");
    } else {
      row.classList.remove("srch-hide");
    }
  });
}
