/**
 * @param {number[]} deck
 * @return {boolean}
 */
 function contains(arr, obj) {
    var i = arr.length;
    for(var j = 0;j<i;j++)
    {
      if(arr[j]==obj)
      {return j}
    }
    return false;
}
function gcd(n, m)
{
    if (n<m)
    {
        n=m+n;
        m=n-m;
        n=n-m;
    }
    if (m==0) return n;
    return gcd(m,n%m);
}
function max_common_divisor(several, n)
{
    var a=several[0];
    var b=several[1];
    var c=gcd(a,b);
    var i;
    for (i=2; i<n; i++)
    {
        c=gcd(c,several[i]);
    }
    return c;
}
//console.log(contains([1],1));
var hasGroupsSizeX = function(deck) {
    var l = deck.length;
    if(l<=1){return false}
    var t = [];
    var k = 0;
    var n = [];
    for(var i =0;i<l;i++)
    {
      if(contains(t,deck[i])===false)
      {
        //console.log(contains(t,deck[i]));
        t[k]=deck[i];
        n[k]=1;
        k++;
        //console.log(i,deck[i],t);
      }
      else if(contains(t,deck[i])>=0)
      {
        n[contains(t,deck[i])]+=1;
        //console.log(true,deck[i],contains(t,deck[i]));
      }
      //console.log(t);
    }
    //console.log(t,n);
    var l = n.length;
    var temp = n[0];
    for(i=0;i<l;i++)
    {
      if(n[i]!=temp&&max_common_divisor(n,n.length)==1)
      {return false}
    }
    return true
};
console.log(hasGroupsSizeX([1,1,2,2,2,2,2,1,2,1]));
