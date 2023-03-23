function transformMatrix(input) {
    const output = [];
    let idxMatrix = 0;
    for (let i = 0; i < input.length; i++) {
        const matrix = input[i];
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                if (matrix[j][k] !== 0) {
                    output.push([idxMatrix, j, k]);
                }
            }
        }
        idxMatrix++;
    }
    return output;
}

function dim(arr) {
    if (arr instanceof Array) {
        return [arr.length].concat(dim(arr[0]));
    } else {
        return [];
    }
}
// fungsi di atas akan mengembalikan ukuran dari array yang menjadi input value.

const input = [[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
],
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
],
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
],
];

const output = transformMatrix(input);
console.log("Output: ");
console.log(output); // Output: [[0,0,0], [0,1,1], [1,0,0], [1,1,1]]

const inputDimension = dim(input);
console.log("Matrix Dimension: ");
console.log(inputDimension); // Output: [3, 3, 3]

