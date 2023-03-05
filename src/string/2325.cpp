class Solution
{
public:
  string decodeMessage(string key, string message)
  {
    string result;
    int i, j = 0;

    unordered_map<char, char> keyMap;
    for (i = 0; i < key.size(); i++)
    {
      if (key[i] != ' ')
      {
        auto it = keyMap.find(key[i]);
        if (it == keyMap.end())
        {
          // 还没该字符
          keyMap.insert(pair<char, char>(key[i], char('a' + j)));
          j++;
        }
      }
    }
    for (i = 0; i < message.size(); i++)
    {
      if (message[i] == ' ')
      {
        result += message[i];
      }
      else
      {
        auto it = keyMap.find(message[i]);
        if (it != keyMap.end())
        {
          result += it->second;
        }
      }
    }

    return result;
  }
};

class Solution1
{
public:
  string decodeMessage(string key, string message)
  {
    char keyMap[26] = {'\0'}; // 分配空间能用固定长度的，尽量不要用map
    string result;
    int i, j = 0;

    for (i = 0; i < key.size(); i++)
    {
      if (key[i] != ' ')
      {
        if (keyMap[key[i] - 'a'] == '\0')
        {
          keyMap[key[i] - 'a'] = char('a' + j);
          j++;
        }
      }
    }

    for (i = 0; i < message.size(); i++)
    {
      if (message[i] == ' ')
      {
        result += message[i];
      }
      else
      {
        result += keyMap[message[i] - 'a'];
      }
    }

    return result;
  }
};
