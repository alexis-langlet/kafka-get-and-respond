const schema = {
  type: "record",
  name: "Message",
  namespace: "do.polytech",
  fields: [
    {name: "message", type: "string"},
    {name: "country", type: "string"},
    {name: "city", type: "string"},
    {name: "temperature", type: "double"},
    {name: "random", type: "double"},
    {name: "lat", type: "double"},
    {name: "long", type: "double"}
  ]
}

module.exports = schema;