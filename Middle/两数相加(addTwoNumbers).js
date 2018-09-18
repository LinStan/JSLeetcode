/**
  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
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
  while(cur1 || cur2)
  {
    var temp1,temp2;
    if(cur1)
    {
      temp1 = cur1.val;
      cur1 = cur1.next;
    }else
    {
      temp1=0;
    }
    if(cur2)
    {
      temp2 = cur2.val;
      cur2 = cur2.next;
    }
    else
    {
      temp2=0;
    }
    var sum = temp1+temp2+carry;

    if(sum > 9)
    {
    carry = 1;
    sum %= 10;
    }
    else
    {
    carry = 0;
    }

    cur.next = new ListNode(sum);
    cur = cur.next;
    }

    if(carry !== 0){
        cur.next = new ListNode(1);
    }
    return ln.next;
  };
//console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([5,6,8],[5,6,4]));
console.log(addTwoNumbers([2,4,3],[]));
