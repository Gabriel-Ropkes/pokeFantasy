const typeInnerText = [];
const pokemonPreview = document.getElementById("pokemonPreview"),
  nav = document.querySelector("nav"),
  pokedex = document.getElementById("pokedex");
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
/* See After
chooseDrop = () => {
  dropList.classList.toggle("hide");
  dropInfo.classList.toggle("view");
};
*/

togglePage = () => {
  nav.classList.toggle("hide");
  pokemonPreview.classList.toggle("view");
  pokedex.classList.toggle("hide");
};
const typeWeakness = {
  Rock: [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1],
  Ghost: [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
  Steel: [
    0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5,
  ],
  Water: [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
  Grass: [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1],
  Psychic: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1],
  Ice: [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  Dark: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  Fairy: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  Normal: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
  Fighting: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2],
  Flying: [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1],
  Poison: [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5],
  Ground: [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
  Bug: [1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1],
  Fire: [1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5],
  Electric: [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1],
  Dragon: [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
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
const pokemones = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
console.log("pokemon" + (pokemones.length + 1));
for (var i = 0; i < pokemones.length; i++) {
  let pokeCard = document.createElement("article");
  let top = document.createElement("div");
  let topBar = document.createElement("div");
  let pokeName = document.createElement("span");
  let pokeNumber = document.createElement("span");
  let pokeImgBg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let cardImg = document.createElement("img");
  let data = document.createElement("section");
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
    typeInnerText[t] = type.innerText;
    console.log(typeInnerText[t]);
  }
  /* Função para quando clicar em um Pokémon */
  pokeCard.addEventListener("click", (e) => {
    togglePage();
    /* PokeCard */
    pokeCard.classList.add("poke-card-preview");
    pokeCardPreview.appendChild(pokeCard);
    console.log(pokeCardPreview);

    closeBtn.addEventListener("click", () => {
      pokeCard.classList.remove("poke-card-preview");
      dexContainer.appendChild(pokeCard);
      togglePage();
      pokeCardPreview.appendChild.remove(pokeCard);
    });
    /* Weakness */
    for (i = 0; i < 18; i++) {
      if (types[1] == false || types[2] == undefined) {
        weak = typeWeakness[pokemones[1].types[0]][i] * 1;
      }
      weak =
        typeWeakness[pokemones[1].types[0]][i] *
        typeWeakness[pokemones[2].types[0]][i];
    }
  });
}

/*
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
