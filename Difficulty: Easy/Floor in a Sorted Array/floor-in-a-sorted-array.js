class Solution {
    findFloor(arr, x) {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] <= x) {
                answer = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }
}