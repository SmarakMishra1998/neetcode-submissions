class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        if(n <=2) return n;
        let prev1 = 2;
        let prev2 = 1;

        for(let i=3; i<= n; i++){
            let temp = prev1;
            prev1 = prev1+prev2;
            prev2 = temp;
            
        }

        // console.log("dp---", dp)

        return prev1
    }
}
