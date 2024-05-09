#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
// #include <unordered_map>
// #include <unordered_set>
#include <stack>
#include <numeric>
#include <sstream>

using namespace std;

class Solution
{
public:
  int minimumRefill(vector<int> &plants, int capacityA, int capacityB)
  {
    int count = 0;
    int i = 0;                      // 开头的植物
    int j = (int)plants.size() - 1; // 后面的植物
    int aa = capacityA;             // alice水桶里的水量
    int bb = capacityB;             // bob水桶里的水量

    while (i <= j)
    {
      if (i == j)
      {
        // alice和bob相遇了
        // 虽说水一样多的话，alice来灌溉，但实际上没差别，就只看水最多的那个人能否灌溉当前植物
        int maxWater = max(aa, bb);

        if (maxWater < plants[i])
        {
          count++;
        }
        break;
      }

      if (aa < plants[i])
      {
        count++;
        aa = capacityA;
      }
      aa -= plants[i];

      if (bb < plants[j])
      {
        count++;
        bb = capacityB;
      }
      bb -= plants[j];

      i++;
      j--;
    }

    return count;
  }
};

int main()
{
  vector<int> arr = {1, 2, 4, 4, 5};

  auto aa = new Solution();

  cout << aa->minimumRefill(arr, 6, 5) << endl;

  return 0;
}
