class Solution
{
public:
  vector<vector<int>> subsets(vector<int> &nums)
  {
    vector<int> temp;
    vector<vector<int>> result;

    find(nums, 0, temp, result);

    return result;
  }

private:
  int find(vector<int> &nums, int curIndex, vector<int> &temp, vector<vector<int>> &result)
  {
    if (curIndex >= nums.size())
    {
      result.push_back(temp);
      return 0;
    }
    // 每个当前的数字，都有使用和不使用两种选择
    // 不使用该数字
    find(nums, curIndex + 1, temp, result);

    // 使用该数字
    vector<int> needTemp = temp;
    needTemp.push_back(nums[curIndex]);
    find(nums, curIndex + 1, needTemp, result);
    return 0;
  }
};