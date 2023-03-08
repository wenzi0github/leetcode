/**
 * 这是一道简单的dp题
 * 用数组来存储到当前位置，可以拿到的最大值，这个位置的最大值，取决于从上面过来，还是从左边过来的，
 * 然后加上当前位置的礼物，就是到达当前位置的最大值。
 * @see https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/
 */

class Solution
{
public:
  int maxValue(vector<vector<int>> &grid)
  {
    int dp[210][210];
    int m, n;
    m = (int)grid.size();
    n = (int)grid[0].size();

    dp[0][0] = grid[0][0];

    for (int i = 1; i < m; i++)
    {
      dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (int j = 1; j < n; j++)
    {
      dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (int i = 1; i < m; i++)
    {
      for (int j = 1; j < n; j++)
      {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
    return dp[m - 1][n - 1];
  }
};