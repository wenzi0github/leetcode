class Solution
{
public:
  int countEven(int num)
  {
    int i, count = 0;
    for (i = 1; i <= num; i++)
    {
      if ((getSum(i) & 1) == 0)
      {
        count++;
      }
    }
    return count;
  }

private:
  int getSum(int num)
  {
    int sum = 0;

    while (num)
    {
      sum += num % 10;
      num /= 10;
    }

    return sum;
  }
};