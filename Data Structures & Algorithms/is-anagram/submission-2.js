class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false

        let arr1 = Array(26).fill(0)
        let arr2 = Array(26).fill(0)

        for(let char of s){
            arr1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for(let char of t){
            arr2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        if(arr1.join("-") === arr2.join("-")) return true;

        return false
    }
}
