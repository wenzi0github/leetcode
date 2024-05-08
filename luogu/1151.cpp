#include "iostream"
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

int main()
{
  int start, end;
  vector<int> result;

  start = 10000;
  end = 30000;

  for (int i = start; i <= end; i++)
  {
    int num = 0;
    int j = i;
    int t = 0;

    while (j)
    {
      t++;
      int a = j % 10;

      num = num * 10 + j;
      if (t >= 3)
      {
      }

      j = j / 10;
    }
  }

  return 0;
}
