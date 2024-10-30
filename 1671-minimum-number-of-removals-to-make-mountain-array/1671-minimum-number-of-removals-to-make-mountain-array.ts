function minimumMountainRemovals(nums: number[]): number {
    const n = nums.length;
    const lis = new Array(n).fill(1);
    const lds = new Array(n).fill(1);
    
    // Menghitung LIS dari kiri ke kanan
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    // Menghitung LDS dari kanan ke kiri
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }

    let maxMountainLength = 0;

    // Cari puncak terbaik dan hitung panjang mountain array maksimum
    for (let i = 1; i < n - 1; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxMountainLength = Math.max(maxMountainLength, lis[i] + lds[i] - 1);
        }
    }

    // Jumlah elemen yang perlu dihapus adalah total panjang array dikurangi panjang mountain array maksimum
    return n - maxMountainLength;
}
