/**
 leetcode: https://leetcode.cn/problems/bianry-number-to-string-lcci/
 如何将十进制小数转为2进制 https://www.cnblogs.com/lightmare/p/10398830.html
 */
class Solution
{
public:
  string printBin(double num)
  {
    string result = "0.";
    int count = 0;
    unordered_set<int> midSet; // 中间出现过的数据，避免无限循环

    while (num && count < 30)
    {
      double ss = num * 2;
      auto it = midSet.find((int)(ss * 1e7));

      if (it != midSet.end())
      {
        // 若ss已经存在，说明要无限循环了，直接返回
        return "ERROR";
      }
      midSet.emplace((int)(ss * 1e7));

      result += to_string((int)ss);

      if (ss - (int)ss < 1e-7)
      {
        return result;
      }
      num = ss - (int)ss;

      count++;
    }
    return "ERROR";
  }
};