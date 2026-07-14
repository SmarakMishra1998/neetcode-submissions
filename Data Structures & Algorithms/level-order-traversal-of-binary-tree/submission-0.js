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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let q = [root];
        let res = [];
        while(q.length > 0){
            let temp = [];
            let len = q.length;
            
            for(let i=0; i< len; i++){
                let node = q.shift();
                temp.push(node.val);
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }

            res.push(temp)
        }

        return res
    }
}
