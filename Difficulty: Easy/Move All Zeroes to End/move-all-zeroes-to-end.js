class Solution {
    pushZerosToEnd(arr) {
        let index = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                [arr[index], arr[i]] = [arr[i], arr[index]];
                index++;
            }
        }

        return arr;
    }
}