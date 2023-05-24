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

for (let i = 0; i < 10000; i++) {

  const response = await createMessage();
  const wrappedResponse = messageWrapper(response);

  await producer.send({
    topic: doTopic,
    messages: [wrappedResponse],
  });

}

  console.log(`Message sent !`);
}

run().catch(console.error);
