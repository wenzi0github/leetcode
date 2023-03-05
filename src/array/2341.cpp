class Solution
{
public:
  vector<int> numberOfPairs(vector<int> &nums)
  {
    vector<int> result;
    int location[110] = {0};
    int count = 0; // 对数

    for (int i = 0; i < nums.size(); i++)
    {
      location[nums[i]]++;
    }
    for (int i = 0; i < 110; i++)
    {
      count += location[i] / 2;
    }
    result.push_back(count);
    result.push_back((int)nums.size() - count * 2);

    return result;
  }
};
