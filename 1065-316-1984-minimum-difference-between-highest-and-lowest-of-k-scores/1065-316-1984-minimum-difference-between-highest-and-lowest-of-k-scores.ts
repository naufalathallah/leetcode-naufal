function minimumDifference(nums: number[], k: number): number {
    if (k === 1) return 0;

    // Sort the scores
    nums.sort((a, b) => a - b);

    let minDiff = Infinity;

    // Use a sliding window of size k to find the minimum difference
    for (let i = 0; i <= nums.length - k; i++) {
        const diff = nums[i + k - 1] - nums[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}