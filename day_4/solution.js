const { toDraw, boards } = require("./input.json");

const boardWinCount = Array(boards.length).fill(0);

// This one's a mess
// Part 2
let drawn = toDraw.filter((f, i) => i < 5);
let won = false;

const checkRows = (board, drawn, boardIndex, callback, rotate = false) => {
  board.map((row, rowIndex) => {
    let winCount = 0;
    row.map((n) => {
      if (drawn.includes(n)) {
        winCount++;
        lastDrawn = drawn.indexOf(n);
      }
    });
    if (winCount > 4) {
      boardWinCount[boardIndex] = 1;
      if (!boardWinCount.includes(0) && won == false) {
        won = true;
        const flat = board.flat();
        console.log(
          `Board ` +
            boardIndex +
            " " +
            (rotate ? " column " : "row ") +
            rowIndex +
            " wins"
        );
        let sum = flat.filter((o) => !drawn.includes(o));
        if (sum.length) {
          sum = sum.reduce((p, c) => p + c);
          console.log(sum * drawn[drawn.length - 1]);
        }
      }
    }
  });
};

for (let i = 0; i < toDraw.length && won == false; i = i + 1) {
  drawn = [...toDraw.slice(0, i + 1)];
  boards.map((board, boardIndex) => {
    const rotatedBoard = board[0].map((_, colIndex) =>
      board.map((row) => row[colIndex])
    );
    checkRows(board, drawn, boardIndex, () => {});
    checkRows(rotatedBoard, drawn, boardIndex, () => {}, true);
  });
}
