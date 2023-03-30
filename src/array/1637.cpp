class Solution
{
public:
  int maxWidthOfVerticalArea(vector<vector<int>> &points)
  {
    int maxWidth = 0;
    vector<int> arr;
    unordered_set<int> set;

    for (auto num : points)
    {
      if (!set.count(num[0]))
      {
        set.emplace(num[0]);
        arr.push_back(num[0]);
      }
    }
    sort(arr.begin(), arr.end());
    for (int i = 1; i < arr.size(); i++)
    {
      maxWidth = max(maxWidth, arr[i] - arr[i - 1]);
    }

    return maxWidth;
  }
};
