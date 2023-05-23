const schema = require("./schemas/v1");
const subject = "do.polytech.Message";
const avro = require("avsc");
const { SchemaRegistry } = require("@kafkajs/confluent-schema-registry");

const schemaRegistryUrl = "http://162.38.112.138:8081"; // Replace with your schema registry URL

const type = avro.Type.forSchema(schema);

const encode = (message) => {
  return type.toBuffer({ message });
};

const decode = (message) => {
  return type.fromBuffer(message)?.message?.toString();
};

async function getSchemaId() {
  const registry = new SchemaRegistry({ host: schemaRegistryUrl });
  const { id } = await registry.register(schema);
  return id;
}

module.exports = { encode, decode, getSchemaId };
