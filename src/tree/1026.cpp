struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
  int maxAncestorDiff(TreeNode *root)
  {
    vector<int> parents;

    return find(root, parents);
  }

private:
  int find(TreeNode *root, vector<int> parents)
  {
    int maxDiff = 0;

    if (root)
    {
      int curDiff = 0, leftDiff, rightDiff;
      for (auto parent : parents)
      {
        curDiff = max(curDiff, abs(parent - root->val));
      }

      vector<int> temp = parents;
      temp.push_back(root->val);
      leftDiff = find(root->left, temp);
      rightDiff = find(root->right, temp);

      maxDiff = getMax({curDiff, leftDiff, rightDiff});
    }

    return maxDiff;
  }
  int getMax(vector<int> arr, int cur = INT_MIN)
  {
    int maxNum = cur;

    for (auto num : arr)
    {
      maxNum = max(maxNum, num);
    }
    return maxNum;
  }
};