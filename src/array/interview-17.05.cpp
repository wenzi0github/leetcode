#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>

using namespace std;

class Solution
{
public:
  vector<string> findLongestSubarray(vector<string> &array)
  {
    unordered_map<int, int> location; // 存储sum首次出现的位置
    int maxLength = 0, sum = 0, start = 0;

    location[0] = -1;
    for (int i = 0; i < array.size(); i++)
    {
      if (isalpha(array[i][0]))
      {
        // 是字母
        sum++;
      }
      else
      {
        sum--;
      }
      if (location.count(sum))
      {
        int firstIndex = location.find(sum)->second;

        if (i - firstIndex > maxLength)
        {
          maxLength = i - firstIndex;
          start = firstIndex + 1;
        }
      }
      else
      {
        location[sum] = i;
      }
    }

    if (maxLength == 0)
    {
      return {};
    }
    return vector<string>(array.begin() + start, array.begin() + start + maxLength);
  }
};

int main()
{
  auto aa = new Solution();
  vector<string> ss = {"A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7", "H", "I", "J", "K", "L", "M"};
  vector<string> result;
  result = aa->findLongestSubarray(ss);
  for (int i = 0; i < result.size(); i++)
  {
    cout << result[i] << endl;
  }
}
