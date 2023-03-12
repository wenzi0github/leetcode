#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>

using namespace std;

class Solution
{
public:
  int passThePillow(int n, int time)
  {
    time = time % (2 * (n - 1));
    if (time < n)
    {
      return time + 1;
    }
    else
    {
      return n * 2 - time - 1;
    }
  }
};

int main()
{
  auto aa = new Solution();

  cout << aa->passThePillow(18, 38) << endl;
}