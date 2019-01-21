/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    if(A.length==1){return 1}
    let l = A.length;
    let re = 1;
    let flag=0;
    for(let i = 0;i<l;i++)
        {
    var temp=1;
            if(A[i]<A[i+1])
                {flag=-1}
            else if(A[i]>A[i+1])
                {flag=1}
            for(var j =1;j<(l-i);j++)
                {
                    if(flag==-1)
                        {
                            if(j%2==1)
                                {
                                    if(A[i+j-1]<A[i+j])
                                        {temp++}
                                    else
                                        {
                                            re = Math.max(temp,re);
                                            flag=0;
                                            temp=1;
                                        }
                                }
                            else
                                {
                                    if(A[i+j-1]>A[i+j])
                                        {temp++}
                                    else
                                        {
                                            re = Math.max(temp,re);
                                            flag=0;
                                            temp=1;
                                        }
                                }
                        }
                        else if(flag==1)
                        {
                            if(j%2==1)
                                {
                                    if(A[i+j-1]>A[i+j])
                                        {temp++}
                                    else
                                        {
                                            re = Math.max(temp,re);
                                            flag=0;
                                            temp=1;
                                        }
                                }
                            else
                                {
                                    if(A[i+j-1]<A[i+j])
                                        {temp++}
                                    else
                                        {
                                            re = Math.max(temp,re);
                                            flag=0;
                                            temp=1;
                                        }
                                }
                        }
                   // console.log(re,temp,flag,i,j,A[i+j-1],A[i+j])
                }
            re = Math.max(temp,re);
          //  console.log(re,temp,i,A[i],A[i+1])
        }
    return re;
};
