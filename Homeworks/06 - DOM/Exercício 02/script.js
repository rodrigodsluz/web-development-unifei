const showList = () => {
  const data = document.getElementsByTagName("input");

  const items = [];

  const olTag = document.createElement("ol");

  for (let i = 0; i < data.length; i++) {
    items[i] = document.createElement("li");

    items[i].innerHTML = data[i].value;

    olTag.appendChild(items[i]);

    items[i] ? (data[i].value = "") : null;
  }

  const div = document.getElementById("show-list");

  items.length !== 0 ? div.appendChild(olTag) : null;
};
