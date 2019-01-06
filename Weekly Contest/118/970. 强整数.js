/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var renum=0;
    var re = [];
    if(bound==0){return re}
    if(x==1&&y==1)
        {
            if(bound>=2)
                {return [2]}
            else
                {return re}
        }
    if(x==1)
        {
            for(var i = 0;1+Math.pow(y,i)<=bound;i++)
                {
                        if(re.indexOf(Math.pow(y,i)+1)==-1)
                        {
                            re[renum]=Math.pow(y,i)+1;
                            //console.log(Math.pow(x,i),x,i,Math.pow(y,j),y,j,re)
                            renum++;
                        }
                }
            return re;
        }
    else if(y==1)
        {
            {
            for(var i = 0;1+Math.pow(x,i)<=bound;i++)
                {
                        if(re.indexOf(Math.pow(x,i)+1)==-1)
                        {
                            re[renum]=Math.pow(x,i)+1;
                            //console.log(Math.pow(x,i),x,i,Math.pow(y,j),y,j,re)
                            renum++;
                        }
                }
            return re;
        }
        }
    var i=0,j=0;
    for(i = 0;Math.pow(x,i)+Math.pow(y,j)<=bound;i++)
        {
            for(j=0;Math.pow(x,i)+Math.pow(y,j)<=bound;j++)
                {
                    if(re.indexOf(Math.pow(x,i)+Math.pow(y,j))==-1)
                        {
                            re[renum]=Math.pow(x,i)+Math.pow(y,j);
                            //console.log(Math.pow(x,i),x,i,Math.pow(y,j),y,j,re)
                            renum++;
                        }
                }
            j=0;
        }
    return re;
};
