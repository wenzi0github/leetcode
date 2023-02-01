#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>

using namespace std;

class Solution
{
public:
  int hammingDistance(int x, int y)
  {
    int count = 0;

    while (x || y)
    {
      if ((x & 1) != (y & 1))
      {
        count++;
      }
      x = x >> 1;
      y = y >> 1;
    }

    return count;
  }
};

int main()
{
  auto aa = new Solution();
  cout << aa->hammingDistance(1, 4) << endl;
  cout << aa->hammingDistance(3, 1) << endl;

  return 0;
}
