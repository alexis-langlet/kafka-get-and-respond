const { Kafka } = require("kafkajs");
const createMessage = require("./messageCreator");
const { decode } = require("./avroEncoder");
const { messageWrapper } = require("./messageWrapper");
const {logBlue, logGreen, logRed} = require("./logger");

const doGroup = "do-group";
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

  // Create Kafka consumer
  const consumer = kafka.consumer({ groupId: doGroup });

  // Connect to Kafka
  await Promise.all([producer.connect(), consumer.connect()]);

  // Subscribe to the Kafka topic
  await consumer.subscribe({ topic: doTopic, fromBeginning: false });

  // Start consuming messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("--------------------");
      const originalMessage = decode(message);
      logBlue(
        `Received message: ${originalMessage} from ${message.headers["username"]} ${topic}`
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await createMessage();
      const wrappedResponse = await messageWrapper(response);

      await producer.send({
        topic: doTopic,
        messages: [wrappedResponse],
      });

      const stringResponse = JSON.stringify(response);

      logGreen(`Message sent: ${stringResponse} !`);
    },
  });
}

run().catch(console.error);
