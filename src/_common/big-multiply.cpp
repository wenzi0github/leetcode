#include <vector>
#include <string>
#include <algorithm>
#include <iostream>

using namespace std;

#define MAX 210

/**
 * https://leetcode.cn/problems/multiply-strings/description/
 * 1. 将字符串反转并改为数字；
 * 2. 各位数字相乘，存储到result[i+j]中；
 * 3. 取余和进位；
 **/
class Solution
{
public:
  string multiply(string num1, string num2)
  {
    int size1, size2, i, j;
    size1 = num1.size();
    size2 = num2.size();

    int temp1[MAX] = {0};
    int temp2[MAX] = {0};
    int result[MAX * 2] = {0};
    string res;

    for (i = size1 - 1, j = 0; i >= 0; i--, j++)
    {
      temp1[j] = num1[i] - '0';
    }
    for (j = size2 - 1, i = 0; j >= 0; j--, i++)
    {
      temp2[i] = num2[j] - '0';
    }
    for (i = 0; i < size1; i++)
    {
      if (temp1[i] == 0)
      {
        continue;
      }
      for (j = 0; j < size2; j++)
      {
        result[i + j] += temp1[i] * temp2[j];
      }
    }

    for (i = 0; i < size1 + size2; i++)
    {
      result[i + 1] += result[i] / 10;
      result[i] %= 10;

      // cout << result[i] << endl;
    }
    for (i = size1 + size2; i >= 0; i--)
    {
      if (result[i])
      {
        break;
      }
    }
    while (i >= 0)
    {
      // res.push_back(result[i]);
      res += to_string(result[i]);
      i--;
    }
    if (res.size())
    {
      return res;
    }
    return "0";
  }
};

int main()
{
  auto aa = new Solution();
  cout << aa->multiply("123", "456") << endl;
  cout << aa->multiply("2", "3") << endl;
  cout << aa->multiply("0", "0") << endl;
  // aa->multiply("99", "99");
}