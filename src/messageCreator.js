const { getRandomFrenchWord } = require("./words");
const { encode, getSchemaId } = require("./avroEncoder");

const subject = "do.polytech.Message";

const createMessage = async (message) => {
  const response = getRandomFrenchWord();
  console.log(`Message created: ${response}`);

  return await messageWrapper(response);
};

const messageWrapper = async (message) => {
  try {
    // Fetch schema version from registry
    const version = await getSchemaId();

    console.log(`Schema version for ${subject}: ${version}`);

    return {
      value: encode(message),
      headers: {
        username: "alexisl",
        schema_id: version.toString(),
      },
    };

    // Do something with the version
  } catch (error) {
    console.error(error);
  }
};

module.exports = createMessage;
