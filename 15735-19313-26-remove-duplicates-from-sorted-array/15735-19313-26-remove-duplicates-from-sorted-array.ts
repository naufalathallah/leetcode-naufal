function removeDuplicates(nums: number[]): number {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Check if the current number is unique
            nums[k] = nums[i]; // Place the unique number in the next position
            k++; // Move the unique pointer forward
        }
    }

    return k; // Return the number of unique elements
}
