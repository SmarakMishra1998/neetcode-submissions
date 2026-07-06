class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let i=0; i< strs.length; i++){
            let arr = Array(26).fill(0)
            for(let j=0; j<strs[i].length; j++){
                arr[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            arr = arr.join('-')
            if(map.has(arr)){
                map.get(arr).push(strs[i]);
            } else{
                map.set(arr, [strs[i]]);
            }
        }

        return [...map.values()];
    }
}
