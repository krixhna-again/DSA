class Solution {
    countOddEven(arr) {
        let odd = 0;
        let even = 0;

        for (let num of arr) {
            if (num % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }

        return [odd, even];
    }
}