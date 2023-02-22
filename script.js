/* PokeDéx */
const pokedex = document.getElementById("pokedex"),
  pokeImage = document.querySelector(".imageCard");

/* Drop & Resp title Toggle */
const dropTitle = document.getElementById("drop-title"),
  respTitle = document.getElementById("resp-title"),
  pokeTitle = document.getElementById("poke-title"),
  pokeContent = document.querySelector(".poke-content"),
  dropContent = document.querySelector(".drop-content"),
  respContent = document.querySelector(".resp-content");

/*
dropTitle.addEventListener("click", () => {
  respTitle.classList.remove("active");
  pokeTitle.classList.remove("active");
  dropTitle.classList.add("active");
  pokeContent.classList.remove("active");
  dropContent.classList.add("active");
  respContent.classList.remove("active");
});
respTitle.addEventListener("click", () => {
  dropTitle.classList.remove("active");
  pokeTitle.classList.remove("active");
  respTitle.classList.add("active");
  pokeContent.classList.remove("active");
  dropContent.classList.remove("active");
  respContent.classList.add("active");
});
pokeTitle.addEventListener("click", () => {
  dropTitle.classList.remove("active");
  respTitle.classList.remove("active");
  pokeTitle.classList.add("active");
  dropContent.classList.remove("active");
  respContent.classList.remove("active");
  pokeContent.classList.add("active");
});
*/

// Pokemon Preview Toggle
closeBtn.addEventListener("click", (e) => {
  togglePage();
});

const drops = document.querySelectorAll(".drop-list-img"),
  dropPreview = document.querySelector(".drop-preview");

drops.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    e.preventDefault();
    drops.forEach((i) => {
      if (i != this) {
        i.classList.remove("active");
      }
    });
    dropPreview.classList.add("active");
    drop.classList.add("active");
  });
});
const resps = document.querySelectorAll(".resp-list-text"),
  respPreview = document.querySelector(".resp-preview");

resps.forEach(function (resp) {
  resp.addEventListener("click", (e) => {
    e.preventDefault();
    resps.forEach((i) => {
      if (i != this) {
        i.classList.remove("active");
      }
    });
    respPreview.classList.add("active");
    resp.classList.add("active");
  });
});
