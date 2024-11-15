const someData = {
  tea: ["matcha", "chai"],
  coffee: ["black", "latte"],
  sugary: ["soda", "fruit juice"],
  alcohol: ["beer", "wine", "whiskey"],
};
const json = JSON.parse(someData); // Why is it that while this is a synchronous function...

const response = await fetch("/example");
const data = await response.json(); // that we have to await this??? 🤔🤔🤔🤔🤔
