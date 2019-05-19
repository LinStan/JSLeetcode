/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let i = 0,
    j = 1,
    l = S.length;
  S = S.split('');
  for (; j < l;) {
    if (S[i] == S[j]) {
      S.splice(i, 2);
      i--, j--;
    } else {
      i++, j++;
    }
    l = S.length;
  }
  return S.join('')
};