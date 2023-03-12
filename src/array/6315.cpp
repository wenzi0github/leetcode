#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>
#include <queue>

using namespace std;

class Solution
{
public:
  int vowelStrings(vector<string> &words, int left, int right)
  {
    int count = 0;

    for (int i = left; i <= right; i++)
    {
      if (isVowelWord(words[i]))
      {
        count++;
      }
    }

    return count;
  }

private:
  bool isVowelWord(string word)
  {
    char vowels[5] = {'a', 'e', 'i', 'o', 'u'};
    char first = word[0], last = word[word.size() - 1];
    bool firstIsVowel = false, lastIsVowel = false;

    for (int i = 0; i < 5; i++)
    {
      if (first == vowels[i])
      {
        firstIsVowel = true;
        break;
      }
    }
    if (!firstIsVowel)
    {
      return false;
    }
    for (int i = 0; i < 5; i++)
    {
      if (last == vowels[i])
      {
        lastIsVowel = true;
        break;
      }
    }
    return lastIsVowel;
  }
};
