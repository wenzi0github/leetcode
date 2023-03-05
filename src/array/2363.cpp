#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>
#include <unordered_set>

using namespace std;

#define VALUES_LEN 1010

class Solution
{
public:
  vector<vector<int>> mergeSimilarItems(vector<vector<int>> &items1, vector<vector<int>> &items2)
  {
    vector<vector<int>> result;
    int values[VALUES_LEN] = {0}; // 下标为value值，对应的值是当前value对应的重量

    for (int i = 0; i < items1.size(); i++)
    {
      values[items1[i][0]] = items1[i][1];
    }
    for (int i = 0; i < items2.size(); i++)
    {
      values[items2[i][0]] += items2[i][1];
    }

    for (int i = 0; i < VALUES_LEN; i++)
    {
      if (values[i] > 0)
      {
        vector<int> item;
        item.push_back(i);
        item.push_back(values[i]);
        result.push_back(item);
      }
    }
    return result;
  }
};

int main()
{
  auto aa = new Solution();
  vector<int> nums = {9, 6, 1, 6, 2};

  //  cout << aa->movesToMakeZigzag(nums) << endl;

  return 0;
}
