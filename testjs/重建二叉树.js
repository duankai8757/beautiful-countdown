function reConstructBinaryTree(pre, vin) {
    // write code here
    if (!pre || pre.length === 0) {
        return;
    }
    var treeNode = {
        val: pre[0]
    }
    for (var i = 0; i < pre.length; i++) {
        if (vin[i] === pre[0]) {
            treeNode.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
            treeNode.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
        }
    }
    console.log(treeNode)
    return treeNode;

}

let prearr = [1, 2, 4, 8, 5, 3, 6, 7];
let vinarr = [8, 4, 2, 5, 1, 6, 3, 7];
reConstructBinaryTree(prearr, vinarr);