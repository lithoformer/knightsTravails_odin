import { LinkedList } from "../src/LinkedList.js";

class Knight {
    constructor(boardLength) {
        this.boardLength = boardLength;
        this.moves = new LinkedList();
        this.board = this.createBoard();
    }

    createBoard() {
        let board = new Array(this.boardLength);
        for (let i = 0; i < this.boardLength; i++) {
            board[i] = new Array(this.boardLength).fill(false);
        }
        return board;
    }

    knightMoves(start, end, board) {

        this.moves.append([start]);

        const queue = [];

        let newBoard = null;

        if (board !== null) {
            newBoard = JSON.parse(JSON.stringify(board));
        }
        else {
            newBoard = this.createBoard();
        }

        newBoard[start[0]][start[1]] = true;

        queue.push(start);

        while (queue.length) {
            const current = queue.shift();
            console.log(current);
            if (current === end) {
                return current;
            }

            for (const x of this.getAdj(start)) {
                if (!newBoard[x[0]][x[1]]) {
                    newBoard[x[0]][x[1]] = true;
                    queue.push(x);
                    this.knightMoves(x, end, newBoard);
                }
            }
        }

    }

    getAdj(coord) {
        const adj = [];

        if (coord[0] + 1 < 8 && coord[1] + 2 < 8) {
            adj.push([coord[0] + 1, coord[1] + 2]);
        }
        if (coord[0] + 2 < 8 && coord[1] + 1 < 8) {
            adj.push([coord[0] + 2, coord[1] + 1]);
        }
        if (coord[0] - 2 >= 0 && coord[1] + 1 < 8) {
            adj.push([coord[0] - 2, coord[1] + 1]);
        }
        if (coord[0] - 1 >= 0 && coord[1] + 2 < 8) {
            adj.push([coord[0] - 1, coord[1] + 2]);
        }
        if (coord[0] - 2 >= 0 && coord[1] - 1 >= 0) {
            adj.push([coord[0] - 2, coord[1] - 1]);
        }
        if (coord[0] - 1 >= 0 && coord[1] - 2 >= 0) {
            adj.push([coord[0] - 1, coord[1] - 2]);
        }
        if (coord[0] + 2 < 8 && coord[1] - 1 >= 0) {
            adj.push([coord[0] + 2, coord[1] - 1]);
        }
        if (coord[0] + 1 < 8 && coord[1] - 2 >= 0) {
            adj.push([coord[0] + 1, coord[1] - 2]);
        }

        return adj;
    }
}

// buildTree(prev, data, end, board) {

//     let newBoard = null;

//     if (board !== null) {
//         newBoard = board;
//     }
//     else {
//         newBoard = this.createBoard();
//     }

//     newBoard[data[0]][data[1]] = 1;

//     const curr = new knightNode(data);

//     if (curr.data === end) {
//         return curr;
//     }

//     if (prev !== null && curr.data[0] + 1 < 8 && curr.data[1] + 2 < 8 && curr.data[0] + 1 !== prev.data[0] && curr.data[1] + 2 !== prev.data[1] && newBoard[curr.data[0] + 1][curr.data[1] + 2] !== 1) {
//         curr.upRight1 = this.buildTree(curr, [curr.data[0] + 1, curr.data[1] + 2], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] + 1 < 8 && curr.data[1] + 2 < 8) {
//         curr.upRight1 = this.buildTree(curr, [curr.data[0] + 1, curr.data[1] + 2], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] + 2 < 8 && curr.data[1] + 1 < 8 && curr.data[0] + 2 !== prev.data[0] && curr.data[1] + 1 !== prev.data[1] && newBoard[curr.data[0] + 2][curr.data[1] + 1] !== 1) {
//         curr.upRight2 = this.buildTree(curr, [curr.data[0] + 2, curr.data[1] + 1], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] + 2 < 8 && curr.data[1] + 1 < 8) {
//         curr.upRight2 = this.buildTree(curr, [curr.data[0] + 2, curr.data[1] + 1], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] - 2 >= 0 && curr.data[1] + 1 < 8 && curr.data[0] - 2 !== prev.data[0] && curr.data[1] + 1 !== prev.data[1] && newBoard[curr.data[0] - 2][curr.data[1] + 1] !== 1) {
//         curr.upLeft1 = this.buildTree(curr, [curr.data[0] - 2, curr.data[1] + 1], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] - 2 >= 0 && curr.data[1] + 1 < 8) {
//         curr.upLeft1 = this.buildTree(curr, [curr.data[0] - 2, curr.data[1] + 1], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] - 1 >= 0 && curr.data[1] + 2 < 8 && curr.data[0] - 1 !== prev.data[0] && curr.data[1] + 2 !== prev.data[1] && newBoard[curr.data[0] - 1][curr.data[1] + 2] !== 1) {
//         curr.upLeft2 = this.buildTree(curr, [curr.data[0] - 1, curr.data[1] + 2], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] - 1 >= 0 && curr.data[1] + 2 < 8) {
//         curr.upLeft2 = this.buildTree(curr, [curr.data[0] - 1, curr.data[1] + 2], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] - 2 >= 0 && curr.data[1] - 1 >= 0 && curr.data[0] - 2 !== prev.data[0] && curr.data[1] - 1 !== prev.data[1] && newBoard[curr.data[0] - 2][curr.data[1] - 1] !== 1) {
//         curr.downLeft1 = this.buildTree(curr, [curr.data[0] - 2, curr.data[1] - 1], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] - 2 >= 0 && curr.data[1] - 1 >= 0) {
//         curr.downLeft1 = this.buildTree(curr, [curr.data[0] - 2, curr.data[1] - 1], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] - 1 >= 0 && curr.data[1] - 2 >= 0 && curr.data[0] - 1 !== prev.data[0] && curr.data[1] - 2 !== prev.data[1] && newBoard[curr.data[0] - 1][curr.data[1] - 2] !== 1) {
//         curr.downLeft2 = this.buildTree(curr, [curr.data[0] - 1, curr.data[1] - 2], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] - 1 >= 0 && curr.data[1] - 2 >= 0) {
//         curr.downLeft2 = this.buildTree(curr, [curr.data[0] - 1, curr.data[1] - 2], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] + 2 < 8 && curr.data[1] - 1 >= 0 && curr.data[0] + 2 !== prev.data[0] && curr.data[1] - 1 !== prev.data[1] && newBoard[curr.data[0] + 2][curr.data[1] - 1] !== 1) {
//         curr.downRight1 = this.buildTree(curr, [curr.data[0] + 2, curr.data[1] - 1], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] + 2 < 8 && curr.data[1] - 1 >= 0) {
//         curr.downRight1 = this.buildTree(curr, [curr.data[0] + 2, curr.data[1] - 1], end, newBoard);
//     }
//     if (prev !== null && curr.data[0] + 1 < 8 && curr.data[1] - 2 >= 0 && curr.data[0] + 1 !== prev.data[0] && curr.data[1] - 2 !== prev.data[1] && newBoard[curr.data[0] + 1][curr.data[1] - 2] !== 1) {
//         curr.downRight2 = this.buildTree(curr, [curr.data[0] + 1, curr.data[1] - 2], end, newBoard);
//     }
//     else if (prev === null && curr.data[0] + 1 < 8 && curr.data[1] - 2 >= 0) {
//         curr.downRight2 = this.buildTree(curr, [curr.data[0] + 1, curr.data[1] - 2], end, newBoard);
//     }

//     curr.prev = prev;

//     return curr;
// }

export { Knight }  