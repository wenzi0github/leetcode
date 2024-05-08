#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <iostream>

using namespace std;

int main()
{
  int n, result;
  bool isneg;

  cin >> n;

  if (n == 0)
  {
    cout << n << endl;
  }
  else
  {
    isneg = n < 0;
    result = 0;

    n = abs(n);

    while (n)
    {
      int temp = n % 10;
      result = result * 10 + temp;

      n /= 10;
    }
    if (isneg)
    {
      cout << (0 - result) << endl;
    }
    else
    {
      cout << result << endl;
    }
  }

  return 0;
}