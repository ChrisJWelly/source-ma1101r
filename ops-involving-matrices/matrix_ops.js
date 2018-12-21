// ----- start of helper functions -----
function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}

function list_op(op, lst1, lst2) {
    if (is_empty_list(lst1) && is_empty_list(lst2)) {
        return [];
    } else {
        return pair(op(head(lst1), head(lst2)),
                    list_op(op, tail(lst1), tail(lst2)));
    }
}
// ----- end of helper functions -----

// perhaps check matrix size first and return undefined if diff matrix size

// returns the result of adding 2 matrices
function mat_add(mat1, mat2) {
    if (!equal(mat_size(mat1), mat_size(mat2))) {
        display("mat_add: Matrices are not of the same size");
        return undefined;
    } else if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const added_rows = list_op((x, y) => x + y, curr_row1, curr_row2);
        return pair(added_rows,
                    mat_add(tail(mat1), tail(mat2)));
    }
}

// returns the result of mat1 - mat2
function mat_subtract(mat1, mat2) {
    if (!equal(mat_size(mat1), mat_size(mat2))) {
        display("mat_subtract: Matrices are not of the same size");
        return undefined;
    } else if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const subtracted_rows = list_op((x, y) => x - y, curr_row1, curr_row2);
        return pair(subtracted_rows,
                    mat_subtract(tail(mat1), tail(mat2)));
    }
}

// returns the result of multiplying a scalar to a matrix mat
function scalar_mult(scalar, mat) {
    return map(x => map(y => scalar * y, x), mat);
}