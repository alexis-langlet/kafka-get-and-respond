const { Kafka } = require("kafkajs");
const createMessage = require("./messageCreator");

const doTopic = "do-avro";

async function run() {
  // Create Kafka client
  const kafka = new Kafka({
    clientId: "",
    // brokers: ["localhost:9092"], // Replace with your Kafka broker addresses
    brokers: ["162.38.112.138:9092"],
  });

  // Create Kafka producer
  const producer = kafka.producer();

  // Connect to Kafka
  await Promise.all([producer.connect()]);

  const response = await createMessage();

  await producer.send({
    topic: doTopic,
    messages: [response],
  });

  console.log(`Message sent !`);
}

run().catch(console.error);
