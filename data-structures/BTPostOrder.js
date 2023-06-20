function walk(curr, path) {
  // base case - finding a node that doesnt exist
  if (!curr) {
    return path;
  }

  // recurse:
  // pre

  // recurse - in order
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  path.push(curr.value);
  return path;
}

function postOrderSearch(head) {
  return walk(head, []);
}

module.exports = postOrderSearch;
