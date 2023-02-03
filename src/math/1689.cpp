class Solution
{
public:
  int minPartitions(string n)
  {
    int maxNum = 0;

    for (int i = 0; i < n.size(); i++)
    {
      if ((n[i] - '0') > maxNum)
      {
        maxNum = n[i] - '0';
        if (maxNum >= 9)
        {
          return maxNum;
        }
      }
    }

    return maxNum;
  }
};