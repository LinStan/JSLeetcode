/**
  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
  链表还要好好学一下！
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val)
{
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  var ln =new ListNode(0);
  var cur1 = l1;
  var cur2 = l2;
  var cur = ln;
  var sum,carry=0;
  console.log(cur1,cur2,cur);
  //返回的格式还是链表

  if(l1 === null){return l2}
  else if(l2 === null){return l1}
  while(cur1 || cur2)//若链表不为空，开始取值
  {
    var temp1,temp2;
    if(cur1)//l1不为空，获取l1的当前节点值
    {
      temp1 = cur1.val;
      cur1 = cur1.next;
    }else
    {
      temp1=0;
    }
    if(cur2)//l2不为空，获取l2的当前节点值
    {
      temp2 = cur2.val;
      cur2 = cur2.next;
    }
    else
    {
      temp2=0;
    }
    var sum = temp1+temp2+carry;

    if(sum > 9)//进位
    {
    carry = 1;
    sum %= 10;
    }
    else
    {
    carry = 0;
    }
    cur.next = new ListNode(sum);//cur的后继节点设定为一个新的链表
    cur = cur.next;
    }
    //当两个链表都为空后若还有进位，生成一个新的头节点为1的链表
    if(carry !== 0){
        cur.next = new ListNode(1);
    }
    return ln.next;//输出除了头节点之外的后继节点
  };
//console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([5,6,8],[5,6,4]));
console.log(addTwoNumbers([2,4,3],[]));
