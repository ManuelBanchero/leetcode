class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest_s = ''
        for i in range(len(s)):
            longest_aux = ''

            if len(s) - i < len(longest_s):
                break

            for j in range(i, len(s)):
                # If is equal than the last character
                if longest_aux and s[j] in longest_aux:
                    break

                longest_aux += s[j]

            if len(longest_aux) > len(longest_s):
                longest_s = longest_aux

        return len(longest_s)
    
    def lengthOfLongestSubstringV2(self, s: str) -> int:
        substring = []
        max_ss = 0
        i = 0
        j = 0

        while j < len(s):
            while s[j] in substring:
                del substring[0]
                i += 1
            substring.append(s[j])
            # Before increment j -> calculete max_ss
            ss_size = j - i + 1
            max_ss = ss_size if ss_size > max_ss else max_ss
            # Then increment j
            j += 1
                

        return max_ss

    def lengthOfLongestSubstringV3(self, s: str) -> int:
        substring_set = set()
        max_ss = 0
        i = 0
        j = 0

        while j < len(s):
            while s[j] in substring_set:
                substring_set.remove(s[i])
                i += 1
            substring_set.add(s[j])
            # Before increment j -> calculete max_ss
            ss_size = j - i + 1
            max_ss = ss_size if ss_size > max_ss else max_ss
            # Then increment j
            j += 1
                

        return max_ss



solution = Solution()

result = solution.lengthOfLongestSubstringV3('abcabcbb')
print(result)
result = solution.lengthOfLongestSubstringV3('bbbb')
print(result)
result = solution.lengthOfLongestSubstringV3('pwwkew')
print(result)


