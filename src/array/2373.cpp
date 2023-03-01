class Solution
{
public:
  vector<vector<int>> largestLocal(vector<vector<int>> &grid)
  {
    vector<vector<int>> result;
    int n = (int)grid.size();

    // 纯暴力，针对每个 3*3 的矩阵，都计算该矩阵的最大值
    for (int i = 0; i <= n - 3; i++)
    {
      vector<int> line;
      for (int j = 0; j <= n - 3; j++)
      {
        line.push_back(getMaxInLocal(grid, i, j));
      }
      result.push_back(line);
    }

    return result;
  }

private:
  int getMaxInLocal(vector<vector<int>> &grid, int startx, int starty)
  {
    int maxNum = grid[startx][starty];

    for (int i = startx; i < startx + 3; i++)
    {
      for (int j = starty; j < starty + 3; j++)
      {
        if (grid[i][j] > maxNum)
        {
          maxNum = grid[i][j];
        }
      }
    }
    return maxNum;
  }
};
