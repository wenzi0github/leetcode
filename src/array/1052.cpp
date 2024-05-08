#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <iostream>

using namespace std;

class Solution
{
public:
  int maxSatisfied(vector<int> &customers, vector<int> &grumpy, int minutes)
  {
    int maxSum, sum, end, size;
    maxSum = 0;
    sum = 0;
    size = customers.size();

    for (int i = 0; i < size; i++)
    {
      if (grumpy[i] == 0 || i < minutes)
      {
        sum += customers[i];
      }
    }
    maxSum = sum;
    end = minutes;

    while (end < size)
    {
      if (grumpy[end] == 1)
      {
        sum += customers[end];
      }
      if (grumpy[end - minutes] == 1)
      {
        sum -= customers[end - minutes];
      }

      maxSum = max(maxSum, sum);

      end++;
    }

    return maxSum;
  }
};

int main()
{

  return 0;
}