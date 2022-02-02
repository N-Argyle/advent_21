const { data, testData } = require("./input.json");

const part1 = (data) => {
  const xs = Array(data.length).fill(0);
  const ys = Array(data.length).fill(0);

  data.map((d, i) => {
    xs[d[0][0]]++;
    xs[d[1][0]]++;
    ys[d[0][1]]++;
    ys[d[1][1]]++;
  })
  console.log(xs);
  console.log(ys);
  
};
part1(testData);
