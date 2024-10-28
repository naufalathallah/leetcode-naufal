function longestSquareStreak(nums: number[]): number {
    const numSet = new Set(nums);
    let maxLength = -1;

    for (const num of nums) {
        let streak = 1;
        let current = num;

        while (numSet.has(current * current)) {
            current = current * current;
            streak++;
        }

        if (streak > 1) {
            maxLength = Math.max(maxLength, streak);
        }
    }

    return maxLength;
}
