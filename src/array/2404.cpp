class Solution
{
public:
  int mostFrequentEven(vector<int> &nums)
  {
    int count[50010] = {0}; // nums最长长度为10^5，因为只存储偶数，所以计数器可以折半，将数字除以2后再计数
    int maxNum = -1, maxCount = 0;

    for (int i = 0; i < nums.size(); i++)
    {
      if ((nums[i] & 1) == 0)
      {
        // 偶数
        int half = nums[i] / 2;
        count[half]++;

        /**
         存储的条件：
         1. 新数字的个数比之前的个数多；
         2. 新数字的个数与之前的一样，但数字更小；
         */
        if ((count[half] > maxCount) || (count[half] == maxCount && nums[i] < maxNum))
        {
          maxCount = count[half];
          maxNum = nums[i];
        }
      }
    }
    if (maxCount > 0)
    {
      return maxNum;
    }
    return -1;
  }
};
