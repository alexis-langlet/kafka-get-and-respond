const { encode, getSchemaId } = require("./avroEncoder");

const messageWrapper = async (message) => {
  try {
    // Fetch schema version from registry
    const version = await getSchemaId();

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

module.exports = { messageWrapper };
