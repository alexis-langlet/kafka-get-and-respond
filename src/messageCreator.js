const { getRandomFrenchWord } = require("./words");
const {getRandomLatitude, getRandomLongitude, getRandomCountry, getRandomCity} = require("./random");

const subject = "do.polytech.Message";

const createMessage = async (message) => {

  const word = getRandomFrenchWord();
  const country = getRandomCountry();
  const city = getRandomCity(country);
  const lat = getRandomLatitude();
  const long = getRandomLongitude();

  const response = {
    message: word,
    country,
    city,
    temperature: Math.random()*4+18,
    random: Math.random()*31+12,
    lat,
    long
  };

  return response;
};

module.exports = createMessage;
