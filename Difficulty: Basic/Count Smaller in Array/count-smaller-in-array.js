class Solution {
    countOfElements(x, arr) {
        let count = 0;

        for (let num of arr) {
            if (num <= x) {
                count++;
            }
        }

        return count;
    }
}