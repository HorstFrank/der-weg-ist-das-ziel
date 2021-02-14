export function createInt32Hash(str: any): String {
  str = typeof str == "number" ? str + "" : str;
  // Source: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  var hash = 0,
    i,
    chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return "hash" + hash;
}
