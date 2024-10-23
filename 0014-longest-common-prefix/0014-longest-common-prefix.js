/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Potong prefix jika tidak cocok
            prefix = prefix.slice(0, -1);
            // Jika prefix menjadi kosong, tidak ada common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
};