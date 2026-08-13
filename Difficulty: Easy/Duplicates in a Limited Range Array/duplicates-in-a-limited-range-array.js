class Solution {
    findDuplicates(arr) {
        let count = new Array(arr.length + 1).fill(0);
        let result = [];

        for (let num of arr) {
            count[num]++;

            if (count[num] === 2) {
                result.push(num);
            }
        }

        return result;
    }
}