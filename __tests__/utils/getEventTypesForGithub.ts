// /* eslint-disable */

// import { GithubEvent } from "../../types"
// import EventTypes from "../../eventTypes"

// const axios = require("axios")
// const fs = require("fs")
// const { eventPaths } = require("../../eventPaths.ts")
// const _ = require("lodash")

// var getConfig = () => ({
//   method: "get",
//   url: `https://api.github.com/events`,
//   headers: {
//     Authorization: "Bearer 04a9b0d7c9cacb9ea6399846086f478716557b4d",
//   },
// })

// interface GHRequiredEvents {
//   [key: string]:
//     | number
//     | {
//         [key: string]: number
//       }
// }

// export function getEventRequirementsChecklist(): GHRequiredEvents {
//   let roles = ["subject", "target", "parent", "verb"]
//   const output: GHRequiredEvents = {}
//   const eventTypes = Object.getOwnPropertyNames(eventPaths)
//   eventTypes.forEach(eventType => {
//     roles.forEach(role => {
//       let entityRolePaths = eventPaths[eventType][role]
//       if (entityRolePaths && typeof entityRolePaths != "string") {
//         if (Array.isArray(entityRolePaths)) {
//           // console.log("eventType ", eventType, " role ", role, " is Array")
//           let iterationProps = Object.getOwnPropertyNames(entityRolePaths[1])
//           // if iterator
//           if (typeof entityRolePaths[1][iterationProps[1]] === "object") {
//             // if multiple action types
//             // console.log(
//             //   "eventType ",
//             //   eventType,
//             //   " role ",
//             //   role,
//             //   " has multiple action types"
//             // )
//             output[eventType] = {}
//             iterationProps.forEach(actionType => {
//               if (output[eventType] && typeof output[eventType] === "object") {
//                 output[eventType][actionType] = 3
//               } else {
//                 output[eventType] = {
//                   [actionType]: 3,
//                 }
//               }
//             })
//           } else {
//             if (
//               output[eventType] &&
//               typeof output[eventType] !== "object" &&
//               output[eventType] < 3
//             ) {
//               // console.log(
//               //   "eventType ",
//               //   eventType,
//               //   " role ",
//               //   role,
//               //   " has iterator with one action type and currently set to ",
//               //   output[eventType],
//               //   " marking for 3"
//               // )
//               output[eventType] = 3
//             }
//           }
//         } else if (typeof entityRolePaths.id === "undefined") {
//           // console.log(
//           //   "eventType ",
//           //   eventType,
//           //   " role ",
//           //   role,
//           //   " has multiple action types"
//           // )
//           let actionTypes = Object.getOwnPropertyNames(entityRolePaths)
//           // console.log(
//           //   "eventType ",
//           //   eventType,
//           //   " role ",
//           //   role,
//           //   " has multiple action types",
//           //   actionTypes,
//           //   "marking one for each"
//           // )
//           output[eventType] = {}
//           actionTypes.forEach(actionType => {
//             if (
//               output[eventType] &&
//               typeof output[eventType] === "object" &&
//               !output[eventType][actionType]
//             ) {
//               output[eventType][actionType] = 1
//             } else {
//               output[eventType] = {
//                 [actionType]: 1,
//               }
//             }
//           })
//         } else {
//           if (!output[eventType]) {
//             // console.log(
//             //   "eventType ",
//             //   eventType,
//             //   " role ",
//             //   role,
//             //   " has one condition, marking 1"
//             // )
//             output[eventType] = 1
//           } else {
//             // console.log(
//             //   "eventType ",
//             //   eventType,
//             //   " already defined, skipping single condition role ",
//             //   role
//             // )
//           }
//         }
//       }
//     })
//   })

//   return output
// }

// // export function isNeeded(
// //   event: GithubEvent,
// //   checklist: GHRequiredEvents
// // ): boolean {
// //   const { type, payload } = event

// //   if (payload.action) {
// //     return checklist[type][payload.action] > 0
// //   } else {
// //     return checklist[type] > 0
// //   }
// // }

// export function updateCheckList(
//   event: GithubEvent,
//   checklist: GHRequiredEvents
// ): GHRequiredEvents {
//   const {
//     type,
//     payload: { action },
//   }: { type: string; payload: { action: string } } = event

//   if (action) {
//     checklist[type][action] && checklist[type][action]--
//   } else {
//     if (checklist[type] && typeof checklist[type] === "number") {
//       checklist[type] = (checklist[type] as number) - 1
//     }
//   }

//   return checklist
// }

// // export function checkExistingEvents(checklist: GHRequiredEvents): GHRequiredEvents {

// // }

// export default async function getTestEventsForGithub(
//   eventTypes: string[],
//   foundTypes: string[] = [],
//   nextPage: number = 1
// ) {
//   function allFound(): boolean {
//     return eventTypes.reduce((acc, type) => {
//       if (foundTypes.indexOf(type) === -1) {
//         return false
//       } else {
//         return acc
//       }
//     }, !!true)
//   }

//   if (allFound()) {
//     // console.log("all types found")
//     return
//   } else {
//     axios(getConfig())
//       .then(function(response) {
//         response.data.forEach(async event => {
//           if (foundTypes.indexOf(event.type) === -1) {
//             // console.log("found ", event.type, ", writing")
//             foundTypes.push(event.type)
//             fs.writeFileSync(
//               `${__dirname}/ghevents/${event.type}.json`,
//               JSON.stringify(event)
//             )
//             // console.log(`wrote ${event.type}`)
//           }
//           await new Promise(r => setTimeout(r, 10000))
//           return getTestEventsForGithub(eventTypes, foundTypes, nextPage++)
//         })
//       })
//       .catch(function(error) {
//         console.log(error)
//       })
//   }
// }

// // retrievedTypes.

// // timTestEvents.forEach(event => {
// //   if (foundTypes.indexOf(event.type) === -1) {
// //     foundTypes.push(event.type)
// //     fs.writeFileSync(
// //       __dirname + "/ghevents/" + event.type + ".json",
// //       JSON.stringify(event)
// //     )
// //   }
// // })
