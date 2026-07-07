const slots = [
  { label: "Team Captain" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
];

const generations = [1, 2, 3, 4];
const biomeRolls = [
  "Tall Grass",
  "Forest",
  "Cave",
  "Mountain",
  "Desert",
  "Snow",
  "Swamp",
  "Water",
  "Surfing",
  "Fishing",
  "Ocean",
  "Power Plant",
  "Haunted Tower",
  "Bug-Catching",
  "Safari",
];
const legendaryBiome = "Legendary";
const captainBiome = "Team Captain";
const arenaOpponentSize = 6;
const arenaTargetWins = 6;

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
  "Team Captain": [
    "Venusaur",
    "Charizard",
    "Blastoise",
    "Pidgeot",
    "Nidoqueen",
    "Nidoking",
    "Vileplume",
    "Alakazam",
    "Machamp",
    "Victreebel",
    "Golem",
    "Gengar",
    "Dragonite",
    "Meganium",
    "Typhlosion",
    "Feraligatr",
    "Crobat",
    "Ampharos",
    "Bellossom",
    "Politoed",
    "Kingdra",
    "Tyranitar",
    "Sceptile",
    "Blaziken",
    "Swampert",
    "Gardevoir",
    "Slaking",
    "Exploud",
    "Aggron",
    "Flygon",
    "Walrein",
    "Salamence",
    "Metagross",
    "Torterra",
    "Infernape",
    "Empoleon",
    "Staraptor",
    "Luxray",
    "Roserade",
    "Garchomp",
    "Magnezone",
    "Rhyperior",
    "Electivire",
    "Magmortar",
    "Togekiss",
    "Mamoswine",
    "Gallade",
    "Dusknoir",
    "Froslass",
  ],
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
  Mountain: [
    "Spearow",
    "Fearow",
    "Sandshrew",
    "Sandslash",
    "Mankey",
    "Primeape",
    "Machop",
    "Machoke",
    "Machamp",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Doduo",
    "Dodrio",
    "Onix",
    "Steelix",
    "Cubone",
    "Marowak",
    "Rhyhorn",
    "Rhydon",
    "Rhyperior",
    "Skarmory",
    "Phanpy",
    "Donphan",
    "Larvitar",
    "Pupitar",
    "Tyranitar",
    "Makuhita",
    "Hariyama",
    "Numel",
    "Camerupt",
    "Spoink",
    "Grumpig",
    "Spinda",
    "Swablu",
    "Altaria",
    "Zangoose",
    "Seviper",
    "Torkoal",
    "Trapinch",
    "Vibrava",
    "Flygon",
    "Solrock",
    "Lunatone",
    "Bagon",
    "Shelgon",
    "Salamence",
    "Shinx",
    "Luxio",
    "Luxray",
    "Cranidos",
    "Rampardos",
    "Shieldon",
    "Bastiodon",
    "Gible",
    "Gabite",
    "Garchomp",
    "Hippopotas",
    "Hippowdon",
  ],
  Desert: [
    "Sandshrew",
    "Sandslash",
    "Diglett",
    "Dugtrio",
    "Cubone",
    "Marowak",
    "Baltoy",
    "Claydol",
    "Cacnea",
    "Cacturne",
    "Trapinch",
    "Vibrava",
    "Flygon",
    "Sandshrew",
    "Sandslash",
    "Numel",
    "Camerupt",
    "Hippopotas",
    "Hippowdon",
  ],
  Snow: [
    "Seel",
    "Dewgong",
    "Swinub",
    "Piloswine",
    "Mamoswine",
    "Sneasel",
    "Weavile",
    "Delibird",
    "Snorunt",
    "Glalie",
    "Froslass",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Snover",
    "Abomasnow",
  ],
  Swamp: [
    "Psyduck",
    "Golduck",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Politoed",
    "Grimer",
    "Muk",
    "Koffing",
    "Weezing",
    "Wooper",
    "Quagsire",
    "Murkrow",
    "Honchkrow",
    "Lotad",
    "Lombre",
    "Ludicolo",
    "Surskit",
    "Masquerain",
    "Gulpin",
    "Swalot",
    "Barboach",
    "Whiscash",
    "Corphish",
    "Crawdaunt",
    "Croagunk",
    "Toxicroak",
    "Carnivine",
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
  Surfing: [
    "Tentacool",
    "Tentacruel",
    "Slowpoke",
    "Slowbro",
    "Slowking",
    "Seel",
    "Dewgong",
    "Lapras",
    "Chinchou",
    "Lanturn",
    "Marill",
    "Azumarill",
    "Wooper",
    "Quagsire",
    "Qwilfish",
    "Corsola",
    "Mantine",
    "Wingull",
    "Pelipper",
    "Wailmer",
    "Wailord",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Relicanth",
    "Buizel",
    "Floatzel",
    "Shellos",
    "Gastrodon",
    "Mantyke",
  ],
  Fishing: [
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Politoed",
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
    "Chinchou",
    "Lanturn",
    "Qwilfish",
    "Remoraid",
    "Octillery",
    "Carvanha",
    "Sharpedo",
    "Barboach",
    "Whiscash",
    "Corphish",
    "Crawdaunt",
    "Feebas",
    "Milotic",
    "Clamperl",
    "Huntail",
    "Gorebyss",
    "Luvdisc",
    "Finneon",
    "Lumineon",
  ],
  Ocean: [
    "Tentacool",
    "Tentacruel",
    "Seel",
    "Dewgong",
    "Shellder",
    "Cloyster",
    "Horsea",
    "Seadra",
    "Kingdra",
    "Staryu",
    "Starmie",
    "Lapras",
    "Chinchou",
    "Lanturn",
    "Corsola",
    "Remoraid",
    "Octillery",
    "Mantine",
    "Wingull",
    "Pelipper",
    "Carvanha",
    "Sharpedo",
    "Wailmer",
    "Wailord",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Clamperl",
    "Huntail",
    "Gorebyss",
    "Relicanth",
    "Luvdisc",
    "Finneon",
    "Lumineon",
    "Mantyke",
  ],
  "Power Plant": [
    "Pikachu",
    "Raichu",
    "Magnemite",
    "Magneton",
    "Magnezone",
    "Voltorb",
    "Electrode",
    "Electabuzz",
    "Electivire",
    "Pichu",
    "Mareep",
    "Flaaffy",
    "Ampharos",
    "Elekid",
    "Electrike",
    "Manectric",
    "Plusle",
    "Minun",
    "Shinx",
    "Luxio",
    "Luxray",
    "Pachirisu",
  ],
  "Haunted Tower": [
    "Gastly",
    "Haunter",
    "Gengar",
    "Cubone",
    "Marowak",
    "Misdreavus",
    "Mismagius",
    "Murkrow",
    "Honchkrow",
    "Sableye",
    "Shuppet",
    "Banette",
    "Duskull",
    "Dusclops",
    "Dusknoir",
    "Drifloon",
    "Drifblim",
    "Spiritomb",
    "Rotom",
  ],
  Forest: [
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pikachu",
    "Raichu",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Bellossom",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Exeggcute",
    "Exeggutor",
    "Tangela",
    "Scyther",
    "Scizor",
    "Pinsir",
    "Hoothoot",
    "Noctowl",
    "Ledyba",
    "Ledian",
    "Spinarak",
    "Ariados",
    "Hoppip",
    "Skiploom",
    "Jumpluff",
    "Sunkern",
    "Sunflora",
    "Pineco",
    "Forretress",
    "Heracross",
    "Wurmple",
    "Silcoon",
    "Beautifly",
    "Cascoon",
    "Dustox",
    "Seedot",
    "Nuzleaf",
    "Shiftry",
    "Shroomish",
    "Breloom",
    "Nincada",
    "Ninjask",
    "Shedinja",
    "Roselia",
    "Roserade",
    "Turtwig",
    "Grotle",
    "Torterra",
    "Budew",
    "Combee",
    "Vespiquen",
    "Burmy",
    "Wormadam",
    "Mothim",
    "Cherubi",
    "Cherrim",
    "Carnivine",
  ],
  "Bug-Catching": [
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Scyther",
    "Scizor",
    "Pinsir",
    "Ledyba",
    "Ledian",
    "Spinarak",
    "Ariados",
    "Pineco",
    "Forretress",
    "Shuckle",
    "Heracross",
    "Wurmple",
    "Silcoon",
    "Beautifly",
    "Cascoon",
    "Dustox",
    "Surskit",
    "Masquerain",
    "Nincada",
    "Ninjask",
    "Shedinja",
    "Volbeat",
    "Illumise",
    "Kricketot",
    "Kricketune",
    "Burmy",
    "Wormadam",
    "Mothim",
    "Combee",
    "Vespiquen",
    "Skorupi",
    "Drapion",
    "Yanma",
    "Yanmega",
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
let arenaRollTimer;
let arenaRollFinishTimer;
let arenaRevealTimers = [];

const els = {
  generation: document.querySelector("#generationConstraint"),
  typing: document.querySelector("#typingConstraint"),
  generationRerollCount: document.querySelector("#generationRerollCount"),
  typingLabel: document.querySelector("#typingConstraint").closest(".constraint-card").querySelector("span"),
  typingRerollCount: document.querySelector("#typingRerollCount"),
  generationCard: document.querySelector("#generationConstraint").closest(".constraint-card"),
  typingCard: document.querySelector("#typingConstraint").closest(".constraint-card"),
  rollBoard: document.querySelector(".roll-board"),
  setupPanel: document.querySelector("#setupPanel"),
  arena: document.querySelector("#arena"),
  rerollGeneration: document.querySelector("#rerollGeneration"),
  rerollTyping: document.querySelector("#rerollTyping"),
  slotName: document.querySelector("#slotName"),
  filledCount: document.querySelector("#filledCount"),
  candidateGrid: document.querySelector("#candidateGrid"),
  choiceCount: document.querySelector("#choiceCount"),
  arenaDraftTeam: document.querySelector("#arenaDraftTeam"),
  battleReveal: document.querySelector("#battleReveal"),
  teamGrid: document.querySelector("#teamGrid"),
  teamHeaderEyebrow: document.querySelector(".team-header .eyebrow"),
  teamHeaderTitle: document.querySelector(".team-header h2"),
  reset: document.querySelector("#resetGame"),
  verdict: document.querySelector("#verdict"),
  rankModal: document.querySelector("#rankModal"),
  rankTitle: document.querySelector("#rankTitle"),
  rankScore: document.querySelector("#rankScore"),
  rankDescription: document.querySelector("#rankDescription"),
  resultHeading: document.querySelector("#resultHeading"),
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
    typingRerolls: 2,
    candidates: [],
    opponentTeam: [],
    arenaWins: 0,
    arenaBattle: 1,
    arenaRerolls: 2,
    arenaLastResult: null,
    arenaRolling: false,
    arenaRollingFrames: [],
    arenaReveal: null,
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

function isArenaMode() {
  return state.mode === "arena";
}

function displaySlotLabel(index = state.selectedSlot) {
  if (isArenaMode()) return `Pick ${index + 1}`;
  return index === 0 ? slots[index].label : `Slot ${slots[index].label}`;
}

function currentEncounter() {
  if (isArenaMode()) return "Arena Draft";
  if (state.selectedSlot === 0) return captainBiome;
  if (state.selectedSlot === slots.length - 1) return legendaryBiome;
  return state.slotBiomes[state.selectedSlot] || "Tall Grass";
}

function rollableBiomes() {
  if (state.selectedSlot === 0) return [captainBiome];
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
  if (isArenaMode()) return arenaCandidatePool();
  const used = usedNames();
  return poolFor(state.generation, currentEncounter(), used);
}

function arenaCandidatePool() {
  const used = usedNames();
  const pool = monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !used.has(monster.name) &&
      !monster.legendary &&
      generations.includes(monster.generation),
  );
  if (pool.length) return pool;
  return monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !monster.legendary &&
      generations.includes(monster.generation),
  );
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
  const count = isArenaMode() ? Math.max(1, slots.length - state.selectedSlot) : 3;
  const rolled = shuffle(candidates).slice(0, count);
  state.slotRolls[state.selectedSlot] = rolled.length ? rolled : null;
  state.candidates = rolled;
}

function rollArenaChoices() {
  const count = Math.max(1, slots.length - state.selectedSlot);
  const used = usedNames();
  const primary = arenaCandidatePool();
  const usedPrimary = new Set(primary.map((monster) => monster.name));
  const fallback = monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !monster.legendary &&
      generations.includes(monster.generation) &&
      !used.has(monster.name) &&
      !usedPrimary.has(monster.name),
  );
  const rolled = shuffle([...primary, ...fallback]).slice(0, count);
  state.slotRolls[state.selectedSlot] = rolled.length ? rolled : null;
  state.candidates = rolled;
}

function arenaRollingPool() {
  const used = usedNames();
  const primary = arenaCandidatePool();
  const usedPrimary = new Set(primary.map((monster) => monster.name));
  const fallback = monsters.filter(
    (monster) =>
      !excludedPokemon.has(monster.name) &&
      !monster.legendary &&
      generations.includes(monster.generation) &&
      !used.has(monster.name) &&
      !usedPrimary.has(monster.name),
  );
  return [...primary, ...fallback];
}

function updateArenaRollingFrames(pool = arenaRollingPool()) {
  const count = Math.max(1, slots.length - state.selectedSlot);
  const source = pool.length ? pool : monsters.filter((monster) => !excludedPokemon.has(monster.name));
  state.arenaRollingFrames = Array.from({ length: count }, () => shuffle(source).slice(0, 3)).filter(
    (frame) => frame.length,
  );
}

function startArenaChoiceRoll({ spendReroll = false } = {}) {
  if (!isArenaMode() || state.arenaRolling || state.picks[state.selectedSlot]) return;
  if (spendReroll) {
    if (state.arenaRerolls === 0) return;
    state.arenaRerolls -= 1;
  }
  window.clearInterval(arenaRollTimer);
  window.clearTimeout(arenaRollFinishTimer);
  state.slotRolls[state.selectedSlot] = null;
  state.candidates = [];
  state.arenaRolling = true;
  const pool = arenaRollingPool();
  updateArenaRollingFrames(pool);
  render();
  arenaRollTimer = window.setInterval(() => {
    updateArenaRollingFrames(pool);
    renderArenaDraftTeam();
  }, 95);
  arenaRollFinishTimer = window.setTimeout(() => {
    window.clearInterval(arenaRollTimer);
    rollArenaChoices();
    state.arenaRolling = false;
    state.arenaRollingFrames = [];
    render();
  }, 1800);
}

function selectedRolls() {
  return state.slotRolls[state.selectedSlot] || [];
}

function render() {
  els.arena.dataset.mode = state.mode;
  els.rollBoard.classList.toggle("hidden", isArenaMode());
  els.arenaDraftTeam.classList.toggle("hidden", !isArenaMode());
  els.teamHeaderEyebrow.textContent = isArenaMode() ? `Arena ${state.arenaBattle}/${arenaTargetWins}` : "Squad";
  els.teamHeaderTitle.textContent = isArenaMode() ? "Rival Team" : "Team";
  els.generation.textContent = `Gen ${state.generation}`;
  state.typing = currentEncounter();
  els.typingLabel.textContent = state.selectedSlot === 0 ? "Role" : "Biome";
  els.typing.textContent = currentEncounter();
  els.generationRerollCount.textContent = `${state.generationRerolls} respin${state.generationRerolls === 1 ? "" : "s"}`;
  els.typingRerollCount.textContent =
    state.selectedSlot === 0
      ? "captain roll"
      : state.selectedSlot === slots.length - 1
      ? "legendary roll"
      : `${state.typingRerolls} reroll${state.typingRerolls === 1 ? "" : "s"}`;
  els.rerollGeneration.disabled = state.generationRerolls === 0 || Boolean(state.picks[state.selectedSlot]);
  els.rerollTyping.disabled =
    state.selectedSlot === 0 ||
    state.selectedSlot === slots.length - 1 ||
    state.typingRerolls === 0 ||
    Boolean(state.picks[state.selectedSlot]);
  els.rerollTyping.hidden = false;
  els.slotName.textContent = displaySlotLabel();
  els.filledCount.textContent = state.picks.filter(Boolean).length;
  els.candidateGrid.classList.toggle("expert-list", state.mode === "expert");
  els.candidateGrid.classList.add("three-roll");
  els.candidateGrid.classList.toggle("hidden", isArenaMode());
  renderSettings();
  renderCandidates();
  renderTeam();
  renderArenaDraftTeam();
  renderArenaReveal();
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

  if (isArenaMode() && !state.arenaRolling && state.candidates.length === 0) {
    rollArenaChoices();
  }

  if (state.candidates.length === 0) {
    els.choiceCount.textContent = "No options";
    const noOptionsCopy = isArenaMode()
      ? "The arena pool ran dry. Start a new run."
      : `This roll has no unused ${currentEncounter()} Pokemon from Gen ${state.generation}. Use your generation reroll or start a new run.`;
    els.candidateGrid.innerHTML = `<div class="monster-card" style="grid-column: 1 / -1;"><h3>No picks available</h3><p class="verdict">${noOptionsCopy}</p></div>`;
    return;
  }

  if (isArenaMode()) {
    els.choiceCount.textContent = state.arenaRolling
      ? `Arena pick ${state.selectedSlot + 1}: rolling...`
      : `Arena pick ${state.selectedSlot + 1}: choose 1 of ${state.candidates.length}`;
    els.candidateGrid.innerHTML = "";
    return;
  }

  els.choiceCount.textContent = `Choose 1 of ${state.candidates.length} or Mystery Box`;
  els.candidateGrid.innerHTML = `${state.candidates.map(cardTemplate).join("")}${mysteryBoxTemplate()}`;
  els.candidateGrid.querySelectorAll("button").forEach((button) => {
    if (button.dataset.action === "mystery") {
      button.addEventListener("click", draftMystery);
      return;
    }
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

function mysteryBoxTemplate() {
  return `
    <button class="monster-card mystery-card" data-action="mystery">
      <div class="mystery-copy">
        <span class="mystery-icon">?</span>
        <div>
          <h3>Mystery Box</h3>
          <p>Roll blind and lock it in</p>
        </div>
      </div>
      <span class="rating">Gamble</span>
    </button>
  `;
}

function spriteImg(monster) {
  return `<img class="pokemon-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monster.id}.png" alt="" loading="lazy" />`;
}

function renderTeam() {
  if (isArenaMode()) {
    els.teamGrid.innerHTML = "";
    return;
  }
  els.teamGrid.innerHTML = slots
    .map((slot, index) => {
      const pick = state.picks[index];
      const selected = index === state.selectedSlot ? " selected" : "";
      const score = `<span class="slot-score">${pick ? "✓" : "+"}</span>`;
      const roll = state.slotRolls[index];
      const meta = pick
        ? `<strong>${pick.name}</strong><span>${pick.encounter || state.slotBiomes[index]}</span>`
        : roll
          ? `<strong>${displaySlotLabel(index)}</strong><span>${roll.length} options rolled</span>`
          : `<strong>${displaySlotLabel(index)}</strong><span>${isArenaMode() ? "Draft pending" : "Click to roll this slot"}</span>`;
      const sprite = pick ? spriteImg(pick) : roll ? spriteImg(roll[0]) : `<span></span>`;
      return `<button class="team-card${selected}" data-slot="${index}">${sprite}<span class="slot-meta">${meta}</span>${score}</button>`;
    })
    .join("");

  els.teamGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectSlot(Number(button.dataset.slot)));
  });
}

function renderArenaDraftTeam() {
  if (!isArenaMode()) {
    els.arenaDraftTeam.innerHTML = "";
    return;
  }
  ensureFullArenaOpponentTeam();
  els.arenaDraftTeam.innerHTML = `
    <div class="arena-board-header">
      <div class="arena-record">
        <strong>${state.arenaWins}-0</strong>
        <span>${arenaTargetWins} wins needed</span>
      </div>
      <button class="arena-reroll-button" type="button" ${state.arenaRerolls === 0 || state.arenaRolling || Boolean(state.picks[state.selectedSlot]) ? "disabled" : ""}>
        Reroll ${state.arenaRerolls}
      </button>
    </div>
    <div class="arena-matchup-board">
      <p class="arena-row-label">Rival Team</p>
      <div class="arena-matchup-row">
        ${slots
          .map((slot, index) => {
            const rival = state.opponentTeam[index];
            const activeMatch = state.arenaReveal?.phase === "scan" && state.arenaReveal.step === index;
            return `
              <div class="arena-matchup-slot rival-slot${activeMatch ? " matchup-active" : ""}">
                ${spriteImg(rival)}
                <small>${rival.name}</small>
              </div>
            `;
          })
          .join("")}
      </div>
      <p class="arena-row-label">Your Team</p>
      <div class="arena-matchup-row">
        ${slots
          .map((slot, index) => {
            const pick = state.picks[index];
            const activeMatch = state.arenaReveal?.phase === "scan" && state.arenaReveal.step === index;
            const rollingFrame =
              state.arenaRolling && !pick && index >= state.selectedSlot
                ? state.arenaRollingFrames[index - state.selectedSlot]
                : null;
            const rollingPick = rollingFrame?.[1] || rollingFrame?.[0] || null;
            const candidate = !pick && index >= state.selectedSlot ? state.candidates[index - state.selectedSlot] : null;
            if (pick) {
              return `
                <div class="arena-matchup-slot your-slot filled${activeMatch ? " matchup-active" : ""}">
                  ${spriteImg(pick)}
                  <small>${pick.name}</small>
                </div>
              `;
            }
            if (rollingPick) {
              return `
                <div class="arena-matchup-slot your-slot rolling-slot${index === state.selectedSlot ? " current" : ""}">
                  <div class="slot-reel" aria-hidden="true">
                    ${rollingFrame.map((monster) => spriteImg(monster)).join("")}
                  </div>
                  <small>${rollingPick.name}</small>
                </div>
              `;
            }
            if (candidate) {
              return `
                <button class="arena-matchup-slot your-slot choice-slot${index === state.selectedSlot ? " current" : ""}" type="button" data-name="${candidate.name}">
                  ${spriteImg(candidate)}
                  <small>${candidate.name}</small>
                </button>
              `;
            }
            return `
              <div class="arena-matchup-slot your-slot">
                <span>${index + 1}</span>
                <small>Open</small>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
  const rerollButton = els.arenaDraftTeam.querySelector(".arena-reroll-button");
  if (rerollButton) {
    rerollButton.addEventListener("click", rerollArenaChoices);
  }
  els.arenaDraftTeam.querySelectorAll(".choice-slot").forEach((button) => {
    button.addEventListener("click", () => draft(button.dataset.name));
  });
}

function renderArenaReveal() {
  if (!isArenaMode() || !state.arenaReveal) {
    els.battleReveal.classList.add("hidden");
    els.battleReveal.innerHTML = "";
    return;
  }
  const reveal = state.arenaReveal;
  const battle = reveal.battle || state.arenaLastResult || arenaBattleResult();
  const resultRecord = battle.won && reveal.phase === "result" ? state.arenaWins : state.arenaWins + 1;
  const isFinalWin = battle.won && resultRecord >= arenaTargetWins;
  const phaseCopy = {
    vs: {
      eyebrow: "Elite Four Battle",
      title: "You vs Rival",
      subcopy: "Teams are locked. The arena is watching.",
      className: "vs",
    },
    scan: {
      eyebrow: `Matchup ${Math.min(slots.length, reveal.step + 1)} / ${slots.length}`,
      title: "Checking the battle line",
      subcopy: "Every slot matters.",
      className: "scan",
    },
    result: battle.won
      ? {
          eyebrow: isFinalWin ? "Arena Cleared" : "Battle Result",
          title: isFinalWin ? "Champion Run!" : "Victory!",
          subcopy: isFinalWin ? `${resultRecord}-0. You cleared the arena.` : `${resultRecord}-0. Next rival incoming.`,
          className: "win",
        }
      : {
          eyebrow: "Battle Result",
          title: "Defeat",
          subcopy:
            battle.winRate >= 45
              ? `So close. Your run ended at ${state.arenaWins}-1.`
              : `The rival had the answer. Your run ended at ${state.arenaWins}-1.`,
          className: "loss",
        },
  }[reveal.phase];

  els.battleReveal.className = `battle-reveal ${phaseCopy.className}`;
  els.battleReveal.innerHTML = `
    <div class="battle-reveal-card">
      <p>${phaseCopy.eyebrow}</p>
      <strong>${phaseCopy.title}</strong>
      <span>${phaseCopy.subcopy}</span>
      <em>${reveal.phase === "result" ? `${battle.winRate}% win check` : "Calculating..."}</em>
    </div>
  `;
}

function rerollArenaChoices() {
  startArenaChoiceRoll({ spendReroll: true });
}

function renderArenaOpponent() {
  els.teamGrid.innerHTML = state.opponentTeam
    .map(
      (pick, index) => `
        <div class="team-card rival-card">
          ${spriteImg(pick)}
          <span class="slot-meta">
            <strong>${pick.name}</strong>
            <span>Rival ${index + 1}</span>
          </span>
          <span class="slot-score">VS</span>
        </div>
      `,
    )
    .join("");
}

function selectSlot(index) {
  if (isArenaMode() && index > state.selectedSlot && !state.picks[index]) return;
  state.selectedSlot = index;
  const needsRoll = !state.picks[index] && !state.slotRolls[index];
  if (isArenaMode() && needsRoll) {
    rollArenaChoices();
    render();
    return;
  }
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
  lockPick(pick);
}

function draftMystery() {
  const pick = sample(candidatePool());
  if (!pick) return;
  lockPick(pick);
}

function lockPick(pick) {
  state.picks[state.selectedSlot] = { ...pick, encounter: currentEncounter() };
  const nextOpen = state.picks.findIndex((slotPick) => !slotPick);
  if (nextOpen !== -1) {
    state.selectedSlot = nextOpen;
    if (isArenaMode()) {
      startArenaChoiceRoll();
      return;
    }
    renderTeam();
    updateScore();
    spinRoll("both");
    return;
  }
  if (isArenaMode()) {
    render();
    window.setTimeout(resolveArenaBattle, 650);
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
  const rawScore = Math.min(100, Math.round(power * 0.66 + diversity * 0.18 + balance * 0.16));
  const score = isArenaMode() ? rawScore : Math.min(100, Math.round(rawScore + (100 - rawScore) * 0.2));

  return { score, power, diversity, balance, typeCount };
}

function currentScore() {
  return compositionScore().score;
}

function updateScore() {
  const picks = state.picks.filter(Boolean);
  if (isArenaMode()) {
    if (state.arenaReveal) {
      if (state.arenaReveal.phase === "vs") {
        els.verdict.textContent = "Teams are locked. Battle is about to start.";
      } else if (state.arenaReveal.phase === "scan") {
        els.verdict.textContent = `Checking matchup ${state.arenaReveal.step + 1}/6...`;
      } else {
        els.verdict.textContent = state.arenaReveal.battle.won
          ? `Victory! Record: ${state.arenaWins}-0.`
          : `Defeat. Your run ended at ${state.arenaWins}-1.`;
      }
      return;
    }
    if (picks.length < slots.length) {
      const nextChoices = Math.max(1, slots.length - picks.length);
      els.verdict.textContent = `Arena record: ${state.arenaWins}-0. Draft ${picks.length}/6. Next pick has ${nextChoices} choice${nextChoices === 1 ? "" : "s"}.`;
    } else {
      els.verdict.textContent = state.arenaLastResult?.won
        ? `Win ${state.arenaWins}! Rerolling for the next arena fight...`
        : "Battle locked. Resolving the arena match...";
    }
    return;
  }
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

function arenaBattleResult() {
  const teamScore = compositionScore().score;
  const opponentScore = opponentTeamScore();
  const winRate = Math.max(8, Math.min(98, Math.round(58 + (teamScore - opponentScore) * 0.72)));
  const won = winRate >= 50;
  return { won, winRate, teamScore, opponentScore };
}

function arenaResult() {
  const battle = state.arenaLastResult || arenaBattleResult();
  return {
    wins: state.arenaWins,
    losses: state.arenaWins >= arenaTargetWins ? 0 : 1,
    winRate: battle.winRate,
    teamScore: battle.teamScore,
    opponentScore: battle.opponentScore,
  };
}

function opponentTeamScore() {
  if (!state.opponentTeam.length) return 72;
  const bst = state.opponentTeam.reduce((total, pick) => total + pick.bst, 0);
  const typeCount = new Set(state.opponentTeam.flatMap((pick) => pick.types)).size;
  return Math.min(96, Math.round((bst / (arenaOpponentSize * 585)) * 74 + Math.min(22, typeCount * 3)));
}

function buildArenaOpponentTeam() {
  const used = new Set(state.picks.filter(Boolean).map((pick) => pick.name));
  const floor = Math.min(540, 450 + state.arenaWins * 8);
  const eligible = monsters
    .filter(
      (monster) =>
        !excludedPokemon.has(monster.name) &&
        !used.has(monster.name) &&
        !monster.legendary &&
        generations.includes(monster.generation),
    )
    .sort((a, b) => b.bst - a.bst);
  const premium = eligible.filter((monster) => monster.bst >= floor);
  const selected = shuffle(premium.slice(0, 140)).slice(0, arenaOpponentSize);
  if (selected.length >= arenaOpponentSize) return selected;

  const selectedNames = new Set(selected.map((monster) => monster.name));
  const fallback = shuffle(eligible.filter((monster) => !selectedNames.has(monster.name)));
  return [...selected, ...fallback].slice(0, arenaOpponentSize);
}

function ensureFullArenaOpponentTeam() {
  if (state.opponentTeam.length >= arenaOpponentSize) return;
  const used = new Set([
    ...state.opponentTeam.map((pick) => pick.name),
    ...state.picks.filter(Boolean).map((pick) => pick.name),
  ]);
  const fill = monsters
    .filter(
      (monster) =>
        !excludedPokemon.has(monster.name) &&
        !used.has(monster.name) &&
        !monster.legendary &&
        generations.includes(monster.generation),
    )
    .sort((a, b) => b.bst - a.bst);
  state.opponentTeam = [...state.opponentTeam, ...shuffle(fill)].slice(0, arenaOpponentSize);
}

function resetArenaDraft() {
  clearArenaRevealTimers();
  state.selectedSlot = 0;
  state.picks = Array(slots.length).fill(null);
  state.slotRolls = Array(slots.length).fill(null);
  state.slotBiomes = Array(slots.length).fill(null);
  state.candidates = [];
  state.arenaRerolls = 2;
  state.arenaLastResult = null;
  state.arenaRolling = false;
  state.arenaRollingFrames = [];
  state.arenaReveal = null;
}

function advanceArenaBattle() {
  resetArenaDraft();
  state.arenaBattle = state.arenaWins + 1;
  state.opponentTeam = buildArenaOpponentTeam();
  startArenaChoiceRoll();
}

function resolveArenaBattle() {
  const battle = arenaBattleResult();
  state.arenaLastResult = battle;
  startArenaBattleReveal(battle);
}

function queueArenaReveal(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  arenaRevealTimers.push(timer);
}

function clearArenaRevealTimers() {
  arenaRevealTimers.forEach((timer) => window.clearTimeout(timer));
  arenaRevealTimers = [];
}

function startArenaBattleReveal(battle) {
  clearArenaRevealTimers();
  state.arenaReveal = { phase: "vs", step: -1, battle };
  render();

  slots.forEach((slot, index) => {
    queueArenaReveal(() => {
      state.arenaReveal = { phase: "scan", step: index, battle };
      render();
    }, 900 + index * 360);
  });

  queueArenaReveal(() => {
    if (battle.won) {
      state.arenaWins += 1;
    }
    state.arenaReveal = { phase: "result", step: slots.length - 1, battle };
    render();
  }, 900 + slots.length * 360 + 280);

  queueArenaReveal(() => finishArenaBattleReveal(battle), 900 + slots.length * 360 + 1750);
}

function finishArenaBattleReveal(battle) {
  clearArenaRevealTimers();
  state.arenaReveal = null;
  if (battle.won) {
    if (state.arenaWins >= arenaTargetWins) {
      showRankModal();
      return;
    }
    render();
    window.setTimeout(advanceArenaBattle, 1100);
    return;
  }
  showRankModal();
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
  if (isArenaMode()) {
    const result = arenaResult();
    const team = state.picks
      .filter(Boolean)
      .map((pick, index) => `${index + 1}. ${pick.name}`)
      .join("\n");
    return `Elite Four Challenge - Arena Mode\nRecord: ${result.wins}-${result.losses}\nLast battle win rate: ${result.winRate}%\n\n${team}`;
  }
  const team = state.picks
    .filter(Boolean)
    .map((pick, index) => `${index + 1}. ${pick.encounter || slots[index].label}: ${pick.name}`)
    .join("\n");
  return `Elite Four Challenge\nGRADE - ${rank.grade}\n${rank.title.toUpperCase()}\nProjected win rate: ${score}%\n\n${team}`;
}

function showRankModal() {
  if (isArenaMode()) {
    showArenaRankModal();
    return;
  }
  els.resultHeading.textContent = "Elite Four Team";
  els.resultTeam.classList.remove("arena-result-team");
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
  els.rankDescription.textContent = `Your team finished with ${rank.title}.`;
  els.resultTeam.innerHTML = state.picks
    .map(
      (pick, index) => `
        <div class="result-pick" title="${index + 1}. ${pick.name}">
          ${spriteImg(pick)}
        </div>
      `,
    )
    .join("");
  els.rankModal.classList.add("open");
  els.rankModal.setAttribute("aria-hidden", "false");
}

function showArenaRankModal() {
  const result = arenaResult();
  const arenaTitle =
    result.wins >= arenaTargetWins
      ? "Arena Champion"
      : result.wins >= 5
        ? "Arena Finalist"
        : result.wins >= 3
          ? "Arena Contender"
      : "Arena Challenger";
  els.resultHeading.textContent = "Arena Matchup";
  els.resultTeam.classList.add("arena-result-team");
  els.rankTitle.innerHTML = `
    <span>Arena Mode</span>
    <strong>${result.wins}-${result.losses}</strong>
    <em>${arenaTitle}</em>
    <small>${result.winRate}% last battle win rate</small>
  `;
  els.rankScore.textContent = "";
  els.rankDescription.textContent =
    result.wins >= arenaTargetWins
      ? `You cleared the arena. ${arenaTargetWins} straight wins.`
      : `Your run ended at ${result.wins} win${result.wins === 1 ? "" : "s"}.`;
  els.resultTeam.innerHTML = `
    <div class="arena-results-grid">
      <div>
        <h3>Your Team</h3>
        <div class="arena-team-row">
          ${state.picks
            .map(
              (pick) => `
                <div class="result-pick" title="${pick.name}">
                  ${spriteImg(pick)}
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <div>
        <h3>Rival Team</h3>
        <div class="arena-team-row rival-team-row">
          ${state.opponentTeam
            .map(
              (pick) => `
                <div class="result-pick" title="${pick.name}">
                  ${spriteImg(pick)}
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
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
  els.rerollTyping.disabled =
    active ||
    state.selectedSlot === 0 ||
    state.selectedSlot === slots.length - 1 ||
    state.typingRerolls === 0 ||
    Boolean(state.picks[state.selectedSlot]);
  els.candidateGrid.style.opacity = active ? "0.42" : "1";
  els.candidateGrid.style.pointerEvents = active ? "none" : "auto";
}

function rerollGenerationValue() {
  const options = generations.filter(
    (generation) => generation !== state.generation && poolFor(generation, currentEncounter(), usedNames()).length >= 3,
  );
  const fallback = generations.filter(
    (generation) => generation !== state.generation && poolFor(generation, currentEncounter(), usedNames()).length > 0,
  );
  const next = sample(options.length ? options : fallback);
  if (next) state.generation = next;
}

function rerollTypingValue() {
  const current = currentEncounter();
  const used = usedNames();
  const options = rollableBiomes().filter(
    (biome) => biome !== current && poolFor(state.generation, biome, used).length >= 3,
  );
  const fallback = rollableBiomes().filter((biome) => biome !== current);
  const next = sample(options.length ? options : fallback);
  if (!next) return;
  state.typing = next;
  state.slotBiomes[state.selectedSlot] = next;
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
    spinRoll("generation");
  }
  if (
    kind === "typing" &&
    state.typingRerolls > 0 &&
    state.selectedSlot !== 0 &&
    state.selectedSlot !== slots.length - 1 &&
    !state.picks[state.selectedSlot]
  ) {
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
  window.clearInterval(arenaRollTimer);
  window.clearTimeout(arenaRollFinishTimer);
  clearArenaRevealTimers();
  state = newState();
  state.mode = "normal";
  els.setupPanel.classList.remove("hidden");
  els.arena.classList.add("hidden");
  els.verdict.classList.add("hidden");
  renderSettings();
}

function startRun() {
  hideRankModal();
  window.clearInterval(spinTimer);
  window.clearInterval(arenaRollTimer);
  window.clearTimeout(arenaRollFinishTimer);
  clearArenaRevealTimers();
  state = newState();
  state.started = true;
  els.setupPanel.classList.add("hidden");
  els.arena.classList.remove("hidden");
  els.verdict.classList.remove("hidden");
  if (isArenaMode()) {
    state.opponentTeam = buildArenaOpponentTeam();
    startArenaChoiceRoll();
    return;
  }
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
