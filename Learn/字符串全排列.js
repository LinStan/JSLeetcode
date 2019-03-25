function Permutation(str) {
  let temp = str.split('')
  let ret = [];
  full_permutation(temp, 0, temp.length - 1, ret);
  return ret.sort();
}

function swap(str, a, b) {
  let tmp = str[a];
  str[a] = str[b];
  str[b] = tmp;
}

function is_swap(str, begin, k) { //判断从子串的第一个字符串开始，直到k-1位置，看是否有重复的字符
  let i, flag;

  for (i = begin, flag = 1; i < k; i++) {
    if (str[i] == str[k]) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function full_permutation(str, begin, end, ret) {
  if (begin == end) {
    ret.push(str.join(''));
    return;
  } else {
    let i;
    for (i = begin; i <= end; i++) {
      if (is_swap(str, begin, i)) {
        swap(str, begin, i);
        full_permutation(str, begin + 1, end, ret);
        swap(str, begin, i);
      }
    }
  }
};
// console.log(Permutation("aliab"))
console.log(Permutation("abc"))