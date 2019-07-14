/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let l1 = arr1.length,l2 = arr2.length,temp = [];
    for(let i = 0;i<l2;i++)
        {
            while(arr1.indexOf(arr2[i])!=-1)
                {
                    
            temp.push(arr2[i]);
            arr1.splice(arr1.indexOf(arr2[i]),1)
                }
            // temp.push(arr2[i]);
            // arr1.splice(arr1.indexOf(arr2[i]),1)
            // console.log(arr1,arr2,temp)
        }
    arr1.sort((a,b)=>{return a-b})
    // console.log(arr1,arr2,temp)
    temp=temp.concat(arr1)
    return temp
};