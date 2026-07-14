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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        let q = [root]; 

        let arr = [];

        while(q.length > 0){
            let len = q.length;
            let temp = [];
            for(let i=0; i< len; i++){
                let node = q.shift();
                temp.push(node.val);
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }

            arr.push(temp[temp.length - 1])
        }

        return arr
    }
}
