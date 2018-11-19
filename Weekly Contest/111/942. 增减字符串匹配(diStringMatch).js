/**
 * @param {string} S
 * @return {number[]}
 */
 //超时了
var diStringMatch = function(S) {
    var l = S.length;
    var re = [0];
    var temp = re.indexOf(0);
    for(var i=0;i<l;i++)
        {
            temp = re.indexOf(i);//I时直接在数组最前插入元素。D时，在上一个元素的后面插入元素。
           // console.log(temp,re)
            if(S[i]=='D')//-
                {
                    re.splice(temp, 0, i+1);//temp记录上一个元素的数组下标。splice在当前位置插入一个元素
                    //re.unshift(i+1);
                   // temp = re.indexOf(i+1);
                }
            if(S[i]=='I')//+
                {
                    //re.splice(temp+1, 0, i+1);
                    re.push(i+1);
                    //temp = re.indexOf(i+1);
                }

                   // temp = re.indexOf(i+1);
            //console.log(temp,i+1)
        }
    return re
};
