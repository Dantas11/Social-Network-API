const emails = [
  "thiago@outlook.com",
  "fernanda@verizon.net",
  "goku@optonline.net",
  "ash@outlook.com",
  "buma@optonline.net",
];

const usernames = ["Thiago", "Fernanda", "Goku", "Ash", "Buma"];
const thoughts = [
  "I should study more.",
  "I have to start going to the gym.",
  "I need a better job.",
  "I really love him.",
  "I wanna travel more.",
];

const reactions = ["Wow!", "Great!", "Perfect!", "LOL", "Bad!"];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

const getRandomReaction = () => `${getRandomArrItem(reactions)}`;

module.exports = {
  getRandomEmail,
  getRandomUserName,
  getRandomThought,
  getRandomReaction,
  getRandomIndex,
};
