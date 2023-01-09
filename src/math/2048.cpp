#include <vector>
#include <string>
#include <algorithm>
#include "iostream"

using namespace std;

class Solution
{
public:
  int nextBeautifulNumber(int n)
  {
    if (n > 666666)
    {
      return 1224444;
    }
    int i = n + 1;

    while (true)
    {
      if (isBeautifu(i))
      {
        return i;
      }

      i++;
    }
    return -1;
  }

private:
  bool isBeautifu(int n)
  {
    vector<int> count;
    int i, temp, maxNum;
    maxNum = 8;

    for (i = 0; i < maxNum; i++)
    {
      count.push_back(0);
    }
    while (n)
    {
      temp = n % 10;
      if (temp >= maxNum)
      {
        return false;
      }

      count[temp] += 1;

      n /= 10;
    }
    for (i = 0; i < maxNum; i++)
    {
      if (count[i])
      {
        // 只判断产生过的数字
        if (count[i] != i)
        {
          return false;
        }
      }
    }
    return true;
  }
};

int main()
{
  int i;
  auto aa = new Solution();

  cout << aa->nextBeautifulNumber(1) << endl;
  cout << aa->nextBeautifulNumber(1000) << endl;
  cout << aa->nextBeautifulNumber(3000) << endl;
  cout << aa->nextBeautifulNumber(1000000) << endl;

  // for (i = 0; i < 1224446; i++)
  // {
  //   if (aa->isBeautifu(i))
  //   {
  //     cout << i << endl;
  //   }
  // }
  // cout << aa->isBeautifu(1333) << endl;

  return 0;
}