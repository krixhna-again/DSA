class Solution:
    def isBalanced(self, s):
        pairs = {')': '(', '}': '{', ']': '['}
        stack = []

        for char in s:
            if char in "({[":
                stack.append(char)
            elif char in ")}]":
                if not stack or stack.pop() != pairs[char]:
                    return False

        return not stack