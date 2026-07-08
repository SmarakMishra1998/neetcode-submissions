class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        nums = nums.sort((a,b) => a-b);
        

        for(let i=0; i< nums.length - 2; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let target = 0 - nums[i];

            let j = i+1;
            let k = nums.length - 1;

            while(k > j){
                if(nums[j] + nums[k] === target) {
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;

                    while(j<k && nums[j] === nums[j-1]) {
                        j++;
                    }

                    while(j<k && nums[k] === nums[k+1]) {
                        k--;
                    }
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else{
                    k--;
                }
            }
            
        }

        return result;

    }
}
