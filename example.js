const someData = {
  tea: ["matcha", "chai"],
  coffee: ["black", "latte"],
  sugary: ["soda", "fruit juice"],
  alcohol: ["beer", "wine", "whiskey"],
};
const json = JSON.parse(someData); // Why is it that while this is a synchronous function...

const response = await fetch("/example");
const data = await response.json(); // that we have to await this??? 🤔🤔🤔🤔🤔

// A: Because body data can be very large and we don't want to take up the entire thread as it is being downloaded.
// A: Maybe the response will never be done because I'm getting data over a continuous stream (i.e. live stream)

// How a server responds to an HTTP request
//
// - First send headers
//   - Status Code
//   - Headers
// - Stream body
