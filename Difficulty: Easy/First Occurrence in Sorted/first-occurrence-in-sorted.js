class Solution {
    firstSearch(arr, k) {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === k) {
                answer = mid;

                // Continue searching on the left
                // to find the first occurrence
                right = mid - 1;
            }
            else if (arr[mid] < k) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return answer;
    }
}