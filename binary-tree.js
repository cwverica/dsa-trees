/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    //breadth search (queue) => after every level, adds to level depth
    // returns when it finds a leaf

    let depth = 1;
    if (!this.root) return 0;
    let toVisitQueue = [this.root, null];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null) {
        toVisitQueue.push(null);
        depth++;
      } else {
        if (!current.left && !current.right) return depth;
        if (current.left) toVisitQueue.push(current.left);
        if (current.right) toVisitQueue.push(current.right);
      }
    }


  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    //breadth search (queue) => after every level, adds to level depth
    // returns when searches whole tree

    let depth = 1;
    if (!this.root) return 0;
    let toVisitQueue = [this.root, null];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null && toVisitQueue.length) {
        toVisitQueue.push(null);
        depth++;
      } else if (current !== null) {
        if (current.left) toVisitQueue.push(current.left);
        if (current.right) toVisitQueue.push(current.right);
      }
    }

    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // first, the tests for this are wrong, just looking at it I know that...
    // i.e. the first test is one node (6) with a right (5) and a left (5)
    // traveling down either path gets you 11. That's the max you should get.
    // it says the answer should be 16. I haven't looked at the solutions yet
    // but I'm sure that this solution is written wrong.

    // recursive calls to tally down all available paths

    if (!this.root) return 0;
    let sums = [];

    function recursivePathSummation(node, currentTotal = 0) {
      const newTotal = currentTotal + node.val
      sums.push(newTotal);
      if (node.left) sums.push(recursivePathSummation(node.left, newTotal));
      if (node.right) sums.push(recursivePathSummation(node.right, newTotal));
      return node.val;
    }

    recursivePathSummation(this.root);
    return Math.max(...sums.flat());


  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    let secondLowest = null;
    let toVisitQueue = this.root ? [this.root] : [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);

      if (current.val > lowerBound) {
        if (!secondLowest || secondLowest > current.val) secondLowest = current.val;
      }
    }

    return secondLowest;


  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

    if (!this.root) return false;
    let toVisitQueue = [this.root, null];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === node1 || current === node2) {
        let lookingFor = current === node1 ? node2 : node1;
        while (current !== null) {
          current = toVisitQueue.shift();
          if (current === lookingFor) return true;
        }
        return false;
      }
      if (current === null) {
        toVisitQueue.push(null);
      } else {
        if ((current.left === node1 && current.right === node2) ||
          (current.left === node2 && current.right === node1)) return false;
        if (current.left) toVisitQueue.push(current.left);
        if (current.right) toVisitQueue.push(current.right);
      }
    }

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
