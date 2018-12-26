/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 //508 ms, 在ZigZag Conversion的JavaScript提交中击败了7.97% 的用户
  var convert = function(s, numRows) {
    if(numRows==1){return s}
    var str = new Array();
    for(var i =0;i<numRows;i++)
        {
            str[i]=new Array();
            for(var j = 0;j<(s.length);j++)
                {str[i][j]=" "}
        }
    var h = 0;//hang
    for(var i = 0;i<s.length;)
        {
            if(h%(numRows-1)==0)
                {
                    for(var j = 0;j<numRows;j++)
                    {
                        str[j][h]=s[i];
                        i++;
                    }
                    h++;
                }
            else
                {
                    var temp = h%(numRows-1);
                    str[numRows-temp-1][h]=s[i];
                    h++;
                    i++;
                }
        }
   // console.log(str)
    var re = new Array();
    for(i=0;i<numRows;i++)
        {
            for(var j=0;j<str[0].length;j++)
                {
                   // console.log(str[i][j],i,j,re)
                    if(str[i][j]!=" ")
                        {
                            re.push(str[i][j]);
                        }
                }
        }
  //  console.log(re)
    return re.join('');
};
