#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>

using namespace std;

class Solution
{
public:
  bool areSentencesSimilar(string sentence1, string sentence2)
  {
    vector<string> minAttr, maxAttr, attr1, attr2;

    if (sentence1 == sentence2 || sentence1.size() == 0 || sentence2.size() == 0)
    {
      return true;
    }
    attr1 = split(sentence1);
    attr2 = split(sentence2);

    if (attr1.size() <= attr2.size())
    {
      minAttr = attr1;
      maxAttr = attr2;
    }
    else
    {
      minAttr = attr2;
      maxAttr = attr1;
    }
    int prefixEndIndex = -10;
    int suffixStartIndex = (int)minAttr.size() + 10;
    int i, j;
    for (i = 0; i < minAttr.size(); i++)
    {
      if (minAttr[i] != maxAttr[i])
      {
        prefixEndIndex = i - 1;
        break;
      }
    }
    if (i >= minAttr.size())
    {
      // 完全匹配上
      return true;
    }
    for (i = (int)minAttr.size() - 1, j = (int)maxAttr.size() - 1; i >= 0; i--, j--)
    {
      if (i == prefixEndIndex)
      {
        return true;
      }
      if (minAttr[i] != maxAttr[j])
      {
        suffixStartIndex = i + 1;
        break;
      }
    }
    if (i < 0)
    {
      // 完全匹配上
      return true;
    }

    return prefixEndIndex + 1 >= suffixStartIndex;
  }

private:
  vector<string> split(string str, char separator = ' ')
  {
    vector<string> words;
    int i, start;
    start = 0;

    for (i = 0; i < str.size(); i++)
    {
      if (str[i] == separator)
      {
        words.push_back(str.substr(start, i - start));
        start = i + 1;
      }
    }
    // 处理最后一个单词
    words.push_back(str.substr(start, i - start));

    return words;
  }
};

int main()
{
  auto aa = new Solution();
  cout << aa->areSentencesSimilar("My name is Haley", "My Haley") << endl;
  cout << aa->areSentencesSimilar("of", "a lot of workds") << endl;

  return 0;
}
