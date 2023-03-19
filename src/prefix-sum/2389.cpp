class Solution
{
public:
  vector<int> answerQueries(vector<int> &nums, vector<int> &queries)
  {
    vector<int> prefixSums, result;

    sort(nums.begin(), nums.end());
    prefixSums.push_back(0);

    for (int i = 0; i < nums.size(); i++)
    {
      prefixSums.push_back(prefixSums[i] + nums[i]);
    }
    for (int i = 0; i < queries.size(); i++)
    {
      int j = 1;
      for (; j < prefixSums.size(); j++)
      {
        if (prefixSums[j] > queries[i])
        {
          break;
        }
      }
      result.push_back(j - 1);
    }

    return result;
  }
};