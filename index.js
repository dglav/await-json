const fetchJsonButton = document.getElementById("fetchJson");
const streamJsonButton = document.getElementById("streamJson");
const outputBox = document.getElementById("streamedJson");
const footer = document.getElementsByTagName("footer")[0];

fetchJsonButton.addEventListener("click", async () => {
  const response = await fetch("/json");
  console.log("Got the response headers, now waiting for the body", response);

  const data = await response.json();
  console.log("Successfully downloaded all the data: ", data);
});

streamJsonButton.addEventListener("click", async () => {
  const response = await fetch("/json");
  const decoder = new TextDecoder("utf-8");

  outputBox.textContent = "";
  for await (const value of response.body) {
    const chunk = decoder.decode(value);
    outputBox.textContent += chunk;
    footer.scrollIntoView();
  }
});
