class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let visited = new Map()
        for(let i=0; i< nums.length; i++){
            let remaining = target - nums[i]
            if(visited.has(nums[i])){
                return [visited.get(nums[i]), i]
            } else{
                visited.set(remaining, i)
            }
        }
        return []
    }
}
