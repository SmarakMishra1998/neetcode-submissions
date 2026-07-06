class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let maxArea = 0;

        for(let i=0; i< row; i++){
            for(let j=0; j< col; j++){
                if(grid[i][j] === 1) {
                    let area = dfs(i,j);

                    if(area > maxArea) maxArea = area
                }
            }
        }

        function dfs(r,c){
            if(r < 0 || c < 0 || r >= row || c >= col) return 0;

            if(grid[r][c] === 0) return 0;

            grid[r][c] = 0

            return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)

        }

        return maxArea
    }
}
