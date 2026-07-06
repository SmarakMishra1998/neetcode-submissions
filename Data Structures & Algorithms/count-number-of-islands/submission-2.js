class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    // dfs
    // numIslands(grid) {
    //     let row = grid.length;
    //     let col = grid[0].length;

    //     let noOfIslands = 0;

    //     for(let i=0; i< row; i++){
    //         for(let j=0; j< col; j++){
    //             if(grid[i][j] === "1") {
    //                 noOfIslands++;
    //                 dfs(i,j)
    //             }
    //         }
    //     }

    //     function dfs(r,c){
    //         if(r < 0 || c < 0 || r >= row || c >= col) return;

    //         if(grid[r][c] === "0") return;

    //         grid[r][c] = "0"

    //         dfs(r+1, c)
    //         dfs(r-1, c)
    //         dfs(r, c+1)
    //         dfs(r, c-1)
    //     }

    //     return noOfIslands
    // }

    //bfs
    numIslands(grid){
        let row = grid.length;
        let col = grid[0].length;

        let noOfIslands = 0;

        function isValid(r,c){
            if(r < 0 || c < 0 || r >= row || c >= col || grid[r][c] !== "1") return false
            return true
        }

        for(let i=0; i< row; i++){
            for(let j=0; j< col; j++){
                if(grid[i][j] === "1") {
                    noOfIslands++;
                    bfs(i,j)
                }
            }
        }

        function bfs(row,col){
            grid[row][col] = "0";
            let q = [[row,col]];
            let dx = [1,-1,0,0];
            let dy = [0,0,1,-1];
            while(q.length > 0){
                let [r,c] = q.shift();
                for(let i=0; i< 4; i++){
                    let nr = r + dx[i];
                    let nc = c + dy[i];
                    if(isValid(nr, nc)) {
                        grid[nr][nc] = "0";
                        q.push([nr,nc])
                    }
                }
                
            }
        }

        return noOfIslands
    }
}
