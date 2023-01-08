#include "vector"
#include "iostream"

using namespace std;

/**
 * 几种判断字符串前缀的方法
 * 1. 纯暴力判断，一个一个匹配
 **/

class Solution
{
public:
  int prefixCount(vector<string> &words, string pref)
  {
    int count = 0;

    for (int i = 0; i < words.size(); i++)
    {
      if (check(words[i], pref))
      {
        count++;
      }
    }
    return count;
  }

private:
  bool check(string word, string pref)
  {
    int wordLen = word.size();
    int prefLen = pref.size();
    int i;

    if (wordLen < prefLen)
    {
      return false;
    }

    string sub = word.substr(0, prefLen);
    return sub == pref;
  }
};

int main()
{
  vector<string> words; // {"pay", "attention", "practice", "attend"}
  words.push_back("pay");
  words.push_back("attention");
  words.push_back("practice");
  words.push_back("attend");
  string pref = "at";
  auto aa = new Solution();
  cout << aa->prefixCount(words, pref) << endl;
}
