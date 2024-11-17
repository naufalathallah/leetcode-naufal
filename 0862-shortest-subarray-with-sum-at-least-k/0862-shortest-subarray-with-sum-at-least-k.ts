function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    // Compute prefix sum
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let result = Infinity;
    const deque: number[] = []; // Monotonic deque

    for (let i = 0; i <= n; i++) {
        // Check if the current prefix sum - smallest prefix sum >= k
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            result = Math.min(result, i - deque.shift()!);
        }

        // Maintain the monotonic property of the deque
        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);
    }

    return result === Infinity ? -1 : result;
}
