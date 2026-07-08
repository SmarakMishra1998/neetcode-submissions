class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;

        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let j= str.length - 1;
        console.log(str)

        while(j >= i) {
            if(str[i] !== str[j]) return false
            i++
            j--
        }

        return true
    }
}
