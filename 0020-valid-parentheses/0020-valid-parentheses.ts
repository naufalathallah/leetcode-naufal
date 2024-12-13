function isValid(s: string): boolean {
    let stack: string[] = [];

    const bracketMap: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            // If it's an opening bracket, push to the stack
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false; 
            }
        }
    }

    return stack.length === 0;
};
