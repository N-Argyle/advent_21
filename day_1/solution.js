const baseData = require("./input.json");

// Part 1
const incrementCounter = (data) => {
  const counter = data.map((n, i) => (n > data[i - 1] ? 1 : 0));
  const accumulated = counter.reduce((p, c) => p + c);
  return accumulated;
};

// Part 2
const slidingGroups3 = (data) => {
  const l = data.length;
  return data.map(
    (n, i) => n + (i < l - 1 ? data[i + 1] : 0) + (i < l - 2 ? data[i + 2] : 0)
  );
};

// Solution for part 2
console.log(incrementCounter(slidingGroups3(baseData)));
