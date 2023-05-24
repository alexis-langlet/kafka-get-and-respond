const getRandomLatitude = () => {
  return Math.random() * 180 - 90;
};

const getRandomLongitude = () => {
  return Math.random() * 360 - 180;
};

const getRandomCountry = () => {
  return countries[Math.floor(Math.random() * countries.length)];
};

const getRandomCity = (country) => {
  return cities[country][Math.floor(Math.random() * cities[country].length)];
};

const countries = [
  "France",
  "Allemagne",
  "Espagne",
  "Italie",
  "Portugal",
  "Royaume-Uni",
];

const cities = {
  France: ["Paris", "Marseille", "Lyon", "Toulouse"],
  Allemagne: ["Berlin", "Hambourg", "Munich", "Cologne"],
  Espagne: ["Madrid", "Barcelone", "Valence", "Séville"],
  Italie: ["Rome", "Milan", "Naples", "Turin"],
  Portugal: ["Lisbonne", "Porto", "Coimbra", "Braga"],
  "Royaume-Uni": ["Londres", "Birmingham", "Glasgow", "Liverpool"],
};

module.exports = {
    getRandomLatitude,
    getRandomLongitude,
    getRandomCountry,
    getRandomCity
}