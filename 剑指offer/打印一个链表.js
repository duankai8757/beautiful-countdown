/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
   var arr=[];
   var pNode=head;
   while (pNode!==null) {
       arr.unshift(pNode.val);
       pNode = pNode.next;
   }
   return arr
}