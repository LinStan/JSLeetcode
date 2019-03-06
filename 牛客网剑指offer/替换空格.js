function replaceSpace(str) {
  // write code here
  let ret = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      ret[i] = '%20';
    }
  }
  return ret.join('')
}