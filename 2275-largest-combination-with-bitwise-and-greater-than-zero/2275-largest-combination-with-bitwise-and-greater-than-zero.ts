function largestCombination(candidates: number[]): number {
    let maxCount = 0;

    // Iterate over each bit position (up to 24 bits for simplicity, though 30 or 32 could be used)
    for (let bit = 0; bit < 24; bit++) {
        let count = 0;
        
        // Count how many numbers have the current bit set to 1
        for (const num of candidates) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }
        
        // Update maxCount with the maximum found so far
        maxCount = Math.max(maxCount, count);
    }
    
    return maxCount;
};