/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var re = [];//save result
    var p = 0;
    var array = nums
    for(var i = 0, len1 = array.length; i < len1; i++) {
	var a2 = array.concat();
	/*
	排除之前已经组合过的数据
	比如：第一次的时候，i[0] = 1, 这个时候2层循环, 只循环 2~5,
	第二次的时候, i[1] = 2, 这个时候2层循环, 只循环 3~5
	同理：3层循环也是相比于2层循环来
	*/
	a2.splice(0, i + 1);
	for(var j = 0, len2 = a2.length; j < len2; j++) {
		var a3 = a2.concat();
		a3.splice(0, j + 1);
		for(var k = 0, len3 = a3.length; k < len3; k++) {
            var a4 = a3.concat();
            a4.splice(0,k+1);
            for(var z = 0,len4 = a4.length;z<len4;z++)
                {
			        //console.log(array[i] + ' ' +a2[j] + ' ' + a3[k]+' '+a4[z]);
                    //console.log(array[i]+a2[j] +a3[k]+a4[z]==target)
                    if(array[i]+a2[j] +a3[k]+a4[z]==target)
                        {re[p]=[array[i],a2[j],a3[k],a4[z]].sort();
                        p++}
                }
		}
	}
}
    //console.log(re);
    for(i=0;i<re.length;i++)
        {
            //re[i].sort()
            for(var j=i+1;j<re.length;j++)
                {
                    //re[j].sort()
                    //数组不能直接=== 因此先转为字符串再判=
                    if(re[i].join('')==re[j].join(''))
                        {
                            //console.log(re[i],re[j],re[i].join(''),re[j].join(''),i,j)
                            re.splice(j,1);
                            j--;
                            //console.log(re[i],re[j],re[i].join(''),re[j].join(''),i,j)
                        }
                }
        }
    return re;

};
