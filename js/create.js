const inputImg = document.getElementById("createImg"),
  inputImgContent = document.getElementById("createImgContent");

inputImgContent.innerText = "Select an Image";

inputImg.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      const readerTarget = e.target;
      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("poke-img");
      inputImgContent.innerHTML = "";
      inputImgContent.appendChild(img);
      console.log(inputImg.value);
    });
    reader.readAsDataURL(file);
    inputImgContent;
  }
});
const createContainer = document.getElementById("createContainer"),
  createTitle = document.querySelector("h1");

console.log(createContainer);
if (createContainer.style.backgroundColor != "#fff") {
  createTitle.style.color = "rgb(75, 75,75)";
  createContainer.style.backgroundColor = "rgb(72, 202, 103)";
  console.log(createTitle.style.color);
  console.log(createContainer.style.backgroundColor);
}
