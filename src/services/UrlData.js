const UrlData = [
  {
    code: "17CS74",
    url: [
      "https://youtu.be/YO_A1PhW3f0",
      "https://youtu.be/p2FzAMKWv7k",
      "https://youtu.be/tGYsvTfrFFQ",
    ],
  },
  {
    code: "17CS73",
    url: ["https://youtu.be/wjB8zsSOZfU"],
  },
];
export function getUrlData() {
  return UrlData;
}

export function getUrl(code) {
  return UrlData.find((m) => m.code === code);
}
