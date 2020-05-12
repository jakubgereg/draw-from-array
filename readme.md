# Draw from Array

Removes one random element from array.

_! Supplied array is mutated_

## Install

```shell
yarn add draw-from-array

or

npm install  draw-from-array
```

## Example

```js
let drawFromArray = require("draw-from-array");

let cards = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let drawn = drawFromArray(cards);

//drawn: ["Ace"]
//cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
```
