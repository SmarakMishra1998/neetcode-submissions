class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        
        while(left < right){
            let mid = Math.floor((left+right)/2);
            let noOfHours = 0;

            for(let i=0; i < piles.length; i++){
                noOfHours+=Math.ceil(piles[i]/mid);
            }

            if(noOfHours > h){
                left = mid + 1;
            } else{
                right = mid;
            }

            console.log({noOfHours,left, right, mid})
        }

        return left;
    }
}
