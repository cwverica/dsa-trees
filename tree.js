/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    let toVisitStack = this.root ? [this.root] : [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }

      total = total + parseInt(current.val);
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let totalEven = 0;
    let toVisitStack = this.root ? [this.root] : [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }

      if (parseInt(current.val) % 2 === 0) totalEven++;
    }

    return totalEven;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let totalGreater = 0;
    let toVisitStack = this.root ? [this.root] : [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }

      if (current.val > lowerBound) totalGreater++;
    }

    return totalGreater;
  }
}

module.exports = { Tree, TreeNode };
