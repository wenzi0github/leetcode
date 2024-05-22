class Solution
{
public:
  vector<vector<int>> findWinners(vector<vector<int>> &matches)
  {
    unordered_map<int, int> map; // 当前用户输给了多少人
    vector<vector<int>> result(2);

    for (auto item : matches)
    {
      if (!map.count((item[0])))
      {
        map[item[0]] = 0;
      }
      map[item[1]]++;
    }
    for (const auto &[key, value] : map)
    {
      if (value < 2)
      {
        result[value].push_back(key);
      }
    }
    sort(result[0].begin(), result[0].end());
    sort(result[1].begin(), result[1].end());

    return result;
  }
};
