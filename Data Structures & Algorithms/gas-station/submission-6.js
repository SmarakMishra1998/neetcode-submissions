class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let tank = 0;
        let start = 0;
        let totalFuelSupply = 0;
        let fuelReq = 0;

        for(let i=0; i< gas.length; i++){
            totalFuelSupply+= gas[i];
            fuelReq += cost[i]
        }

        if(fuelReq > totalFuelSupply) return -1;

        for(let i=0; i< gas.length; i++){
            tank = tank + gas[i] - cost[i];
            if(tank < 0) {
                tank = 0;
                start = i+1;
            }
        }
        return start;
    }
}
