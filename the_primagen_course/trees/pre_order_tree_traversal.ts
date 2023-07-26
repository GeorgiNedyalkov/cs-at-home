import { BinaryNode } from "./binary_node";

export function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case: visiting a node that doesn't exist
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  path.push(curr.value);

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  return path;
}
