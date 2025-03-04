class TimeLimitedCache {
    private cache: Map<number, { value: number, expiresAt: number }>
    
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key)!.expiresAt > now;
        
        this.cache.set(key, { value, expiresAt: now + duration });
        
        setTimeout(() => {
            if (this.cache.get(key)?.expiresAt === now + duration) {
                this.cache.delete(key);
            }
        }, duration);
        
        return exists;
    }
    
    get(key: number): number {
        const now = Date.now();
        if (this.cache.has(key)) {
            const entry = this.cache.get(key)!;
            if (entry.expiresAt > now) {
                return entry.value;
            } else {
                this.cache.delete(key);
            }
        }
        return -1;
    }
    
    count(): number {
        const now = Date.now();
        let activeKeys = 0;
        for (const [key, entry] of this.cache) {
            if (entry.expiresAt > now) {
                activeKeys++;
            } else {
                this.cache.delete(key);
            }
        }
        return activeKeys;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
