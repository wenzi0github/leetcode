#include "iostream"
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

int main()
{
  const int month = 12;
  int months[13] = {0};
  int used;
  int left; // 本人手里剩下的钱
  int mom;  // 妈妈手里的钱

  left = 0;
  mom = 0;
  for (int i = 0; i < month; i++)
  {
    cin >> used;
    left = left + 300 - used; // 本月剩余的钱

    if (left < 0)
    {
      cout << (-1 - i) << endl;
      break;
    }

    int save = (left / 100) * 100; // 给到妈妈的钱
    mom += save;
    left -= save;

    // cout << i << " , " << used << " , " << left << ", " << mom << endl;
  }
  if (left >= 0)
  {
    cout << (left + mom * 1.2) << endl;
  }

  return 0;
}