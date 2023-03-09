// 一个滑动窗口的经典题目
// 先计算出前k个数据的结果，然后一步步的在后面加1个，在前面减1个，进行计算，可以复用之前的结果
class Solution
{
public:
  int minimumRecolors(string blocks, int k)
  {
    int maxNum, curNum = 0, count = 0; // maxNum用于存储k区间里最多的B的数量

    for (int i = 0; i < k; i++)
    {
      if (blocks[i] == 'B')
      {
        curNum++;
      }
    }
    maxNum = curNum;
    for (int i = k; i < blocks.size(); i++)
    {
      if (blocks[i] == 'B' && blocks[i - k] == 'W')
      {
        // 新增了一个B，又减少了一个W，其实B增加了
        curNum++;
        maxNum = max(curNum, maxNum);
      }
      else if (blocks[i] == 'W' && blocks[i - k] == 'B')
      {
        // 新增了一个W，减少了一个B，B减少了
        curNum--;
      }
      else
      {
        // 若新增的和减少的，都是W或者都是B，其实B的数量是不变的
      }
    }

    // 若k区间内的B数量达到了k，则不用任何操作；否则在B数量最多的那个区间操作
    return maxNum >= k ? 0 : k - maxNum;
  }
};
