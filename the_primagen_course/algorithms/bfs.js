class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*     Tree
        a
        /\
       b  c
      /\   \
     d e   f
*/

function breadthFirstTraversal(root) {
    if (root === null) return [];

    const queue = [root];
    const values = [];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.value);

        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }

    return values;
}

console.log(breadthFirstTraversal(a));
