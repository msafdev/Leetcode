/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let max = word1.length + word2.length
    let arr = []
    for (let i = 0; i < max; i++) {
        if (word1[i]) {
            arr.push(word1[i])
        }
        if (word2[i]) {
            arr.push(word2[i])
        }
    }
    return arr.toString().replace(/,/g, "")
};