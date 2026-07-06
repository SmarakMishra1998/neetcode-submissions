class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = Array(nums.length).fill(1)

        let left = 1

        for(let i=0; i< nums.length; i++){
            if(i != 0) left = left * nums[i-1]
            result[i] = left
        }


        let right = 1
        for(let i=nums.length - 1; i>= 0; i--){
            if(i != nums.length - 1) right = right * nums[i+1]
            result[i] = result[i] * right
        }

        return result
    }
}
