const baseData = require("./input.json");

// Part 1
const powerConsumption = (baseData) => {
  const zeros = Array(baseData[0].length).fill(0);
  const ones = [...zeros];

  baseData.map((str) => {
    const arr = str.split("");
    arr.map((a, i) => (a === "0" ? zeros[i]++ : ones[i]++));
  });

  const gamma = parseInt(
    zeros.map((z, i) => (ones[i] > z ? 1 : 0)).join(""),
    2
  );
  const epsilon = parseInt(
    zeros.map((z, i) => (ones[i] > z ? 0 : 1)).join(""),
    2
  );

  return gamma * epsilon;
};

// Part 2
const countBits = (arr, pos, pri) => {
  const counts = { zero: 0, one: 0 };
  arr.forEach((a) => {
    if (parseInt(a.substring(pos, pos + 1)) === 0) {
      counts.zero++;
    } else {
      counts.one++;
    }
  });
  if (pri === 1) {
    return counts.one >= counts.zero ? 1 : 0;
  }
  return counts.one >= counts.zero ? 0 : 1;
};

const handler = (data, pri) => {
  Array(data[0].length)
    .fill(0)
    .map((c, i) => {
      const bit = countBits(data, i, pri);
      if (data.length > 1){
        data = data.filter(d => d.substring(i, i + 1) == `${bit}`);
      }
      return bit;
    });
  return data;
};


const ogr = handler(baseData, 1);
const co2 = handler(baseData, 2);

const lsr = parseInt(ogr, 2) * parseInt(co2, 2);

console.log(lsr);
