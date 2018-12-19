// mult (ero type1) multiplies a single row at row_idx by a non-zero constant

function mult(matrix, row_idx, factor) {
    if (row_idx === 0) {
        return pair(map(x => factor * x, head(matrix)), tail(matrix));
    } else {
        return pair(head(matrix), mult(tail(matrix), row_idx - 1, factor));
    }
}