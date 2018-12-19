// ----- start of helper functions -----
function matrix_size(mat) {
    return pair(length(mat), length(head(mat)));
}

function accumulate_n(op, init, seqs) {
    return is_empty_list(head(seqs))
           ? []
           : pair(accumulate(op, init, map(head, seqs)),
                  accumulate_n(op, init, map(tail, seqs)));
}
// ----- end of helper functions -----

// returns the result of adding 2 matrices
function add_matrix(mat1, mat2) {
    if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const added_rows = accumulate_n((x, y) => x + y, 0, list(curr_row1, curr_row2));
        return pair(added_rows,
                    add_matrix(tail(mat1), tail(mat2)));
    }
}

// returns the result of subtracting a matrix from another
function subtract_matrix(mat1, mat2) {
    if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const subtracted_rows = accumulate_n((x, y) => x - y, 0, list(curr_row1, curr_row2));
        return pair(subtracted_rows,
                    subtract_matrix(tail(mat1), tail(mat2)));
    }
}

// returns the result of multiplying a scalar to a matrix mat
function scalar_mult(scalar, mat) {
    return map(x => map(y => scalar * y, x), mat);
}