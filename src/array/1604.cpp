class Solution
{
public:
  vector<string> alertNames(vector<string> &keyName, vector<string> &keyTime)
  {
    vector<string> result;
    unordered_map<string, vector<int>> nameKeyTimeMap;

    for (int i = 0; i < keyName.size(); i++)
    {
      string time = keyTime[i];
      int minute = ((time[0] - '0') * 10 + (time[1] - '0')) * 60 + (time[3] - '0') * 10 + (time[4] - '0');
      nameKeyTimeMap[keyName[i]].emplace_back(minute);
    }
    for (auto &[name, list] : nameKeyTimeMap)
    {
      if (list.size() >= 3)
      {
        sort(list.begin(), list.end());

        for (int i = 2; i < list.size(); i++)
        {
          if (list[i] - list[i - 2] <= 60)
          {
            result.emplace_back(name);
            break;
          }
        }
      }
    }
    sort(result.begin(), result.end());

    return result;
  }
};