class Solution
{
public:
  int compareVersion(string version1, string version2)
  {
    if (version1 == version2)
    {
      return 0;
    }
    vector<string> arr1 = split(version1, '.');
    vector<string> arr2 = split(version2, '.');
    int size1 = (int)arr1.size(), size2 = (int)arr2.size();

    for (int i = 0; i < max(size1, size2); i++)
    {
      int num1 = i < size1 ? str2int(arr1[i]) : 0;
      int num2 = i < size2 ? str2int(arr2[i]) : 0;

      if (num1 > num2)
      {
        return 1;
      }
      else if (num1 < num2)
      {
        return -1;
      }
    }
    return 0;
  }

private:
  vector<string> split(string str, char delim)
  {
    vector<string> result;
    string temp;
    for (auto c : str)
    {
      if (c == delim)
      {
        result.push_back(temp);
        temp = "";
      }
      else
      {
        temp += c;
      }
    }
    result.push_back(temp);
    return result;
  }
  int str2int(string str)
  {
    int num = 0;
    for (auto c : str)
    {
      num = num * 10 + (c - '0');
    }
    return num;
  }
};
