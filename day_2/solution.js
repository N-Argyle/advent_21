const baseData = require("./input.json");

// Purely function solutions.
// Part 1
const getCoords = (data) => {
  const loop = (horizontal = 0, vertical = 0, i = 0, data = []) => {
    const dir = data[i].replace(/ .*/, "");
    const unit = Number(data[i].replace(`${dir} `, ""));
    const isLast = i === data.length - 1;
    switch (dir) {
      case "up":
        if (isLast) return { horizontal, vertical: vertical - unit };
        return loop(horizontal, vertical - unit, i + 1, data);
      case "down":
        if (isLast) return { horizontal, vertical: vertical + unit };
        return loop(horizontal, vertical + unit, i + 1, data);
      case "forward":
        if (isLast) return { horizontal: horizontal + unit, vertical };
        return loop(horizontal + unit, vertical, i + 1, data);
    }
  };
  return loop(0, 0, 0, data);
};

// Part 2
const getCoordsWithAim = (data) => {
  const loop = (horizontal = 0, vertical = 0, aim, i = 0, data = []) => {
    const dir = data[i].replace(/ .*/, "");
    const unit = Number(data[i].replace(`${dir} `, ""));
    const isLast = i === data.length - 1;
    switch (dir) {
      case "up":
        if (isLast)
          return { horizontal, vertical, aim: aim - unit };
        return loop(horizontal, vertical, aim - unit, i + 1, data);
      case "down":
        if (isLast)
          return { horizontal, vertical, aim: aim + unit };
        return loop(horizontal, vertical, aim + unit, i + 1, data);
      case "forward":
        if (isLast)
          return {
            horizontal: horizontal + unit,
            vertical: vertical + aim * unit,
            aim,
          };
        return loop(horizontal + unit, vertical + aim * unit, aim, i + 1, data);
    }
  };
  return loop(0, 0, 0, 0, data);
};

const out = getCoordsWithAim(baseData);
console.log(out);
console.log(out.horizontal * out.vertical)
