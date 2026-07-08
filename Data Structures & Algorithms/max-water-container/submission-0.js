class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let i = 0;
        let j = heights.length - 1;

        while(j > i){
            let area = (j - i )* Math.min(heights[i], heights[j])
            if(area > max) max = area;
            if(heights[i] >= heights[j]){
                j--;
            } else{
                i++;
            }
        }

        return max
    }
}
