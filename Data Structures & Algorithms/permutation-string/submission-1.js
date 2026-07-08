class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let i = 0;
        let j = i + s1.length - 1;

        let arr1 = Array(26).fill(0);
        for(let k of s1){
            let index = k.charCodeAt(0)-'a'.charCodeAt(0);
            arr1[index] = arr1[index] + 1;
        }

        let str1 = arr1.join("-");

        console.log(str1)

        while(j < s2.length){
            console.log({i,j})
            let trimmedStr = s2.slice(i,j+1)
            console.log(trimmedStr)
            let arr2 = Array(26).fill(0);

            for(let k of trimmedStr){
                let index = k.charCodeAt(0)-'a'.charCodeAt(0);
                arr2[index] = arr2[index] + 1;
            }
            let str2 = arr2.join("-");
            if(str1 === str2) return true

            i++;
            j++;
        }

        return false
    }
}
