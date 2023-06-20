function walk(curr, path) {
  // base case - finding a node that doesnt exist
  if (!curr) {
    return path;
  }

  // recurse:
  // pre

  // recurse - in order
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // post
  return path;
}

function inOrderSearch(head) {
  return walk(head, []);
}

module.exports = inOrderSearch;
