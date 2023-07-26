import { BinaryNode } from "./binary_node";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case: visiting a node that doesn't exist
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.value);

  // post
  return path;
}
