class Solution
{
public:
  int maxIncreaseKeepingSkyline(vector<vector<int>> &grid)
  {
    vector<int> rowMaxHeight, colMaxHeight; // 每行和每列的最高高度
    int i, j, n, count = 0;
    n = (int)grid.size();

    for (i = 0; i < n; i++)
    {
      rowMaxHeight.push_back(getMaxHeight(grid, "row", n, i));
      colMaxHeight.push_back(getMaxHeight(grid, "col", n, i));
    }

    for (i = 0; i < n; i++)
    {
      for (j = 0; j < n; j++)
      {
        int curMin = min(rowMaxHeight[i], colMaxHeight[j]);
        count += curMin - grid[i][j];
      }
    }

    return count;
  }

private:
  // 获取矩阵中某行或某列的最大值
  // type为row或col
  int getMaxHeight(vector<vector<int>> &grid, string type, int n, int index)
  {
    int maxHeight;

    if (type == "row")
    {
      maxHeight = grid[index][0];
      for (int j = 1; j < n; j++)
      {
        if (grid[index][j] > maxHeight)
        {
          maxHeight = grid[index][j];
        }
      }
      return maxHeight;
    }
    maxHeight = grid[0][index];
    for (int i = 1; i < n; i++)
    {
      if (grid[i][index] > maxHeight)
      {
        maxHeight = grid[i][index];
      }
    }
    return maxHeight;
  }
};
