class Solution {
    insertAtIndex(arr, index, val) {
        arr.splice(index, 0, val);
        return arr;
    }
}