#include "iostream"
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

int main()
{
  int tree[10010] = {0}; // 0表示有树，1表示被移走（这里无法初始化全部值为1）
  int n, area, start, end, count;

  count = 0;

  cin >> n >> area;

  while (area--)
  {
    cin >> start >> end;

     for (int j = start; j <= end; j++)
     {
       tree[j] = 1;
     }
  }

  for (int i = 0; i <= n; i++)
  {
    count += (1-tree[i]); // 0-1互转
  }

  cout << count << endl;

  return 0;
}