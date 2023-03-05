class Solution
{
public:
  int rearrangeCharacters(string s, string target)
  {
    int i, code, count, map[26] = {0};

    for (i = 0; i < s.size(); i++)
    {
      map[s[i] - 'a']++;
    }

    count = 0;
    while (count <= s.size())
    {
      for (i = 0; i < target.size(); i++)
      {
        code = target[i] - 'a';
        if (map[code] <= 0)
        {
          return count;
        }
        map[code]--;
      }
      count++;
    }

    return count;
  }
};
