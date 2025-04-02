function minMovesToSeat(seats: number[], students: number[]): number {
    const maxPos = 100; // assuming positions are between 0 and 100
    const seatCount = new Array(maxPos + 1).fill(0);
    const studentCount = new Array(maxPos + 1).fill(0);

    for (const seat of seats) seatCount[seat]++;
    for (const student of students) studentCount[student]++;

    let moves = 0, i = 0, j = 0;

    while (i <= maxPos && j <= maxPos) {
        while (i <= maxPos && seatCount[i] === 0) i++;
        while (j <= maxPos && studentCount[j] === 0) j++;
        if (i <= maxPos && j <= maxPos) {
            const count = Math.min(seatCount[i], studentCount[j]);
            moves += count * Math.abs(i - j);
            seatCount[i] -= count;
            studentCount[j] -= count;
        }
    }

    return moves;
}