/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 // 64ms 战胜 91.70 % 的 javascript 提交记录
var luoxuan = function(matrix,m,n,rnum)
{
    let re = [],renum=0;
    let i=0,j=0;
    i=i+rnum,j+=rnum;
    m=m-rnum,n=n-rnum;
    for(i;i<n;i++)
        {
            re[renum]=matrix[j][i];
            renum++;
        }
    if(i==n){i=i-1;}
  //  console.log(re,i,j)

 if(m-rnum>1)
     {
        for(j=j+1;j<m;j++)
            {
                re[renum]=matrix[j][i];
                renum++;
            }
        if(j==m){j=j-1}
   //     console.log(re,i,j)
        if(n-rnum>1)
        {
            for(i=i-1;i>=rnum;i--)
                {
                    re[renum]=matrix[j][i];
                    renum++;
                }
            if(i<rnum){i=i+1}
       //     console.log(re,i,j)
            if(m-rnum>2)
            {
                for(j=j-1;j>rnum;j--)
                    {
                        re[renum]=matrix[j][i];
                        renum++;
                    }
        //        console.log(re,i,j)
            }
        }
     }
    return re;
}
var spiralOrder = function(matrix) {
    if(matrix==false){return []}
    if(matrix[0]==false){return []}
    var m = matrix.length;//行
    var n = matrix[0].length;//列
    var re = [];
    var rnum=0;
    var i = 0,j=0;
    while((m-1-(rnum*2))>=0&&(n-1-(rnum*2))>=0)
        {
            let temp = luoxuan(matrix,m,n,rnum);
            re.push(...temp);
            rnum++;
        }
    return re
};
