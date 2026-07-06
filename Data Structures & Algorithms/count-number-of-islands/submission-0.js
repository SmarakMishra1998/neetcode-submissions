class Solution {
    /**
     * @param {character[][]}
     * @return {number}
     */
    dfs = function (grid, i, j){
        if(i < 0 || j < 0 || i > grid.length-1 || j > grid[i].length-1 || grid[i][j] === "0"){
            return 0;
        }

        grid[i][j] = "0"
        this.dfs(grid, i+1, j)
        this.dfs(grid, i-1, j)
        this.dfs(grid, i, j+1)
        this.dfs(grid, i, j-1)

        return 1;
    }
    
    numIslands(grid) {
        let count = 0;

        for(let i=0; i< grid.length; i++){
            for(let j=0; j< grid[i].length; j++){
                if (grid[i][j] === "1") {
                    count += this.dfs(grid, i, j)
                }
            }
        }

        return count;
    }
}