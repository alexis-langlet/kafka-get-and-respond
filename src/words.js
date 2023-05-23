const frenchWords = [
  "avec",
  "sans",
  "de",
  "la",
  "le",
  "les",
  "un",
  "une",
  "des",
  "et",
  "ou",
  "mais",
  "donc",
  "or",
  "ni",
  "car",
  "qui",
  ".",
  "!",
  "?",
  "prendre",
  "manger",
  "boire",
  "aller",
  "Alexis",
  "Maxime",
  "Julien",
  "Arsène",
  "Esteban",
  "Alexandre",
  "Yann",
  "Nils",
  "Simon",
];

const getRandomFrenchWord = () => {
  const randomIndex = Math.floor(Math.random() * frenchWords.length);
  return frenchWords[randomIndex];
};

module.exports = { getRandomFrenchWord };
