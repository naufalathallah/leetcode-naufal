type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasBeenCalled = false; // Tracks whether the function has already been called
    let result: JSONValue; // Stores the result of the first call

    return function (...args: JSONValue[]) {
        if (!hasBeenCalled) {
            hasBeenCalled = true; // Mark as called
            result = fn(...args); // Call the original function and store its result
            return result;
        }
        return undefined; // Subsequent calls return undefined
    };
}


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */