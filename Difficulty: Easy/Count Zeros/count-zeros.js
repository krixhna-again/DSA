class Solution {
    countZeroes(arr) {
        let left = 0;
        let right = arr.length - 1;
        let firstZero = arr.length;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === 0) {
                firstZero = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return arr.length - firstZero;
    }
}