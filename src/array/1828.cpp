class Solution
{
public:
  vector<int> countPoints(vector<vector<int>> &points, vector<vector<int>> &queries)
  {
    vector<int> answer;
    int i, j, count;

    for (i = 0; i < queries.size(); i++)
    {
      count = 0;
      for (j = 0; j < points.size(); j++)
      {
        if (checkInCircular(queries[i][0], queries[i][1], queries[i][2], points[j][0], points[j][1]))
        {
          count++;
        }
      }
      answer.push_back(count);
    }

    return answer;
  }

private:
  /**
   * 判断点(a,b)是否在圆中
   * @param x 圆心的横坐标
   * @param y 圆心的纵坐标
   * @param r 圆的半径
   */
  bool checkInCircular(int x, int y, int r, int a, int b)
  {
    float ss = (x - a) * (x - a) + (y - b) * (y - b);

    return ss <= r * r; // 若两点之间的距离小于等于半径，则认为在圆中，ss是距离的平方，因此半径也要平方
  }
};