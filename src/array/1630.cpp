class Solution
{
public:
  vector<bool> checkArithmeticSubarrays(vector<int> &nums, vector<int> &l, vector<int> &r)
  {
    vector<bool> result;

    for (int i = 0; i < l.size(); i++)
    {
      vector<int> arr;
      for (int j = l[i]; j <= r[i]; j++)
      {
        arr.push_back(nums[j]);
      }
      result.push_back(check(arr));
    }

    return result;
  }
  bool check(vector<int> arr)
  {
    if (arr.size() <= 2)
    {
      return true;
    }
    sort(arr.begin(), arr.end());
    int diff = arr[1] - arr[0];
    for (int i = 2; i < arr.size(); i++)
    {
      if (arr[i] - arr[i - 1] != diff)
      {
        return false;
      }
    }
    return true;
  }
};
