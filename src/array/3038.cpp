#include <vector>
#include <string>
#include <algorithm>
#include "iostream"
#include <unordered_map>
//#include <unordered_set>
#include <stack>
#include <numeric>
#include <sstream>
#include <queue>

using namespace std;

class Solution {
public:
  int maxOperations(vector<int>& nums) {
    int count = 0;
    int score = 0;
    
    for(int i=0; i<nums.size()-1; i+=2)
    {
      int sum = nums[i] + nums[i+1];
      if (i == 0)
      {
        // 若是第一次操作，将分数存储起来
        score = sum;
        count++;
      } else if (score == sum)
      {
        // 若不是第一次操作，则判断这两个数的和是否与第一次相同
        count++;
      } else {
        // 若不相等，直接停止
        break;
      }
    }
    
    return count;
  }
};


int main(){
  
  auto aa = new Solution();
  
  vector<int> matches = {3,2,6,1,4};
  cout << aa->maxOperations(matches) << endl;
  
//  aa->distributeCandies(7, 4);
  
//  aa->findWinners(matches);

  return 0;
}
