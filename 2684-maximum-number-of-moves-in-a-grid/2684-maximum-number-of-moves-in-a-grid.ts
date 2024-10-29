function maxMoves(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[-1, 1], [0, 1], [1, 1]]; // Movement directions: up-right, right, down-right
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    // DFS with memoization
    function dfs(row: number, col: number): number {
        if (memo[row][col] !== -1) return memo[row][col];

        let maxSteps = 0;
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < m && newCol < n && grid[newRow][newCol] > grid[row][col]) {
                maxSteps = Math.max(maxSteps, 1 + dfs(newRow, newCol));
            }
        }

        memo[row][col] = maxSteps;
        return maxSteps;
    }

    let maxMoves = 0;
    for (let i = 0; i < m; i++) {
        maxMoves = Math.max(maxMoves, dfs(i, 0));
    }

    return maxMoves;
}
