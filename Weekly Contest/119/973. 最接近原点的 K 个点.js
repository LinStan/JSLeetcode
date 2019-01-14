/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    var pnum = points.length;
    var re = [];
    var dist=[];
    var renum=0;
//    console.log(pnum);
    for(var i = 0;i<pnum;i++)
        {
            var temp = points[i][0]*points[i][0]+points[i][1]*points[i][1];
    //        console.log(temp);
            if(re.length<K)
                {
                    re[renum]=points[i];
                    dist[renum]=temp;
             //       console.log(re);
                    renum++;
                }
            else
                {
                    let maxtemp =Math.max.apply(null,dist);
                  //  console.log(re,dist)
                    if(temp<maxtemp)
                        {
                            let maxindex = dist.indexOf(maxtemp);
                       //     console.log(maxindex,re)
                            dist[maxindex]=temp;
                            re[maxindex]=points[i];
                       //     console.log(maxindex,re)
                        }
                }
        }
    return re;
};
