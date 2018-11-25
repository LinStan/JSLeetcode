/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var arr = [];
    var l = pushed.length;
    for(var i=0,j=0;i<l;i++)
        {
            arr.push(pushed[i]);
        //    console.log(arr,'push',pushed[i]);
            var la = arr.length;
            while(arr[la-1]==popped[j])
                {
                    if(j==l){break;}
                    arr.pop(popped[j]);
               //     console.log(arr,'pop',popped[j]);
                    la--;
                    j++;
                }
        }
    la = arr.length;
   // console.log(arr,pushed,popped)
    for(;j<l;j++)
        {
            if(arr[la-1]==popped[j])
                {
                    arr.pop(popped[j]);
                    la--;
                }
            else{return false}
        }
    //console.log(arr,pushed,popped)
    if(arr.length==0){return true}
    else
        {return false}
};
