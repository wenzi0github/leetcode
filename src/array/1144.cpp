#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution
{
public:
  int movesToMakeZigzag(vector<int> &nums)
  {
    int count1 = 0, count2 = 0, len = (int)nums.size();

    if (len == 1)
    {
      // 只有1个元素时，不用操作
      return 0;
    }
    if (len == 2)
    {

      if (nums[0] == nums[1])
      {
        return 1;
      }
      return 0;
    }

    for (int i = 0; i < len; i++)
    {
      int minNum = getMinInLeftAndRight(nums, i);
      if (nums[i] >= minNum)
      {
        if (i & 1)
        {
          count1 += nums[i] - minNum + 1;
        }
        else
        {
          count2 += nums[i] - minNum + 1;
        }
      }
    }

    return min(count1, count2);
  }

private:
  /**
   * 获取curIndex两边位置的最小值
   */
  int getMinInLeftAndRight(vector<int> nums, int curIndex)
  {
    if (curIndex == 0)
    {
      return nums[curIndex + 1];
    }
    if (curIndex == nums.size() - 1)
    {
      return nums[curIndex - 1];
    }
    return min(nums[curIndex - 1], nums[curIndex + 1]);
  }
};

int main()
{
  auto aa = new Solution();
  vector<int> nums = {9, 6, 1, 6, 2};

  cout << aa->movesToMakeZigzag(nums) << endl;

  return 0;
}
