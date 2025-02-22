function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    // Handle edge cases where obj or classFunction are not valid
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
        return false;
    }

    // Check if obj is an instance of classFunction using prototype chain traversal
    let prototype = Object.getPrototypeOf(obj);
    while (prototype !== null) {
        if (prototype === classFunction.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }

    // Special case for primitive types that should match wrapper classes
    if (typeof obj === "number" && classFunction === Number) return true;
    if (typeof obj === "string" && classFunction === String) return true;
    if (typeof obj === "boolean" && classFunction === Boolean) return true;

    return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */