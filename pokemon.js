/* PokemonPreview Update */
const pokeNamePreview = document.getElementById("pokeName"),
  pokeNumberPreview = document.getElementById("pokeNumber"),
  pokeImgPreview = document.getElementById("pokeImg"),
  pokeCardPreview = document.getElementById("pokeCard"),
  typesPreview = document.getElementById("types");
/* Moveset Container Only */
const movesetContainer = document.getElementById("movesetContainer"),
  movesetTitle = document.getElementById("movesetTitle");

movesetTitle.addEventListener("click", () => {
  movesetContainer.classList.toggle("hide");
});

/* Toggle Article Preview*/
const toggleTitle = document.querySelectorAll(".toggleTitle");
const closeBtn = document.querySelector(".closeBtn");

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
  dropMenu = document.getElementById("dropMenu"),
  dropList = document.getElementById("dropList"),
  respMenu = document.getElementById("respMenu"),
  respList = document.getElementById("respList"),
  infoMenu = document.getElementById("infoMenu"),
  infoList = document.getElementById("infoList");

moves.forEach((move) => {
  move.addEventListener("click", () => {
    moveInfo.classList.remove("hide");
  });
  moveInfo.addEventListener("click", () => {
    moveInfo.classList.add("hide");
  });
});
closeMenuDrop = () => {
  dropList.classList.toggle("view");
  dropMenu.classList.toggle("open");
};
closeMenuResp = () => {
  respList.classList.toggle("view");
  respMenu.classList.toggle("open");
};
closeMenuInfo = () => {
  infoList.classList.toggle("view");
  infoMenu.classList.toggle("open");
};
dropMenu.addEventListener("click", () => {
  closeMenuDrop();
});
respMenu.addEventListener("click", () => {
  closeMenuResp();
});
infoMenu.addEventListener("click", () => {
  closeMenuInfo();
});
const spRowWeaknesses = document.getElementById("spRowWeaknesses"),
  spRowPokeCard = document.getElementById("spRowPokeCard"),
  spRowEvolutionary = document.getElementById("spRowEvolutionary"),
  pokeCard = document.getElementById("pokeCard"),
  weakAbility = document.getElementById("weakAbility"),
  evoShiny = document.getElementById("evoShiny");

spRowPokeCard.addEventListener("click", () => {
  pokeCard.style.display = "block";
  weakAbility.style.display = "none";
  evoShiny.style.display = "none";
  closeMenuInfo();
});
spRowWeaknesses.addEventListener("click", () => {
  weakAbility.style.display = "block";
  pokeCard.style.display = "none";
  evoShiny.style.display = "none";
  closeMenuInfo();
});
spRowEvolutionary.addEventListener("click", () => {
  evoShiny.style.display = "flex";
  pokeCard.style.display = "none";
  weakAbility.style.display = "none";
  closeMenuInfo();
});
uptadePreview = () => {};
