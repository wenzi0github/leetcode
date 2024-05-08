#include "vector"
#include "iostream"
#include <unordered_set>

using namespace std;

class Solution
{
public:
  vector<int> findOriginalArray(vector<int> &changed)
  {
    int size = changed.size();
    unordered_set<int> set;

    if (size & 1)
    {
      // 奇数
      return {};
    }
    sort(changed.begin(), changed.end());
    for (auto num : changed)
    {
      set.emplace(num);
    }
  }
};