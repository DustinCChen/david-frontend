function printTips() {
  tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
}

let name = "chen";
const a = (param = 1) => 1 + param;
const b = [1, 2, 3];
const c = [...b, 4, 5];

class Babel {}
const babel = new Babel();

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => x % 2 === 0);
const y = Object.assign({}, { name: "chen" });
