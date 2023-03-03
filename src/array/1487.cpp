/**
 * 用map来存储所有已生成好的字符串和该字符串已使用的数字。 每次从names拿到一个数据时，就判断map中是否存在，
 * 若不存在，可以直接使用；否则从map中取出该字符串已使用的位置，然后判断下接下来要使用的空位置（循环判断，因为后面可能有好几位都已被占用），
 * 拿到空位置的数字后，生成新的字符串存储到map中，同时，更新之前map的已使用位置。
 * 比如第一次从names中拿到一个字符串”pes“，map中肯定没有该数据，则存一个<"pes", 0>；
 * 当再有一个字符串”pes“时，map中已有该数据，取出已使用位置0，然后从1开始查找是否有没有可以用的；
 * 这里我们可以使用1，即"pes(1)"，将该新字符串存储起来，同时更新pes的数据<"pes", 1>，表示接下来1及之前的位置均已被占用。
 */
class Solution
{
public:
  vector<string> getFolderNames(vector<string> &names)
  {
    vector<string> result;
    unordered_map<string, int> myMap;

    for (int i = 0; i < names.size(); i++)
    {
      auto it = myMap.find(names[i]);
      if (it == myMap.end())
      {
        // 若从来没出现过
        result.push_back(names[i]);
        myMap.emplace(names[i], 0);
      }
      else
      {
        /**
         * 若已出现过，则判断当前要使用的数字是否已使用过，
         * 比如有个单独的pes(2019)，这时又出现了一个pes，怎么判断接下来要使用的数字是几？
         * 若map中已存在该项，拿出接下来要使用的数字，若该数字已存在，则+1再使用
         */
        int index = it->second + 1; // 接下来要使用的数字
        string nextName = names[i] + "(" + to_string(index) + ")";

        // 循环往下查找哪个index可以使用
        while (index <= names.size())
        {
          nextName = names[i] + "(" + to_string(index) + ")";
          auto nextIt = myMap.find(nextName);

          if (nextIt == myMap.end())
          {
            // 若还没有使用过，则该index可以使用
            break;
          }
          index++;
        }
        it->second = index;
        // 若没有使用，则index可以直接用
        result.push_back(nextName);
        myMap.emplace(nextName, 0);
      }
    }

    return result;
  }
};
