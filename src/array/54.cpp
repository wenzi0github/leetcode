class Solution
{
public:
  vector<int> spiralOrder(vector<vector<int>> &matrix)
  {
    vector<int> list;
    int m = (int)matrix.size(), n = (int)matrix[0].size();
    int top = 0, bottom = m - 1, left = 0, right = n - 1;

    while (true)
    {
      for (int j = left; j <= right; j++)
      {
        list.push_back(matrix[top][j]);
      }
      if (list.size() >= m * n)
      {
        return list;
      }
      top++;
      for (int i = top; i <= bottom; i++)
      {
        list.push_back(matrix[i][right]);
      }
      if (list.size() >= m * n)
      {
        return list;
      }
      right--;
      for (int j = right; j >= left; j--)
      {
        list.push_back(matrix[bottom][j]);
      }
      if (list.size() >= m * n)
      {
        return list;
      }
      bottom--;
      for (int i = bottom; i >= top; i--)
      {
        list.push_back(matrix[i][left]);
      }
      if (list.size() >= m * n)
      {
        return list;
      }
      left++;
    }

    return list;
  }
};
