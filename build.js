var traverse = require('traverse');
var obj = require("./list.json");
var leaves = traverse(obj).reduce(function (acc, x) {
    if (this.isLeaf) acc.push(x);
    return acc;
}, []);

console.dir(leaves);

const { version } = require("./package.json");
const solidity = require("./list.json");
module.exports = function buildList() {
    const parsed = version.split(".");
    return {
      name: "solidity",
      timestamp: new Date().toISOString(),
      version: {
        major: +parsed[0],
        minor: +parsed[1],
        patch: +parsed[2],
      },
      tags: {"releases": "commit"},
      urls:
        "",
      version: [
          ...leaves
      ]
    };
  };