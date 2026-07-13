class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if(s.length < 2) return s.length;

        let noOfSubStr = s.length;

        for(let i=0; i< s.length; i++){
            expand(i,i)
            expand(i,i+1)
        }

        function expand(left, right){
            while(left >= 0 && right < s.length && s[left] === s[right]){
                if(left !== right){
                    noOfSubStr++;
                }
                

                left--;
                right++;

            }
        }

        return noOfSubStr;
    }
}
