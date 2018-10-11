var multiply = function(num1, num2) {
    var nums1 = num1.split('').reverse();
    var nums2 = num2.split('').reverse();
    var l1 = nums1.length;
    var l2 = nums2.length;
    if(num1=="0"||num2=="0"){return "0"}//有0判0
    //console.log(nums1,nums2);
    var results =[];
    for(var i = 0 ;i<l1;i++)
    {
      for(var j = 0;j<l2;j++)
      {
        if(results[i+j]===undefined)
        {
        results[i+j]=nums1[i]*1*nums2[j]*1//*1将其转为数字
        //console.log(results);
        }else
        {results[i+j]+= nums1[i]*1*nums2[j]*1}
        //console.log(results);
        if(results[i+j]>9)
        {
          if(results[i+j+1]===undefined)
          {
            results[i+j+1]=Math.floor(results[i+j]/10);
          }
          else
          {
            results[i+j+1]+=Math.floor(results[i+j]/10);
          }
          results[i+j]=results[i+j]%10;
        }
      }
    }
    //console.log(results);
    return results.reverse().join('');
};
console.log(multiply("123","0"));
