const slots = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
];

const generations = [1, 2, 3, 4];
const biomeRolls = [
  "Tall Grass",
  "Cave",
  "Water",
  "Safari",
];
const legendaryBiome = "Legendary";

const typeColors = {
  Electric: "#f6ca45",
  Fire: "#ef6847",
  Water: "#4aa3ff",
  Grass: "#5ec86d",
  Psychic: "#d86de7",
  Dragon: "#7b83ff",
  Ghost: "#8d72c7",
  Steel: "#9cb0bd",
  Fairy: "#f08ccd",
  Fighting: "#d67246",
  Ice: "#82d9e8",
  Ground: "#c99a5a",
  Legendary: "#ffd36b",
};

const excludedPokemon = new Set([
  "Great Tusk",
  "Scream Tail",
  "Brute Bonnet",
  "Flutter Mane",
  "Slither Wing",
  "Sandy Shocks",
  "Roaring Moon",
  "Walking Wake",
  "Gouging Fire",
  "Raging Bolt",
  "Iron Treads",
  "Iron Bundle",
  "Iron Hands",
  "Iron Jugulis",
  "Iron Moth",
  "Iron Thorns",
  "Iron Valiant",
  "Iron Leaves",
  "Iron Boulder",
  "Iron Crown",
]);

const encounterPools = {
  Starter: [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Chikorita",
    "Bayleef",
    "Meganium",
    "Cyndaquil",
    "Quilava",
    "Typhlosion",
    "Totodile",
    "Croconaw",
    "Feraligatr",
    "Treecko",
    "Grovyle",
    "Sceptile",
    "Torchic",
    "Combusken",
    "Blaziken",
    "Mudkip",
    "Marshtomp",
    "Swampert",
    "Turtwig",
    "Grotle",
    "Torterra",
    "Chimchar",
    "Monferno",
    "Infernape",
    "Piplup",
    "Prinplup",
    "Empoleon",
  ],
  "HM Slave": [
    "Rattata",
    "Raticate",
    "Sandshrew",
    "Sandslash",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Machop",
    "Machoke",
    "Machamp",
    "Farfetch'd",
    "Krabby",
    "Kingler",
    "Marill",
    "Azumarill",
    "Sentret",
    "Furret",
    "Wooper",
    "Quagsire",
    "Zigzagoon",
    "Linoone",
    "Lotad",
    "Lombre",
    "Ludicolo",
    "Wingull",
    "Pelipper",
    "Makuhita",
    "Hariyama",
    "Wailmer",
    "Wailord",
    "Corphish",
    "Crawdaunt",
    "Tropius",
    "Bibarel",
    "Bidoof",
    "Buizel",
    "Floatzel",
  ],
  Cave: [
    "Clefairy",
    "Clefable",
    "Zubat",
    "Golbat",
    "Crobat",
    "Paras",
    "Parasect",
    "Diglett",
    "Dugtrio",
    "Geodude",
    "Graveler",
    "Golem",
    "Onix",
    "Steelix",
    "Cubone",
    "Marowak",
    "Rhyhorn",
    "Rhydon",
    "Rhyperior",
    "Dunsparce",
    "Swinub",
    "Piloswine",
    "Mamoswine",
    "Sneasel",
    "Weavile",
    "Slugma",
    "Magcargo",
    "Whismur",
    "Loudred",
    "Exploud",
    "Makuhita",
    "Hariyama",
    "Aron",
    "Lairon",
    "Aggron",
    "Meditite",
    "Medicham",
    "Nosepass",
    "Probopass",
    "Sableye",
    "Mawile",
    "Lunatone",
    "Solrock",
    "Barboach",
    "Whiscash",
    "Baltoy",
    "Claydol",
    "Lileep",
    "Cradily",
    "Anorith",
    "Armaldo",
    "Shuppet",
    "Banette",
    "Duskull",
    "Dusclops",
    "Dusknoir",
    "Snorunt",
    "Glalie",
    "Froslass",
    "Bagon",
    "Shelgon",
    "Salamence",
    "Beldum",
    "Metang",
    "Metagross",
    "Bronzor",
    "Bronzong",
    "Gible",
    "Gabite",
    "Garchomp",
    "Hippopotas",
    "Hippowdon",
  ],
  Water: [
    "Psyduck",
    "Golduck",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Politoed",
    "Tentacool",
    "Tentacruel",
    "Slowpoke",
    "Slowbro",
    "Slowking",
    "Seel",
    "Dewgong",
    "Shellder",
    "Cloyster",
    "Krabby",
    "Kingler",
    "Horsea",
    "Seadra",
    "Kingdra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Chinchou",
    "Lanturn",
    "Marill",
    "Azumarill",
    "Wooper",
    "Quagsire",
    "Qwilfish",
    "Corsola",
    "Remoraid",
    "Octillery",
    "Mantine",
    "Lotad",
    "Lombre",
    "Ludicolo",
    "Surskit",
    "Masquerain",
    "Wingull",
    "Pelipper",
    "Carvanha",
    "Sharpedo",
    "Wailmer",
    "Wailord",
    "Barboach",
    "Whiscash",
    "Corphish",
    "Crawdaunt",
    "Feebas",
    "Milotic",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Clamperl",
    "Huntail",
    "Gorebyss",
    "Relicanth",
    "Luvdisc",
    "Piplup",
    "Prinplup",
    "Empoleon",
    "Bibarel",
    "Buizel",
    "Floatzel",
    "Shellos",
    "Gastrodon",
    "Finneon",
    "Lumineon",
    "Mantyke",
  ],
  "Tall Grass": [
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran F",
    "Nidorina",
    "Nidoqueen",
    "Nidoran M",
    "Nidorino",
    "Nidoking",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Bellossom",
    "Meowth",
    "Persian",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Ponyta",
    "Rapidash",
    "Doduo",
    "Dodrio",
    "Drowzee",
    "Hypno",
    "Exeggcute",
    "Exeggutor",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Tangela",
    "Mr. Mime",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Chikorita",
    "Bayleef",
    "Meganium",
    "Cyndaquil",
    "Quilava",
    "Typhlosion",
    "Totodile",
    "Croconaw",
    "Feraligatr",
    "Sentret",
    "Furret",
    "Hoothoot",
    "Noctowl",
    "Ledyba",
    "Ledian",
    "Spinarak",
    "Ariados",
    "Mareep",
    "Flaaffy",
    "Ampharos",
    "Hoppip",
    "Skiploom",
    "Jumpluff",
    "Aipom",
    "Ambipom",
    "Sunkern",
    "Sunflora",
    "Yanma",
    "Yanmega",
    "Murkrow",
    "Honchkrow",
    "Misdreavus",
    "Mismagius",
    "Wobbuffet",
    "Girafarig",
    "Gligar",
    "Gliscor",
    "Snubbull",
    "Granbull",
    "Heracross",
    "Teddiursa",
    "Ursaring",
    "Houndour",
    "Houndoom",
    "Stantler",
    "Treecko",
    "Grovyle",
    "Sceptile",
    "Torchic",
    "Combusken",
    "Blaziken",
    "Mudkip",
    "Marshtomp",
    "Swampert",
    "Poochyena",
    "Mightyena",
    "Zigzagoon",
    "Linoone",
    "Wurmple",
    "Silcoon",
    "Beautifly",
    "Cascoon",
    "Dustox",
    "Seedot",
    "Nuzleaf",
    "Shiftry",
    "Taillow",
    "Swellow",
    "Shroomish",
    "Breloom",
    "Slakoth",
    "Vigoroth",
    "Slaking",
    "Nincada",
    "Ninjask",
    "Shedinja",
    "Skitty",
    "Delcatty",
    "Electrike",
    "Manectric",
    "Plusle",
    "Minun",
    "Volbeat",
    "Illumise",
    "Roselia",
    "Roserade",
    "Gulpin",
    "Swalot",
    "Numel",
    "Camerupt",
    "Spoink",
    "Grumpig",
    "Spinda",
    "Cacnea",
    "Cacturne",
    "Swablu",
    "Altaria",
    "Zangoose",
    "Seviper",
    "Castform",
    "Kecleon",
    "Turtwig",
    "Grotle",
    "Torterra",
    "Chimchar",
    "Monferno",
    "Infernape",
    "Starly",
    "Staravia",
    "Staraptor",
    "Bidoof",
    "Bibarel",
    "Kricketot",
    "Kricketune",
    "Shinx",
    "Luxio",
    "Luxray",
    "Budew",
    "Combee",
    "Vespiquen",
    "Pachirisu",
    "Buneary",
    "Lopunny",
    "Glameow",
    "Purugly",
    "Stunky",
    "Skuntank",
    "Chatot",
    "Carnivine",
  ],
  Safari: [
    "Nidoran F",
    "Nidorina",
    "Nidoran M",
    "Nidorino",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Exeggcute",
    "Exeggutor",
    "Rhyhorn",
    "Rhydon",
    "Rhyperior",
    "Chansey",
    "Blissey",
    "Kangaskhan",
    "Scyther",
    "Scizor",
    "Pinsir",
    "Tauros",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Pikachu",
    "Oddish",
    "Gloom",
    "Doduo",
    "Dodrio",
    "Natu",
    "Xatu",
    "Aipom",
    "Ambipom",
    "Yanma",
    "Yanmega",
    "Girafarig",
    "Pineco",
    "Forretress",
    "Gligar",
    "Gliscor",
    "Shuckle",
    "Heracross",
    "Phanpy",
    "Donphan",
    "Houndour",
    "Houndoom",
    "Miltank",
    "Wobbuffet",
    "Wooper",
    "Quagsire",
    "Shroomish",
    "Breloom",
    "Gulpin",
    "Swalot",
    "Bidoof",
    "Bibarel",
    "Starly",
    "Staravia",
    "Budew",
    "Roselia",
    "Roserade",
    "Skorupi",
    "Drapion",
    "Croagunk",
    "Toxicroak",
    "Carnivine",
  ],
};

const encounterNameSets = Object.fromEntries(
  Object.entries(encounterPools).map(([encounter, names]) => [encounter, new Set(names)]),
);

let state;
let spinTimer;

const els = {
  generation: document.querySelector("#generationConstraint"),
  typing: document.querySelector("#typingConstraint"),
  generationRerollCount: document.querySelector("#generationRerollCount"),
  typingRerollCount: document.querySelector("#typingRerollCount"),
  generationCard: document.querySelector("#generationConstraint").closest(".constraint-card"),
  typingCard: document.querySelector("#typingConstraint").closest(".constraint-card"),
  setupPanel: document.querySelector("#setupPanel"),
  arena: document.querySelector("#arena"),
  rerollGeneration: document.querySelector("#rerollGeneration"),
  rerollTyping: document.querySelector("#rerollTyping"),
  slotName: document.querySelector("#slotName"),
  filledCount: document.querySelector("#filledCount"),
  candidateGrid: document.querySelector("#candidateGrid"),
  choiceCount: document.querySelector("#choiceCount"),
  teamGrid: document.querySelector("#teamGrid"),
  reset: document.querySelector("#resetGame"),
  verdict: document.querySelector("#verdict"),
  rankModal: document.querySelector("#rankModal"),
  rankTitle: document.querySelector("#rankTitle"),
  rankScore: document.querySelector("#rankScore"),
  rankDescription: document.querySelector("#rankDescription"),
  resultTeam: document.querySelector("#resultTeam"),
  spinOverlay: document.querySelector("#spinOverlay"),
  spinGeneration: document.querySelector("#spinGeneration"),
  spinTyping: document.querySelector("#spinTyping"),
  closeRank: document.querySelector("#closeRank"),
  shareRank: document.querySelector("#shareRank"),
  modeButtons: document.querySelectorAll(".mode-button"),
};

function newState() {
  const previousSettings = state
    ? {
        mode: state.mode,
      }
    : {
        mode: "normal",
      };
  const nextState = {
    selectedSlot: 0,
    picks: Array(slots.length).fill(null),
    slotRolls: Array(slots.length).fill(null),
    slotBiomes: Array(slots.length).fill(null),
    generation: 1,
    typing: "Tall Grass",
    generationRerolls: 2,
    typingRerolls: 1,
    candidates: [],
    mode: previousSettings.mode,
    started: false,
  };
  return nextState;
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function selectedSlot() {
  return slots[state.selectedSlot];
}

function currentEncounter() {
  if (state.selectedSlot === slots.length - 1) return legendaryBiome;
  return state.slotBiomes[state.selectedSlot] || "Tall Grass";
}

function rollableBiomes() {
  return state.selectedSlot === slots.length - 1 ? [legendaryBiome] : biomeRolls;
}

function usedNames() {
  return new Set([
    ...state.picks.filter(Boolean).map((pick) => pick.name),
    ...state.slotRolls
      .filter(Boolean)
      .filter((roll, index) => index !== state.selectedSlot && !state.picks[index])
      .flatMap((rolls) => rolls.map((roll) => roll.name)),
  ]);
}

function matchesEncounter(monster, encounter) {
  if (encounter === legendaryBiome) return monster.legendary;
  return Boolean(encounterNameSets[encounter]?.has(monster.name));
}

function candidatePool() {
  const used = usedNames();
  return poolFor(state.generation, currentEncounter(), used);
}

function poolFor(generation, encounter, used) {
  return monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !used.has(monster.name) &&
      monster.generation === generation &&
      (encounter === legendaryBiome || !monster.legendary) &&
      matchesEncounter(monster, encounter),
  );
}

function validCombos(used = usedNames()) {
  const combos = [];
  generations.forEach((generation) => {
    rollableBiomes().forEach((encounter) => {
      const pool = poolFor(generation, encounter, used);
      if (pool.length > 0) combos.push({ generation, typing: encounter, count: pool.length });
    });
  });
  return combos;
}

function rollFreshConstraints() {
  const combos = validCombos();
  const richerCombos = combos.filter((combo) => combo.count >= 3);
  const selected = sample(richerCombos.length ? richerCombos : combos);
  if (!selected) return;
  state.generation = selected.generation;
  state.typing = selected.typing;
  state.slotBiomes[state.selectedSlot] = selected.typing;
}

function pickCandidates() {
  const candidates = candidatePool();
  const rolled = shuffle(candidates).slice(0, 3);
  state.slotRolls[state.selectedSlot] = rolled.length ? rolled : null;
  state.candidates = rolled;
}

function selectedRolls() {
  return state.slotRolls[state.selectedSlot] || [];
}

function render() {
  els.generation.textContent = `Gen ${state.generation}`;
  state.typing = currentEncounter();
  els.typing.textContent = currentEncounter();
  els.generationRerollCount.textContent = `${state.generationRerolls} respin${state.generationRerolls === 1 ? "" : "s"}`;
  els.typingRerollCount.textContent = state.selectedSlot === slots.length - 1 ? "legendary roll" : "biome roll";
  els.rerollGeneration.disabled = state.generationRerolls === 0 || Boolean(state.picks[state.selectedSlot]);
  els.rerollTyping.disabled = true;
  els.rerollTyping.hidden = true;
  els.slotName.textContent = `Slot ${selectedSlot().label}`;
  els.filledCount.textContent = state.picks.filter(Boolean).length;
  els.candidateGrid.classList.toggle("expert-list", state.mode === "expert");
  els.candidateGrid.classList.add("three-roll");
  renderSettings();
  renderCandidates();
  renderTeam();
  updateScore();
}

function renderSettings() {
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function renderCandidates() {
  const draftedPick = state.picks[state.selectedSlot];
  if (draftedPick) {
    els.choiceCount.textContent = "Locked";
    els.candidateGrid.innerHTML = `<div class="monster-card locked-roll" style="grid-column: 1 / -1; --type-color: ${
      typeColors[draftedPick.types[0]] || "#7f8790"
    }">${cardInnerTemplate(draftedPick)}<span class="rating">Locked</span></div>`;
    return;
  }

  if (state.candidates.length === 0) {
    els.choiceCount.textContent = "No options";
    els.candidateGrid.innerHTML = `<div class="monster-card" style="grid-column: 1 / -1;"><h3>No picks available</h3><p class="verdict">This roll has no unused ${currentEncounter()} Pokemon from Gen ${state.generation}. Use your generation reroll or start a new run.</p></div>`;
    return;
  }

  els.choiceCount.textContent = `Choose 1 of ${state.candidates.length}`;
  els.candidateGrid.innerHTML = state.candidates.map(cardTemplate).join("");
  els.candidateGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => draft(button.dataset.name));
  });
}

function cardTemplate(monster) {
  const color = monster.legendary ? typeColors.Legendary : typeColors[monster.types[0]] || "#7f8790";
  return `
    <button class="monster-card" data-name="${monster.name}" style="--type-color: ${color}">
      ${cardInnerTemplate(monster)}
      <span class="rating">Lock In</span>
    </button>
  `;
}

function cardInnerTemplate(monster) {
  return `
    <div class="monster-name-line">
      ${spriteImg(monster)}
      <div class="monster-name">
        <h3>${monster.name}</h3>
      </div>
    </div>
  `;
}

function spriteImg(monster) {
  return `<img class="pokemon-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monster.id}.png" alt="" loading="lazy" />`;
}

function renderTeam() {
  els.teamGrid.innerHTML = slots
    .map((slot, index) => {
      const pick = state.picks[index];
      const selected = index === state.selectedSlot ? " selected" : "";
      const score = `<span class="slot-score">${pick ? "✓" : "+"}</span>`;
      const roll = state.slotRolls[index];
      const meta = pick
        ? `<strong>${pick.name}</strong><span>${pick.encounter || state.slotBiomes[index]}</span>`
        : roll
          ? `<strong>${slot.label}</strong><span>3 options rolled</span>`
          : `<strong>${slot.label}</strong><span>Click to roll this biome</span>`;
      const sprite = pick ? spriteImg(pick) : roll ? spriteImg(roll[0]) : `<span></span>`;
      return `<button class="team-card${selected}" data-slot="${index}">${sprite}<span class="slot-meta">${meta}</span>${score}</button>`;
    })
    .join("");

  els.teamGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectSlot(Number(button.dataset.slot)));
  });
}

function selectSlot(index) {
  state.selectedSlot = index;
  const needsRoll = !state.picks[index] && !state.slotRolls[index];
  if (needsRoll) {
    spinRoll("both");
    return;
  }
  state.candidates = state.picks[index] ? [] : selectedRolls();
  render();
}

function draft(name) {
  const pick = state.candidates.find((monster) => monster.name === name);
  if (!pick) return;
  state.picks[state.selectedSlot] = { ...pick, encounter: currentEncounter() };
  const nextOpen = state.picks.findIndex((slotPick) => !slotPick);
  if (nextOpen !== -1) {
    state.selectedSlot = nextOpen;
    renderTeam();
    updateScore();
    spinRoll("both");
    return;
  }
  pickCandidates();
  render();
  window.setTimeout(showRankModal, 250);
}

function compositionScore() {
  const picks = state.picks.filter(Boolean);
  if (!picks.length) {
    return {
      score: 0,
      power: 0,
      diversity: 0,
      balance: 0,
      typeCount: 0,
    };
  }

  const totals = aggregateStats();
  const typeCount = new Set(picks.flatMap((pick) => pick.types)).size;
  const power = Math.min(100, Math.round((totals.bst / (slots.length * 600)) * 100));
  const diversity = Math.min(100, Math.round((typeCount / 9) * 100));
  const physical = totals.attack + totals.defense;
  const special = totals.specialAttack + totals.specialDefense;
  const offenseBalance = Math.min(physical, special) / Math.max(physical, special);
  const speedTarget = Math.min(1, totals.speed / 520);
  const bulkTarget = Math.min(1, (totals.hp + totals.defense + totals.specialDefense) / 1500);
  const balance = Math.round(((offenseBalance + speedTarget + bulkTarget) / 3) * 100);
  const score = Math.min(100, Math.round(power * 0.66 + diversity * 0.18 + balance * 0.16));

  return { score, power, diversity, balance, typeCount };
}

function currentScore() {
  return compositionScore().score;
}

function updateScore() {
  const picks = state.picks.filter(Boolean);
  const score = currentScore();
  if (picks.length < slots.length) {
    els.verdict.textContent = `${picks.length}/6 locked. Choose one of three rolled Pokemon. Respins left: ${state.generationRerolls}.`;
  } else if (score >= 95) {
    els.verdict.textContent = "Elite Four Challenge cleared. That team has champion energy.";
  } else if (score >= 90) {
    els.verdict.textContent = "Elite Four challenger material. The run is alive.";
  } else {
    els.verdict.textContent = "Challenge complete. Check your badge tier and run it back.";
  }
}

function rankFor(score) {
  if (score >= 95) return { grade: "A+", title: "Elite Four Champion", description: "You cleared the league and made Hoenn remember your name." };
  if (score >= 90) return { grade: "A", title: "Elite Four Challenger", description: "A real league threat. One cleaner draft could make this a champion squad." };
  if (score >= 80) return { grade: "B", title: "8 Badges", description: "You earned the badges. The Elite Four is next, but this team still has holes." };
  if (score >= 70) return { grade: "C", title: "5 Badges", description: "Solid mid-journey team. Good enough to travel, not enough to close." };
  if (score >= 60) return { grade: "D", title: "3 Badges", description: "A few gym wins, a few hard lessons. This squad needs structure." };
  return { grade: "F", title: "1 Badge", description: "Back to Littleroot. The league dream needs a new draft." };
}

function aggregateStats() {
  return state.picks.filter(Boolean).reduce(
    (totals, pick) => {
      totals.hp += pick.stats.hp;
      totals.attack += pick.stats.attack;
      totals.defense += pick.stats.defense;
      totals.specialAttack += pick.stats.specialAttack;
      totals.specialDefense += pick.stats.specialDefense;
      totals.speed += pick.stats.speed;
      totals.bst += pick.bst;
      return totals;
    },
    { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0, bst: 0 },
  );
}

function teamShareText(score, rank) {
  const team = state.picks
    .filter(Boolean)
    .map((pick, index) => `${index + 1}. ${pick.encounter || slots[index].label}: ${pick.name}`)
    .join("\n");
  return `Elite Four Challenge\nGRADE - ${rank.grade}\n${rank.title.toUpperCase()}\nProjected win rate: ${score}%\n\n${team}`;
}

function showRankModal() {
  const composition = compositionScore();
  const score = composition.score;
  const rank = rankFor(score);
  els.rankTitle.innerHTML = `
    <span>Final Ranking</span>
    <strong>Grade ${rank.grade}</strong>
    <em>${rank.title}</em>
    <small>${score}% win rate</small>
  `;
  els.rankScore.textContent = "";
  els.rankDescription.textContent = rank.description;
  els.resultTeam.innerHTML = state.picks
    .map(
      (pick, index) => `
        <div class="result-pick">
          ${spriteImg(pick)}
          <span>
            <strong>${index + 1}. ${pick.name}</strong>
            <span>${pick.encounter || state.slotBiomes[index]} · ${pick.types.join(" / ")}</span>
          </span>
        </div>
      `,
    )
    .join("");
  els.rankModal.classList.add("open");
  els.rankModal.setAttribute("aria-hidden", "false");
}

function hideRankModal() {
  els.rankModal.classList.remove("open");
  els.rankModal.setAttribute("aria-hidden", "true");
}

async function shareTeam() {
  const score = currentScore();
  const rank = rankFor(score);
  const text = teamShareText(score, rank);
  if (navigator.share) {
    await navigator.share({ title: "Elite Four Challenge", text });
    return;
  }
  await navigator.clipboard.writeText(text);
  els.shareRank.textContent = "Copied";
  window.setTimeout(() => {
    els.shareRank.textContent = "Share Team";
  }, 1200);
}

function setSpinState(active) {
  els.generationCard.classList.toggle("spinning", active);
  els.typingCard.classList.toggle("spinning", active);
  els.spinOverlay.classList.toggle("open", active);
  els.spinOverlay.setAttribute("aria-hidden", active ? "false" : "true");
  els.rerollGeneration.disabled = active || state.generationRerolls === 0;
  els.rerollTyping.disabled = true;
  els.candidateGrid.style.opacity = active ? "0.42" : "1";
  els.candidateGrid.style.pointerEvents = active ? "none" : "auto";
}

function rerollGenerationValue() {
  const options = generations.filter(
    (generation) => generation !== state.generation && poolFor(generation, currentEncounter(), usedNames()).length > 0,
  );
  const fallback = generations.filter((generation) => generation !== state.generation);
  const next = sample(options.length ? options : fallback);
  if (next) state.generation = next;
}

function rerollTypingValue() {
  state.typing = currentEncounter();
}

function spinRoll(kind = "both") {
  window.clearTimeout(spinTimer);
  els.spinGeneration.textContent = `Gen ${state.generation}`;
  els.spinTyping.textContent = currentEncounter();
  setSpinState(true);
  const spinDelays = [95, 95, 100, 105, 110, 120, 135, 150, 170, 195, 225, 260, 310, 370];
  let ticks = 0;

  function spinStep() {
    ticks += 1;
    if (kind === "both" || kind === "generation") {
      els.spinGeneration.textContent = `Gen ${sample(generations)}`;
    }
    if (kind === "both" || kind === "typing") {
      els.spinTyping.textContent = sample(rollableBiomes());
    }
    if (ticks >= spinDelays.length) {
      window.clearTimeout(spinTimer);
      if (kind === "both") rollFreshConstraints();
      if (kind === "generation") rerollGenerationValue();
      if (kind === "typing") rerollTypingValue();
      els.spinGeneration.textContent = `Gen ${state.generation}`;
      state.typing = currentEncounter();
      els.spinTyping.textContent = currentEncounter();
      window.setTimeout(() => {
        pickCandidates();
        render();
        setSpinState(false);
      }, 520);
      return;
    }

    spinTimer = window.setTimeout(spinStep, spinDelays[ticks]);
  }

  spinTimer = window.setTimeout(spinStep, spinDelays[0]);
}

function reroll(kind) {
  if (kind === "generation" && state.generationRerolls > 0 && !state.picks[state.selectedSlot]) {
    state.generationRerolls -= 1;
    spinRoll("both");
  }
}

function setMode(mode) {
  state.mode = mode;
  if (!state.started) {
    renderSettings();
    startRun();
    return;
  }
  pickCandidates();
  render();
}

function showSetup() {
  hideRankModal();
  window.clearInterval(spinTimer);
  state = newState();
  els.setupPanel.classList.remove("hidden");
  els.arena.classList.add("hidden");
  els.verdict.classList.add("hidden");
  renderSettings();
}

function startRun() {
  hideRankModal();
  window.clearInterval(spinTimer);
  state = newState();
  state.started = true;
  els.setupPanel.classList.add("hidden");
  els.arena.classList.remove("hidden");
  els.verdict.classList.remove("hidden");
  render();
  spinRoll("both");
}

function startMode(mode) {
  state.mode = mode;
  renderSettings();
  startRun();
}

els.rerollGeneration.addEventListener("click", () => reroll("generation"));
els.rerollTyping.addEventListener("click", () => reroll("typing"));
els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => startMode(button.dataset.mode));
});
els.reset.addEventListener("click", showSetup);
els.closeRank.addEventListener("click", showSetup);
els.shareRank.addEventListener("click", () => {
  shareTeam().catch(() => {
    els.shareRank.textContent = "Share Failed";
    window.setTimeout(() => {
      els.shareRank.textContent = "Share Team";
    }, 1200);
  });
});

state = newState();
showSetup();
