class Solution {
public:
  string finalString(string s) {
    vector<char> arr;
    string str;
    
    for(int i=0; i<s.size(); i++)
    {
      if (s[i] == 'i')
      {
        reverse(arr.begin(), arr.end());
      } else
      {
        arr.push_back(s[i]);
      }
    }
    
    str.assign(arr.begin(), arr.end());
    return str;
  }
};
