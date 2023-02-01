bool cmp(vector<int> student1, vector<int> student2)
{
  return student1[0] > student2[0];
}

class Solution
{
public:
  vector<vector<int>> sortTheStudents(vector<vector<int>> &score, int k)
  {
    vector<vector<int>> temp, result;

    /**
     * 先把第K列的数据拿出来，然后跟行号一起排序
     */
    for (int i = 0; i < score.size(); i++)
    {
      temp.push_back({score[i][k], i});
    }
    sort(temp.begin(), temp.end(), cmp);

    for (auto val : temp)
    {
      result.push_back(score[val[1]]);
    }

    return result;
  }
};
