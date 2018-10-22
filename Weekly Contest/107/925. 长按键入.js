/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    var ln = name.length;
    var lt = typed.length;
    var j = 0;
    var temp = name.split("");
    var temp1 = typed.split("");
    console.log(temp,temp1);
    while(temp&&temp1)
    {
      if(temp.length==0&&temp1.length==0)
      {return true}
      if(temp[0]==temp1[0])
      {
        if(temp[1]!=temp[0])
        {
          while(temp1[1]==temp1[0])
          {
            temp1.splice(1,1);
          }
        }
      }
      else
      {return false}
      temp.splice(0,1);
      temp1.splice(0,1);
      console.log(temp,temp1);
    }

    return true
};
console.log(isLongPressedName("laiden","laiden"));
console.log(isLongPressedName("alex","aaleex"));
console.log(isLongPressedName("aleeex","aaleex"));
console.log(isLongPressedName("leelee","lleeelee"));
