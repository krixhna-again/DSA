class Solution {
    missingNum(arr) {
        let n = arr.length + 1;
        let xor = 0;

        for (let i = 1; i <= n; i++) {
            xor ^= i;
        }

        for (let num of arr) {
            xor ^= num;
        }

        return xor;
    }
}