/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

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
  bool evaluateTree(TreeNode *root)
  {
    bool leftVal, rightVal, result;

    if (!root->left)
    {
      // 题目保证一定是要么没有子节点，要么有两个子节点
      // 因此，这里判断有没有子节点时，只需要用其中一个判断就行
      return bool(root->val);
    }

    leftVal = evaluateTree(root->left);
    rightVal = evaluateTree(root->right);
    if (root->val == 2)
    {
      result = leftVal || rightVal;
    }
    else
    {
      result = leftVal && rightVal;
    }

    return result;
  }
};