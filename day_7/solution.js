const { data, testData } = require("./input.json");

// Part 1
// const rootData = testData.sort((a, b) => a - b);

const findTotalDistance = (data) => {
  let counter = Array(data[data.length - 1]).fill(0);
  for (let i = 0; i < counter.length; i++) {
    data.map((d) => {
      counter[i] = counter[i] + Math.abs(d - i);
    });
  }
  let val = 0;
  counter.forEach((c, i) => {
    if (c < counter[val]) {
      val = i;
    }
  });
  console.log(val);
  console.log(counter[val]);
};

findTotalDistance(data);

// Part 2
const findTotalDistance = (data) => {
  let counter = Array(data[data.length - 1]).fill(0);
  for (let i = 0; i < counter.length; i++) {
    data.map((d, z) => {
      const a = Math.abs(d - i);
      counter[i] = counter[i] + (a * a + a) / 2;
    });
  }
  console.log(counter);
  let val = 0;
  counter.forEach((c, i) => {
    if (c < counter[val]) {
      val = i;
    }
  });
  console.log(counter[val]);
};

findTotalDistance(data);
