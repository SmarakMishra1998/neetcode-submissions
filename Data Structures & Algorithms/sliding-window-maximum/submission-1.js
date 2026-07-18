class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let left = 0;
        let right = left + k - 1;

        while(right < nums.length){

            res.push(Math.max(...nums.slice(left, right + 1)))

            left++;
            right++;
        }

        return res;
    }
}
