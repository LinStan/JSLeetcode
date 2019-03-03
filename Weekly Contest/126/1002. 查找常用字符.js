/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let l = A.length;
  let ret = [];
  //排序可有可无
  for (let i = 0; i < l; i++) {
    A[i] = A[i].split('').sort();
  }
  let tempstr = A[0]
  let l1 = tempstr.length;
  let flagnum = 1;
  //  console.log(A,l1)
  for (i = 0; i < l1; i++) {
    let temp = tempstr[i];
    for (let j = 1; j < l; j++) {
      let inx = A[j].indexOf(temp);
      //    console.log(inx,A[j])
      if (inx != -1) {
        A[j].splice(inx, 1);
        //        console.log(A[j])
        flagnum++;
      }
    }
    //  console.log(A,flagnum)
    if (flagnum == l) {
      ret.push(temp);
      //   console.log(ret)
    }
    flagnum = 1;
  }
  // console.log(A,ret)
  return ret
};