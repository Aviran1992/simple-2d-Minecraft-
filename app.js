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

// // create rocks
for (let i = size / 2 - 5; i < size / 2; i++) {
  for (let j = 0; j < 5; j++) {
    if (i - (size / 2 - 5) >= j) {
      matrix[i][j].setAttribute('data-type', 'rock');
    }
  }
}
