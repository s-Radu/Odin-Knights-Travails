# Knight's Shortest Path

This project contains a JavaScript implementation of a solution to find the shortest path for a knight on a chessboard. The chessboard is represented as a graph, and the solution uses a breadth-first search algorithm to find the shortest path.

## File Structure

The main logic is contained in the `index.js` file.

### [index.js](index.js)

This file contains two main components:

1. `Graph` class: This class represents the chessboard. It includes methods for validating moves and finding the shortest path from one point to another.

2. `knightMoves` function: This function uses an instance of the `Graph` class to find and print the shortest path for a knight from a start position to an end position on the chessboard.

## Usage

To find the shortest path for a knight from position `[0, 7]` to position `[7, 7]`, you would use the `knightMoves` function like this:

```javascript
knightMoves([0, 7], [7, 7]);
```
