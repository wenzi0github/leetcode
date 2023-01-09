#include <vector>
#include <string>
#include <algorithm>
#include "iostream"

using namespace std;

class Solution
{
public:
  int reinitializePermutation(int n)
  {
    int i, count;
    vector<int> arr, temp;

    count = 0;
    for (i = 0; i < n; i++)
    {
      arr.push_back(i);
      temp.push_back(i);
    }
    do
    {
      for (i = 0; i < n; i++)
      {
        if (i % 2)
        {
          temp[i] = arr[n / 2 + (i - 1) / 2];
        }
        else
        {
          temp[i] = arr[i / 2];
        }
      }
      arr = temp;
      count++;
    } while (!check(arr, n));
    return count;
  }

private:
  // 检测数字是否满足要求
  bool check(vector<int> arr, int n)
  {
    int i;
    for (i = 0; i < n; i++)
    {
      if (arr[i] != i)
      {
        return false;
      }
    }
    return true;
  }
};

int main()
{
  auto aa = new Solution();
  cout << aa->reinitializePermutation(4) << endl;
  return 0;
}
