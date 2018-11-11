/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a "#" character. The characters should form a chessboard.
*/

//version #1
const getChessBoard1 = () => {
  let string = '';
  for (let i = 0; i < 64; i++) {
    if (i % 9 === 0) {
      string += '\n';
    } else {
      if (i % 2 === 0) {
        string += '#'
      } else if (i % 2 !== 0) {
        string += ' ';
      }
    }
  }
  console.log(`Chess board: ${string}`);
}
//
//version #2
const getChessBoard2 = () => {
  let string = 1;
  while (string <= 8) {
    let s1 = '';
    if (string % 2 !== 0) {
      for (let i = 1; i <= 8; i++) {
        if (i % 2 !== 0) {
          s1 += ' ';
        } else {
          s1 += '#';
        }
      }
      console.log(`${s1}`);
      string++;
    } else if (string % 2 === 0) {
      let s2 = '';
      for (let i = 1; i <= 8; i++) {
        if (i % 2 === 0) {
          s2 += ' ';
        } else {
          s2 += '#';
        }
      }
      console.log(`${s2}`);
      string++;
    }
  }
}


//make grid with custom input
const makeGrid = (hor, ver) => {
  let string = '';
  let k = ver * (hor + 1);
  for (let i = 0; i < k; i++) {
    if (i % (hor + 1) === 0) {
      string += '\n';
    } else {
      if (i % 2 === 0) {
        string += '#'
      } else if (i % 2 !== 0) {
        string += ' ';
      }
    }
  }
  console.log(`${string}`);
}
