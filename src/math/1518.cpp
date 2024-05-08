class Solution
{
public:
  int numWaterBottles(int numBottles, int numExchange)
  {
    int count = numBottles;

    while (numBottles >= numExchange)
    {
      count++;
      numBottles = numBottles - numExchange + 1;
    }

    return count;
  }
};