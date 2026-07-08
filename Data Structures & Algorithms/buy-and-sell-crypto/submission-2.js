class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        
        let i = 0;
        let j = 1;

        while(j < prices.length){
            if(prices[i] > prices[j]){
                i++;
            } else {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
                j++;
            }
        }

        return maxProfit;
    }
}
