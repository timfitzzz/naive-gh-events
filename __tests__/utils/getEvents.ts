const fs = require("fs")
const path = require("path")

export const eventTypes = fs
  .readdirSync(path.resolve(__dirname + "/../ghevents/"))
  .map(fileName => {
    return fileName.split(".")[0]
  })

export const events = eventTypes.map(type =>
  JSON.parse(
    fs.readFileSync(path.resolve(__dirname + "/../ghevents/" + type + ".json"))
  )
)
