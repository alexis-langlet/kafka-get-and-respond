const schema = {
  type: "record",
  name: "Message",
  namespace: "do.polytech",
  fields: [
    {name: "message", type: "string"}
  ]
}

module.exports = schema;