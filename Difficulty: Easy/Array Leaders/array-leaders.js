class Solution {
    leaders(arr) {
        let result = [];
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] >= maxRight) {
                result.push(arr[i]);
                maxRight = arr[i];
            }
        }

        result.reverse();

        return result;
    }
}