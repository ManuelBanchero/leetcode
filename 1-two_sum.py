class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_index_dict = {}
        for i in range(len(nums)):
            # if i found a pair
            if (target - nums[i]) in num_index_dict:
                return [num_index_dict[target - nums[i]], i]
            num_index_dict[nums[i]] = i

solution = Solution()
print(solution.twoSum([3, 2, 4], 6))
print(solution.twoSum([2, 11, 7, 15], 9))
