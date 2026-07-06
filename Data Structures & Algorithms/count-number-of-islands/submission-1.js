class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let noOfIslands = 0;

        for(let i=0; i< row; i++){
            for(let j=0; j< col; j++){
                if(grid[i][j] === "1") {
                    noOfIslands++;
                    dfs(i,j)
                }
            }
        }

        function dfs(r,c){
            if(r < 0 || c < 0 || r >= row || c >= col) return;

            if(grid[r][c] === "0") return;

            grid[r][c] = "0"

            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
        }

        return noOfIslands
    }
}
