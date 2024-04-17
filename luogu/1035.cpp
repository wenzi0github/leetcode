#include "iostream"
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>


using namespace std;

int main() {
  int n;
  double k, sum;

  cin >> k;

  n = 1;
  sum = 1;

  while (sum <= k)
  {
    n++;
    sum += 1.0 / n;
  }

  cout << n << endl;

  return 0;
}