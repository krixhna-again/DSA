class Solution:
    def subarraySum(self, arr, target):
        left = 0
        curr_sum = 0
        
        for right in range(len(arr)):
            curr_sum += arr[right]
            
            # Shrink window from left while sum is too big
            while curr_sum > target and left < right:
                curr_sum -= arr[left]
                left += 1
            
            if curr_sum == target:
                return [left + 1, right + 1]  # 1-based indices
        
        return [-1]