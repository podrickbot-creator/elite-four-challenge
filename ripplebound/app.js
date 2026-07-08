const creatures = [
  {
    id: "orange-koi",
    name: "Orange Koi",
    rarity: "Common",
    biome: "Local",
    type: "fish",
    color: "#f47b3b",
    alt: "#ffd35a",
    story: "Your first koi. It follows the smallest ripples and trusts the pond already.",
  },
  {
    id: "silver-minnow",
    name: "Silver Minnow",
    rarity: "Common",
    biome: "Local",
    type: "fish",
    color: "#c9d7e2",
    alt: "#f7ffe8",
    story: "A quick little flash of silver from a short walk close to home.",
  },
  {
    id: "moss-frog",
    name: "Moss Frog",
    rarity: "Common",
    biome: "Forest",
    type: "frog",
    color: "#79d66f",
    alt: "#406b38",
    story: "It arrived with wet leaves and the sound of a trail underfoot.",
  },
  {
    id: "city-guppy",
    name: "City Guppy",
    rarity: "Uncommon",
    biome: "City",
    type: "fish",
    color: "#5bd7ff",
    alt: "#ff8fb8",
    story: "A neon little swimmer, bright from sidewalks, signs, and late trains.",
  },
  {
    id: "pond-turtle",
    name: "Pond Turtle",
    rarity: "Uncommon",
    biome: "Water",
    type: "turtle",
    color: "#4f9c5d",
    alt: "#8b6b3f",
    story: "A patient traveler. It only appears when your route bends toward water.",
  },
  {
    id: "pine-dragonfly",
    name: "Pine Dragonfly",
    rarity: "Uncommon",
    biome: "Forest",
    type: "dragonfly",
    color: "#8be7d4",
    alt: "#f7ffe8",
    story: "It skims the pond like a green spark from somewhere quiet and wooded.",
  },
  {
    id: "alpine-koi",
    name: "Alpine Koi",
    rarity: "Rare",
    biome: "Mountain",
    type: "fish",
    color: "#f7ffe8",
    alt: "#6aa0ff",
    story: "Cold-water shimmer from a route with elevation and stubborn legs.",
  },
  {
    id: "golden-koi",
    name: "Golden Koi",
    rarity: "Rare",
    biome: "Water",
    type: "fish",
    color: "#ffd35a",
    alt: "#ff9d4d",
    story: "A lucky gold ripple. It remembers a longer trip near open water.",
  },
  {
    id: "ticket-eel",
    name: "Ticket Eel",
    rarity: "Rare",
    biome: "Transit",
    type: "fish",
    color: "#b98cff",
    alt: "#ffd35a",
    story: "It slips between stations, terminals, and the hum of departure boards.",
  },
  {
    id: "storm-koi",
    name: "Storm Koi",
    rarity: "Epic",
    biome: "Mountain",
    type: "fish",
    color: "#5d6dff",
    alt: "#d7e0ff",
    story: "A deep-blue koi with thunder in its tail. It favors bigger journeys.",
  },
  {
    id: "ghost-koi",
    name: "Ghost Koi",
    rarity: "Epic",
    biome: "City",
    type: "fish",
    color: "#e8dcff",
    alt: "#9f7cff",
    story: "A pale shimmer from late-night streets and places you almost forgot.",
  },
  {
    id: "dragon-koi",
    name: "Dragon Koi",
    rarity: "Legendary",
    biome: "Transit",
    type: "fish",
    color: "#ff5d5a",
    alt: "#ffd35a",
    story: "A mythic traveler. It follows huge distance, strange timing, and luck.",
  },
];

const rarityRank = {
  Common: 1,
  Uncommon: 2,
  Rare: 3,
  Epic: 4,
  Legendary: 5,
};

const rarityColor = {
  Common: "#8be7d4",
  Uncommon: "#79d66f",
  Rare: "#ffd35a",
  Epic: "#b98cff",
  Legendary: "#ff8fb8",
};

const state = {
  miles: 0,
  ripples: 0,
  biome: "Local",
  owned: ["orange-koi"],
  log: [],
};

const saveKey = "ripplebound-pond-v1";

const els = {
  totalMiles: document.querySelector("#totalMiles"),
  rippleEnergy: document.querySelector("#rippleEnergy"),
  ownedCount: document.querySelector("#ownedCount"),
  totalCount: document.querySelector("#totalCount"),
  rarestFind: document.querySelector("#rarestFind"),
  pondLife: document.querySelector("#pondLife"),
  rippleLayer: document.querySelector("#rippleLayer"),
  pondMessage: document.querySelector("#pondMessage"),
  collectionGrid: document.querySelector("#collectionGrid"),
  travelLog: document.querySelector("#travelLog"),
  tripForm: document.querySelector("#tripForm"),
  tripMiles: document.querySelector("#tripMiles"),
  tripBiome: document.querySelector("#tripBiome"),
  rollButton: document.querySelector("#rollButton"),
  revealModal: document.querySelector("#revealModal"),
  revealRarity: document.querySelector("#revealRarity"),
  revealCreature: document.querySelector("#revealCreature"),
  revealTitle: document.querySelector("#revealTitle"),
  revealStory: document.querySelector("#revealStory"),
  closeReveal: document.querySelector("#closeReveal"),
};

function creatureById(id) {
  return creatures.find((creature) => creature.id === id);
}

function ownedCreatures() {
  return state.owned.map(creatureById).filter(Boolean);
}

function weightedPool() {
  const miles = state.miles;
  const weights = {
    Common: 58,
    Uncommon: Math.min(32, 16 + miles * 0.18),
    Rare: Math.min(20, 4 + miles * 0.08),
    Epic: Math.min(10, Math.max(0, miles - 20) * 0.08),
    Legendary: Math.min(3.5, Math.max(0, miles - 75) * 0.025),
  };

  return creatures.flatMap((creature) => {
    if (state.owned.includes(creature.id)) return [];
    const biomeBoost = creature.biome === state.biome ? 1.9 : creature.biome === "Local" ? 1 : 0.65;
    const ticketCount = Math.max(1, Math.round((weights[creature.rarity] || 1) * biomeBoost));
    return Array.from({ length: ticketCount }, () => creature);
  });
}

function rollCreature() {
  const pool = weightedPool();
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function ripplesForTrip(miles, biome) {
  const biomeBonus = biome === "Transit" ? 4 : biome === "Water" || biome === "Mountain" ? 3 : 2;
  return Math.max(1, Math.round(miles * 2 + biomeBonus));
}

function spriteMarkup(creature) {
  return `
    <div class="creature ${creature.type}" style="--creature-color: ${creature.color}; --creature-alt: ${creature.alt}">
      <div class="sprite"></div>
    </div>
  `;
}

function staticSpriteMarkup(creature) {
  return `
    <div class="creature ${creature.type}" style="position: static; transform: none; animation: none; --creature-color: ${creature.color}; --creature-alt: ${creature.alt}">
      <div class="sprite"></div>
    </div>
  `;
}

function renderPond() {
  const owned = ownedCreatures();
  els.pondLife.innerHTML = owned
    .map((creature, index) => {
      const x = 18 + ((index * 29) % 64);
      const y = 24 + ((index * 19) % 54);
      return `
        <div class="creature ${creature.type}" style="left: ${x}%; top: ${y}%; --creature-color: ${creature.color}; --creature-alt: ${creature.alt}">
          <div class="sprite"></div>
        </div>
      `;
    })
    .join("");
}

function renderCollection() {
  els.collectionGrid.innerHTML = creatures
    .map((creature) => {
      const owned = state.owned.includes(creature.id);
      return `
        <div class="collection-card${owned ? "" : " locked"}">
          <div class="sprite-wrap">${owned ? staticSpriteMarkup(creature) : "?"}</div>
          <div>
            <h3>${owned ? creature.name : "Undiscovered"}</h3>
            <p><span class="rarity" style="--rarity-color: ${rarityColor[creature.rarity]}">${creature.rarity}</span> · ${creature.biome}</p>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderLog() {
  if (!state.log.length) {
    els.travelLog.innerHTML = "<li>No trips yet. Add your first journey.</li>";
    return;
  }
  els.travelLog.innerHTML = state.log
    .slice(0, 6)
    .map((entry) => `<li>${entry}</li>`)
    .join("");
}

function renderStats() {
  const owned = ownedCreatures();
  const rarest = owned.reduce((best, creature) => (rarityRank[creature.rarity] > rarityRank[best.rarity] ? creature : best), owned[0]);
  els.totalMiles.textContent = state.miles.toFixed(1);
  els.rippleEnergy.textContent = state.ripples;
  els.ownedCount.textContent = state.owned.length;
  els.totalCount.textContent = creatures.length;
  els.rarestFind.textContent = rarest.rarity;
  els.rollButton.disabled = state.ripples < 10 || state.owned.length >= creatures.length;
}

function render() {
  renderStats();
  renderPond();
  renderCollection();
  renderLog();
}

function saveGame() {
  window.localStorage.setItem(saveKey, JSON.stringify(state));
}

function loadGame() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(saveKey));
    if (!saved) return;
    state.miles = Number(saved.miles) || 0;
    state.ripples = Number(saved.ripples) || 0;
    state.biome = saved.biome || "Local";
    state.owned = Array.isArray(saved.owned) && saved.owned.length ? saved.owned.filter((id) => creatureById(id)) : ["orange-koi"];
    state.log = Array.isArray(saved.log) ? saved.log.slice(0, 20) : [];
  } catch {
    state.log = [];
  }
}

function addRipple() {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${20 + Math.random() * 60}%`;
  ripple.style.top = `${20 + Math.random() * 58}%`;
  els.rippleLayer.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 900);
}

function showReveal(creature) {
  els.revealRarity.textContent = creature.rarity;
  els.revealRarity.style.color = rarityColor[creature.rarity];
  els.revealCreature.innerHTML = staticSpriteMarkup(creature);
  els.revealTitle.textContent = creature.name;
  els.revealStory.textContent = creature.story;
  els.revealModal.classList.add("open");
  els.revealModal.setAttribute("aria-hidden", "false");
}

function closeReveal() {
  els.revealModal.classList.remove("open");
  els.revealModal.setAttribute("aria-hidden", "true");
}

function logTrip(event) {
  event.preventDefault();
  const miles = Math.max(0.1, Number(els.tripMiles.value) || 0);
  const biome = els.tripBiome.value;
  const gained = ripplesForTrip(miles, biome);
  state.miles += miles;
  state.ripples += gained;
  state.biome = biome;
  state.log.unshift(`${miles.toFixed(1)} miles · ${biome} · +${gained} ripples`);
  els.pondMessage.textContent = `${biome} ripples reached your pond. You earned ${gained} travel ripples.`;
  addRipple();
  saveGame();
  render();
}

function rollRipple() {
  if (state.ripples < 10) return;
  state.ripples -= 10;
  addRipple();
  const creature = rollCreature();
  if (!creature) {
    els.pondMessage.textContent = "Every known creature is already in your pond. That is a serious travel log.";
    saveGame();
    render();
    return;
  }
  state.owned.push(creature.id);
  state.log.unshift(`Found ${creature.name} · ${creature.rarity} · ${state.biome}`);
  els.pondMessage.textContent = `${creature.name} joined your pond after ${state.miles.toFixed(1)} total miles.`;
  saveGame();
  render();
  window.setTimeout(() => showReveal(creature), 300);
}

els.tripForm.addEventListener("submit", logTrip);
els.rollButton.addEventListener("click", rollRipple);
els.closeReveal.addEventListener("click", closeReveal);
els.revealModal.addEventListener("click", (event) => {
  if (event.target === els.revealModal) closeReveal();
});

loadGame();
render();
