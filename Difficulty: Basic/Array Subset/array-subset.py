class Solution:
    def isSubset(self, a, b):
        counts = {}

        for value in a:
            counts[value] = counts.get(value, 0) + 1

        for value in b:
            if counts.get(value, 0) == 0:
                return False
            counts[value] -= 1

        return True
    
