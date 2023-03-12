#include <vector>
#include <string>
#include <algorithm>
#include <iostream>
#include <unordered_set>

using namespace std;

// 获取马能跳跃到的位置
unordered_set<string> getHouseLocation(int m, int n, int x, int y)
{
  unordered_set<string> location;
  int nextDiff[8][2] = {
      {1, 2},
      {2, 1},
      {2, -1},
      {1, -2},
      {-1, -2},
      {-2, -1},
      {-2, 1},
      {-1, 2}};

  location.emplace(to_string(x) + "," + to_string(y));
  for (int i = 0; i < 8; i++)
  {
    int nextx = x + nextDiff[i][0];
    int nexty = y + nextDiff[i][1];

    if (nextx >= 0 && nextx < m && nexty >= 0 && nexty < n)
    {
      location.emplace(to_string(nextx) + "," + to_string(nexty));
    }
  }
  return location;
}

int main()
{
  int m, n, x, y, i, j;
  unordered_set<string> houseLocation;
  int dp[25][25] = {0};

  cin >> m >> n >> x >> y;
  houseLocation = getHouseLocation(m, n, x, y);
  for (i = 0; i < m; i++)
  {
    auto it = houseLocation.find(to_string(i) + ",0");
    dp[i][0] = it == houseLocation.end() ? 1 : 0;
  }
  for (j = 0; j < n; j++)
  {
    auto it = houseLocation.find("0," + to_string(j));
    dp[0][j] = it == houseLocation.end() ? 1 : 0;
  }
  for (i = 1; i < m; i++)
  {
    for (j = 1; j < n; j++)
    {
      auto it = houseLocation.find(i + "," + j);
      if (it == houseLocation.end())
      {
        // 马跳不到这里
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
      else
      {
        dp[i][j] = 0;
      }
    }
  }
  cout << dp[m - 1][n - 1] << endl;

  return 0;
}