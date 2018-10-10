/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 //实现组合操作。从n个数中选取m个数的所有组合

var threeSumClosest = function(nums, target) {
  var n = nums.length;
  //var m =3;
  var array =nums
  var result=[];
  var min = 99999999;
  for(var i = 0, len1 = array.length; i < len1; i++) {
  	var a2 = array.concat();
   //console.log(a2);
  	/*
  	排除之前已经组合过的数据
  	比如：第一次的时候，i[0] = 1, 这个时候2层循环, 只循环 2~5,
  	第二次的时候, i[1] = 2, 这个时候2层循环, 只循环 3~5
  	同理：3层循环也是相比于2层循环来
  	*/
  	a2.splice(0, i + 1);
   //console.log(a2);
  	for(var j = 0, len2 = a2.length; j < len2; j++) {
  		var a3 = a2.concat();
  		a3.splice(0, j + 1);
  		for(var k = 0, len3 = a3.length; k < len3; k++) {
  			//console.log(array[i] + ' ' +a2[j] + ' ' + a3[k]);
       result = [array[i],a2[j],a3[k]];
       var temp = array[i]+a2[j]+a3[k];
       //console.log(temp);
       if(temp-target===0){return temp;}
       if(Math.abs(temp-target)<min){min = Math.abs(temp-target);var re = temp;}
       console.log(result,re,min);
  		}
  	}
  }
  return re;
};
console.log(threeSumClosest([-1,2,1,-4],1));
