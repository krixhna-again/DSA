class Solution {
    convertFive(n) {
        return Number(n.toString().replace(/0/g, "5"));
    }
}