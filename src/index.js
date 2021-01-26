import "bootstrap";

import { data } from "./data/account.js";

const app = document.getElementById("app");

let myData = data;

const myCheckboxes = [
  { id: "1", name: "$", checked: true },
  { id: "2", name: "€", checked: true },
  { id: "3", name: "₤", checked: true },
  { id: "4", name: "₽", checked: true },
  { id: "5", name: "₸", checked: true },
];

const onCheck = (id) => {
  console.log(id);
  myData = [];
  data.map((item) => {
    if (item.currency === "$" && myCheckboxes[0].checked) {
      myData.push(item);
    }
    if (item.currency === "€" && myCheckboxes[1].checked) {
      myData.push(item);
    }
    if (item.currency === "₤" && myCheckboxes[2].checked) {
      myData.push(item);
    }
    if (item.currency === "₽" && myCheckboxes[3].checked) {
      myData.push(item);
    }
    if (item.currency === "₸" && myCheckboxes[4].checked) {
      myData.push(item);
    }
  });
};

const checkBoxes = `
  <div class="custom-control custom-checkbox">
    ${myCheckboxes
      .map((item) => {
        return `<input type="checkbox"checked="${item.checked}" class="custom-control-input" id="${item.id}">
        <label class="custom-control-label" for="${item.id}">${item.name}</label>`;
      })
      .join(" ")}
  </div>`;

app.innerHTML += checkBoxes;

const table = `
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Account Number</th>
        <th scope="col">Sum</th>
        <th scope="col">Currency</th>
      </tr>
    </thead>
    <tbody>
      ${myData
        .map((item) => {
          return `<tr>
          <th scope="row">${item.id}</th>
          <td>${item.accountNumber}</td>
          <td>${item.sum}</td>
          <td>${item.currency}</td>
        </tr>`;
        })
        .join(" ")}
    </tbody>
  </table>`;

app.innerHTML += table;
