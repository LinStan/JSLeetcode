/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 //已经战胜 11.84 % 的 javascript 提交记录
var addBinary = function(a, b) {
   // a = a.split('');
  //  b = b.split('');
 //   console.log(a,b)
    var re =[];
    var flag = 0;
    var al =a.length-1,bl = b.length-1;
 //   var ll = Math.max(a.length,b.length);
 //   console.log(ll)
    for(let i = 0;i<Math.max(a.length,b.length);i++)
        {
      //      console.log(a[al-i],b[bl-i],flag,a[al-i]*1+b[bl-i]*1+flag)
            let temp=0;
            if(al-i<0)
                {
                    temp = b[bl-i]*1+flag;
                }
            else if(bl-i<0)
                {
                    temp = a[al-i]*1+flag;
                }
            else
                {
                    temp = a[al-i]*1+b[bl-i]*1+flag;
                }
            if(temp>=2)
                {
                    re[i] = temp-2;
                    flag=1;
                }
                else
                {
                    re[i] = temp;
                    flag=0;
                }
    //        console.log(re)
        }
    if(flag==1)
        {
            return 1+re.reverse().join("")
        }
    else
        {
                return re.reverse().join("")
        }
};
