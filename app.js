const slots = [
  { label: "Spot 1" },
  { label: "Spot 2" },
  { label: "Spot 3" },
  { label: "Spot 4" },
  { label: "Spot 5" },
  { label: "Spot 6" },
];

const generations = [1, 2, 3, 4];
const typingRolls = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
  "Legendary / Mythic",
];

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
  teamGrid: document.querySelector("#teamGrid"),
  reset: document.querySelector("#resetGame"),
  verdict: document.querySelector("#verdict"),
  rankModal: document.querySelector("#rankModal"),
  rankTitle: document.querySelector("#rankTitle"),
  rankScore: document.querySelector("#rankScore"),
  rankDescription: document.querySelector("#rankDescription"),
  resultTeam: document.querySelector("#resultTeam"),
  resultStats: document.querySelector("#resultStats"),
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
    generation: 1,
    typing: "Fire",
    generationRerolls: 1,
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

function selectedSlot() {
  return slots[state.selectedSlot];
}

function usedNames() {
  return new Set(state.picks.filter(Boolean).map((pick) => pick.name));
}

function matchesTyping(monster, typing) {
  if (typing === "Legendary / Mythic") return monster.legendary;
  return !monster.legendary && monster.types.includes(typing);
}

function candidatePool() {
  const used = usedNames();
  return poolFor(state.generation, state.typing, used);
}

function poolFor(generation, typing, used) {
  return monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !used.has(monster.name) &&
      monster.generation === generation &&
      matchesTyping(monster, typing),
  );
}

function validCombos(used = usedNames()) {
  const combos = [];
  generations.forEach((generation) => {
    typingRolls.forEach((typing) => {
      const pool = poolFor(generation, typing, used);
      if (pool.length > 0) combos.push({ generation, typing, count: pool.length });
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
}

function pickCandidates() {
  const candidates = candidatePool().map((monster) => ({ ...monster, draftScore: draftScore(monster) }));
  state.candidates =
    state.mode === "expert"
      ? candidates.sort((a, b) => a.name.localeCompare(b.name))
      : candidates.sort((a, b) => b.draftScore - a.draftScore);
}

function draftScore(monster) {
  const exactBonus = 40;
  const typingBonus = state.typing === "Legendary / Mythic" ? 35 : 24;
  const multiTypeBonus = monster.types.length > 1 ? 8 : 0;
  return Math.round(monster.bst / 7 + exactBonus + typingBonus + multiTypeBonus);
}

function render() {
  els.generation.textContent = `Gen ${state.generation}`;
  els.typing.textContent = state.typing;
  els.generationRerollCount.textContent = `${state.generationRerolls} reroll${state.generationRerolls === 1 ? "" : "s"}`;
  els.typingRerollCount.textContent = `${state.typingRerolls} reroll${state.typingRerolls === 1 ? "" : "s"}`;
  els.rerollGeneration.disabled = state.generationRerolls === 0;
  els.rerollTyping.disabled = state.typingRerolls === 0;
  els.slotName.textContent = selectedSlot().label;
  els.filledCount.textContent = state.picks.filter(Boolean).length;
  els.candidateGrid.classList.toggle("expert-list", state.mode === "expert");
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
  if (state.candidates.length === 0) {
    els.candidateGrid.innerHTML = `<div class="monster-card" style="grid-column: 1 / -1;"><h3>No exact picks available</h3><p class="verdict">This roll has no unused ${state.typing} Pokemon from Gen ${state.generation}. Use a reroll or start a new run.</p></div>`;
    return;
  }

  els.candidateGrid.innerHTML = state.candidates.map(cardTemplate).join("");
  els.candidateGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => draft(button.dataset.name));
  });
}

function cardTemplate(monster) {
  const color = monster.legendary ? typeColors.Legendary : typeColors[monster.types[0]] || "#7f8790";
  if (state.mode === "expert") {
    return `
      <button class="monster-card expert-card" data-name="${monster.name}" style="--type-color: ${color}">
        <div class="monster-name-line">
          ${spriteImg(monster)}
          <div class="monster-name">
            <h3>${monster.name}</h3>
          </div>
        </div>
        <div class="tags">
          ${monster.legendary ? `<span class="tag">Legendary</span>` : ""}
          ${monster.types.map((type) => `<span class="tag">${type}</span>`).join("")}
          <span class="tag">Gen ${monster.generation}</span>
        </div>
      </button>
    `;
  }
  return `
    <button class="monster-card" data-name="${monster.name}" style="--type-color: ${color}">
      <div class="monster-name-line">
        ${spriteImg(monster)}
        <div class="monster-name">
          <h3>${monster.name}</h3>
          <span>BST ${monster.bst}</span>
        </div>
      </div>
      <div class="tags">
        ${monster.legendary ? `<span class="tag">Legendary</span>` : ""}
        ${monster.types.map((type) => `<span class="tag">${type}</span>`).join("")}
        <span class="tag">Gen ${monster.generation}</span>
      </div>
      <div class="stats compact-stats">
        ${stat("HP", monster.stats.hp, 160)}
        ${stat("Atk", monster.stats.attack, 160)}
        ${stat("Def", monster.stats.defense, 160)}
        ${stat("SpA", monster.stats.specialAttack, 160)}
        ${stat("SpD", monster.stats.specialDefense, 160)}
        ${stat("Spe", monster.stats.speed, 160)}
      </div>
      <span class="rating">${monster.draftScore}</span>
    </button>
  `;
}

function spriteImg(monster) {
  return `<img class="pokemon-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monster.id}.png" alt="" loading="lazy" />`;
}

function stat(label, value, max) {
  return `<div class="stat-row"><span>${label}</span><div class="bar"><i style="--value:${Math.min(100, Math.round((value / max) * 100))}%"></i></div><b>${value}</b></div>`;
}

function renderTeam() {
  els.teamGrid.innerHTML = slots
    .map((slot, index) => {
      const pick = state.picks[index];
      const selected = index === state.selectedSlot ? " selected" : "";
      const score = pick ? `<span class="slot-score">${pick.bst}</span>` : `<span class="slot-score">+</span>`;
      const meta = pick
        ? `<strong>${pick.name}</strong><span>${pick.types.join(" / ")} · Gen ${pick.generation}</span>`
        : `<strong>${slot.label}</strong><span>Click to draft this slot</span>`;
      const sprite = pick ? spriteImg(pick) : `<span></span>`;
      return `<button class="team-card${selected}" data-slot="${index}">${sprite}<span class="slot-meta">${meta}</span>${score}</button>`;
    })
    .join("");

  els.teamGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectSlot(Number(button.dataset.slot)));
  });
}

function selectSlot(index) {
  state.selectedSlot = index;
  pickCandidates();
  render();
}

function draft(name) {
  const pick = state.candidates.find((monster) => monster.name === name);
  if (!pick) return;
  state.picks[state.selectedSlot] = pick;
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
    els.verdict.textContent = `${picks.length}/6 drafted. Click any squad slot to draft out of order.`;
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
    .map((pick, index) => `${index + 1}. ${pick.name}`)
    .join("\n");
  return `Elite Four Challenge\nGRADE - ${rank.grade}\n${rank.title.toUpperCase()}\nProjected win rate: ${score}%\n\n${team}`;
}

function showRankModal() {
  const composition = compositionScore();
  const score = composition.score;
  const rank = rankFor(score);
  const totals = aggregateStats();
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
            <span>${pick.types.join(" / ")} · Gen ${pick.generation} · BST ${pick.bst}</span>
          </span>
        </div>
      `,
    )
    .join("");
  els.resultStats.innerHTML = [
    ["Power", `${composition.power}%`],
    ["Balance", `${composition.balance}%`],
    ["Attack", totals.attack],
    ["Defense", totals.defense],
  ]
    .map(([label, value]) => `<div class="result-stat"><span>${label}</span><strong>${value}</strong></div>`)
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
  els.rerollTyping.disabled = active || state.typingRerolls === 0;
  els.candidateGrid.style.opacity = active ? "0.42" : "1";
  els.candidateGrid.style.pointerEvents = active ? "none" : "auto";
}

function rerollGenerationValue() {
  const options = generations.filter(
    (generation) => generation !== state.generation && poolFor(generation, state.typing, usedNames()).length > 0,
  );
  const fallback = generations.filter((generation) => generation !== state.generation);
  const next = sample(options.length ? options : fallback);
  if (next) state.generation = next;
}

function rerollTypingValue() {
  const options = typingRolls.filter(
    (typing) => typing !== state.typing && poolFor(state.generation, typing, usedNames()).length > 0,
  );
  state.typing = sample(options.length ? options : typingRolls.filter((typing) => typing !== state.typing));
}

function spinRoll(kind = "both") {
  window.clearTimeout(spinTimer);
  els.spinGeneration.textContent = `Gen ${state.generation}`;
  els.spinTyping.textContent = state.typing;
  setSpinState(true);
  const spinDelays = [95, 95, 100, 105, 110, 120, 135, 150, 170, 195, 225, 260, 310, 370];
  let ticks = 0;

  function spinStep() {
    ticks += 1;
    if (kind === "both" || kind === "generation") {
      els.spinGeneration.textContent = `Gen ${sample(generations)}`;
    }
    if (kind === "both" || kind === "typing") {
      els.spinTyping.textContent = sample(typingRolls);
    }
    if (ticks >= spinDelays.length) {
      window.clearTimeout(spinTimer);
      if (kind === "both") rollFreshConstraints();
      if (kind === "generation") rerollGenerationValue();
      if (kind === "typing") rerollTypingValue();
      els.spinGeneration.textContent = `Gen ${state.generation}`;
      els.spinTyping.textContent = state.typing;
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
  if (kind === "generation" && state.generationRerolls > 0) {
    state.generationRerolls -= 1;
    spinRoll("generation");
  }
  if (kind === "typing" && state.typingRerolls > 0) {
    state.typingRerolls -= 1;
    spinRoll("typing");
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
