function FindGreatestSumOfSubArray (array) {
  // write code here
  let l = array.length;
  let tempsum = array[0];
  let ret = array[0];
  for (let i = 0; i < l; i++) {
    tempsum = array[i];
    for (j = i + 1; j < l; j++) {
      ret = Math.max(tempsum, ret);
      tempsum += array[j]
    }
    ret = Math.max(tempsum, ret);
  }
  return ret;
}