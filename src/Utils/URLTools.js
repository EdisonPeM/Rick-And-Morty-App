export function getEndNumber(URL) {
  const num = parseInt(URL.match(/\d+$/));

  if (isNaN(num)) return 0; // -1

  return num;
}

export function getParam(url, param) {
  if (!url) return null;

  const url_parsed = new URL(url);
  const params = new URLSearchParams(url_parsed.search);
  return params.get(param);
}
