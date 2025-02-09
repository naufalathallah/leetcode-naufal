function* fibGenerator() {
    let a = 0, b = 1; // Initial values for Fibonacci sequence
    while (true) { // Infinite loop to keep yielding values
        yield a; // Yield the current value
        [a, b] = [b, a + b]; // Update to the next Fibonacci numbers
    }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */