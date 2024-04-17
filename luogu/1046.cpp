#include "iostream"
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

int main()
{
  const int stool = 30; // 凳子固定是高30cm
  const int n = 10;

  int height;
  int apple[12];
  int count = 0;

  for (int i = 0; i < n; i++)
  {
    cin >> apple[i];
  }
  cin >> height;

  for (int i = 0; i < n; i++)
  {
    if (apple[i] <= height + 30)
    {
      count++;
    }
  }

  cout << count << endl;

  return 0;
}