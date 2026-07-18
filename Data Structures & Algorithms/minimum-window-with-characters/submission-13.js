class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let subStr = "";
        let minSubStr = "";
        let left = 0;
        let right = 0;
        let tMap = new Map();
        
        for(let i of t){
            tMap.set(i, (tMap.get(i) || 0) + 1);
        }

        if(isValidSubString(0, s.length - 1)) minSubStr = s;
        else return "";

        while(right < s.length){
            //console.log({subStr, minSubStr})
            while(isValidSubString(left, right)){
                subStr = s.slice(left, right + 1);
                if(minSubStr.length > subStr.length){
                    minSubStr = subStr;
                }
                left++;
            }
            right++;
        }

        function isValidSubString(l, r){
            let subStr = s.slice(l, r + 1);
            let map = new Map([...tMap]);

            for(let i of subStr){
                if(map.has(i)){
                    let count = map.get(i);
                    count--;
                    if(count === 0) map.delete(i);
                    else map.set(i, map.get(i) - 1);
                }
            }

            //console.log("final----", map);

            if(map.size === 0) return true;
        }

        return minSubStr
    }
}
