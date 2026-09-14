class Solution {
    moreFrequent(arr, x, y) {
        let countX = 0;
        let countY = 0;

        for (let num of arr) {
            if (num === x) {
                countX++;
            } else if (num === y) {
                countY++;
            }
        }

        if (countX > countY) {
            return x;
        }

        if (countY > countX) {
            return y;
        }

        return Math.min(x, y);
    }
}