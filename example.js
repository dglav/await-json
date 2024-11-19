const someData = {
  tea: ["matcha", "chai"],
  coffee: ["black", "latte"],
  sugary: ["soda", "fruit juice"],
  alcohol: ["beer", "wine", "whiskey"],
};
const json = JSON.parse(someData); // これは同期関数であるにもかかわらず...

const response = await fetch("/example");
const data = await response.json(); // なぜこれを await しなければならないのでしょうか？ 🤔🤔🤔🤔🤔
