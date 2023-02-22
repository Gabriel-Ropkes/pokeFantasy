const backgroundPreview = document.getElementById("backgroundPreview"),
  nav = document.querySelector("nav"),
  backgroundColor = document.querySelector(".background-color");
let getnav = localStorage.getItem("nav");
if (getnav && getnav === "active") {
  nav.classList.add("nav-active");
}
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    nav.classList.add("nav-active");
    localStorage.setItem("nav", "active");
  } else {
    nav.classList.remove("nav-active");
    localStorage.removeItem("nav", "active");
  }
});
chooseDrop = () => {
  dropList.classList.toggle("hide");
  dropInfo.classList.toggle("view");
};
togglePage = () => {
  nav.classList.toggle("hide");
  backgroundPreview.classList.toggle("view");
  backgroundColor.classList.toggle("hide");
};
const title = document.querySelector("#title");
createPreview = () => {
  let containerTitle = createElement("div");
  let title = createElement("p");
  let closeBtn = createElement("i");

  let previewInfo = createElement("div");
  let previewPokeCard = createElement("div");
  let previewCardImgBg = createElement("div");
  let previewCardImg = createElement("img");
  let previewTypes = createElement("div");
  let previewAbilities = createElement("input");
  let previewEvoline = createElement("div");

  containerTitle.classList.add("container-title");
  title.classList.add("title");
  closeBtn.classlist.add("fas fa-xmark close-btn");
  previewInfo.classList.add("container-info"); /* Mudar */
  previewPokeCard.classList.add("preview-poke-card"); /* Mudar */
  previewCardImgBg.classlist.add("preview-card-img-bg"); /* Mudar */
  previewCardImg.classlist.add("preview-card-img"); /* Mudar */
  previewTypes.classList.add("preview-types");
  previewAbilities.classList.add("abilities");
  previewEvoline.classlist.add("preview-evoline"); /* Mudar */

  containerTitle.appendChild(title);
  containerTitle.appendChild(closeBtn);
  previewInfo.appendChild(previewPokeCard);
  previewPokeCard.appendChild(previewCardImgBg);
  previewCardImgBg.appendChild(previewCardImg);

  for (t = 0; t < pokemones[i].types.length; t++) {
    let previewType = createElement("p");
    previewType.classList.add("type");
    previewType.style.color = pokemones.color[t];
    previewType.innerText = pokemones[i].name;
    previewTypes.appendChild(previewType);
  }
  for (e = 0; e < pokemones[i].evoline.length; e++) {
    let evolineImg = createElement("img"); /* Retirei o HREF, COnsertar dps */
    evolineImg = pokemones[i].evoline[e];
    evolineImg.src = `img/${evolineImg}.png`;
    previewEvoline.appendChild(evolineImg);
  }
};
const typeColors = {
  Rock: [182, 158, 49],
  Ghost: [112, 85, 155],
  Steel: [183, 185, 208],
  Water: [100, 147, 235],
  Grass: [76, 203, 72],
  Psychic: [251, 85, 132],
  Ice: [154, 214, 223],
  Dark: [117, 87, 76],
  Fairy: [230, 158, 172],
  Normal: [170, 166, 127],
  Fighting: [193, 34, 57],
  Flying: [168, 145, 236],
  Poison: [164, 62, 158],
  Ground: [222, 193, 107],
  Bug: [167, 183, 35],
  Fire: [245, 125, 49],
  Electric: [249, 207, 48],
  Dragon: [112, 55, 255],
};
const dexContainer = document.getElementById("dexContainer"),
  types = document.querySelectorAll(".types"),
  statuss = document.querySelectorAll(".stats");

const Generalstatus = ["Hp", "Atk", "Def", "SpA", "SpD", "Spd"];
class pokemon {
  constructor(name, number, colors, types, status) {
    this.name = name;
    this.number = number;
    this.color = colors;
    this.types = types;
    this.status = status;
  }
}
/*
    pokemones.push({
        name: pokeName.value
    })
    */
let pokemon1 = new pokemon(
  "Marowak",
  "#127",
  ["var(--grass)", "var(--ground)"],
  ["ground"],
  [60, 80, 110, 50, 80, 45]
);
let pokemon2 = new pokemon(
  "Gyarados",
  "#130",
  ["var(--water)", "var(--flying)"],
  ["Water", "flying"],
  [95, 125, 79, 60, 200, 81]
);
let pokemon3 = new pokemon(
  "Growlithe",
  "#058",
  ["var(--fire)"],
  ["Fire"],
  [60, 60, 60, 40, 50, 60]
);
let pokemon4 = new pokemon(
  "Growlithe",
  "#058",
  ["var(--fire)"],
  ["Fire"],
  [60, 60, 60, 40, 50, 60]
);
let pokemon5 = new pokemon(
  "Ponyta",
  "#058",
  ["var(--fire)"],
  ["Fire"],
  [60, 60, 60, 40, 50, 100]
);
let pokemon6 = new pokemon();
const pokemones = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
console.log("pokemon" + (pokemones.length + 1));
for (var i = 0; i < pokemones.length; i++) {
  let pokeCard = document.createElement("article");
  let top = document.createElement("div");
  let topBar = document.createElement("div");
  let pokeName = document.createElement("p");
  let pokeNumber = document.createElement("p");
  let pokeImgBg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let cardImg = document.createElement("img");
  let data = document.createElement("div");
  let types = document.createElement("div");
  let statsTitle = document.createElement("h4");
  let pokeStatus = document.createElement("div");
  pokeStatus.classList.add("stats");
  types.classList.add("types");
  data.classList.add("data");
  statsTitle.classList.add("baseStats");
  pokeCard.classList.add("poke-card");
  top.classList.add("top");
  topBar.classList.add("top-bar");
  pokeNumber.classList.add("pokeNumber");
  pokeName.classList.add("pokeName");
  pokeImgBg.classList.add("poke-image-placeholder");
  pokeImg.classList.add("pokemon-image");
  cardImg.classList.add("cardImg");
  pokeImg.src = `img/${pokemones[i].name}.png`;
  cardImg.src = "img/pokeball.png";
  console.log(pokeStatus);

  pokeCard.appendChild(top);
  pokeCard.appendChild(data);
  data.appendChild(types);
  data.appendChild(statsTitle);
  data.appendChild(pokeStatus);
  top.appendChild(topBar);
  topBar.appendChild(pokeName);
  topBar.appendChild(pokeNumber);
  top.appendChild(pokeImgBg);
  pokeImgBg.appendChild(pokeImg);
  top.appendChild(cardImg);
  dexContainer.appendChild(pokeCard);

  statsTitle.style.color = pokemones[i].color[0];
  statsTitle.innerText = "Base Stats";
  pokeCard.style.backgroundColor = pokemones[i].color[0];
  pokeName.innerText = pokemones[i].name;
  pokeNumber.innerText = pokemones[i].number;

  for (var c = 0; c < 6; c++) {
    let statusRow = document.createElement("div");
    let statusText = document.createElement("p");
    let statusNumber = document.createElement("p");
    let statusBar = document.createElement("div");
    let statusBarOut = document.createElement("div");
    let statusBarIn = document.createElement("div");

    statusRow.classList.add("stat-row");
    statusText.classList.add("stat-desc");
    statusNumber.classList.add("stat-number");
    statusBar.classList.add("stat-bar");
    statusBarOut.classList.add("bar-outer");
    statusBarIn.classList.add("bar-inner");
    statusText.innerText = Generalstatus[c];
    statusText.style.color = pokemones[i].color[0];
    statusNumber.innerText = pokemones[i].status[c];
    statusNumber.style.color = pokemones[i].color[0];
    statusBarIn.style.background = pokemones[i].color[0];
    barValue = statusNumber.innerText / 2;
    statusBarIn.style.width = `${barValue}%`;
    pokeStatus.appendChild(statusRow);
    statusRow.appendChild(statusText);
    statusRow.appendChild(statusNumber);
    statusRow.appendChild(statusBar);
    statusBar.appendChild(statusBarOut);
    statusBarOut.appendChild(statusBarIn);
  }
  for (var t = 0; t < pokemones[i].types.length; t++) {
    let type = document.createElement("p");
    type.classList.add("type");
    type.style.backgroundColor = pokemones[i].color[t];
    type.innerText = pokemones[i].types[t];
    types.appendChild(type);
  }
  pokeCard.addEventListener("click", (e) => {
    togglePage();
    title.innerText = pokeName.innerText;
    console.log(pokeName.innerText);
  });
}

/*
const fetchApi = async (pokemonName) => {
  pokemonNameApi = pokemonName.split(" ").join("-");
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonNameApi
  );

  if (response.status === 200) {
    const pokemonData = await response.json();
    return pokemonData;
  }
  return false;
};

search.addEventListener("change", async (e) => {
  const pokemonData = await fetchApi(e.target.value);
  if (!pokemonData) {
    alert("batata com requijão");
    return;
  }
  const mainColor = typeColors[pokemonData.types[0].type.name];

  number.innerText = "#" + pokemonData.id.toString().padStart(3, "0");

  pokemonImage.src = pokemonData.sprites.other.home.front_default;

  types.innerText = "";
  pokemonData.types.forEach((t) => {
    let newType = document.createElement("span");
    let color = typeColors[t.type.name];
    newType.innerHTML = t.type.name;
    newType.classList.add("typeas");
    newType.style.backgroundColor = `rgb(${color[0]}, 
        ${color[1]}, ${color[2]})`;
    newPokeCard.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    baseStats.style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;

    types.appendChild(newType);
  });
});
*/
