class Solution
{
public:
  vector<vector<int>> groupThePeople(vector<int> &groupSizes)
  {
    vector<vector<int>> result, temp(510); // temp：下标表示该数组的最大长度

    for (int i = 0; i < groupSizes.size(); i++)
    {
      temp[groupSizes[i]].push_back(i);

      if (temp[groupSizes[i]].size() == groupSizes[i])
      {
        result.push_back(temp[groupSizes[i]]);
        temp[groupSizes[i]].clear();
      }
    }

    return result;
  }
};