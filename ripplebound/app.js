const items = [
  {
    id: "tiny-lamp",
    name: "Tiny Lamp",
    rarity: "Common",
    category: "House",
    mood: "Neighborhood",
    icon: "lamp",
    story: "A warm little lamp for Marlo's reading corner.",
  },
  {
    id: "striped-rug",
    name: "Striped Rug",
    rarity: "Common",
    category: "House",
    mood: "City",
    icon: "rug",
    story: "Soft under froggy feet after a long walk.",
  },
  {
    id: "tea-kettle",
    name: "Tea Kettle",
    rarity: "Common",
    category: "House",
    mood: "Neighborhood",
    icon: "kettle",
    story: "Marlo insists every good trip ends with tea.",
  },
  {
    id: "flower-pot",
    name: "Flower Pot",
    rarity: "Uncommon",
    category: "Backyard",
    mood: "Nature",
    icon: "flower",
    story: "A bright pot for the backyard path.",
  },
  {
    id: "moss-stone",
    name: "Moss Stone",
    rarity: "Uncommon",
    category: "Backyard",
    mood: "Nature",
    icon: "stone",
    story: "Cool, green, and perfect for sitting dramatically.",
  },
  {
    id: "rain-hat",
    name: "Rain Hat",
    rarity: "Uncommon",
    category: "Outfit",
    mood: "Waterfront",
    icon: "hat",
    story: "A cheerful hat for misty mornings and puddle weather.",
  },
  {
    id: "train-ticket",
    name: "Framed Ticket",
    rarity: "Rare",
    category: "House",
    mood: "Transit",
    icon: "ticket",
    story: "A keepsake from somewhere far enough to feel different.",
  },
  {
    id: "moon-bench",
    name: "Moon Bench",
    rarity: "Rare",
    category: "Backyard",
    mood: "City",
    icon: "bench",
    story: "A quiet bench for watching streetlights become stars.",
  },
  {
    id: "traveler-scarf",
    name: "Traveler Scarf",
    rarity: "Rare",
    category: "Outfit",
    mood: "Transit",
    icon: "scarf",
    story: "A soft scarf that makes Marlo look like he knows secret shortcuts.",
  },
  {
    id: "pond-bridge",
    name: "Pond Bridge",
    rarity: "Epic",
    category: "Backyard",
    mood: "Waterfront",
    icon: "bridge",
    story: "A little bridge that makes the whole backyard feel like a storybook.",
  },
  {
    id: "star-lantern",
    name: "Star Lantern",
    rarity: "Epic",
    category: "House",
    mood: "Nature",
    icon: "star",
    story: "It glows like a memory from a road with no rush.",
  },
  {
    id: "cloud-cape",
    name: "Cloud Cape",
    rarity: "Legendary",
    category: "Outfit",
    mood: "Transit",
    icon: "cape",
    story: "A legendary cape for a frog who has seen the world move beneath him.",
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
  Common: "#7fdc8b",
  Uncommon: "#7bc8ff",
  Rare: "#ffd35a",
  Epic: "#cba0ff",
  Legendary: "#ff91b8",
};

const state = {
  miles: 0,
  mood: "Neighborhood",
  owned: [],
  equippedOutfit: null,
  log: [],
};

const saveKey = "ripplebound-frog-home-v1";
const rollCost = 5;

const els = {
  totalMiles: document.querySelector("#totalMiles"),
  rollCount: document.querySelector("#rollCount"),
  ownedCount: document.querySelector("#ownedCount"),
  totalCount: document.querySelector("#totalCount"),
  bestFind: document.querySelector("#bestFind"),
  backyardItems: document.querySelector("#backyardItems"),
  houseItems: document.querySelector("#houseItems"),
  frogCompanion: document.querySelector("#frogCompanion"),
  frogHat: document.querySelector("#frogHat"),
  companionMessage: document.querySelector("#companionMessage"),
  collectionGrid: document.querySelector("#collectionGrid"),
  travelLog: document.querySelector("#travelLog"),
  tripForm: document.querySelector("#tripForm"),
  tripMiles: document.querySelector("#tripMiles"),
  tripMood: document.querySelector("#tripMood"),
  rollButton: document.querySelector("#rollButton"),
  revealModal: document.querySelector("#revealModal"),
  revealRarity: document.querySelector("#revealRarity"),
  revealItem: document.querySelector("#revealItem"),
  revealTitle: document.querySelector("#revealTitle"),
  revealStory: document.querySelector("#revealStory"),
  closeReveal: document.querySelector("#closeReveal"),
  tabButtons: document.querySelectorAll("[data-tab-target]"),
};

function itemById(id) {
  return items.find((item) => item.id === id);
}

function ownedItems() {
  return state.owned.map(itemById).filter(Boolean);
}

function weightedPool() {
  const miles = state.miles;
  const weights = {
    Common: 54,
    Uncommon: Math.min(34, 14 + miles * 0.18),
    Rare: Math.min(22, 3 + miles * 0.08),
    Epic: Math.min(11, Math.max(0, miles - 18) * 0.08),
    Legendary: Math.min(3, Math.max(0, miles - 60) * 0.025),
  };

  return items.flatMap((item) => {
    if (state.owned.includes(item.id)) return [];
    const moodBoost = item.mood === state.mood ? 2 : 0.8;
    const tickets = Math.max(1, Math.round((weights[item.rarity] || 1) * moodBoost));
    return Array.from({ length: tickets }, () => item);
  });
}

function rollItem() {
  const pool = weightedPool();
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function itemMarkup(item) {
  return `<span class="item-icon ${item.icon}" title="${item.name}" style="--rarity-color: ${rarityColor[item.rarity]}"></span>`;
}

function renderScene() {
  const houseItems = ownedItems().filter((item) => item.category === "House").slice(-4);
  const yardItems = ownedItems().filter((item) => item.category === "Backyard").slice(-5);
  const outfits = ownedItems().filter((item) => item.category === "Outfit");
  const activeOutfit = outfits[outfits.length - 1] || null;
  state.equippedOutfit = activeOutfit?.id || null;

  els.houseItems.innerHTML = houseItems
    .map((item, index) => `<div class="placed house-place place-${index + 1}">${itemMarkup(item)}</div>`)
    .join("");

  els.backyardItems.innerHTML = yardItems
    .map((item, index) => `<div class="placed yard-place place-${index + 1}">${itemMarkup(item)}</div>`)
    .join("");

  els.frogCompanion.dataset.outfit = activeOutfit?.icon || "none";
  els.frogHat.textContent = activeOutfit ? activeOutfit.name.split(" ")[0] : "";
}

function renderCollection() {
  els.collectionGrid.innerHTML = items
    .map((item) => {
      const owned = state.owned.includes(item.id);
      return `
        <div class="collection-card${owned ? "" : " locked"}">
          <div class="item-preview-small">${owned ? itemMarkup(item) : "?"}</div>
          <div>
            <h3>${owned ? item.name : "Undiscovered"}</h3>
            <p>
              <span class="rarity" style="--rarity-color: ${rarityColor[item.rarity]}">${item.rarity}</span>
              · ${item.category}
            </p>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderLog() {
  if (!state.log.length) {
    els.travelLog.innerHTML = "<li>No trips yet. Log Marlo's first journey.</li>";
    return;
  }
  els.travelLog.innerHTML = state.log
    .slice(0, 6)
    .map((entry) => `<li>${entry}</li>`)
    .join("");
}

function renderStats() {
  const owned = ownedItems();
  const best = owned.reduce(
    (current, item) => (!current || rarityRank[item.rarity] > rarityRank[current.rarity] ? item : current),
    null,
  );
  els.totalMiles.textContent = state.miles.toFixed(1);
  els.rollCount.textContent = Math.floor(state.miles / rollCost);
  els.ownedCount.textContent = state.owned.length;
  els.totalCount.textContent = items.length;
  els.bestFind.textContent = best ? best.rarity : "None";
  els.rollButton.disabled = state.miles < rollCost || state.owned.length >= items.length;
}

function render() {
  renderStats();
  renderScene();
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
    state.mood = saved.mood || "Neighborhood";
    state.owned = Array.isArray(saved.owned) ? saved.owned.filter((id) => itemById(id)) : [];
    state.equippedOutfit = saved.equippedOutfit || null;
    state.log = Array.isArray(saved.log) ? saved.log.slice(0, 20) : [];
  } catch {
    state.log = [];
  }
}

function showReveal(item) {
  els.revealRarity.textContent = item.rarity;
  els.revealRarity.style.color = rarityColor[item.rarity];
  els.revealItem.innerHTML = itemMarkup(item);
  els.revealTitle.textContent = item.name;
  els.revealStory.textContent = item.story;
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
  const mood = els.tripMood.value;
  state.miles += miles;
  state.mood = mood;
  state.log.unshift(`${miles.toFixed(1)} miles · ${mood} walk · ${Math.floor(state.miles / rollCost)} roll${Math.floor(state.miles / rollCost) === 1 ? "" : "s"} banked`);
  els.companionMessage.textContent = `Marlo tucked away ${miles.toFixed(1)} miles from a ${mood.toLowerCase()} trip.`;
  saveGame();
  render();
}

function rollForItem() {
  if (state.miles < rollCost) return;
  state.miles -= rollCost;
  const item = rollItem();
  if (!item) {
    els.companionMessage.textContent = "Marlo has collected every item in this prototype.";
    saveGame();
    render();
    return;
  }
  state.owned.push(item.id);
  state.log.unshift(`Found ${item.name} · ${item.rarity} ${item.category}`);
  els.companionMessage.textContent = `${item.name} joined Marlo's ${item.category.toLowerCase()} collection.`;
  saveGame();
  render();
  window.setTimeout(() => showReveal(item), 220);
}

els.tripForm.addEventListener("submit", logTrip);
els.rollButton.addEventListener("click", rollForItem);
els.closeReveal.addEventListener("click", closeReveal);
els.revealModal.addEventListener("click", (event) => {
  if (event.target === els.revealModal) closeReveal();
});
els.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tabTarget;
    const section =
      target === "collection"
        ? document.querySelector("#collectionPanel")
        : target === "log"
          ? document.querySelector("#logPanel")
          : document.querySelector(".home-panel");

    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelectorAll(".bottom-tabs button").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tabTarget === target);
    });
  });
});

loadGame();
render();
