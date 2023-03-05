class Solution
{
public:
  int countTriplets(vector<int> &nums)
  {
    int count = 0, size = (int)nums.size();
    unordered_map<int, int> myMap;

    /**
     * 先计算两两的按位与的结果，然后再跟第3个数执行按位与，
     * 将三重循环改成两个双重循环
     */
    for (auto x : nums)
    {
      for (auto y : nums)
      {
        myMap[x & y]++;
      }
    }
    for (auto &[key, value] : myMap)
    {
      for (auto num : nums)
      {
        if ((num & key) == 0)
        {
          count += value;
        }
      }
    }

    return count;
  }
};
