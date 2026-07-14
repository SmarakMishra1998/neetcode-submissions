/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return 0;

        let q = [[root, root.val]];

        let count = 0;
        let goodNodes = [];

        while(q.length > 0){
            let [node, val] = q.shift();
            if(node.val >= val){
                count++;
                goodNodes.push(node.val)
            }
            if(node.left) q.push([node.left, Math.max(node.val, val)])
            if(node.right) q.push([node.right, Math.max(node.val, val)])
        }
        console.log(goodNodes)
        return count;
    }
}
