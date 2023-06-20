function walk(curr, path) {
  // base case - finding a node that doesnt exist
  if (!curr) {
    return path;
  }

  // recurse:
  // pre
  path.push(curr.value);

  // recurse - in order
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  return path;
}

function preOrderSearch(head) {
  return walk(head, []);
}

module.exports = preOrderSearch;
