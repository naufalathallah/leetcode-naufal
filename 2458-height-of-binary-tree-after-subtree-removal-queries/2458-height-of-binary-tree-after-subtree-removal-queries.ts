/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    const heights = new Map<number, number>();   // Tinggi subtree untuk setiap node
    const depths = new Map<number, number>();    // Kedalaman dari setiap node
    const maxHeightsAtDepth = new Map<number, number[]>(); // Jalur terpanjang di setiap kedalaman
    const results: number[] = [];

    // Step 1: DFS untuk menghitung tinggi dan kedalaman setiap node
    function calculateHeightsAndDepths(node: TreeNode | null, depth: number): number {
        if (!node) return -1;
        
        depths.set(node.val, depth);
        const leftHeight = calculateHeightsAndDepths(node.left, depth + 1);
        const rightHeight = calculateHeightsAndDepths(node.right, depth + 1);
        
        // Tinggi subtree di node ini
        const height = Math.max(leftHeight, rightHeight) + 1;
        heights.set(node.val, height);

        // Simpan tinggi maksimum di setiap kedalaman
        if (!maxHeightsAtDepth.has(depth)) maxHeightsAtDepth.set(depth, []);
        maxHeightsAtDepth.get(depth)!.push(height);

        return height;
    }

    // Hitung tinggi total tree
    const totalHeight = calculateHeightsAndDepths(root, 0);

    // Step 2: Precompute jalur tertinggi di setiap kedalaman, disortir descending
    for (const [depth, heightsAtDepth] of maxHeightsAtDepth.entries()) {
        heightsAtDepth.sort((a, b) => b - a);
    }

    // Step 3: Proses setiap query menggunakan maxHeightsAtDepth
    for (const query of queries) {
        const depth = depths.get(query)!;
        const height = heights.get(query)!;

        // Cari tinggi maksimum di level ini tanpa menghitung subtree yang dihapus
        let maxHeightExcludingQuery = 0;
        const heightsAtDepth = maxHeightsAtDepth.get(depth)!;
        if (heightsAtDepth.length === 1) {
            // Jika hanya ada satu node di level ini, tinggi menjadi lebih pendek
            maxHeightExcludingQuery = depth - 1;
        } else if (heightsAtDepth[0] === height) {
            // Jika tinggi node dihapus adalah yang tertinggi
            maxHeightExcludingQuery = depth + (heightsAtDepth[1] || 0);
        } else {
            // Jika node yang dihapus bukan yang tertinggi
            maxHeightExcludingQuery = depth + heightsAtDepth[0];
        }
        
        results.push(maxHeightExcludingQuery);
    }
    
    return results;
}
