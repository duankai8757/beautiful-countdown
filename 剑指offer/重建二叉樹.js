 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    if (vin.length===0){
        return null
    }
    var root=pre[0];
    var head=new TreeNode(root)

    var vroot=vin.indexOf(root)
    var leftpre=[],leftvin=[],rightpre=[],rightvin=[];
    for (var i=1;i<vroot+1;i++){
    leftpre.push(pre[i])
        leftvin.push(vin[i-1])
    }

    for (var i=vroot+1;i<pre.length;i++){
        rightpre.push(pre[i])
        rightvin.push(vin[i])
    }
       head.left=reConstructBinaryTree(leftpre, leftvin),
       head.right=reConstructBinaryTree(rightpre, rightvin)
    return head

}
var pre=[1,2,4,7,3,5,6,8]
var vin=[4,7,2,1,5,3,8,6]
// console.log(reConstructBinaryTree(pre, vin))
 reConstructBinaryTree(pre, vin)