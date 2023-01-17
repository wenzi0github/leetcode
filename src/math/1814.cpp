#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>

using namespace std;

#define DIVISOR 1000000007;

class Solution
{
public:
  int countNicePairs(vector<int> &nums)
  {
    int i, size;
    long long count;
    unordered_map<int, long> revNumMap;
    count = 0;
    size = (int)nums.size();

    for (i = 0; i < size; i++)
    {
      // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
      // 可推导出 nums[i] - rev(nums[i]) = nums[j] - rev(nums[j]);
      // 然后根据差值分组即可，再计算每组里的对数
      int s = nums[i] - rev(nums[i]);
      //            cout << s << endl;
      auto it = revNumMap.find(s);
      if (it == revNumMap.end())
      {
        revNumMap.insert(pair<int, long>(s, 1));
      }
      else
      {
        it->second++;
      }
    }

    for (auto it : revNumMap)
    {
      count = (count + it.second * (it.second - 1) / 2) % DIVISOR;
    }

    return (int)count;
  }

private:
  int rev(int num)
  {
    int result = 0;

    while (num)
    {
      result = result * 10 + num % 10;
      num /= 10;
    }
    return result;
  }
};

int main()
{
  vector<int> nums = {13, 10, 35, 24, 76};

  auto aa = new Solution();

  cout << aa->countNicePairs(nums) << endl;

  return 0;
}
