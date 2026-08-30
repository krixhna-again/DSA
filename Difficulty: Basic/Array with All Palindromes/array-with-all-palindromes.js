class Solution {
    isPalinArray(arr) {
        for (let num of arr) {
            let str = num.toString();
            let reversed = str.split("").reverse().join("");

            if (str !== reversed) {
                return false;
            }
        }

        return true;
    }
}
