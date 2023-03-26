class Solution
{
public:
  bool findSubarrays(vector<int> &nums)
  {
    unordered_set<long long> set; // 注意到数字的范围是 10^9，因此得需要long long

    if (nums.size() <= 2)
    {
      // 只有两个数时，无法实现
      return false;
    }
    set.emplace(nums[0] + nums[1]);

    for (int i = 1; i < nums.size() - 1; i++)
    {
      long long sum = nums[i] + nums[i + 1];

      if (set.count(sum))
      {
        // 若之前已存在，则直接返回true
        return true;
      }
      set.emplace(sum);
    }

    return false;
  }
};
