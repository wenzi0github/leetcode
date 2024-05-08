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
  int wateringPlants(vector<int> &plants, int capacity)
  {
    int step = 0;       // 一共走了多少步
    int i = -1;         // 当前正在灌溉第i株植物
    int cur = capacity; // 当前的水量
    int size = (int)plants.size();

    while (i < size - 1)
    {
      //   cout << cur << " , " << plants[i+1] << endl;
      if (cur >= plants[i + 1])
      {
        // 若能灌溉下一株植物
        cur -= plants[i + 1];
        i++;
        step++;
      }
      else
      {
        // 若不能灌溉下一株植物
        step += (i + 1) * 2; // 回到-1位置灌水再回来
        cur = capacity;      // 将水罐灌满
      }
    }

    return step;
  }
};

int main()
{

  return 0;
}