class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currSum = nums[0];
        let left = 0;
        let right = 1;
        let tempStart = 0;
        for(let i=1; i< nums.length; i++){
            if(currSum < 0){
                tempStart = i
            }
            currSum = Math.max(nums[i], nums[i] + currSum);
            if(maxSum < currSum){
                maxSum = currSum;
                right = i;
                left = tempStart;
            }
            console.log({currSum, maxSum, left, right})
        }

        return maxSum
    }
}
