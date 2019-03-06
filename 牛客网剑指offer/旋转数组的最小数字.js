function minNumberInRotateArray(rotateArray) {
  // write code here
  if (rotateArray.length == 0) {
    return 0
  }
  let left = 0
  let right = rotateArray.length - 1
  while (rotateArray[left] >= rotateArray[right]) {
    left++;
  }
  return rotateArray[left]
}