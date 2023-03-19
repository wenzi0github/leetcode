class NumArray
{
public:
  NumArray(vector<int> &nums)
  {
    prefixSums.push_back(0);

    for (int i = 0; i < nums.size(); i++)
    {
      prefixSums.push_back(prefixSums[i] + nums[i]);
    }
  }

  int sumRange(int left, int right)
  {
    return prefixSums[right + 1] - prefixSums[left];
  }

private:
  vector<int> prefixSums; // prefixSums[i] 表示小于i的所有数据的和
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */