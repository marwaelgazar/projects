var webName = document.getElementById("webName");
var webUrl = document.getElementById("webUrl");

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

//add
var list = [];

function add() {
  var website = {
    site: webName.value,
    link: webUrl.value,
  };
  if (isValidUrl(website.link) === true && website.site.length >= 3) {
    list.push(website);
    console.log(list);
    display();
  } else {
    swal.fire({
      icon: "error",
      title: "Site Name or Url is not valid, Please follow the rules below :",
      html: ` 
            <ul class="rules list-unstyled m-0">
              <li>
                <i class="fa-regular fa-circle-right p-2"></i>Site name must
                contain at least 3 characters
              </li>
              <li>
                <i class="fa-regular fa-circle-right p-2"></i>Site URL must be a
                valid one
              </li>
            </ul>
         `,
      confirmButtonColor: "#e84619",
    });
  }
}

//display
function display() {
  var cartona = "";
  for (i = 0; i < list.length; i++) {
    cartona += `
    <tr>
    <td>${i + 1}</td>
    <td style="  text-transform: capitalize;">${list[i].site}</td>
    <td><button class="btn bg-warning text-white" onclick="NewTab()"><i class="fa-solid fa-eye px-1"></i>Visit</button></td>
    <td><button class="btn bg-danger text-white" onclick="deleteItem(${i})"><i class="fa-solid fa-trash px-1"></i>Delete</button></td>
    </tr>
    `;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}
//delete
function deleteItem(index) {
  list.splice(index, 1);
  console.log(list);
  display();
}
//open url
function NewTab() {
  window.open(webUrl.value);
  clear();
}
//clear
function clear() {
  webName.value = "";
  webUrl.value = "";
}
