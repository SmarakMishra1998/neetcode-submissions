class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        if(nums.length === 2) return Math.max(nums[1], nums[0]);
        if(nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);

        let dp = [];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        dp[2] = Math.max(nums[0] + nums[2], nums[1]);


        for(let i=3; i< nums.length; i++){
            dp[i] = nums[i] + Math.max(dp[i-2], dp[i-3])
        }

        console.log(dp)
        return Math.max(dp[nums.length - 1], dp[nums.length - 2])
    }
}
