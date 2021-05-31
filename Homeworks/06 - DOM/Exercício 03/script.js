const zoomIn = () => {
  const imgs = document.querySelectorAll("[img]");

  const img = document.querySelector("[img]");

  if (img.className === "img100x100")
    imgs.forEach((i) => {
      i.classList.remove("img100x100");
    });

  if (img.className === "img150x150")
    imgs.forEach((i) => {
      i.classList.remove("img150x150");
      i.classList.add("img100x100");
    });

  if (img.className === "")
    imgs.forEach((i) => {
      i.classList.add("img50x50");
    });
};

const zoomOut = () => {
  const imgs = document.querySelectorAll("[img]");

  const img = document.querySelector("[img]");

  if (img.className === "img100x100")
    imgs.forEach((i) => {
      i.classList.remove("img100x100");
    });

  if (img.className === "img50x50")
    imgs.forEach((i) => {
      i.classList.remove("img50x50");
      i.classList.add("img100x100");
    });

  if (img.className === "")
    imgs.forEach((i) => {
      i.classList.add("img150x150");
    });
};
