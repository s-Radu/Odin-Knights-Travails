class Graph {
	constructor(size) {
		this.size = size;
		this.board = Array.from({length: size}, () => Array(size).fill(0));
		this.moves = [
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1],
		];
	}

	isValidMove(x, y) {
		return (
			x >= 0 &&
			x < this.size &&
			y >= 0 &&
			y < this.size &&
			this.board[x][y] === 0
		);
	}

	findShortestPath(startX, startY, endX, endY) {
		const queue = [{x: startX, y: startY, path: []}];
		this.board[startX][startY] = 1;

		while (queue.length > 0) {
			const {x, y, path} = queue.shift();

			if (x === endX && y === endY) {
				return path.concat([[x, y]]);
			}

			for (let i = 0; i < this.moves.length; i++) {
				const newX = x + this.moves[i][0];
				const newY = y + this.moves[i][1];

				if (this.isValidMove(newX, newY)) {
					this.board[newX][newY] = 1;
					queue.push({x: newX, y: newY, path: path.concat([[x, y]])});
				}
			}
		}

		return null;
	}
}

function knightMoves(start, end) {
	const size = 8;
	const graph = new Graph(size);
	const path = graph.findShortestPath(start[0], start[1], end[0], end[1]);

	if (path) {
		console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
		path.forEach(([x, y]) => console.log(`[${x}, ${y}]`));
	} else {
		console.log('No path found.');
	}
}

knightMoves([0, 7], [7, 7]);
