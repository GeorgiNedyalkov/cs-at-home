function printPyramid(height) {
    draw(height);
}

function draw(n) {
    if (n <= 0) {
        return;
    }

    draw(n - 1);

    let result = "";
    for (let i = 0; i < n; i++) {
        result += "#";
    }

    console.log(result);
}

printPyramid(5);
