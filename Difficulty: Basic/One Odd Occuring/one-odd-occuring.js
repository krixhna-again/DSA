class Solution {
    getOddOccurrence(arr) {
        let result = 0;

        for (let num of arr) {
            result ^= num;
        }

        return result;
    }
}