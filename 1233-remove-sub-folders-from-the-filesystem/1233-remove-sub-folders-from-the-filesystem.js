/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    // Step 1: Sort the folder array lexicographically
    folder.sort();
    
    // Step 2: Initialize result array and track the last folder added
    const result = [];
    let prevFolder = ""; // Initialize with an empty string

    for (const path of folder) {
        // Check if path is not a subfolder of prevFolder
        if (!prevFolder || !path.startsWith(prevFolder + "/")) {
            result.push(path);      // Add the current folder
            prevFolder = path;      // Update prevFolder to the current folder
        }
    }
    
    return result;
};