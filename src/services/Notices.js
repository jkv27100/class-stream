// export const Notices = [
//   {
//     type: "annou",
//     items: {
//       items: ["ayaya announcements"],
//     },
//   },
//   {
//     type: "submissions",
//     items: {
//       items: ["submissions", "submission 2"],
//     },
//   },
//   {
//     type: "events",
//     items: {
//       items: ["upcoming event", "upcoming event 2"],
//     },
//   },
// ];
// let anns = [];
// for (let obj in Notices) {
//   if (obj.type === "events") {
//     anns.push(obj.items.items);
//   }
// }
// export { anns };
import axios from "axios";

const annou = [];
const submissions = [];
const events = [];
let NoticeData = [];
console.log("This is supposed to work?"); //lol

const getNot = async () => {
  await axios
    .get("https://api.npoint.io/1a7b3689f29bf155cbe4")
    .then((response) => ({ data: NoticeData } = response));
  NoticeData.forEach((x) => {
    if (x.type === "annou") {
      annou.push(x.items);
    }
    if (x.type === "submissions") {
      submissions.push(x.items);
    }
    if (x.type === "events") {
      events.push(x.items);
    }
  });
};
getNot();

export { annou, submissions, events };
