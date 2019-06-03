  /*
   * 编号为(0~n-1)
   */
  var getResult = function (n, m) {
    if (n < 0 || m < 0) {
      return -1;
    }
    let last = 0;
    for (let i = 2; i <= n; ++i) {
      last = (last + m) % i;
    }
    // 因为实际编号为(1~n)
    return (last + 1);
  }
  console.log(getResult(5, 3))