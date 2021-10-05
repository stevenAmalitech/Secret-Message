let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage[7] = "right";

secretMessage.shift();

secretMessage.unshift("Programming");

const replaceStrings = ["get", "right", "the", "first", "time,"];

secretMessage = secretMessage.map((string) => {
  if (replaceStrings.includes(string)) return "know";
  return string;
});

console.log(secretMessage.join(" "));
