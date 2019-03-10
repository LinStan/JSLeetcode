function printMatrix(matrix) {
  // write code here
  let ret = [];
  while (matrix[0]) {
    while (matrix[0][0]) {
      ret.push(matrix[0][0]);
      matrix[0].splice(0, 1)
    }
    matrix.splice(0, 1)
    //  console.log(matrix)
    matrix = turn(matrix)
  }
  return ret
}

function turn(arr) {
  if (arr[0] == null) {
    return []
  }
  let ret = []
  for (let j = 0; j < arr[0].length; j++) {
    ret[j] = []
  }
  let l1 = arr.length;
  let l2 = arr[0].length;
  for (let i = 0; i < arr.length; i++) //控制有几个元素
  {
    //d是保证逆时针旋转的关键。不然只是顺时针旋转
    let d = arr[i].length - 1;
    for (let j = 0; j < arr[i].length; j++, d--) //遍历每一个具体的值
    {
      ret[d][i] = arr[i][j];
    }
  }
  return ret
}
console.log(printMatrix([
  [1, 2],
  [3, 4]
]))