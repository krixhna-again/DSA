class Solution {
    findTwoElement(arr) {
        let n = arr.length;
        let freq = new Array(n + 1).fill(0);
        let duplicate = -1;
        let missing = -1;

        for (let num of arr) {
            freq[num]++;
        }

        for (let i = 1; i <= n; i++) {
            if (freq[i] === 2) {
                duplicate = i;
            } else if (freq[i] === 0) {
                missing = i;
            }
        }

        return [duplicate, missing];
    }
}