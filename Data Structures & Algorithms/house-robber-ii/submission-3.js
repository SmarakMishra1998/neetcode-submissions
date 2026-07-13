class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        function houseRobber1(nums){
            console.log(nums)
            if(nums.length === 0) return 0;
            if(nums.length === 1) return nums[0];

            let dp = [];
            dp[0] = nums[0];
            dp[1] = Math.max(nums[0], nums[1]);

            for(let i=2; i< nums.length; i++){
                dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
            }

            console.log(dp)

            return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
        }

        return Math.max(houseRobber1(nums.slice(0,nums.length - 1)), houseRobber1(nums.slice(1, nums.length)))
    }
}
