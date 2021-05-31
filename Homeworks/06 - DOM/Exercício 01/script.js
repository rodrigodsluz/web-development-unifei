const currentBackgroundColor = (color) => {
  const currentColor = document.getElementsByClassName(color);

  const value = currentColor[0].style.backgroundColor === color ? true : false;

  return value;
};

const blueBackground = () => {
  const newColor = document.getElementsByClassName("blue");
  const greenColor = document.getElementsByClassName("green");

  for (let i = 0; i < newColor.length; i++) {
    newColor[i].style.backgroundColor = "blue";
  }

  if (currentBackgroundColor("green")) {
    for (let i = 0; i < newColor.length; i++) {
      greenColor[i].style.backgroundColor = "";
    }
  }
};

const greenBackground = () => {
  const newColor = document.getElementsByClassName("green");
  const blueColor = document.getElementsByClassName("blue");

  for (let i = 0; i < newColor.length; i++) {
    newColor[i].style.backgroundColor = "green";
  }

  if (currentBackgroundColor("blue")) {
    for (let i = 0; i < newColor.length; i++) {
      blueColor[i].style.backgroundColor = "";
    }
  }
};
