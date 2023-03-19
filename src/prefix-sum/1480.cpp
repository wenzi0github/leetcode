class Solution
{
public:
  vector<int> runningSum(vector<int> &nums)
  {
    vector<int> prefixSums;
    prefixSums.push_back(nums[0]);

    for (int i = 1; i < nums.size(); i++)
    {
      prefixSums.push_back(prefixSums[i - 1] + nums[i]);
    }

    return prefixSums;
  }
};
