import { TownManager } from "./TownManager.js";

const manager = new TownManager();
manager.makeTowns();
manager.nameTowns();
manager.towns.forEach(renderTown);

function renderTown(town) {
  const contentsEl = document.querySelector(".contents");
  const townEl = createTownElem(town);
  contentsEl.appendChild(townEl);
}

function createTownElem(town) {
  const townEl = document.createElement("div");
  townEl.style.width = `${town.width}px`;
  townEl.style.height = `${town.height}px`;
  townEl.style.position = "absolute";
  townEl.style.top = `${town.location.y}px`;
  townEl.style.left = `${town.location.x}px`;
  townEl.style.border = "1px solid";
  townEl.appendChild(createTownNameElem(town));
  townEl.appendChild(createMailboxElem(town));
  return townEl;
}

function createMailboxElem(town) {
  const mailboxEl = document.createElement("span");
  mailboxEl.innerText = town.mailBox ? "📮" : "";
  return mailboxEl;
}

function createTownNameElem(town) {
  const nameEl = document.createElement("span");
  nameEl.style.position = "relative";
  nameEl.style.left = `${town.width / 2 - 5}px`;
  nameEl.style.bottom = `25px`;
  nameEl.innerText = town.name;
  return nameEl;
}
