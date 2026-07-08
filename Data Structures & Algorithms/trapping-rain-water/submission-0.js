class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let rightMax = [];

        leftMax[0] = 0;
        rightMax[height.length - 1] = 0;

        let left = 0;
        for(let i=1; i< height.length; i++){
            left = Math.max(left, height[i-1]);
            leftMax[i] = left;
        }

        let right = 0;
        for(let i = height.length - 2; i>=0; i--){
            right = Math.max(right, height[i+1]);
            rightMax[i] = right;
        }

        console.log({leftMax, rightMax})

        let trap = 0;

        for(let i=0; i< height.length - 1; i++){
            if(leftMax[i] > height[i] && rightMax[i] > height[i]){
                trap += Math.min(leftMax[i], rightMax[i]) - height[i];
            }
            console.log(trap)
        }

        return trap
    }
}
