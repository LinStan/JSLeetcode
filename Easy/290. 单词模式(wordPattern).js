//76 ms, 在Word Pattern的JavaScript提交中击败了46.21% 的用户
/*
练习了一下map的使用
[...]这个形式可以获取set中的数据并将其转为数组，等价于 Array.from
map大小使用size获取
三个方法:map.has() 查找map中是有这个key
map.set() 将其加入map中
map.get() 获取map中key对应的value
*/
var wordPattern = function(pattern, str) {
    const pa = pattern.split('');
 //   console.log(pa)
    const strs = str.split(' ');
    if (pa.length !== strs.length) {
        return false;
    }
    const record = new Map();
    for(let i = 0; i < pa.length; i++) {
        if (record.has(pa[i])) {
            if (record.get(pa[i])!== strs[i]) {
                return false;
                break;
            }
        } else {
            record.set(pa[i], strs[i])
        }
    }
  //  console.log(record)
    //两句话等价 Array.from() 等价于 [...]
    const a = Array.from(new Set(record.values()));
    //const a = [...new Set(record.values())]
   // console.log(a)
    if (record.size == a.length){
        return true;
    } else {
        return false;
    }
};
