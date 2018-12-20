// ---- start of helpers ----
function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}
// ---- end of helpers ----

// returns true if mat is a square matrix
function is_square(mat) {
    const size = mat_size(mat);
    return head(size) === tail(size);
}

// returns the order of a square matrix
// recall that order of a matrix is only for square matrices
function order(mat) {
    if (!is_square(mat)) {
        return undefined;
    } else {
        return head(mat_size(mat));
    }
}