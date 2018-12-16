/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    var re = cells.slice(0);
    var M = (N-1)%14;
    //if(M==0&&N>0){M=1}
   // console.log(re);
    for(var i = 0;i<M+1;i++)
   // for(var i = 0;i<N;i++)
        {
            var temp = re.slice(0);
            //console.log(temp);
            for(var j = 0;j<6;j++)
                {
                    if(temp[j]==temp[j+2])
                        {
                            re[j+1]=1;
                            //console.log(re,temp,temp[j],temp[j+2])
                        }
                    else
                        {
                            re[j+1]=0
                        }
                }
            re[0]=0;re[7]=0;
          //  console.log(re,i)
        }
    return re;
};
