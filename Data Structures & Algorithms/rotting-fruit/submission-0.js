class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let freshCount = 0;
        let q = [];
        let minutes = 0;

        for(let i=0; i< row; i++){
            for(let j=0; j< col; j++){
                if(grid[i][j] === 2){
                    q.push([i,j,0]);
                } else if(grid[i][j] === 1){
                    freshCount++;
                }
            }
        }

        if(freshCount === 0) return 0;

        if(q.length === 0) return -1;

        function isValid(r,c){
            if(r < 0 || r >= row || c < 0 || c >= col || grid[r][c] != 1) return false;
            return true;
        }

        let dx = [1,-1,0,0];
        let dy = [0,0,1,-1];

        while(q.length > 0){
            let [r,c,t] = q.shift();
            minutes = t;
            t++;


            for(let i=0; i< 4; i++){
                let nr = r + dx[i];
                let nc = c + dy[i];

                if(isValid(nr,nc)){
                    grid[nr][nc] = 2;
                    freshCount--;
                    q.push([nr,nc,t]);
                }
            }

        }

        return freshCount === 0 ? minutes : -1;

    }
}
