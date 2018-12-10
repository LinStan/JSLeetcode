/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    var lw = words.length;

    for(var i = 0;i<lw-1;i++)
        {
            var w1 = words[i];
            var w2 = words[i+1];
         //   console.log(w1,w2,i,i+1,lw)
            var l = Math.max(w1.length,w2.length);
            for(var j = 0;j<l;)
                {
                    var temp1 = order.indexOf(w1[j]);
                    var temp2 = order.indexOf(w2[j]);
                  //  console.log(temp1,temp2)
                    if(temp1>temp2){return false}
                    else if(temp1==temp2){j++}
                    else
                        {break;}

                }
        }
    return true;
};
