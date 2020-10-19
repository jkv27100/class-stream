let UrlData = "";
export function setUrlData(data) {
  UrlData = Object.values(data);
}
export function getUrlData() {
  return UrlData;
}

export function getUrlByCode(code) {
  console.log(UrlData);
  return UrlData.find((m) => m.code === code);
}

export function setUrlByCode(code, link) {
  const data = getUrlByCode(code);
  data.url.push(link);
}
