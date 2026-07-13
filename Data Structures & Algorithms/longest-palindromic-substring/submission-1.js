class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length < 2) return s;

        let maxLength = 1;
        let lonSubStr = s[0];

        for(let i=0; i< s.length; i++){
            expand(i,i)
            expand(i,i+1)
        }

        function expand(left, right){
            while(left >= 0 && right < s.length && s[left] === s[right]){
                let tempLength = right-left +1;
                if(maxLength <= tempLength){
                    maxLength = tempLength
                    lonSubStr = s.slice(left, right + 1)
                }
                left--;
                right++;

            }
        }

        return lonSubStr;
    }
}
