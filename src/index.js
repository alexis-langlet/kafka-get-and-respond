const { Kafka } = require("kafkajs");

const doGroup = "do-group";
const doTopic = "do";

async function run() {
  // Create Kafka client
  const kafka = new Kafka({
    clientId: "",
    // brokers: ["localhost:9092"], // Replace with your Kafka broker addresses
    brokers: ["162.38.112.136:9092" ]
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
      const originalMessage = message.value.toString();
      console.log(`Received message: ${originalMessage} from ${message.headers['username']} ${topic}`);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = getRandomFrenchWord();

      await producer.send({
        topic: doTopic,
        messages: [{ value: response, headers: { username: "alexisl" } }],
      });

      console.log(`Sent message: ${response}`);
    },
  });
}

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
];

function getRandomFrenchWord() {
  const randomIndex = Math.floor(Math.random() * frenchWords.length);
  return frenchWords[randomIndex];
}

run().catch(console.error);
