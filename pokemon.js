const movesetContainer = document.getElementById("movesetContainer"),
  movesetTitle = document.getElementById("movesetTitle");

movesetTitle.addEventListener("click", () => {
  movesetContainer.classList.toggle("hide");
});
const toggleTitle = document.querySelectorAll(".toggleTitle");
const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  togglePage();
});
const previewInfo = document.getElementById("previewInfo"),
  previewDrop = document.getElementById("previewDrop"),
  previewResp = document.getElementById("previewResp");
previewDrop.style.display = "none";
previewInfo.style.display = "none";
previewResp.style.display = "flex";
toggleTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    e.preventDefault();
    toggleTitle.forEach((i) => {
      if (i != this) {
        i.classList.remove("active");
      }
    });
    title.classList.add("active");
    if (title.innerText == "Info") {
      previewInfo.style.display = "flex";
      previewDrop.style.display = "none";
      previewResp.style.display = "none";
    }
    if (title.innerText == "Drop") {
      console.log(title.innerText);
      previewInfo.style.display = "none";
      previewDrop.style.display = "flex";
      previewResp.style.display = "none";
    }
    if (title.innerText == "Resp") {
      previewInfo.style.display = "none";
      previewDrop.style.display = "none";
      previewResp.style.display = "flex";
    }
  });
});
const moves = document.querySelectorAll(".move-container"),
  moveInfo = document.getElementById("moveInfoBg"),
  menuDrop = document.getElementById("dropMenu"),
  menuResp = document.getElementById("respMenu"),
  dropList = document.getElementById("dropList"),
  respList = document.getElementById("respList");

moves.forEach((move) => {
  move.addEventListener("click", () => {
    moveInfo.classList.remove("hide");
  });
  moveInfo.addEventListener("click", () => {
    moveInfo.classList.add("hide");
  });
});
menuDrop.addEventListener("click", () => {
  dropList.classList.toggle("view");
  menuDrop.classList.toggle("open");
});
menuResp.addEventListener("click", () => {
  respList.classList.toggle("view");
  menuResp.classList.toggle("open");
});
