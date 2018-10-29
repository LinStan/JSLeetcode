/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var l = emails.length;
    var re = [];
    var renum = 0;
    var flag=0;
    var num=0;
    for(var i=0;i<l;i++)
        {
            //console.log(emails[i]);
            var templ = emails[i].length;
            //console.log(emails[i],templ);
            var pos = emails[i].indexOf('@');
            //       console.log(emails[i],templ,pos);
            //获取@后面的域名子字符串
            var tempyum = emails[i].substr(pos,templ);
            //获取本地字符串
            tempstr = emails[i].substr(0,pos);
            //console.log(tempstr,tempyum)
            //全局正则替换.符号
            tempstr = tempstr.replace(/\./g,'');
            //console.log(tempstr)
            for(var j =0;j<tempstr.length;j++)
                {
                    if(tempstr[j]=='+')
                        {
                          //将+后面的忽略，并组合成完整邮箱地址
                            re[renum]=tempstr.substr(0,j)+tempyum;
                            renum++;
                            break;
                        }
                }
            //已经成功获取每个email的本地地址
        }
   // console.log(re);
    for(i = 0;i<re.length;i++)
        {
            flag=0;
            for(j=i+1;j<re.length;j++)
                {
      //              console.log(re[i],re[j])
                    if(re[i]==re[j])
                        {var flag=1;
                         break;}
                }
            if(flag==0){num++;flag=1;}
        }
    //console.log(num);
    return num;
};
