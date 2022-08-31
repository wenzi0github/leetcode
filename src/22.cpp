#include <vector>
#include <string>
#include <algorithm>

class Solution
{
public:
  vector<string> generateParenthesis(int n)
  {
    vector<string> result;
    find("", 0, 0, n, result);

    return result;
  }

  int find(string str, int leftNum, int rightNum, int n, vector<string> &result)
  {
    if (leftNum == n && rightNum == n)
    {
      result.push_back(str);
      return 0;
    }
    if (leftNum < n)
    {
      // 若左边括号少于约定的数字，则可以添加一个左括号
      find(str + "(", leftNum + 1, rightNum, n, result);
    }
    if (leftNum - rightNum > 0)
    {
      // 若左边括号比右边括号多，则可以添加一个有括号，否则不能添加，要不匹配不上
      find(str + ")", leftNum, rightNum + 1, n, result);
    }
    return 0;
  }
};
