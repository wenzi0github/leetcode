class Solution
{
public:
  int minNumberOfHours(int initialEnergy, int initialExperience, vector<int> &energy, vector<int> &experience)
  {
    int hour = 0;
    int energySum = 0;
    int expHour = 0; // 经验所需要的时间

    energySum = accumulate(energy.begin(), energy.end(), 0);

    // 精力少了，添加精力
    if (initialEnergy <= energySum)
    {
      hour = energySum - initialEnergy + 1;
    }

    for (auto exp : experience)
    {
      if (initialExperience + expHour <= exp)
      {
        expHour += exp - (initialExperience + expHour) + 1;
      }
      initialExperience += exp;
    }
    return hour + expHour;
  }
};
