/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node === null) return null
        this.visited = new Map()
        return this.dfs(node)
    }

    dfs(node){
        if(this.visited.has(node)){
            return this.visited.get(node)
        }

        let clone = new Node()
        clone.val = node.val
        this.visited.set(node, clone)
        if(node.neighbors.length > 0) {
            for(let neighbor of node.neighbors){
                clone.neighbors.push(this.dfs(neighbor))
            }
        }
        return clone
    }
}
