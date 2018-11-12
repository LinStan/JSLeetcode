/**
 * @param {string[]} logs
 * @return {string[]}
 */
 //排序函数
function lineupStudents(students){
    //var stu=students.split("");
    stu  = students
    stu.sort(function(a,b){
            return b.localeCompare(a);
    });
    //console.log(stu);
}
var reorderLogFiles = function(logs) {
    var l = logs.length;
    var numre = [];
    var numnum = 0;
    var strre =[];
    var numstr = 0;
    for(var i = 0;i<l;i++)
        {
            var temp = logs[i].split(" ");
            //console.log(temp)
            if(!isNaN(temp[1]))//若为数字
                {numre[numnum]=logs[i];
                numnum++}
            if(isNaN(temp[1]))//若为字母
                {strre[numstr]=logs[i];
                numstr++;}
        }
    var bsf = [];
    var sortstr = [];
    var strnum = 0;
    //字母字符串按照字母后的数字排序
    for(i = 0;i<strre.length;i++)
        {
            temp = strre[i].split(" ");
            //console.log(temp);
            temp.splice(0,1);
            //console.log(temp);
            //保留空格。这样可以保证例如mo和m w，会比较m和mo然后得到排序 m w ，mo 若去掉空格，会比较
            //mw和mo，得到排序mo ，m w
            temp = temp.join(" ");
            //console.log(temp)
            sortstr[i]=temp;
        }
    var restr1 = sortstr.slice(0);
    console.log(restr1,sortstr,strre)
    lineupStudents(restr1);
    restr1.reverse();//反转数组元素
    //console.log(restr1,sortstr,strre)
    var re = [];
    for(var j = 0;j<restr1.length;j++)
        {
            for(var k = 0;k<restr1.length;k++)
                {
                    //console.log(sortstr[k])
                    if(restr1[j]==sortstr[k])
                        {
                            re[j]=strre[k];
                            break;
                        }
                }
        }
    re = re.concat(numre);
    //console.log(numre,strre,re)
    return re;
};
console.log(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]));
