#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <iostream>

using namespace std;

class Solution
{
public:
  int combinationSum4(vector<int> &nums, int target)
  {
    // vector<int> paths;
    sort(nums.begin(), nums.end());
    auto count = this->check(nums, target, 0);

    return count;
  }
  int check(vector<int> &nums, int target, int sum)
  {
    int count = 0;
    for (int i = 0; i < nums.size(); i++)
    {
      int newSum = nums[i] + sum;

      if (newSum > target)
      {
        // 数组已排好序，若当前不满足要求，则后续的无需再查找
        return 0;
      }
      if (newSum == target)
      {
        // cout << sum << endl;
        // for (auto num : temp)
        // {
        //   cout << num << endl;
        // }
        // cout << "=====" << endl;
        // continue;
        return 1;
      }

      count += this->check(nums, target, newSum);
    }

    cout << sum << " , " << count << endl;

    // 最后一个依然不满足要求
    return count;
  }
};

int main()
{
  vector<int> paths;
  paths.emplace_back(1);
  paths.emplace_back(2);
  paths.emplace_back(3);

  auto aa = new Solution();
  cout << aa->combinationSum4(paths, 4) << endl;

  return 0;
}