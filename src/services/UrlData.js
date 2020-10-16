const UrlData = [
  {
    code: "17CS74",
    url: [
      
      "YO_A1PhW3f0",
      "p2FzAMKWv7k",
      "tGYsvTfrFFQ",
      "ycyMbc4LEOM",
      "9PTqQnSecfI",
      "0tf07U5tnVQ",
      "DPRtCh0NL9U",
    ],
  },
  {
    code: "17CS73",
    url: ["wjB8zsSOZfU"],
  },
];
export function getUrlData() {
  return UrlData;
}

export function getUrl(code) {
  return UrlData.find((m) => m.code === code);
}
