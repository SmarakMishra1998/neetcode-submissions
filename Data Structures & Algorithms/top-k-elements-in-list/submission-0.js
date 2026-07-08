class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1);
            } else{
                map.set(num, 1);
            }
        }

        console.log(map)

        let arr = [...map]

        arr.sort((a,b) => b[1] - a[1])
        console.log(arr)

        let result = []

        for(let i=0; i< k; i++){
            result.push(arr[i][0])
        }

        return result
    }
}
