// world

const world = document.querySelector('.world');
const size = 40;
const matrix = [];

// create world matrix
for (let i = 0; i < size; i++) {
  matrix[i] = [];
  for (let j = 0; j < size; j++) {
    matrix[i][j] = document.createElement('div');
    matrix[i][j].setAttribute('data-row', i);
    matrix[i][j].setAttribute('data-column', j);
    matrix[i][j].classList.add('tile');
    world.append(matrix[i][j]);
  }
}

// create sky
for (let i = 0; i < size / 2; i++) {
  for (let j = 0; j < size; j++) {
    matrix[i][j].setAttribute('data-type', 'sky');
  }
}

// create cloud
for (let i = 4, j = 4; j < 11; j++) {
  matrix[i][j].setAttribute('data-type', 'cloud');
}
for (let i = 3, j = 5; j < 10; j++) {
  matrix[i][j].setAttribute('data-type', 'cloud');
}
for (let i = 2, j = 7; j < 9; j++) {
  matrix[i][j].setAttribute('data-type', 'cloud');
}

// create grass
for (let i = size / 2, j = 0; j < size; j++) {
  matrix[i][j].setAttribute('data-type', 'grass');
}

// create ground
for (let i = size / 2 + 1; i < size - 2; i++) {
  for (let j = 0; j < size; j++) {
    matrix[i][j].setAttribute('data-type', 'ground');
  }
}

// create tree
for (let i = 15; i < size / 2; i++) {
  for (let j = 25; j < 26; j++) {
    matrix[i][j].setAttribute('data-type', 'trunk');
  }
}

for (let i = 9; i < 15; i++) {
  for (let j = 22; j < 29; j++) {
    matrix[i][j].setAttribute('data-type', 'leaves');
  }
}

// create rocks
for (let i = size / 2 - 5; i < size / 2; i++) {
  for (let j = 0; j < 5; j++) {
    if (i - (size / 2 - 5) >= j) {
      matrix[i][j].setAttribute('data-type', 'rock');
    }
  }
}

// sidebar

// tools
const tools = document.querySelector('.tools');

const toolsTitle = document.createElement('h1');
toolsTitle.textContent = 'Tools';
tools.append(toolsTitle);

const axe = document.createElement('div');
const axeImg = document.createElement('img');
axeImg.src = './img/axe.png';
axe.append(axeImg);
axe.classList.add('tool');
axe.classList.add('axe');
tools.append(axe);

const pickaxe = document.createElement('div');
const pickaxeImg = document.createElement('img');
pickaxeImg.src = './img/pickaxe.png';
pickaxe.append(pickaxeImg);
pickaxe.classList.add('tool');
pickaxe.classList.add('pickaxe');
tools.append(pickaxe);

const shovel = document.createElement('div');
const shovelImg = document.createElement('img');
shovelImg.src = './img/shovel.png';
shovel.append(shovelImg);
shovel.classList.add('tool');
shovel.classList.add('shovel');
tools.append(shovel);

function select(e) {
  if (document.querySelector('.selected')) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
}
const toolsList = document.querySelectorAll('.tool');
toolsList.forEach((tool) => tool.addEventListener('click', select));

// inventory
const inventory = document.querySelector('.inventory');
const inventoryTitle = document.createElement('h1');
inventoryTitle.textContent = 'Inventory';
inventory.append(inventoryTitle);
const inventoryBox = document.createElement('div');
inventory.append(inventoryBox);
inventoryBox.classList.add('inventoryBox');

inventoryBox.addEventListener('click', select);

// remove tile / add tile to inventory /  add tile from inventory
function tilesControl() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      const selected = document.querySelector('.selected');
      const type = e.target.getAttribute('data-type');
      if (selected) {
        if (
          (type === 'trunk' || type === 'leaves') &&
          selected.classList.contains('axe')
        ) {
          e.target.removeAttribute('data-type');
          inventoryBox.setAttribute('data-type', type);
        }
        if (
          (type === 'grass' || type === 'ground') &&
          selected.classList.contains('shovel')
        ) {
          e.target.removeAttribute('data-type');
          inventoryBox.setAttribute('data-type', type);
        }
        if (selected.classList.contains('pickaxe') && type === 'rock') {
          e.target.removeAttribute('data-type');
          inventoryBox.setAttribute('data-type', type);
        }
        if (
          selected.classList.contains('inventoryBox') &&
          selected.getAttribute('data-type')
        ) {
          const inventoryType = selected.getAttribute('data-type');
          e.target.setAttribute('data-type', inventoryType);
          inventoryBox.removeAttribute('data-type');
        }
      }
    });
  });
}

tilesControl();

// reset button
const initialWorld = world.innerHTML;
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
  world.innerHTML = initialWorld;
  inventoryBox.removeAttribute('data-type');
  tilesControl();
});
