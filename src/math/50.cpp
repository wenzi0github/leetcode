class Solution
{
public:
  double myPow(double x, long n)
  {
    double result = 1.0;
    bool isNegative; // 是否是负数

    if (n == 0)
    {
      // 若幂指数是0，直接返回1
      return result;
    }
    if (x == 0 || x == 1 || n == 1)
    {
      // 若x本身为0，或是1次方，返回x本身
      return x;
    }
    if (n == -1)
    {
      return 1.0 / x;
    }

    double half = myPow(x, n >> 1);
    result = half * half * myPow(x, n & 1);

    return result;
  }
};