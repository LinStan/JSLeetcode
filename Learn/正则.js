//替换空格
function spacerpl(s)
{
  //全局替换空格 \g代表全局匹配\m 代表多行匹配
  var s1 = s.replace(/\s/g,"");
  console.log(s1);
  //替换第一次匹配的空格  \i代表单次匹配
  var s2 = s.replace(/\s/i,"first");
  console.log(s2);
}
console.log(spacerpl("wga aw wa ds s"));
