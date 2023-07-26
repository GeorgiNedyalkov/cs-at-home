import { BinaryNode } from "./binary_node";

export function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case: visiting a node that doesn't exist
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // post
  return path;
}
