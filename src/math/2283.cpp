#include <vector>
#include <string>
#include <algorithm>
#include "iostream"

using namespace std;

class Solution
{
public:
  bool digitCount(string num)
  {
    int count[10] = {0};
    int max = 11, size = num.size();
    int i, k;

    for (i = 0; i < size; i++)
    {
      count[num[i] - '0']++;
    }
    for (i = 0; i < size; i++)
    {
      if (num[i] - '0' != count[i])
      {
        return false;
      }
    }
    return true;
  }
};

int main()
{
  string num = "1210";
  auto aa = new Solution();
  cout << aa->digitCount(num) << endl;
  cout << aa->digitCount("030") << endl;
}